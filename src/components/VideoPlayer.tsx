import { Video } from "../types";
import { categories, grades } from "../data";

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
}

export default function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const category = categories.find((c) => c.id === video.category);
  const grade = grades.find((g) => g.id === video.grade);

  return (
    <div className="fixed inset-0 bg-navy-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-navy-100">
          <h2 className="text-lg font-bold text-navy-900">{video.title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-navy-50 hover:bg-red-50 hover:text-red-500 text-navy-400 flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Area - YouTube Iframe */}
        <div className="aspect-video bg-black relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1 bg-navy-50 text-navy-600 text-sm font-semibold px-3 py-1.5 rounded-lg">
              {category?.icon} {category?.name}
            </span>
            <span className="inline-flex items-center gap-1 bg-accent-50 text-accent-600 text-sm font-semibold px-3 py-1.5 rounded-lg">
              📋 {grade?.name}
            </span>
            <span className="inline-flex items-center gap-1 bg-navy-50 text-navy-500 text-sm font-semibold px-3 py-1.5 rounded-lg">
              👁️ {video.views.toLocaleString("ar-EG")} مشاهدة
            </span>
            <span className="inline-flex items-center gap-1 bg-navy-50 text-navy-500 text-sm font-semibold px-3 py-1.5 rounded-lg">
              📅 {new Date(video.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>

          <h3 className="text-xl font-bold text-navy-900 mb-3">{video.title}</h3>
          <p className="text-navy-500 leading-relaxed">{video.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              إعجاب
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-navy-50 hover:bg-navy-100 text-navy-700 font-semibold rounded-xl transition-all text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              مشاركة
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-navy-50 hover:bg-navy-100 text-navy-700 font-semibold rounded-xl transition-all text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
