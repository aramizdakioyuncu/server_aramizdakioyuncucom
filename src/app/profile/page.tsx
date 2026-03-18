"use client";
import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function ProfilePage() {
  const { user, isLoggedIn, logout, updateBalance } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-8 text-center space-y-6">
        <div className="text-6xl">🔒</div>
        <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Erişim Engellendi</h2>
        <p className="text-slate-400 max-w-md mx-auto">Profilinizi görüntülemek için önce giriş yapmanız gerekmektedir.</p>
        <Link href="/" className="px-10 py-4 bg-blue-600 hover:bg-blue-500 transition-colors rounded-2xl text-white font-black shadow-xl shadow-blue-600/30">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  const handleDeposit = () => {
    const amount = 100;
    updateBalance(amount);
    alert(`${amount} ₺ başarıyla hesabınıza eklendi! (Simülasyon)`);
  };

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
            <div className="w-40 h-40 rounded-full border-8 border-slate-900 bg-slate-800 shadow-2xl overflow-hidden z-10 transition-transform hover:scale-105 duration-500">
              <img src={user?.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            {/* User Info */}
            <div className="flex-1 text-center sm:text-left pt-2 pb-2">
              <h1 className="text-4xl font-extrabold text-white mb-1">{user?.username}</h1>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">Katılım: <span className="text-slate-200">Mart 2026</span></div>
            </div>
            
            {/* Balance & Actions */}
            <div className="flex flex-col gap-3 min-w-[200px]">
              <div className="glass px-6 py-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-center">
                <span className="text-slate-300 text-sm font-semibold uppercase tracking-wider block mb-1">Bakiye</span>
                <span className="text-3xl font-extrabold text-yellow-500 flex items-center justify-center gap-1">
                  {user?.balance} <span className="text-xl font-bold">₺</span>
                </span>
              </div>
              <button 
                onClick={handleDeposit}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 transition-all rounded-xl text-white font-black shadow-lg shadow-blue-600/20 active:scale-95 translate-y-0 hover:-translate-y-1"
              >
                Bakiye Yükle (+100₺)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* User Stats / Info Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-3 flex justify-between items-center">
              Hesap Bilgileri
              <button className="text-sm text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest">DÜZENLE</button>
            </h3>
            
            <div className="space-y-5">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Kullanıcı Adı</p>
                <p className="text-white font-bold">{user?.username}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Kimlik</p>
                <p className="text-white font-bold text-xs">#AY-984210</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Durum</p>
                <p className="mt-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-black border border-green-500/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                  AKTİF & ONAYLI
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3 uppercase tracking-widest">Güvenlik</h3>
            <button className="w-full py-3.5 bg-slate-800/80 hover:bg-slate-700 transition-all rounded-xl text-white font-bold mb-3 border border-slate-700 shadow-lg">
              Şifre Değiştir
            </button>
            <button 
              onClick={() => { if(confirm('Çıkış yapmak üzeresiniz?')) logout(); }}
              className="w-full py-3.5 border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-red-500/5"
            >
              Hesaptan Çıkış Yap
            </button>
          </div>
        </div>

        {/* Purchase History / Main Content */}
        <div className="lg:col-span-2">
          <div className="glass rounded-2xl p-8 h-full border border-slate-700/50">
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">Son İşlemler</h3>
            
            <div className="space-y-4 mt-6">
              {[
                { name: "Sistem Test Bakiyesi", date: "Bugün", price: "+100 ₺", status: "Tamamlandı", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
                { name: "VIP Paketi Satın Alındı", date: "Yün dün", price: "-50 ₺", status: "Tamamlandı", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
              ].map((tx, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 transition-all group">
                  <div>
                    <h4 className="text-white font-black group-hover:text-blue-400 transition-colors">{tx.name}</h4>
                    <p className="text-slate-500 text-xs font-bold uppercase mt-1">{tx.date}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-xl font-black text-white">{tx.price}</span>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-lg ${tx.color}`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 w-full py-4 text-xs font-black text-slate-500 hover:text-white bg-slate-800/30 hover:bg-slate-800/50 transition-all rounded-2xl border border-slate-700/50 uppercase tracking-[0.2em]">
              Tüm İşlem Geçmişini Görüntüle
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

