import Image from "next/image";

interface HeroBannerProps {
  gameSlug: string;
}

export default function HeroBanner({ gameSlug }: HeroBannerProps) {
  // Mock data based on game
  const games: Record<string, { name: string; players: number; max: number; bg: string }> = {
    minecraft: { name: "Minecraft", players: 124, max: 200, bg: "/bg-minecraft.jpg" },
    fivem: { name: "FiveM Roleplay", players: 64, max: 128, bg: "/bg-fivem.jpg" },
    assettocorsa: { name: "Assetto Corsa", players: 24, max: 32, bg: "/bg-assetto.jpg" },
  };
  
  const gameData = games[gameSlug] || { name: "Aramızdaki Oyuncu", players: 0, max: 0, bg: "/bg-placeholder.jpg" };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gameData.bg})`, backgroundColor: '#1e293b' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-slate-900/40" />
      
      <div className="relative z-10 text-center space-y-4 max-w-3xl px-4 mt-16">
        <div className="inline-block px-3 py-1 mb-2 rounded-full glass border-blue-500/30 text-blue-400 text-sm font-bold tracking-widest uppercase">
          Aktif Sunucu
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          {gameData.name}
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="glass px-6 py-3 rounded-xl flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            <span className="text-slate-200 font-medium tracking-wide">
              <strong className="text-white text-lg">{gameData.players}</strong> / {gameData.max} Oyuncu
            </span>
          </div>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all transform hover:scale-105">
            Hemen Katıl
          </button>
        </div>
      </div>
    </div>
  );
}
