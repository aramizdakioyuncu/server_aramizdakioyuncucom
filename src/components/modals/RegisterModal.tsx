"use client";
import React, { useState } from "react";
import Modal from "../Modal";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function RegisterModal({ isOpen, onClose, onOpenLogin }: RegisterModalProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!terms) {
      alert("Lütfen kullanım şartlarını kabul edin.");
      return;
    }
    
    setLoading(true);
    // Mock register logic
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");
      
      setTimeout(() => {
        setSuccess(false);
        onOpenLogin();
      }, 2000);
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Hesap Oluştur">
      {success ? (
        <div className="py-10 text-center space-y-4 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 text-4xl mx-auto border border-green-500/30">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-white">Kayıt Başarılı!</h3>
          <p className="text-slate-400">Giriş yapmanız için yönlendiriliyorsunuz...</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1 tracking-wide uppercase text-[10px] font-black opacity-60">Oyundaki Adın</label>
            <input 
              type="text" 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Minecraft veya FiveM kullanıcı adın"
            />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1 tracking-wide uppercase text-[10px] font-black opacity-60">E-Posta Adresi</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="ornek@mail.com"
            />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1 tracking-wide uppercase text-[10px] font-black opacity-60">Şifre Belirle</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <div className="flex items-center gap-3 mt-4 group cursor-pointer" onClick={() => setTerms(!terms)}>
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${terms ? "bg-blue-600 border-blue-500" : "bg-slate-800 border-slate-700"}`}>
              {terms && <span className="text-white text-[10px]">✓</span>}
            </div>
            <label htmlFor="terms" className="text-[11px] text-slate-400 cursor-pointer select-none">
              <span className="text-blue-400 font-bold hover:underline">Hizmet Şartlarını</span> ve topluluk kurallarını okudum, kabul ediyorum.
            </label>
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 transition-all rounded-xl text-white font-black shadow-lg shadow-blue-600/20 active:scale-95 uppercase tracking-widest text-xs"
          >
            {loading ? "Hesap Oluşturuluyor..." : "Kayıt Ol ve Katıl"}
          </button>
          
          <p className="text-center text-xs text-slate-500 mt-6 font-bold">
            Zaten hesabın var mı?{" "}
            <button type="button" onClick={onOpenLogin} className="text-blue-400 hover:text-blue-300 font-black decoration-2">
              Giriş Yap
            </button>
          </p>
        </form>
      )}
    </Modal>
  );
}

