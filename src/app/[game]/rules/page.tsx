export default async function RulesPage({
  params,
}: {
  params: Promise<{ game: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.game;

  const rules = [
    { title: "Saygı ve Nezaket", content: "Tüm oyuncular birbirine saygılı olmalıdır. Küfür, hakaret ve toksik davranışlar yasaktır." },
    { title: "Hile Kullanımı", content: "3. parti yazılımlar, hileler ve oyun dosyalarını değiştirmek kesinlikle yasaktır. Tespiti halinde kalıcı ban atılır." },
    { title: "Reklam ve Spam", content: "Chat üzerinden başka sunucuların reklamını yapmak, flood atmak veya spam yapmak susturulma sebebidir." },
    { title: "Bug Kullanımı", content: "Oyundaki açıkları (bug) kullanıp haksız kazanç sağlamak yasaktır. Bulan kişilerin yetkililere bildirmesi zorunludur." },
    { title: "Hesap Sorumluluğu", content: "Her oyuncu kendi hesabının güvenliğinden sorumludur. Çalınan hesapların mağduriyeti yönetimi bağlamaz." },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center md:text-left mb-8">
        <h2 className="text-3xl font-extrabold text-white">
          <span className="text-blue-500 uppercase">{gameSlug}</span> Kuralları
        </h2>
        <p className="text-slate-400 mt-2">
          Sunucumuzda huzurlu bir oyun ortamı için aşağıdaki kuralları okumanız ve uymanız zorunludur.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {rules.map((rule, idx) => (
          <div key={idx} className="glass rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-xl shrink-0">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
              <p className="text-slate-300 leading-relaxed">{rule.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
