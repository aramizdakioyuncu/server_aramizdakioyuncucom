import Image from "next/image";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ game: string }>;
}) {
  const events = [
    { id: 1, title: "Yeni Yıl İndirimleri Başladı!", date: "25 Aralık 2026", desc: "Tüm mağaza ürünlerinde %50'ye varan efsane indirim fırsatlarını kaçırmayın.", img: "/bg-placeholder.jpg" },
    { id: 2, title: "Sezon 5 Açılışı", date: "15 Ekim 2026", desc: "Yeni sezonla birlikte yepyeni haritalar, araçlar ve mekanikler sunucuya eklendi.", img: "/bg-placeholder.jpg" },
    { id: 3, title: "Discord Nitro Çekilişi", date: "1 Rkim 2026", desc: "Haftalık Discord çekilişlerimiz başladı. Hemen katıl ve 1 Aylık Nitro kazanma şansı yakala.", img: "/bg-placeholder.jpg" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white">
          <span className="text-purple-500">Etkinlikler</span> ve Duyurular
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Sunucumuzdaki en güncel haberleri, yaklaşan etkinlikleri ve çekilişleri buradan takip edebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((ev) => (
          <div key={ev.id} className="glass rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="w-full h-48 bg-slate-800 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${ev.img})`, opacity: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                Duyuru
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-purple-400 text-sm font-semibold mb-2">{ev.date}</p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{ev.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {ev.desc}
              </p>
              
              <div className="flex items-center text-blue-400 text-sm font-bold group-hover:text-blue-300 transition-colors">
                Devamını Oku 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
