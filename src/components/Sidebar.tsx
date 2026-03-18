"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/constants/site";

export default function Sidebar() {
  const pathname = usePathname();

  const servers = [
    { id: "minecraft", name: "Minecraft", icon: SITE_CONFIG.assets.games.minecraft, href: "/minecraft", color: "from-green-600 to-green-700" },
    { id: "fivem", name: "FiveM", icon: SITE_CONFIG.assets.games.fivem, href: "/fivem", color: "from-red-600 to-red-700" },
    { id: "assettocorsa", name: "Assetto Corsa", icon: SITE_CONFIG.assets.games.assettocorsa, href: "/assettocorsa", color: "from-blue-600 to-blue-700" },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-20 z-[60] glass border-r border-slate-700 flex flex-col items-center py-6 gap-6">
      {/* Branding / Logo */}
      <Link href="/" className="w-14 h-14 relative flex items-center justify-center group transition-transform hover:scale-110 duration-300">
        <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-xl group-hover:bg-blue-600/20 transition-colors"></div>
        <img 
          src={SITE_CONFIG.assets.logo} 
          alt={SITE_CONFIG.name} 
          className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
        />
      </Link>

      <div className="h-[1px] w-10 bg-slate-700/50 mb-2"></div>

      <div className="flex flex-col gap-5 flex-1 w-full items-center overflow-y-auto overflow-x-hidden no-scrollbar pb-10">
        {servers.map((server) => {
          const isActive = pathname === server.href || (server.id !== 'home' && pathname.startsWith(server.href));
          const isEmoji = !server.icon.startsWith('http');
          
          return (
            <Link
              key={server.id}
              href={server.href}
              title={server.name}
              className={`relative group flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-tr ${server.color} shadow-lg scale-110 ring-2 ring-white/20` 
                  : "bg-slate-800/50 hover:bg-slate-700/50 hover:scale-110"
              }`}
            >
              {isEmoji ? (
                <span className="text-2xl drop-shadow-md">{server.icon}</span>
              ) : (
                <img src={server.icon} alt={server.name} className="w-7 h-7 object-contain drop-shadow-md" />
              )}
              
              {/* Tooltip */}
              <div className="absolute left-16 px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-3 group-hover:translate-x-0 whitespace-nowrap z-[70] shadow-xl border border-slate-700">
                {server.name}
              </div>

              {/* Active Indicator Line */}
              {isActive && (
                <div className="absolute -left-[18px] w-2 h-8 bg-blue-500 rounded-r-full shadow-[2px_0_10px_rgba(59,130,246,0.5)]"></div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer Sidebar (Optional Info) */}
      <div className="mt-auto">
        <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-help">
          ?
        </div>
      </div>
    </aside>
  );
}
