"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { useAuth } from "@/context/AuthContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export default function LoginModal({ isOpen, onClose, onOpenRegister }: LoginModalProps) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const success = await login(username, password);
      if (success) {
        onClose();
        setUsername("");
        setPassword("");
      } else {
        setError("Hatalı kullanıcı adı veya şifre! (Test: berkay / 123456)");
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Giriş Yap">
      <form className="space-y-4" onSubmit={handleLogin}>
        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium animate-in fade-in slide-in-from-top-1">
            ⚠️ {error}
          </div>
        )}
        {/* ARMOYU SSO Button */}
        <div className="space-y-4">
          <button 
            type="button"
            onClick={() => {
              const width = 600;
              const height = 800;
              const left = (window.innerWidth - width) / 2 + window.screenX;
              const top = (window.innerHeight - height) / 2 + window.screenY;
              window.open(
                "https://accounts.aramizdakioyuncu.com", 
                "ARMOYU Login", 
                `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
              );
            }}
            className="w-full py-4 bg-gradient-to-r from-[#003366] to-[#CC0000] hover:from-[#004080] hover:to-[#E60000] transition-all rounded-2xl text-white font-black shadow-xl shadow-red-900/20 flex items-center justify-center gap-4 group active:scale-[0.98] border border-white/10"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:rotate-6">
              <img 
                src="https://storage.aramizdakioyuncu.com/galeri/ana-yapi/armoyu128.png" 
                alt="ARMOYU Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="tracking-[0.2em] uppercase text-xs">ARMOYU İLE GİRİŞ YAP</span>
          </button>

          <div className="relative flex items-center gap-4 py-2">
            <div className="flex-1 h-[1px] bg-slate-800"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">VEYA</span>
            <div className="flex-1 h-[1px] bg-slate-800"></div>
          </div>
        </div>

        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1 tracking-wide uppercase text-[10px] font-black opacity-60">Kullanıcı Adı</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            spellCheck={false}
            autoComplete="username"
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Kullanıcı adınızı girin"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1 flex justify-between tracking-wide uppercase text-[10px] font-black opacity-60">
            Şifre
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Şifremi Unuttum</a>
          </label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="••••••••"
            required
          />
          <button 
            type="button"
            onClick={() => { setUsername("berkay"); setPassword("123456"); }}
            className="mt-3 text-[10px] text-blue-400/50 hover:text-blue-400 transition-colors font-black uppercase tracking-widest"
          >
            Sistemi Test Et (Otomatik Doldur)
          </button>
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          className="w-full py-4 mt-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl text-white font-black uppercase tracking-widest text-xs border border-slate-700 shadow-lg active:scale-95"
        >
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
        
        <p className="text-center text-xs text-slate-500 mt-6 font-bold uppercase tracking-widest">
          Hesabın yok mu?{" "}
          <button type="button" onClick={onOpenRegister} className="text-blue-400 hover:text-blue-300 font-black decoration-2">
            Şimdi Kayıt Ol
          </button>
        </p>
      </form>
    </Modal>
  );
}

