"use client";
import React, { useState, use } from "react";

export default function RulesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const gameSlug = resolvedParams.slug;
  const [activeCategory, setActiveCategory] = useState("Hepsi");
  const [search, setSearch] = useState("");

  const categories = ["Hepsi", "Genel", "Oyun İçi", "Sohbet", "Hesap"];

  const rules = [
    { title: "Saygı ve Nezaket", cat: "Genel", content: "Tüm oyuncular birbirine saygılı olmalıdır. Küfür, hakaret ve toksik davranışlar yasaktır." },
    { title: "Hile Kullanımı", cat: "Oyun İçi", content: "3. parti yazılımlar, hileler ve oyun dosyalarını değiştirmek kesinlikle yasaktır. Tespiti halinde kalıcı ban atılır." },
    { title: "Reklam ve Spam", cat: "Sohbet", content: "Chat üzerinden başka sunucuların reklamını yapmak, flood atmak veya spam yapmak susturulma sebebidir." },
    { title: "Bug Kullanımı", cat: "Oyun İçi", content: "Oyundaki açıkları (bug) kullanıp haksız kazanç sağlamak yasaktır. Bulan kişilerin yetkililere bildirmesi zorunludur." },
    { title: "Hesap Sorumluluğu", cat: "Hesap", content: "Her oyuncu kendi hesabının güvenliğinden sorumludur. Çalınan hesapların mağduriyeti yönetimi bağlamaz." },
    { title: "Siyaset ve Din", cat: "Sohbet", content: "Chat kanallarında siyasi veya dini tartışmalar yapmak, propaganda yapmak kesinlikle yasaktır." },
  ];

  const filteredRules = rules.filter(r => 
    (activeCategory === "Hepsi" || r.cat === activeCategory) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.content.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      <div className="text-center mb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-10 -z-10"></div>
        <h2 className="text-5xl font-black text-white px-4 tracking-tight">
          <span className="text-blue-500 uppercase">{gameSlug}</span> Adalet <span className="underline decoration-blue-500/30 underline-offset-8">Rehberi</span>
        </h2>
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Topluluğumuzda huzuru ve adaleti sağlamak için belirlenmiş kurallarımız.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10 px-4">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${activeCategory === c ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20" : "bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72 group">
             <input 
               type="text" 
               placeholder="Kural ara..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-blue-500 transition-all font-bold group-hover:bg-slate-800/50"
             />
             <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRules.length > 0 ? filteredRules.map((rule, idx) => (
            <div key={idx} className="glass rounded-[2rem] p-8 flex items-start gap-6 border border-white/5 hover:border-blue-500/30 transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 text-blue-500 flex items-center justify-center font-black text-2xl shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                {idx + 1}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/70">{rule.cat}</span>
                <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{rule.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{rule.content}</p>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center glass rounded-3xl border-dashed border-2 border-slate-800">
               <span className="text-5xl block mb-4 opacity-40">🚫</span>
               <p className="text-slate-500 font-bold uppercase tracking-widest">Aradığınız kriterlere uygun kural bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

