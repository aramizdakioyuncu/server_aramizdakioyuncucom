import HeroBanner from "@/components/HeroBanner";
import React from "react";

export default async function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ game: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.game;
  
  return (
    <div className="flex flex-col flex-1 w-full">
      <HeroBanner gameSlug={gameSlug} />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  );
}
