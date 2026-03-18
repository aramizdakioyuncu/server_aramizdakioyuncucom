"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
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

  const slides = [
    {
      title: "Minecraft Dünyasını Keşfet",
      desc: "Hayal gücünün sınırlarını zorla, devasa yapılar inşa et ve eşsiz bir survival deneyimi yaşa.",
      tag: "Sezon 5 Aktif",
      image: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2000&auto=format&fit=crop",
      btnText: "Sunucuya Bağlan",
      color: "from-green-600/20 to-emerald-900/20"
    },
    {
      title: "Hızın Ötesine Geç",
      desc: "Assetto Corsa sunucularımızda gerçekçi sürüş fiziği ve ikonik pistlerle yarış heyecanını doruklarda yaşa.",
      tag: "Yeni Yarış Pisti",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      btnText: "Yarışa Başla",
      color: "from-blue-600/20 to-indigo-900/20"
    },
    {
      title: "Şehrin Hakimi Ol",
      desc: "FiveM Roleplay deneyimiyle kendi hikayeni yaz, dostlarınla çete kur veya adaleti sağla.",
      tag: "Gelişmiş Ekonomi",
      image: "https://images.unsplash.com/photo-1541562232579-512a2136000c?q=80&w=2000&auto=format&fit=crop",
      btnText: "Role Başla",
      color: "from-red-600/20 to-rose-900/20"
    }
  ];

  const news = [
    { title: "Minecraft Sezon 5 Başladı!", date: "2 gün önce", category: "Duyuru", color: "text-green-400" },
    { title: "Yeni Yarış Pisti: Istanbul Park", date: "1 hafta önce", category: "Güncelleme", color: "text-blue-400" },
    { title: "Büyük Topluluk Toplantısı", date: "Yarın 20:00", category: "Etkinlik", color: "text-purple-400" },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col min-h-screen custom-bg overflow-x-hidden">
      {/* Hero Slider Section */}
      <section className="relative h-[80vh] flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-110 rotate-1"}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms]"
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                transform: idx === currentSlide ? 'scale(1.1)' : 'scale(1)'
              }}
            ></div>
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} backdrop-blur-[2px]`}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950"></div>
          </div>
        ))}
        
        <div className="glass rounded-[3rem] p-8 md:p-16 max-w-6xl w-full text-center space-y-8 z-10 relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          
          <div className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-4 animate-bounce">
            {slides[currentSlide].tag}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-500 leading-tight tracking-tighter uppercase italic">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            {slides[currentSlide].desc}
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <button 
              onClick={handleJoin}
              className="px-12 py-5 bg-blue-600 hover:bg-blue-500 transition-all rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/40 hover:-translate-y-1 active:scale-95"
            >
              {slides[currentSlide].btnText}
            </button>
            <button 
              onClick={scrollToServers}
              className="px-12 py-5 glass hover:bg-white/10 transition-all rounded-2xl font-black text-xs uppercase tracking-[0.2em] border-white/20 hover:-translate-y-1 active:scale-95"
            >
              Tüm Sunucular
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-500 rounded-full ${idx === currentSlide ? "w-12 h-2 bg-blue-500 shadow-lg shadow-blue-500/50" : "w-2 h-2 bg-slate-700 hover:bg-slate-500"}`}
              />
            ))}
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
