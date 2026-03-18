import React from "react";
import Link from "next/link";
import GameTabs from "@/components/GameTabs";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'minecraft' },
    { slug: 'fivem' },
    { slug: 'assettocorsa' },
  ];
}

export default async function GameHome({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.slug;

  const isMinecraft = gameSlug === "minecraft";

  const leaderboard = [
    { name: "berkay", kills: 1250, deaths: 450, kd: 2.7, head: "https://minotar.net/helm/berkay/100" },
    { name: "ahmet", kills: 1100, deaths: 600, kd: 1.8, head: "https://minotar.net/helm/ahmet/100" },
    { name: "mehmet", kills: 950, deaths: 500, kd: 1.9, head: "https://minotar.net/helm/mehmet/100" },
    { name: "ayse", kills: 800, deaths: 400, kd: 2.0, head: "https://minotar.net/helm/ayse/100" },
  ];

  const clans = [
    { name: "KORKUSUZLAR", level: 50, members: 24, leader: "berkay", color: "text-red-500" },
    { name: "ADALET", level: 45, members: 18, leader: "ayse", color: "text-blue-500" },
    { name: "OSMANLI", level: 42, members: 30, leader: "mehmet", color: "text-emerald-500" },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Game Header Area */}
      <div className="relative h-48 md:h-64 rounded-[3rem] overflow-hidden group">
        <div className="absolute inset-0 bg-slate-900">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic group-hover:scale-110 transition-transform duration-700">
              {gameSlug} <span className="text-blue-500">SUNUCUSU</span>
            </h2>
        </div>
      </div>

      <GameTabs 
        gameSlug={gameSlug} 
        isMinecraft={isMinecraft} 
        leaderboard={leaderboard} 
        clans={clans} 
      />
    </div>
  );
}
