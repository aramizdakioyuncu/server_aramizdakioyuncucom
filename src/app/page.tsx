"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToServers = () => {
    document.getElementById('servers-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoin = () => {
    alert("Topluluğumuza hoş geldin! Kayıt olmak için sağ üstteki butonu kullanabilirsin.");
  };

  const handleJobSubmit = () => {
    alert("Başvuru formunuz sisteme kaydedildi. En kısa sürede geri dönüş yapılacaktır!");
  };

  const stats = [
    { label: "Anlık Oyuncu", value: "850+", icon: "👥" },
    { label: "Aktif Sunucu", value: "3", icon: "🌐" },
    { label: "Toplam Kayıtlı", value: "25K+", icon: "📈" },
    { label: "Discord Üyesi", value: "12K+", icon: "💬" },
  ];

  const news = [
    { title: "Minecraft Sezon 5 Başladı!", date: "2 gün önce", category: "Duyuru", color: "text-green-400" },
    { title: "Yeni Yarış Pisti: Istanbul Park", date: "1 hafta önce", category: "Güncelleme", color: "text-blue-400" },
    { title: "Büyük Topluluk Toplantısı", date: "Yarın 20:00", category: "Etkinlik", color: "text-purple-400" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-placeholder.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/80 to-slate-950"></div>
        
        <div className="glass rounded-3xl p-10 md:p-16 max-w-5xl text-center space-y-8 z-10 animate-in fade-in zoom-in duration-1000">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-2">
            Türkiye'nin Lider Oyun Platformu
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-400 leading-tight">
            Aramızdaki Oyuncu'ya <br/> Hoş Geldin
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Eşsiz oyun deneyimi, profesyonel yönetim ve devasa bir topluluk. Sen de aramıza katıl ve bu maceranın bir parçası ol.
          </p>
          <div className="flex flex-wrap justify-center gap-5 pt-4">
            <button 
              onClick={handleJoin}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 transition-all rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/30 hover:-translate-y-1"
            >
              Topluluğa Katıl
            </button>
            <button 
              onClick={scrollToServers}
              className="px-10 py-4 glass hover:bg-white/10 transition-all rounded-2xl font-bold text-lg border-white/20 hover:-translate-y-1"
            >
              Sunucularımızı İncele
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        {/* Stats Section */}
        <section id="servers-section" className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
          {stats.map((s, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl text-center space-y-2 group hover:border-blue-500/50 transition-all duration-300">
              <span className="text-4xl block mb-2">{s.icon}</span>
              <div className="text-3xl font-black text-white group-hover:scale-110 transition-transform">{s.value}</div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </section>

        {/* News & Updates Section */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-4xl font-black text-white">Neler Oluyor?</h2>
              <p className="text-slate-400 mt-2">Platformumuzdaki en güncel haberler ve etkinlikler.</p>
            </div>
            <Link href="#" className="text-blue-400 font-bold hover:underline">Hepsini Gör →</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl space-y-4 group cursor-pointer hover:bg-slate-800/40 transition-all">
                <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>{item.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">{item.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Postings Section */}
        <section className="glass rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 -m-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black text-white leading-tight">
                Ekibimize <span className="text-blue-500">Katılmak</span> İster Misin?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Platformumuzu büyütmek için tutkulu ekip arkadaşları arıyoruz. Eğer sen de oyun dünyasında bir iz bırakmak istiyorsan, başvurularımızı incele.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white font-bold">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                  Moderatör & Admin Alımları Aktif
                </div>
                <div className="flex items-center gap-4 text-white font-bold">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">✓</div>
                  İçerik Editörü & Sosyal Medya
                </div>
                <div className="flex items-center gap-4 text-white font-bold">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">✓</div>
                  Yazılım & Teknik Destek
                </div>
              </div>
                <button 
                  onClick={handleJobSubmit}
                  className="px-10 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-slate-200 transition-all shadow-xl active:scale-95"
                >
                  Başvuru Formunu Doldur
                </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass h-40 rounded-3xl flex flex-col items-center justify-center space-y-2 hover:bg-slate-800/60 transition-colors">
                <span className="text-3xl">💻</span>
                <span className="text-white font-bold text-sm">Geliştirici</span>
              </div>
              <div className="glass h-40 rounded-3xl lg:mt-8 flex flex-col items-center justify-center space-y-2 hover:bg-slate-800/60 transition-colors">
                <span className="text-3xl">🛡️</span>
                <span className="text-white font-bold text-sm">Moderatör</span>
              </div>
              <div className="glass h-40 rounded-3xl flex flex-col items-center justify-center space-y-2 hover:bg-slate-800/60 transition-colors">
                <span className="text-3xl">🎨</span>
                <span className="text-white font-bold text-sm">Tasarımcı</span>
              </div>
              <div className="glass h-40 rounded-3xl lg:mt-8 flex flex-col items-center justify-center space-y-2 hover:bg-slate-800/60 transition-colors">
                <span className="text-3xl">✍️</span>
                <span className="text-white font-bold text-sm">Editör</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

