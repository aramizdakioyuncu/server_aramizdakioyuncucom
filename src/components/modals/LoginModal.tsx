"use client";
import React from "react";
import Modal from "../Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export default function LoginModal({ isOpen, onClose, onOpenRegister }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Giriş Yap">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">Kullanıcı Adı veya E-Posta</label>
          <input 
            type="text" 
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Kullanıcı adınızı girin"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1 flex justify-between">
            Şifre
            <a href="#" className="text-blue-400 hover:text-blue-300 text-xs">Şifremi Unuttum</a>
          </label>
          <input 
            type="password" 
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="••••••••"
          />
        </div>
        
        <button className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl text-white font-bold shadow-lg shadow-blue-600/20">
          Giriş Yap
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
