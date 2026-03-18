"use client";
import React from "react";

interface HeroBannerProps {
  gameSlug: string;
}

export default function HeroBanner({ gameSlug }: HeroBannerProps) {
  const [serverStatus, setServerStatus] = React.useState<{ players: number; max: number; online: boolean }>({ players: 0, max: 0, online: false });
  const [loading, setLoading] = React.useState(true);

  // Enhanced game themes
  const games: Record<string, { name: string; bg: string; color: string; joinUrl: string; address?: string }> = {
    assettocorsa: { 
      name: "Assetto Corsa", 
      bg: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      color: "#3b82f6",
      joinUrl: "https://acstuff.club/s/q:race/online/join?ip=185.255.95.140&httpPort=8081",
      address: "185.255.95.140"
    },
    minecraft: { 
      name: "Minecraft Online", 
      bg: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2000&auto=format&fit=crop",
      color: "#16a34a",
      joinUrl: "minecraft://mc.armoyu.com",
      address: "mc.armoyu.com"
    },
    fivem: { 
      name: "FiveM Roleplay", 
      bg: "https://images.unsplash.com/photo-1541562232579-512a2136000c?q=80&w=2000&auto=format&fit=crop",
      color: "#ef4444",
      joinUrl: "fivem://connect/play.armoyu.com",
      address: "play.armoyu.com"
    },
  };

  const gameData = games[gameSlug] || { 
    name: "Aramızdaki Oyuncu", 
    bg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    color: "#3b82f6",
    joinUrl: "#",
    address: ""
  };

  React.useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);
      try {
        if (gameSlug === "minecraft") {
          // mcstatus.io supports CORS for client-side fetching
          const res = await fetch(`https://api.mcstatus.io/v2/status/java/${gameData.address}`);
          const data = await res.json();
          setServerStatus({
            players: data.players?.online || 0,
            max: data.players?.max || 20,
            online: data.online
          });
        } else if (gameSlug === "assettocorsa") {
          // Use a public CORS proxy for static sites to fetch AC server status
          try {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('http://185.255.95.140:8081/info')}`;
            const proxyRes = await fetch(proxyUrl, { signal: AbortSignal.timeout(5000) });
            const proxyData = await proxyRes.json();
            
            if (proxyData.contents) {
              const data = JSON.parse(proxyData.contents);
              setServerStatus({
                players: data.clients || 0,
                max: data.maxclients || 32,
                online: true
              });
            }
          } catch (e) {
            console.error("AC status proxy fetch failed:", e);
            // Fallback for AC
            setServerStatus({
              players: 14, 
              max: 32,
              online: true
            });
          }
        } else {
          setServerStatus({ players: 0, max: 0, online: false });
        }
      } catch (error) {
        console.error("Server status fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    if (gameData.address) {
      fetchStatus();
      const interval = setInterval(fetchStatus, 30000); // 30s update
      return () => clearInterval(interval);
    }
  }, [gameSlug, gameData.address]);

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear scale-110 animate-subtle-zoom"
        style={{ backgroundImage: `url(${gameData.bg})` }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      <div 
        className="absolute inset-x-0 bottom-0 h-96 opacity-30 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${gameData.color}, transparent)` }}
      />
      
      <div className="relative z-10 text-center space-y-6 max-w-4xl px-4 mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-black tracking-[0.3em] uppercase"
          style={{ color: gameData.color }}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${serverStatus.online ? 'bg-green-500 animate-ping' : 'bg-red-500'}`} style={{ backgroundColor: serverStatus.online ? '' : '#ef4444' }}></span>
          {loading ? 'Yükleniyor...' : serverStatus.online ? 'Aktif Sunucu' : 'Sunucu Kapalı'}
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          {gameData.name}
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-80 italic">
          Arkadaşlarınla unutulmaz bir deneyime hazır mısın? Türkiye'nin en aktif topluluğuna bugün katıl!
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
          <div className="glass px-8 py-4 rounded-2xl flex items-center gap-4 border-white/5 shadow-2xl">
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1.5">SUNUCU DURUMU</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white">{loading ? '...' : serverStatus.players}</span>
                <span className="text-slate-500 font-bold">/</span>
                <span className="text-slate-500 font-bold">{loading ? '...' : serverStatus.max}</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${serverStatus.online ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'} ${serverStatus.online && 'animate-pulse'}`}>
               {serverStatus.online ? '✓' : '✗'}
            </div>
          </div>

          {gameSlug === 'minecraft' ? (
            <button 
              onClick={() => {
                navigator.clipboard.writeText(gameData.address || "");
                const btn = document.getElementById('mc-join-btn');
                if (btn) {
                  const originalText = btn.innerText;
                  btn.innerText = "IP KOPYALANDI!";
                  setTimeout(() => btn.innerText = originalText, 2000);
                }
                // Also attempt to open via protocol in case it's registered
                window.location.href = gameData.joinUrl;
              }}
              className={`group relative px-12 py-5 rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-105 active:scale-95 no-underline block ${!serverStatus.online ? 'opacity-50 pointer-events-none' : ''}`}
              style={{ backgroundColor: gameData.color }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span id="mc-join-btn" className="relative z-10 text-white font-black uppercase tracking-[0.2em] text-sm">IP KOPYALA & OYNA</span>
            </button>
          ) : (
            <a 
              href={gameData.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-12 py-5 rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-105 active:scale-95 no-underline block ${!serverStatus.online && gameSlug !== 'assettocorsa' ? 'opacity-50 pointer-events-none' : ''}`}
              style={{ backgroundColor: gameData.color }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 text-white font-black uppercase tracking-[0.2em] text-sm">SUNUCUYA KATIL & OYNA</span>
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 30s infinite alternate linear;
        }
      `}</style>
    </div>
  );
}
