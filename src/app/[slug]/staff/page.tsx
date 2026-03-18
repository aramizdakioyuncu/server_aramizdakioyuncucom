"use client";
import React, { use } from "react";

export default function StaffPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const gameSlug = resolvedParams.slug;
  const staff = [
    { name: "Berkay", role: "Kurucu", avatar: "https://i.pravatar.cc/150?u=berkay", color: "text-red-500", from: "İstanbul", desc: "Sistem mimarı ve geliştirici." },
    { name: "Ahmet", role: "Yönetici", avatar: "https://i.pravatar.cc/150?u=ahmet", color: "text-rose-400", from: "Ankara", desc: "Topluluk yönetimi ve operasyon." },
    { name: "Mehmet", role: "Admin", avatar: "https://i.pravatar.cc/150?u=mehmet", color: "text-blue-500", from: "İzmir", desc: "Sunucu içi denetim ve teknik destek." },
    { name: "Ayşe", role: "Moderatör", avatar: "https://i.pravatar.cc/150?u=ayse", color: "text-green-500", from: "Antalya", desc: "Oyuncu ilişkileri ve discord düzeni." },
    { name: "Ali", role: "Rehber", avatar: "https://i.pravatar.cc/150?u=ali", color: "text-yellow-500", from: "Bursa", desc: "Yeni oyunculara başlangıç desteği." },
  ];

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-8 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-20 -z-10"></div>
        <h2 className="text-5xl font-black text-white px-4">
          Yetkili <span className="text-blue-500">Kadromuz</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Oyun deneyiminizi en üst seviyede tutmak için 7/24 çalışan profesyonel ekibimizle tanışın.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 pb-20">
        {staff.map((member, idx) => (
          <div key={idx} className="glass rounded-[2rem] overflow-hidden group hover:border-blue-500/50 transition-all duration-500 border border-white/5">
            <div className="relative h-40 bg-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30"></div>
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[6px] border-[#0f172a] bg-slate-800 overflow-hidden shadow-2xl z-10 transition-transform group-hover:scale-110 duration-500">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="pt-20 pb-8 px-8 text-center space-y-4">
              <div>
                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{member.name}</h3>
                <span className={`text-xs font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full bg-slate-900/80 border border-slate-700/50 ${member.color}`}>
                  {member.role}
                </span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                {member.desc}
              </p>

              <div className="flex items-center justify-center gap-3 py-4 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1">📍 {member.from}</span>
              </div>
              
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => alert(`${member.name} kullanıcısına mesaj gönderildi (MOCK)`)}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 transition-all rounded-xl text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  Mesaj Gönder
                </button>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-indigo-600 flex items-center justify-center text-white transition-all hover:scale-110 border border-slate-700">
                    D
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-rose-600 flex items-center justify-center text-white transition-all hover:scale-110 border border-slate-700">
                    S
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

