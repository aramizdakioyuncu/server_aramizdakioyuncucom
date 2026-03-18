"use client";
import React, { useState } from "react";
import Modal from "../Modal";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function ForgotPasswordModal({ isOpen, onClose, onOpenLogin }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Lütfen e-posta adresinizi girin.");
      return;
    }

    setError("");
    setLoading(true);

    // Mock API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (err) {
      setError("Bağlantı gönderilirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Şifremi Unuttum">
      {success ? (
        <div className="py-10 text-center space-y-4 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 text-4xl mx-auto border border-blue-500/30">
            ✉️
          </div>
          <p className="text-slate-300 px-4">
            Şifre sıfırlama bağlantısı <span className="text-white font-bold">{email}</span> adresine gönderildi. Lütfen gelen kutunuzu kontrol edin.
          </p>
          <button 
            onClick={onOpenLogin}
            className="text-blue-400 hover:text-blue-300 font-black uppercase tracking-widest text-xs mt-4"
          >
            Giriş Sayfasına Dön
          </button>
        </div>
      ) : (
        <form className="space-y-6 pt-2" onSubmit={handleSubmit}>
          <div className="text-center space-y-2 mb-4">
            <p className="text-slate-400 text-sm">
              Hesabınızın e-posta adresini girin, size şifrenizi sıfırlamanız için bir bağlantı gönderelim.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest text-center">
              ⚠️ {error}
            </div>
          )}

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1 tracking-wide uppercase text-[10px] font-black opacity-60">E-Posta Adresi</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="ornek@mail.com"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-all rounded-xl text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-900/40 active:scale-95"
          >
            {loading ? "GÖNDERİLİYOR..." : "SIFIRLAMA BAĞLANTISI GÖNDER"}
          </button>

          <p className="text-center text-[10px] text-slate-500 font-extrabold uppercase tracking-[0.2em]">
            HATIRLADIN MI?{" "}
            <button type="button" onClick={onOpenLogin} className="text-blue-400 hover:text-blue-300">
              GİRİŞ YAP
            </button>
          </p>
        </form>
      )}
    </Modal>
  );
}
