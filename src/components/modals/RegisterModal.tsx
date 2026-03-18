"use client";
import React from "react";
import Modal from "../Modal";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function RegisterModal({ isOpen, onClose, onOpenLogin }: RegisterModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Kayıt Ol">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">Kullanıcı Adı</label>
          <input 
            type="text" 
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Oyundaki adınız"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">E-Posta</label>
          <input 
            type="email" 
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="ornek@mail.com"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">Şifre</label>
          <input 
            type="password" 
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="••••••••"
          />
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" id="terms" className="rounded bg-slate-800 border-slate-700 text-blue-500 focus:ring-blue-500" />
          <label htmlFor="terms" className="text-xs text-slate-400">
            <a href="/kurallar" className="text-blue-400 hover:underline">Kuralları</a> ve Hizmet Şartlarını okudum, kabul ediyorum.
          </label>
        </div>
        
        <button className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-500 transition-colors rounded-xl text-white font-bold shadow-lg shadow-purple-600/20">
          Kayıt Ol
        </button>
        
        <p className="text-center text-sm text-slate-400 mt-4">
          Zaten hesabın var mı?{" "}
          <button type="button" onClick={onOpenLogin} className="text-blue-400 hover:text-blue-300 font-bold">
            Giriş Yap
          </button>
        </p>
      </form>
    </Modal>
  );
}
