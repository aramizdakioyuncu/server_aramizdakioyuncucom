import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-8 bg-[url('/bg-placeholder.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
      
      <div className="glass rounded-2xl p-12 max-w-4xl text-center space-y-6 z-10">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Aramızdaki Oyuncu'ya Hoş Geldin
        </h1>
        <p className="text-xl text-slate-300">
          En kaliteli oyun sunucularında yerini al. Toplulukla buluş, etkinliklere katıl ve mağazadan alışveriş yap.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/minecraft" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-semibold shadow-lg shadow-blue-600/20">
            Minecraft
          </Link>
          <Link href="/fivem" className="px-6 py-3 bg-red-600 hover:bg-red-500 transition-colors rounded-lg font-semibold shadow-lg shadow-red-600/20">
            FiveM
          </Link>
          <Link href="/assettocorsa" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-lg font-semibold shadow-lg shadow-emerald-600/20">
            Assetto Corsa
          </Link>
        </div>
      </div>
    </div>
  );
}
