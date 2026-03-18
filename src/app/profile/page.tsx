import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-700 w-full">
      {/* Profile Header (Banner & Avatar) */}
      <div className="glass rounded-3xl overflow-hidden mb-8 relative">
        <div className="h-64 sm:h-80 w-full bg-[url('/bg-placeholder.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-24 sm:-mt-20">
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full border-8 border-slate-900 bg-slate-800 shadow-2xl overflow-hidden z-10">
              <img src="https://i.pravatar.cc/300?u=berkay" alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            {/* User Info */}
            <div className="flex-1 text-center sm:text-left pt-2 pb-2">
              <h1 className="text-4xl font-extrabold text-white mb-1">Berkay</h1>
              <div className="text-slate-400 text-sm font-medium">Katılım Tarihi: <span className="text-slate-200">12 Mayıs 2025</span></div>
            </div>
            
            {/* Balance & Actions */}
            <div className="flex flex-col gap-3 min-w-[200px]">
              <div className="glass px-6 py-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-center">
                <span className="text-slate-300 text-sm font-semibold uppercase tracking-wider block mb-1">Bakiye</span>
                <span className="text-3xl font-extrabold text-yellow-500 flex items-center justify-center gap-1">
                  2500 <span className="text-xl">₺</span>
                </span>
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl text-white font-bold shadow-lg shadow-blue-600/20">
                Bakiye Yükle
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* User Stats / Info Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-3 flex justify-between items-center">
              Hesap Bilgileri
              <button className="text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors">Düzenle</button>
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Kullanıcı Adı</p>
                <p className="text-white font-medium mt-1">Berkay</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">E-Posta</p>
                <p className="text-white font-medium mt-1">b***@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Durum</p>
                <p className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Aktif ve Onaylı
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-3">Güvenlik</h3>
            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 transition-colors rounded-xl text-white font-medium mb-3">
              Şifre Değiştir
            </button>
            <button className="w-full py-3 border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors rounded-xl font-medium">
              Hesaptan Çıkış Yap
            </button>
          </div>
        </div>

        {/* Purchase History / Main Content */}
        <div className="lg:col-span-2">
          <div className="glass rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Son İşlemler</h3>
            
            <div className="space-y-4 mt-6">
              {[
                { name: "Minecraft - MVIP", date: "12 Ekim 2026", price: "200 ₺", status: "Başarılı", color: "text-green-400 bg-green-500/10 border-green-500/30" },
                { name: "FiveM - 10 Milyon Oyun Parası", date: "5 Ekim 2026", price: "150 ₺", status: "Başarılı", color: "text-green-400 bg-green-500/10 border-green-500/30" },
                { name: "Bakiye Yükleme", date: "5 Ekim 2026", price: "+500 ₺", status: "Başarılı", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
              ].map((tx, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl bg-slate-800/40 border border-slate-700 hover:bg-slate-800 transition-colors">
                  <div>
                    <h4 className="text-white font-bold">{tx.name}</h4>
                    <p className="text-slate-400 text-sm">{tx.date}</p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-lg font-bold text-white">{tx.price}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${tx.color}`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-6 w-full py-3 text-sm font-bold text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-xl border border-slate-700">
              Tüm İşlem Geçmişini Görüntüle
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
