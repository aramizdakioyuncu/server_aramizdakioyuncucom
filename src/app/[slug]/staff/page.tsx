export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'minecraft' },
    { slug: 'fivem' },
    { slug: 'assettocorsa' },
  ];
}

export default async function StaffPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const gameSlug = resolvedParams.slug;
  const staff = [
    { name: "Berkay", role: "Kurucu", avatar: "https://i.pravatar.cc/150?u=berkay", color: "text-red-500" },
    { name: "Ahmet", role: "Yönetici", avatar: "https://i.pravatar.cc/150?u=ahmet", color: "text-rose-400" },
    { name: "Mehmet", role: "Admin", avatar: "https://i.pravatar.cc/150?u=mehmet", color: "text-blue-500" },
    { name: "Ayşe", role: "Moderatör", avatar: "https://i.pravatar.cc/150?u=ayse", color: "text-green-500" },
    { name: "Ali", role: "Rehber", avatar: "https://i.pravatar.cc/150?u=ali", color: "text-yellow-500" },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white">
          Yetkili <span className="text-blue-500">Kadro</span>
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Sunucumuzun düzenini ve güvenliğini sağlayan profesyonel yönetim ekibimiz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {staff.map((member, idx) => (
          <div key={idx} className="glass rounded-2xl overflow-hidden group">
            <div className="relative h-32 bg-slate-800">
              {/* Banner image or exact pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
              
              {/* Avatar positioned halfway */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-[var(--background)] bg-slate-700 overflow-hidden shadow-xl z-10 transition-transform group-hover:scale-110">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="pt-16 pb-8 px-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className={`text-sm font-bold uppercase tracking-wider ${member.color}`}>
                {member.role}
              </p>
              
              <div className="mt-6 flex justify-center gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                  D
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                  S
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                  E
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
