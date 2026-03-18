"use client";
import React, { useState, use } from "react";

export default function ContactPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const gameSlug = resolvedParams.slug;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  const faqs = [
    { q: "VIP aldım ne zaman gelir?", a: "Sistem otomatiktir. Ödeme başarıyla gerçekleştikten sonra anında hesabınıza tanımlanır." },
    { q: "Haksız yere ban yedim, ne yapmalıyım?", a: "Discord sunucumuza katılıp, 'Destek' kategorisinden itiraz talebi oluşturabilirsiniz." },
    { q: "Şifremi unuttum, nasıl sıfırlarım?", a: "Oyun içi kullandığınız şifreyi unuttuysanız sitemizdeki profilinizden sıfırlama işlemi yapabilirsiniz." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="max-w-5xl mx-auto glass rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-2xl">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -m-32 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -m-32 w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
        
        <div className="relative z-10 text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-4">
            7/24 Teknik Destek
          </div>
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            Yardıma mı <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">İhtiyacın</span> Var?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Problemlerini çözmek için buradayız. Sosyal medya hesaplarımızdan bizi takip edebilir veya doğrudan ekip üyelerimize ulaşabilirsin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* FAQ Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-white border-b border-slate-800 pb-4 uppercase tracking-wider flex items-center gap-3">
              <span className="text-blue-500">?</span> Sıkça Sorulanlar
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border border-slate-800 rounded-2xl transition-all cursor-pointer overflow-hidden ${openFaq === idx ? "bg-slate-800/40 border-blue-500/30 shadow-lg shadow-blue-500/5" : "hover:bg-slate-800/20"}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="p-5 flex items-center justify-between gap-4">
                    <h4 className={`font-bold transition-colors ${openFaq === idx ? "text-blue-400" : "text-white"}`}>{faq.q}</h4>
                    <span className={`text-xl transition-transform duration-300 ${openFaq === idx ? "rotate-45 text-blue-400" : "text-slate-500"}`}>+</span>
                  </div>
                  <div className={`px-5 pb-5 text-slate-400 text-sm leading-relaxed transition-all duration-300 ${openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 space-y-4">
               <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Sosyal Kanallar</h3>
               <div className="flex gap-4">
                 <a href="#" className="w-14 h-14 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center text-2xl hover:bg-[#5865F2] hover:scale-110 transition-all shadow-lg group">
                   <span className="group-hover:drop-shadow-lg transition-all">💬</span>
                 </a>
                 <a href="#" className="w-14 h-14 rounded-2xl bg-[#E1306C]/20 border border-[#E1306C]/30 flex items-center justify-center text-2xl hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-rose-500 hover:to-purple-600 hover:scale-110 transition-all shadow-lg group">
                   <span className="group-hover:drop-shadow-lg transition-all">📸</span>
                 </a>
                 <a href="#" className="w-14 h-14 rounded-2xl bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 flex items-center justify-center text-2xl hover:bg-[#1DA1F2] hover:scale-110 transition-all shadow-lg group">
                   <span className="group-hover:drop-shadow-lg transition-all">🐦</span>
                 </a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-white border-b border-slate-800 pb-4 uppercase tracking-wider flex items-center gap-3">
              <span className="text-blue-500">✉</span> Mesaj Gönder
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <input 
                  required
                  placeholder="İsim"
                  className="bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all text-sm font-bold"
                />
                <input 
                  required
                  type="email"
                  placeholder="E-Posta"
                  className="bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all text-sm font-bold"
                />
              </div>
              <input 
                required
                placeholder="Konu"
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all text-sm font-bold"
              />
              <textarea 
                required
                rows={4}
                placeholder="Mesajınızı buraya yazın..."
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all text-sm font-bold resize-none"
              ></textarea>
              
              <button 
                disabled={formStatus !== "idle"}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl active:scale-95 ${
                  formStatus === "success" 
                    ? "bg-green-600 text-white" 
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20 shadow-lg"
                }`}
              >
                {formStatus === "idle" && "Mesajı Gönder"}
                {formStatus === "loading" && "Gönderiliyor..."}
                {formStatus === "success" && "✓ Mesajınız Alındı"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

