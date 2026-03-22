import { Video } from "../types";
import { categories } from "../data";

interface VideoCardProps {
  video: Video;
  onSelect: (video: Video) => void;
}

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  const category = categories.find((c) => c.id === video.category);

  return (
    <div
      onClick={() => onSelect(video)}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-navy-100 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative h-44 bg-navy-900 flex items-center justify-center overflow-hidden">
        <img 
          src={video.thumbnailUrl || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm shadow-md">
          {video.duration}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
            <svg className="w-5 h-5 text-accent-500 mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Featured Badge */}
        {video.isFeatured && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white shadow-md text-xs font-bold px-2.5 py-1 rounded-md">
            مميز ⭐
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-navy-50 text-navy-600 font-semibold px-2 py-1 rounded-md">
            {category?.icon} {category?.name}
          </span>
        </div>
        <h3 className="font-bold text-navy-800 mb-2 line-clamp-2 group-hover:text-accent-500 transition-colors leading-relaxed text-sm">
          {video.title}
        </h3>
        <p className="text-xs text-navy-400 line-clamp-2 mb-3 leading-relaxed">
          {video.description}
        </p>
        <div className="flex items-center justify-between text-xs text-navy-300">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{video.views.toLocaleString("ar-EG")} مشاهدة</span>
          </div>
          <span>{new Date(video.date).toLocaleDateString("ar-EG")}</span>
        </div>
      </div>
    </div>
  );
}
