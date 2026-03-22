import { categories } from "../data";

interface CategoriesSectionProps {
  onNavigate: (page: string) => void;
}

const categoryStyles = [
  { bg: "bg-navy-900", hover: "hover:bg-navy-800" },
  { bg: "bg-navy-800", hover: "hover:bg-navy-700" },
  { bg: "bg-navy-700", hover: "hover:bg-navy-600" },
  { bg: "bg-navy-800", hover: "hover:bg-navy-700" },
  { bg: "bg-navy-900", hover: "hover:bg-navy-800" },
  { bg: "bg-navy-700", hover: "hover:bg-navy-600" },
];

export default function CategoriesSection({ onNavigate }: CategoriesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-navy-900 mb-2">
            أقسام الدروس
          </h2>
          <p className="text-navy-400">اختر القسم اللي يناسبك وابدأ تعلّم</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => onNavigate("videos")}
              className="group animate-fade-in"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className={`${categoryStyles[idx].bg} ${categoryStyles[idx].hover} rounded-2xl p-6 text-center text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}>
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-sm mb-1">{cat.name}</h3>
                <p className="text-xs text-white/60">{cat.count} درس</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
