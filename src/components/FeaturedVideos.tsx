import { Video } from "../types";
import VideoCard from "./VideoCard";

interface FeaturedVideosProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
  onNavigate: (page: string) => void;
}

export default function FeaturedVideos({ videos, onSelectVideo, onNavigate }: FeaturedVideosProps) {
  const featured = videos.filter((v) => v.isFeatured).slice(0, 3);
  const latest = videos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-navy-900 mb-1">
                الدروس المميزة
              </h2>
              <p className="text-navy-400 text-sm">أفضل الدروس المختارة لك</p>
            </div>
            <button
              onClick={() => onNavigate("videos")}
              className="hidden sm:flex items-center gap-2 text-accent-500 hover:text-accent-600 font-semibold text-sm transition-colors"
            >
              عرض الكل
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((video, idx) => (
              <div key={video.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <VideoCard video={video} onSelect={onSelectVideo} />
              </div>
            ))}
          </div>
        </div>

        {/* Latest Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-navy-900 mb-1">
                أحدث الدروس
              </h2>
              <p className="text-navy-400 text-sm">آخر الدروس المضافة</p>
            </div>
            <button
              onClick={() => onNavigate("videos")}
              className="hidden sm:flex items-center gap-2 text-accent-500 hover:text-accent-600 font-semibold text-sm transition-colors"
            >
              عرض الكل
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latest.map((video, idx) => (
              <div key={video.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <VideoCard video={video} onSelect={onSelectVideo} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate("videos")}
            className="px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            تصفح جميع الدروس
          </button>
        </div>
      </div>
    </section>
  );
}
