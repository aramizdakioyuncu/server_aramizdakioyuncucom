"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import SettingsModal from "./modals/SettingsModal";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const pathname = usePathname();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Extract game name from pathname to customize logic if needed
  const match = pathname.match(/^\/([^\/]+)/);
  const game = match ? match[1] : "";

  const getLinks = (gameSlug: string) => {
    if (!gameSlug || gameSlug === "profile") {
      return [
        { name: "Ana Sayfa", href: "/" },
        { name: "Minecraft", href: "/minecraft" },
        { name: "FiveM", href: "/fivem" },
      ];
    }
    return [
      { name: "Ana Sayfa", href: `/${gameSlug}` },
      { name: "Kurallar", href: `/${gameSlug}/rules` },
      { name: "Etkinlikler", href: `/${gameSlug}/events` },
      { name: "Yetkililer", href: `/${gameSlug}/staff` },
      { name: "Mağaza", href: `/${gameSlug}/store` },
      { name: "İletişim", href: `/${gameSlug}/contact` },
    ];
  };

  const links = getLinks(game);

  return (
    <>
      <nav className="fixed top-0 left-20 right-0 z-50 glass border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-500 rounded-xl transform rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <span className="-rotate-45 text-white font-bold text-xl">A</span>
                </div>
                <span className="font-bold text-xl tracking-tight hidden sm:block text-white">Aramızdaki Oyuncu</span>
              </Link>
            </div>

            {/* Center Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive 
                          ? "bg-slate-800/80 text-blue-400" 
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Area: Profile / Login */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSettingsOpen(true)}
                className="hidden sm:flex text-slate-300 hover:text-white hover:bg-slate-800/50 p-2 rounded-full transition-colors"
                title="Ayarlar"
              >
                ⚙️
              </button>
              
              <div className="h-8 w-[1px] bg-slate-700 mx-2 hidden sm:block"></div>
              
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <Link href="/profile" className="flex items-center gap-3 p-1 pr-4 bg-slate-800/50 hover:bg-slate-700/50 transition-colors rounded-full border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <div className="w-8 h-8 rounded-full bg-slate-600 overflow-hidden ring-2 ring-slate-800">
                      <img src={user?.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden sm:flex flex-col">
                      <span className="text-sm font-semibold leading-tight text-slate-200">{user?.username}</span>
                      <span className="text-xs text-yellow-500 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,1)]"></span>
                        {user?.balance} ₺
                      </span>
                    </div>
                  </Link>
                  <button 
                    onClick={() => {
                      if(window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
                        logout();
                      }
                    }}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all"
                    title="Çıkış Yap"
                  >
                    🚪
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-colors shadow-lg shadow-blue-600/20"
                >
                  Giriş Yap
                </button>
              )}

              {/* Mobile menu button */}
              <div className="md:hidden flex">
                <button className="text-slate-300 hover:text-white p-2 text-2xl">
                  ☰
                </button>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onOpenRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }} 
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
        onOpenLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }} 
      />
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}
