import Image from "next/image";

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'minecraft' },
    { slug: 'fivem' },
    { slug: 'assettocorsa' },
  ];
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.slug;
  const products = [
    { name: "VIP", price: "50", color: "bg-blue-500", shadow: "shadow-blue-500/20" },
    { name: "VIP+", price: "100", color: "bg-cyan-500", shadow: "shadow-cyan-500/20" },
    { name: "MVIP", price: "200", color: "bg-purple-500", shadow: "shadow-purple-500/20" },
    { name: "MVIP+", price: "300", color: "bg-fuchsia-500", shadow: "shadow-fuchsia-500/20" },
    { name: "ROYAL", price: "500", color: "bg-yellow-500", shadow: "shadow-yellow-500/20" },
    { name: "LEGEND", price: "800", color: "bg-red-500", shadow: "shadow-red-500/20" },
    { name: "GOD", price: "1250", color: "bg-orange-500", shadow: "shadow-orange-500/20" },
    { name: "SUPREME", price: "2000", color: "bg-rose-600", shadow: "shadow-rose-600/20" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Oyun <span className="text-yellow-500">Mağazası</span>
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Sunucumuza destek olarak oyundaki gelişiminizi hızlandırabilir ve eşsiz ayrıcalıklara sahip olabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, idx) => (
          <div key={idx} className={`glass rounded-2xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl ${p.shadow}`}>
            {/* Top Color Banner */}
            <div className={`h-2 w-full ${p.color}`}></div>
            
            <div className="p-6 flex flex-col items-center">
              {/* Shield/Icon Wrapper */}
              <div className="w-24 h-24 my-4 flex items-center justify-center bg-slate-800/50 rounded-full border border-slate-700 relative">
                {/* Fallback Icon */}
                <div className={`absolute w-12 h-16 ${p.color} clip-shield opacity-80 blur-sm`}></div>
                <div className={`w-10 h-14 ${p.color} clip-shield z-10`}></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-6 text-center">30 Günlük Özel Ayrıcalık Kiti</p>
              
              <div className="text-3xl font-extrabold text-white mb-6">
                {p.price} <span className="text-xl text-yellow-500 font-bold">₺</span>
              </div>
              
              <button className={`w-full py-3 rounded-lg text-white font-bold transition-colors ${p.color} hover:opacity-90`}>
                Satın Al
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Inline styles for custom shape */}
      <style dangerouslySetInnerHTML={{__html: `
        .clip-shield {
          clip-path: polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%);
        }
      `}} />
    </div>
  );
}
