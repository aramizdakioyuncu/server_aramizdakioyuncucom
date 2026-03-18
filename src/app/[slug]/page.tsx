export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'minecraft' },
    { slug: 'fivem' },
    { slug: 'assettocorsa' },
  ];
}

export default async function GameHome({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.slug;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Main Content Area */}
        <div className="md:w-2/3 space-y-6">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Sunucu Hakkında</h2>
            <p className="text-slate-300 leading-relaxed">
              {gameSlug.toUpperCase()} sunucumuzda eşsiz bir oyun deneyimi sizi bekliyor. Gelişmiş sistemler, aktif yetkili kadrosu ve adil oyun anlayışıyla en iyi RPG/Survival deneyimini sunuyoruz. Daha fazla bilgi almak için menüdeki kurallar sekmesini inceleyebilirsiniz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 border-t-4 border-t-blue-500">
              <h3 className="text-lg font-bold text-white mb-2">Makine Özellikleri</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><strong className="text-slate-200">İşlemci:</strong> AMD Ryzen 9 7950X</li>
                <li><strong className="text-slate-200">RAM:</strong> 128 GB DDR5</li>
                <li><strong className="text-slate-200">Lokasyon:</strong> Türkiye / İstanbul</li>
                <li><strong className="text-slate-200">Korumalar:</strong> Layer 7 DDoS Koruması</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 border-t-4 border-t-purple-500">
              <h3 className="text-lg font-bold text-white mb-2">Hızlı Bağlantılar</h3>
              <div className="flex flex-col gap-3">
                <a href={`/${gameSlug}/store`} className="text-slate-300 hover:text-white hover:underline transition-all">VIP Satın Al</a>
                <a href={`/${gameSlug}/rules`} className="text-slate-300 hover:text-white hover:underline transition-all">Sunucu Kuralları</a>
                <a href={`/${gameSlug}/contact`} className="text-slate-300 hover:text-white hover:underline transition-all">Destek Talebi Oluştur</a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3 space-y-6">
          <div className="glass rounded-2xl p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">#</span> Son Haberler
            </h3>
            
            <div className="space-y-6">
              {[1, 2, 3].map((news) => (
                <div key={news} className="group cursor-pointer">
                  <div className="w-full h-32 bg-slate-800 rounded-lg mb-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                  </div>
                  <h4 className="text-slate-200 font-semibold group-hover:text-blue-400 transition-colors">
                    Sunucu Yeni Sezon Güncellemesi V{news}.0
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">12 Ekim 2026</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
