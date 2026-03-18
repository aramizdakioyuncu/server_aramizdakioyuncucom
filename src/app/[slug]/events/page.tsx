import Link from "next/link";

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'minecraft' },
    { slug: 'fivem' },
    { slug: 'assettocorsa' },
  ];
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.slug;
  const events = [
    { 
      id: 1, 
      title: "Yılın En Büyük İndirimleri Başladı!", 
      date: "25 Mart 2026", 
      desc: "Tüm mağaza ürünlerinde ve VIP paketlerinde %50'ye varan efsane indirim fırsatlarını kaçırmayın. Sınırlı süre için geçerli!", 
      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop",
      category: "İndirim"
    },
    { 
      id: 2, 
      title: "Yeni Sezon: Kaos ve Düzen", 
      date: "1 Nisan 2026", 
      desc: "Yeni sezonla birlikte yepyeni haritalar, özel araçlar ve geliştirilmiş mekanikler sunucuya ekleniyor. Hazır mısınız?", 
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
      category: "Güncelleme"
    },
    { 
      id: 3, 
      title: "Discord Nitro & VIP Çekilişi", 
      date: "10 Nisan 2026", 
      desc: "Topluluğumuz büyüyor! Şerefine 5 adet Discord Nitro ve 3 adet Sınırsız VIP üyeliği çekilişle dağıtıyoruz.", 
      img: "https://images.unsplash.com/photo-1614680376593-902f74cc0d41?q=80&w=2000&auto=format&fit=crop",
      category: "Çekiliş"
    },
  ];

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-10 -z-10"></div>
        <h2 className="text-5xl font-black text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Etkinlikler</span> & Duyurular
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Sunucumuzun kalbi burada atıyor. En yeni haberleri, kaçırılmayacak fırsatları ve topluluk etkinliklerini buradan takip edin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((ev) => (
          <Link 
            key={ev.id} 
            href={`/${gameSlug}/events/${ev.id}`}
            className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-[0_30px_60px_-15px_rgba(168,85,247,0.2)]"
          >
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src={ev.img} 
                alt={ev.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
            </div>
            
            {/* Content Layer */}
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-600 font-black text-[10px] uppercase tracking-widest text-white shadow-lg shadow-purple-600/20">
                  {ev.category}
                </span>
                <span className="text-white/50 text-xs font-bold">{ev.date}</span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-purple-300 transition-colors uppercase italic italic">
                {ev.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-sm">
                {ev.desc}
              </p>
              
              <div className="flex items-center gap-3 text-white text-xs font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                Detayları Gör
                <div className="h-[2px] w-8 bg-purple-500 group-hover:w-12 transition-all"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
