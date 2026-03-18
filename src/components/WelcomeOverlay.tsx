"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const GAME_CONFIGS: Record<string, any> = {
  minecraft: {
    title: "SINIRSIZ",
    subtitle: "DÜNYA",
    description: "Blokların dünyasında kendi efsaneni yazmaya hazır mısın? Oyundaki Minecraft kimliğini belirle.",
    color: "#16a34a",
    gradient: "from-green-400 via-white to-emerald-500",
    glow: "rgba(22, 163, 74, 0.5)",
    inputLabel: "MINECRAFT ID",
    buttonText: "DÜNYAYA ADIM AT",
    accent: "text-green-400",
    sound: "https://storage.aramizdakioyuncu.com/public/sesler/minecraft.mp3"
  },
  fivem: {
    title: "ŞEHRİN",
    subtitle: "HAKİMİ",
    description: "Los Santos sokaklarında herkesin seni tanıyacağı o ismi belirle. Rolüne başlamak üzeresin!",
    color: "#ef4444",
    gradient: "from-red-400 via-white to-rose-600",
    glow: "rgba(239, 68, 68, 0.5)",
    inputLabel: "KARAKTER ADIN",
    buttonText: "ŞEHRE GİRİŞ YAP",
    accent: "text-red-400",
    sound: "https://storage.aramizdakioyuncu.com/public/sesler/fivem.mp3"
  },
  assettocorsa: {
    title: "PISTİN",
    subtitle: "KRALI",
    description: "Asfaltta iz bırakmaya, lastik yakmaya hazır mısın? Yarışçı kimliğini şimdi belirle.",
    color: "#3b82f6",
    gradient: "from-blue-400 via-white to-indigo-600",
    glow: "rgba(59, 130, 246, 0.5)",
    inputLabel: "PİLOT ADIN",
    buttonText: "YARIŞA BAŞLA",
    accent: "text-blue-400",
    sound: "https://storage.aramizdakioyuncu.com/public/sesler/assetto.mp3"
  }
};

