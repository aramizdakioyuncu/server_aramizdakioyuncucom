import React from "react";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
   const slugs = ['minecraft', 'fivem', 'assettocorsa'];
   const ids = ['1', '2', '3'];
   const params: { slug: string; id: string }[] = [];
   slugs.forEach(slug => {
     ids.forEach(id => {
       params.push({ slug, id });
     });
   });
   return params;
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const resolvedParams = await params;
  const { slug, id } = resolvedParams;

  // Mock data for the demonstration
  const events: Record<string, any> = {
    "1": { 
      title: "Yılın En Büyük İndirimleri Başladı!", 
      date: "25 Mart 2026", 
      fullDesc: "Baharın gelişiyle birlikte sunucumuzun marketinde inanılmaz bir kampanya başlatıyoruz. Tüm oyun içi eşyalar, özel kasa anahtarları ve VIP üyeliklerde tam %50 indirim sizi bekliyor! \n\nBu kampanya sınırlı bir süre için geçerli olacaktır. Elinizi çabuk tutun ve envanterinizi efsanevi eşyalarla doldurun. Hemen mağazamıza gitmek için aşağıdaki butona tıklayabilirsiniz.", 
      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop",
      author: "Berkay",
      category: "İndirim"
    },
    "2": { 
      title: "Yeni Sezon: Kaos ve Düzen", 
      date: "1 Nisan 2026", 
      fullDesc: "Uzun süredir beklenen 5. Sezon sonunda kapıda! Bu sezonun teması 'Kaos ve Düzen'. \n\nNeler Değişiyor? \n- Tamamen yenilenmiş spawn bölgesi. \n- 50'den fazla yeni görev ve başarı sistemi. \n- Özel yeteneklere sahip yeni araçlar ve silahlar. \n\nSunucumuz bu geçiş süreci için 31 Mart gecesi kısa bir süreliğine bakıma alınacaktır. Hazır olun, tarih yazmaya geliyoruz!", 
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
      author: "Ahmet",
      category: "Güncelleme"
    },
    "3": { 
      title: "Discord Nitro & VIP Çekilişi", 
      date: "10 Nisan 2026", 
      fullDesc: "Aramızdaki Oyuncu topluluğu olarak 100.000 üyeye ulaşmamızın şerefine dev bir çekiliş düzenliyoruz! \n\nÖdüller: \n- 5 Adet 1 Yıllık Discord Nitro \n- 3 Adet Sınırsız Elmas VIP \n- 10 Adet 1000 Kredi \n\nKatılım şartları çok basit: Sunucumuzda aktif olmak ve Discord kanalımızdaki çekiliş mesajına emoji ile tepki vermek. Kazananlar 15 Nisan akşamı canlı yayında açıklanacaktır!", 
      img: "https://images.unsplash.com/photo-1614680376593-902f74cc0d41?q=80&w=2000&auto=format&fit=crop",
      author: "Mehmet",
      category: "Çekiliş"
    },
  };

  const event = events[id] || events["1"];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Navigation */}
      <Link 
        href={`/${slug}/events`}
        className="inline-flex items-center text-slate-400 hover:text-white mb-10 transition-colors group no-underline"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
        Etkinliklere Dön
      </Link>

      <article className="space-y-10">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
             <span className="px-4 py-1.5 rounded-full bg-purple-600 font-extrabold text-[10px] uppercase tracking-widest text-white shadow-lg shadow-purple-600/20">
              {event.category}
            </span>
            <span className="text-slate-500 text-sm font-medium">{event.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-tight uppercase">
            {event.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
              {event.author[0]}
            </div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Yazar: <span className="text-white">{event.author}</span></span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
           <img 
            src={event.img} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 line-height-relaxed">
          <p className="text-slate-300 text-lg leading-loose whitespace-pre-wrap font-medium">
            {event.fullDesc}
          </p>
          
          <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="text-center md:text-left">
               <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">Maceraya Katılın</h4>
               <p className="text-slate-500 text-xs">Bu etkinliği oyun içinde deneyimlemek için hemen katılın.</p>
             </div>
             <button className="w-full md:w-auto px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-purple-600/20 hover:scale-105 active:scale-95">
                Sunucuya Bağlan
             </button>
          </div>
        </div>
      </article>

      {/* Recommended/Other Events (Placeholder) */}
      <div className="mt-20 pt-10 border-t border-white/5">
         <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8">Diğer Etkinlikler</h3>
         <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 glass p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
               <span className="text-[10px] font-bold text-slate-500 block mb-2">SIRADAKİ</span>
               <h4 className="text-white font-bold group-hover:text-purple-400 transition-colors">Discord Nitro Çekilişi</h4>
            </div>
            <div className="flex-1 glass p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
               <span className="text-[10px] font-bold text-slate-500 block mb-2">EFSANE</span>
               <h4 className="text-white font-bold group-hover:text-purple-400 transition-colors">Sezon 5 Açılış Notları</h4>
            </div>
         </div>
      </div>
    </div>
  );
}
