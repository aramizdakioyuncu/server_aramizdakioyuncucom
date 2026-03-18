"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { useTheme } from "@/context/ThemeContext";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { theme, setTheme, accentColor, setAccentColor, reduceMotion, setReduceMotion } = useTheme();
  const [activeTab, setActiveTab] = useState("theme");

  const colors = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#10b981" },
    { name: "Orange", value: "#f97316" },
  ];

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
              <button 
                onClick={() => setTheme("dark")}
                className={`flex-1 py-3 rounded-lg border transition-all ${theme === 'dark' ? 'border-blue-500 bg-slate-800 text-white font-medium ring-2 ring-blue-500/50' : 'bg-slate-900 border-slate-700 text-slate-400'}`}
              >
                Karanlık
              </button>
              <button 
                onClick={() => setTheme("light")}
                className={`flex-1 py-3 rounded-lg border transition-all ${theme === 'light' ? 'border-blue-500 bg-slate-100 text-slate-800 font-medium ring-2 ring-blue-500/50' : 'bg-white border-slate-300 text-slate-600'}`}
              >
                Aydınlık
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-3">Vurgu Rengi</h4>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setAccentColor(c.value)}
                  className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${accentColor === c.value ? 'ring-2 ring-white border-2 border-[var(--background)]' : ''}`}
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}
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
          <div 
            className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
            onClick={() => setReduceMotion(!reduceMotion)}
          >
            <div>
              <p className="text-white font-medium text-sm">Animasyonları Azalt</p>
              <p className="text-slate-400 text-xs">Arayüzdeki hareketli efektleri kapatır.</p>
            </div>
            <div className={`w-10 h-6 rounded-full relative transition-colors ${reduceMotion ? 'bg-blue-500' : 'bg-slate-600'}`}>
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${reduceMotion ? 'right-1' : 'left-1'}`}></div>
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

