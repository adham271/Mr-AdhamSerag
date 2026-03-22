interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-12 right-12 text-8xl font-bold">∑</div>
        <div className="absolute top-40 left-24 text-6xl font-bold">∫</div>
        <div className="absolute bottom-24 right-1/3 text-7xl font-bold">π</div>
        <div className="absolute top-24 left-1/2 text-5xl font-bold">√</div>
        <div className="absolute bottom-12 left-12 text-8xl font-bold">∞</div>
        <div className="absolute top-1/2 right-24 text-6xl font-bold">Δ</div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-navy-800/50 via-transparent to-navy-900/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6 border border-white/10">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <span className="text-navy-200">دروس جديدة كل أسبوع</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black leading-tight mb-6">
              تعلّم الـ Math
              <br />
              <span className="text-accent-400">بأسلوب منظّم</span>
              <br />
              يريّح بالك
            </h1>
            <p className="text-lg text-navy-200 mb-8 max-w-lg leading-relaxed">
              هنا نبسّط المنهج ونرتّب الأفكار خطوة بخطوة، عشان الطالب يفهم صح
              وولي الأمر يطمئن إن ابنه في أيد أمينة.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("videos")}
                className="px-8 py-3.5 bg-accent-400 hover:bg-accent-500 text-navy-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                تصفح الدروس
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/15 transition-all duration-200"
              >
                تعرف على Mr.Adham
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <StatCard number="+50" label="درس مسجّل" icon="📘" />
            <StatCard number="+2000" label="طالب مستفيد" icon="🎓" />
            <StatCard number="6" label="مراحل دراسية" icon="📋" />
            <StatCard number="+100" label="ساعة شرح" icon="⏱️" />
          </div>
        </div>
      </div>

      {/* Clean bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40L60 37C120 34 240 28 360 30C480 32 600 42 720 47C840 52 960 52 1080 47C1200 42 1320 32 1380 27L1440 22V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z" fill="#f7f9fc"/>
        </svg>
      </div>
    </section>
  );
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: string }) {
  return (
    <div className="bg-white/[0.06] backdrop-blur-md rounded-2xl p-6 border border-white/[0.08] hover:bg-white/[0.10] transition-all duration-300 hover:-translate-y-1">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-3xl font-black text-accent-400">{number}</div>
      <div className="text-sm text-navy-300 mt-1">{label}</div>
    </div>
  );
}
