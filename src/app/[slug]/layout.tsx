import HeroBanner from "@/components/HeroBanner";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import React from "react";

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'minecraft' },
    { slug: 'fivem' },
    { slug: 'assettocorsa' },
  ];
}

export default async function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.slug;
  
  // Color mapping for ambient theme
  const colors: Record<string, string> = {
    minecraft: "#16a34a",
    fivem: "#ef4444",
    assettocorsa: "#3b82f6"
  };
  const themeColor = colors[gameSlug] || "#3b82f6";
  
  return (
    <div className="flex flex-col flex-1 w-full relative">
      {/* Global Ambient Glow based on game selection */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 opacity-10 transition-colors duration-1000"
        style={{ 
          background: `radial-gradient(circle at 50% -20%, ${themeColor}, transparent 70%)` 
        }}
      />
      
      <WelcomeOverlay gameSlug={gameSlug} />
      <HeroBanner gameSlug={gameSlug} />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  );
}