export default function WelcomeOverlay({ gameSlug }: { gameSlug: string }) {
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const config = GAME_CONFIGS[gameSlug] || GAME_CONFIGS.assettocorsa;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const hasSeenWelcome = localStorage.getItem(`armoyu_welcome_${gameSlug}`);
    if (!hasSeenWelcome && user) {
      setShow(true);
      
      // Play Game Specific Sound Effect
      const playSound = () => {
        const audio = new Audio(config.sound);
        audio.volume = 0.4;
        audio.play().catch(err => console.log("Audio autoplay prevented by browser. Click requested first."));
      };

      playSound();
      
      setTimeout(() => setIsVisible(true), 200);
      
      const timer = setTimeout(() => {
        setStep(2);
      }, 4500);
      
      return () => clearTimeout(timer);
    }
  }, [gameSlug, user, mounted, config.sound]);

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    localStorage.setItem(`armoyu_welcome_${gameSlug}`, "done");
    localStorage.setItem(`armoyu_game_username_${gameSlug}`, username);
    
    setIsVisible(false);
    setTimeout(() => setShow(false), 1000);
  };

  if (!mounted || !show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex items-center justify-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ background: `radial-gradient(circle at center, ${config.color}33 0%, #000000 100%)` }}
    >
      <div className="absolute inset-0 bg-black -z-20" />
      {/* Background Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[100vh] rounded-full blur-[150px] opacity-10 animate-pulse"
          style={{ backgroundColor: config.color }}
        ></div>
        <div className="absolute inset-0">
           {[...Array(30)].map((_, i) => (
             <div 
               key={i} 
               className="absolute bg-white rounded-full animate-float"
               style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 5 + 's',
                  animationDuration: (Math.random() * 5 + 5) + 's'
               }}
             ></div>
           ))}
        </div>
      </div>

      <div className={`relative z-10 w-full px-4 transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-90'}`}>
        {step === 1 ? (
          <div className="space-y-16 py-20 overflow-hidden text-center w-full">
            <div className="relative inline-block w-full perspective-1000">
               <h2 
                 className="w-full text-[80px] md:text-[15vw] lg:text-[12vw] font-black italic uppercase tracking-normal text-white leading-[0.85] select-none animate-intro-tilt whitespace-nowrap"
                 style={{ filter: `drop-shadow(0 0 50px ${config.glow})` }}
               >
                  {config.title}<br/>{config.subtitle}
               </h2>
               <div 
                className="absolute -inset-10 opacity-20 blur-3xl animate-pulse -z-10"
                style={{ background: `linear-gradient(to right, ${config.color}, white, ${config.color})` }}
               ></div>
            </div>
            
            <div className="flex flex-col items-center gap-6">
               <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 blur-sm" style={{ backgroundColor: config.color, opacity: 0.5 }}></div>
                  <div 
                    className="h-full animate-loading-bar-full relative z-10" 
                    style={{ backgroundColor: config.color, boxShadow: `0 0 15px ${config.color}` }}
                  ></div>
               </div>
               <p className="text-white/40 font-black uppercase tracking-[0.8em] text-[10px] animate-pulse">SUNUCU BAĞLANTISI KURULUYOR</p>
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleFinish}
            className="glass-deep p-6 md:p-16 rounded-[2rem] md:rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] space-y-10 md:space-y-12 animate-in fade-in zoom-in-95 duration-700 backdrop-blur-3xl text-center max-w-3xl mx-auto w-full"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border text-xs font-black tracking-[0.2em] uppercase mx-auto" style={{ backgroundColor: `${config.color}11`, borderColor: `${config.color}33`, color: config.color }}>
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: config.color }}></span>
                HOŞ GELDİN {user?.username}
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white italic tracking-tight leading-tight uppercase">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.gradient} animate-gradient-x`}>EFSANENİ</span> BAŞLAT
              </h3>
              <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-xl mx-auto italic">
                 {config.description} Daha sonra değiştirmek hem masraflı hem de yorucu olabilir. <span className="text-red-400/80 font-bold">Lütfen iyi düşün!</span>
              </p>
            </div>

            <div className="space-y-4 text-left max-w-md mx-auto relative group">
               <div className="absolute -inset-1 rounded-2xl opacity-10 blur group-within:opacity-20 transition-opacity" style={{ background: `linear-gradient(to right, ${config.color}, #a855f7)` }}></div>
               <input 
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={`${config.inputLabel}...`}
                  className="relative w-full bg-black/40 border border-white/10 rounded-2xl px-8 py-6 text-3xl font-black text-white placeholder:text-white/5 focus:outline-none focus:bg-black/60 transition-all text-center tracking-widest uppercase italic shadow-inner"
                  autoFocus
               />
               <div className="flex justify-center gap-4 pt-2">
                 <span className="h-1 w-8 rounded-full" style={{ backgroundColor: `${config.color}33` }}></span>
                 <span className="h-1 w-8 rounded-full" style={{ backgroundColor: `${config.color}33` }}></span>
                 <span className="h-1 w-8 rounded-full" style={{ backgroundColor: `${config.color}33` }}></span>
               </div>
            </div>

            <button 
              type="submit"
              className="group relative w-full py-8 rounded-[2rem] transition-all active:scale-[0.98] overflow-hidden"
              style={{ backgroundColor: config.color, boxShadow: `0 20px 50px ${config.color}44` }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-white font-black uppercase tracking-[0.4em] text-sm">{config.buttonText}</span>
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .glass-deep {
          background: rgba(2, 6, 23, 0.98);
          backdrop-filter: blur(60px);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes intro-tilt {
          0% { transform: rotateX(20deg) rotateY(-20deg) scale(0.9); opacity: 0; filter: blur(20px); }
          20% { opacity: 1; filter: blur(0); }
          50% { transform: rotateX(-5deg) rotateY(10deg) scale(1.05); }
          100% { transform: rotateX(0) rotateY(0) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(30px, -30px); opacity: 0.6; }
        }
        @keyframes loading-bar-full {
          0% { width: 0; }
          60% { width: 40%; }
          100% { width: 100%; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-intro-tilt {
          animation: intro-tilt 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-loading-bar-full {
          animation: loading-bar-full 4.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
