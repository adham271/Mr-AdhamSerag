import { useState, useEffect } from "react";
import { Video } from "./types";
import { mockVideos } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedVideos from "./components/FeaturedVideos";
import VideosPage from "./components/VideosPage";
import UploadForm from "./components/UploadForm";
import AboutPage from "./components/AboutPage";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpload = (video: Video) => {
    setVideos((prev) => [video, ...prev]);
  };

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === "home" && (
        <>
          <Hero onNavigate={handleNavigate} />
          <CategoriesSection onNavigate={handleNavigate} />
          <FeaturedVideos
            videos={videos}
            onSelectVideo={handleSelectVideo}
            onNavigate={handleNavigate}
          />
        </>
      )}

      {currentPage === "videos" && (
        <VideosPage videos={videos} onSelectVideo={handleSelectVideo} />
      )}

      {currentPage === "upload" && <UploadForm onUpload={handleUpload} />}

      {currentPage === "about" && <AboutPage />}

      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}

      <Footer />
    </div>
  );
}
