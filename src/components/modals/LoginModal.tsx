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
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">Kullanıcı Adı</label>
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
          <label className="block text-slate-300 text-sm font-medium mb-1 flex justify-between">
            Şifre
            <a href="#" className="text-blue-400 hover:text-blue-300 text-xs">Şifremi Unuttum</a>
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
            className="mt-2 text-xs text-blue-400/70 hover:text-blue-400 transition-colors"
          >
            Sistemi Test Et (Otomatik Doldur)
          </button>
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-xl text-white font-bold shadow-lg shadow-blue-600/20"
        >
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
        
        <p className="text-center text-sm text-slate-400 mt-4">
          Hesabın yok mu?{" "}
          <button type="button" onClick={onOpenRegister} className="text-blue-400 hover:text-blue-300 font-bold">
            Kayıt Ol
          </button>
        </p>
      </form>
    </Modal>
  );
}

