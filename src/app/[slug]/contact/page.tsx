export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'minecraft' },
    { slug: 'fivem' },
    { slug: 'assettocorsa' },
  ];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.slug;
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -m-32 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -m-32 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Kolayca Bize <span className="text-blue-500">Ulaşabilirsin!</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Sunucu içinde yaşadığın problemleri, hata bildirimlerini veya destek taleplerini bize Discord üzerinden iletebilirsin. Daha hızlı çözümler için ticket (destek talebi) oluşturmayı unutma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Social / Discord Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Topluluk Kanalları</h3>
            
            <a href="#" className="flex items-center gap-4 bg-indigo-600/20 hover:bg-indigo-600/40 p-4 rounded-xl border border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/40 group-hover:scale-110 transition-transform">
                D
              </div>
              <div>
                <h4 className="text-white font-bold">Discord Sunucusu</h4>
                <p className="text-indigo-300 text-sm">Destek talebi oluşturmak için katılın</p>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-4 bg-rose-600/20 hover:bg-rose-600/40 p-4 rounded-xl border border-rose-500/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-rose-500/40 group-hover:scale-110 transition-transform">
                I
              </div>
              <div>
                <h4 className="text-white font-bold">Instagram</h4>
                <p className="text-rose-300 text-sm">Duyuruları ve görselleri takip edin</p>
              </div>
            </a>
          </div>

          {/* Quick FAQ or direct message note */}
          <div className="glass rounded-xl p-6 bg-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Sıkça Sorulan Sorular</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-blue-400 font-bold text-sm">VIP aldım ne zaman gelir?</h4>
                <p className="text-slate-400 text-sm mt-1">Sistem otomatiktir. Ödeme başarıyla gerçekleştikten sonra anında hesabınıza tanımlanır.</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold text-sm">Haksız yere ban yedim, ne yapmalıyım?</h4>
                <p className="text-slate-400 text-sm mt-1">Discord sunucumuza katılıp, "Destek" kategorisinden itiraz talebi oluşturabilirsiniz.</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold text-sm">Şifremi unuttum, nasıl sıfırlarım?</h4>
                <p className="text-slate-400 text-sm mt-1">Oyun içi kullandığınız şifreyi unuttuysanız sitemizdeki profilinizden sıfırlama işlemi yapabilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
