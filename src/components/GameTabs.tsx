"use client";
import React, { useState } from "react";
import Link from "next/link";

interface GameTabsProps {
  gameSlug: string;
  isMinecraft: boolean;
  leaderboard: any[];
  clans: any[];
}

export default function GameTabs({ gameSlug, isMinecraft, leaderboard, clans }: GameTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      {/* Navigation Tabs */}
      <div className="flex justify-center gap-4 border-b border-white/5 pb-4">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === "overview" ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" : "text-slate-500 hover:text-white"}`}
        >
          Genel Bakış
        </button>
        {isMinecraft && (
          <>
            <button 
              onClick={() => setActiveTab("leaderboard")}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === "leaderboard" ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" : "text-slate-500 hover:text-white"}`}
            >
              Sıralama (Kills)
            </button>
            <button 
              onClick={() => setActiveTab("clans")}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === "clans" ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" : "text-slate-500 hover:text-white"}`}
            >
              Klanlar
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Main Content Area */}
        <div className="md:w-2/3 space-y-8 min-h-[500px]">
          
          {activeTab === "overview" && (
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 space-y-8">
              <div className="glass rounded-[2rem] p-10 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-10"></div>
                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight italic">Sunucu <span className="text-blue-500">Vizyonu</span></h2>
                <p className="text-slate-400 leading-relaxed text-lg font-medium italic">
                  {gameSlug.toUpperCase()} evreninde sınırları zorlamak için buradayız. Gelişmiş donanım altyapımız ve sarsılmaz adalet anlayışımızla, topluluğumuza en kaliteli oyun ortamını sağlıyoruz. {gameSlug === 'minecraft' ? 'Faction ve Survival modlarının en dengeli halini burada bulacaksınız.' : 'Sektörün en gelişmiş script ve harita paketleriyle hizmetinizdeyiz.'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">⚙️</div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase italic">Teknik <span className="text-blue-500">Güç</span></h3>
                  <ul className="space-y-3 text-slate-400 text-sm font-black uppercase italic">
                    <li className="flex justify-between items-center"><span className="text-slate-400/50 tracking-widest uppercase text-[10px]">CPU</span> Ryzen 9 7950X</li>
                    <li className="flex justify-between items-center"><span className="text-slate-400/50 tracking-widest uppercase text-[10px]">RAM</span> 128 GB DDR5</li>
                    <li className="flex justify-between items-center"><span className="text-slate-400/50 tracking-widest uppercase text-[10px]">DISK</span> 2TB NVMe SSD</li>
                    <li className="flex justify-between items-center"><span className="text-slate-400/50 tracking-widest uppercase text-[10px]">LINE</span> 10 Gbps</li>
                  </ul>
                </div>
                <div className="glass rounded-[2rem] p-8 border border-white/5 hover:border-purple-500/30 transition-all group">
                  <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase italic">Hızlı <span className="text-purple-500">Linkler</span></h3>
                  <div className="flex flex-col gap-4">
                    <Link href={`/${gameSlug}/store`} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group no-underline">
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mağaza</span>
                       <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link href={`/${gameSlug}/rules`} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group no-underline">
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Adalet</span>
                       <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
               <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8 italic">Efsane <span className="text-blue-500">Savaşçılar</span></h2>
               <div className="glass rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                 <table className="w-full text-left">
                   <thead className="bg-white/5">
                     <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <th className="px-8 py-5">Sıra</th>
                        <th className="px-8 py-5">Oyuncu</th>
                        <th className="px-8 py-5">Kills</th>
                        <th className="px-8 py-5">Deaths</th>
                        <th className="px-8 py-5">K/D</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                     {leaderboard.map((player, idx) => (
                       <tr key={idx} className="hover:bg-white/5 transition-colors group">
                         <td className="px-8 py-5 text-xl font-black text-slate-500/30 italic">#{idx+1}</td>
                         <td className="px-8 py-5">
                            <div className="flex items-center gap-4">
                               <img src={player.head} alt="" className="w-10 h-10 rounded-lg shadow-lg group-hover:scale-110 transition-transform"/>
                               <span className="text-white font-black group-hover:text-blue-500 transition-colors uppercase italic">{player.name}</span>
                            </div>
                         </td>
                         <td className="px-8 py-5 font-black text-green-500 italic">{player.kills}</td>
                         <td className="px-8 py-5 font-black text-red-500 italic">{player.deaths}</td>
                         <td className="px-8 py-5 font-black text-blue-500 italic">{player.kd}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          )}

          {activeTab === "clans" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 grid grid-cols-1 gap-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4 italic">Güçlü <span className="text-blue-500">Klanlar</span></h2>
                {clans.map((clan, idx) => (
                  <div key={idx} className="glass rounded-[2rem] p-8 flex items-center justify-between border border-white/5 hover:border-blue-500/30 transition-all group">
                    <div className="flex items-center gap-8">
                       <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/5">🛡️</div>
                       <div>
                          <h3 className={`text-2xl font-black italic uppercase tracking-tighter ${clan.color}`}>{clan.name}</h3>
                          <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest mt-1 italic">Lider: <span className="text-white">{clan.leader}</span></p>
                       </div>
                    </div>
                    <div className="flex gap-10">
                       <div className="text-center">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Seviye</span>
                          <span className="text-xl font-black text-white italic">{clan.level}</span>
                       </div>
                       <div className="text-center">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Üye</span>
                          <span className="text-xl font-black text-white italic">{clan.members}</span>
                       </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3 space-y-8">
          <div className="glass rounded-[2rem] p-8 border border-white/5 relative overflow-hidden">
            <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-500 rounded-full"></span> Son Haberler
            </h3>
            
            <div className="space-y-8">
              {[1, 2].map((news) => (
                <div key={news} className="group cursor-pointer">
                  <div className="w-full h-40 bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                    {/* Placeholder image pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:15px_15px]"></div>
                  </div>
                  <h4 className="text-white font-black text-sm group-hover:text-blue-400 transition-colors uppercase leading-snug tracking-tight">
                    Yeni Sezon Heyecanı: Büyük Açılış V{news}.0 🚀
                  </h4>
                  <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> 12 Ekim 2026
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
