"use client";
import React, { useState } from "react";
import Modal from "../Modal";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState("theme");

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Hesap Ayarları">
      <div className="flex gap-4 border-b border-slate-700 mb-6">
        <button 
          className={`pb-2 text-sm font-bold ${activeTab === 'theme' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-slate-300 transition-colors'}`}
          onClick={() => setActiveTab('theme')}
        >
          Görünüm
        </button>
        <button 
          className={`pb-2 text-sm font-bold ${activeTab === 'access' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-slate-300 transition-colors'}`}
          onClick={() => setActiveTab('access')}
        >
          Erişilebilirlik
        </button>
      </div>

      {activeTab === 'theme' && (
        <div className="space-y-6">
          <div>
            <h4 className="text-white text-sm font-bold mb-3">Tema Seçimi</h4>
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-slate-800 rounded-lg border border-blue-500 text-white font-medium ring-2 ring-blue-500/50">Karanlık</button>
              <button className="flex-1 py-3 bg-slate-200 transition-colors rounded-lg text-slate-800 font-medium hover:bg-white focus:outline-none">Aydınlık</button>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-3">Vurgu Rengi</h4>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-blue-500 ring-2 ring-blue-400 border-2 border-[var(--background)]"></button>
              <button className="w-8 h-8 rounded-full bg-purple-500 hover:scale-110 transition-transform"></button>
              <button className="w-8 h-8 rounded-full bg-red-500 hover:scale-110 transition-transform"></button>
              <button className="w-8 h-8 rounded-full bg-green-500 hover:scale-110 transition-transform"></button>
              <button className="w-8 h-8 rounded-full bg-orange-500 hover:scale-110 transition-transform"></button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'access' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <div>
              <p className="text-white font-medium text-sm">Büyük Metinler</p>
              <p className="text-slate-400 text-xs">Yazı boyutlarını büyütür.</p>
            </div>
            <div className="w-10 h-6 bg-slate-600 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <div>
              <p className="text-white font-medium text-sm">Animasyonları Azalt</p>
              <p className="text-slate-400 text-xs">Arayüzdeki hareketli efektleri kapatır.</p>
            </div>
            <div className="w-10 h-6 bg-blue-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
          </div>
        </div>
      )}
      
      <button className="w-full mt-8 py-3 bg-slate-800 hover:bg-slate-700 transition-colors text-white font-bold rounded-xl outline-none" onClick={onClose}>
        Kaydet ve Kapat
      </button>
    </Modal>
  );
}
