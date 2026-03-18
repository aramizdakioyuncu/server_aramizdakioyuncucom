import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="font-bold text-xl tracking-tight text-white mb-4 block">Aramızdaki Oyuncu</span>
            <p className="text-slate-400 text-sm">
              En kaliteli oyun sunucuları ve eşsiz bir topluluk deneyimi. Maceraya bugün katıl.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/minecraft" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Minecraft</Link></li>
              <li><Link href="/fivem" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">FiveM</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Destek</h3>
            <ul className="space-y-3">
              <li><Link href="/iletisim" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">İletişim</Link></li>
              <li><Link href="/kurallar" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Kurallar</Link></li>
              <li><Link href="/hizmet-sartlari" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Hizmet Şartları</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Sosyal Medya</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Aramızdaki Oyuncu. Tüm hakları saklıdır.
          </p>
          <div className="mt-4 md:mt-0">
             <span className="text-sm text-slate-600">Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
