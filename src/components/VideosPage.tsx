import { useState, useMemo } from "react";
import { Video } from "../types";
import { categories, grades } from "../data";
import VideoCard from "./VideoCard";

interface VideosPageProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

export default function VideosPage({ videos, onSelectVideo }: VideosPageProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [sortBy, setSortBy] = useState<"date" | "views">("date");

  const filteredVideos = useMemo(() => {
    let result = [...videos];

    if (search) {
      result = result.filter(
        (v) => v.title.includes(search) || v.description.includes(search)
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((v) => v.category === selectedCategory);
    }

    if (selectedGrade !== "all") {
      result = result.filter((v) => v.grade === selectedGrade);
    }

    if (sortBy === "date") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      result.sort((a, b) => b.views - a.views);
    }

    return result;
  }, [videos, search, selectedCategory, selectedGrade, sortBy]);

  return (
    <div className="min-h-screen bg-[#f7f9fc] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-black text-navy-900 mb-3">
            مكتبة دروس الـ Math
          </h1>
          <p className="text-navy-400 max-w-xl mx-auto">
            تصفح جميع الدروس المتاحة واختر اللي يناسب مرحلتك الدراسية
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-4 md:p-6 mb-8 animate-fade-in">
          <div className="relative mb-4">
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن درس..."
              className="w-full pr-12 pl-4 py-3 bg-navy-50 border border-navy-100 rounded-xl focus:ring-2 focus:ring-navy-300 focus:border-navy-300 outline-none transition-all text-navy-800 placeholder:text-navy-300"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-navy-50 border border-navy-100 rounded-xl text-sm font-semibold text-navy-600 focus:ring-2 focus:ring-navy-300 focus:border-navy-300 outline-none"
            >
              <option value="all">جميع الأقسام</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>

            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-4 py-2 bg-navy-50 border border-navy-100 rounded-xl text-sm font-semibold text-navy-600 focus:ring-2 focus:ring-navy-300 focus:border-navy-300 outline-none"
            >
              <option value="all">جميع المراحل</option>
              {grades.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "date" | "views")}
              className="px-4 py-2 bg-navy-50 border border-navy-100 rounded-xl text-sm font-semibold text-navy-600 focus:ring-2 focus:ring-navy-300 focus:border-navy-300 outline-none"
            >
              <option value="date">الأحدث أولاً</option>
              <option value="views">الأكثر مشاهدة</option>
            </select>

            <div className="flex items-center text-sm text-navy-400 mr-auto">
              {filteredVideos.length} درس
            </div>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-navy-900 text-white shadow-md"
                : "bg-white text-navy-600 border border-navy-200 hover:border-navy-400"
            }`}
          >
            الكل
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-white text-navy-600 border border-navy-200 hover:border-navy-400"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video, idx) => (
              <div key={video.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <VideoCard video={video} onSelect={onSelectVideo} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4 opacity-50">🔍</div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">لا توجد نتائج</h3>
            <p className="text-navy-400">جرب تغيير كلمات البحث أو الفلاتر</p>
          </div>
        )}
      </div>
    </div>
  );
}
