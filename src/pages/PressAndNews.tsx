import { useState, useRef, useEffect } from "react";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { X, ImageIcon, Volume2, VolumeX, Pause, Play, Maximize, Minimize } from "lucide-react";
import pressNews1 from "@/assets/press and news/WhatsApp-Image-2025-09-23-at-6.01.32-PM.jpeg";
import pressNews2 from "@/assets/press and news/WhatsApp-Image-2025-09-23-at-6.01.33-PM-1.jpeg";
import pressNews3 from "@/assets/press and news/WhatsApp-Image-2025-09-23-at-6.01.33-PM-2.jpeg";
import pressNews4 from "@/assets/press and news/WhatsApp-Image-2025-09-23-at-6.01.33-PM.jpeg";
import pressNewsVideo from "@/assets/press and news/free-medicial-camp.mp4";

const PressAndNews = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const wasFullscreen = isFullscreen;
      const nowFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      
      setIsFullscreen(nowFullscreen);
      
      // If exiting fullscreen, automatically mute the video
      if (wasFullscreen && !nowFullscreen && videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, [isFullscreen]);

  const pressImages = [
    pressNews1,
    pressNews2,
    pressNews3,
    pressNews4,
  ];

  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Press & News
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Latest Coverage and Media Highlights
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl"></div>
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden group border-4 border-primary/30 shadow-2xl">
                  <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"></div>
                  <video
                    ref={videoRef}
                    src={pressNewsVideo}
                    loop
                    muted={isMuted}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                    onTimeUpdate={() => {
                      if (videoRef.current) {
                        setCurrentTime(videoRef.current.currentTime);
                      }
                    }}
                    onLoadedMetadata={() => {
                      if (videoRef.current) {
                        setDuration(videoRef.current.duration);
                      }
                    }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onVolumeChange={() => {
                      if (videoRef.current) {
                        setIsMuted(videoRef.current.muted);
                      }
                    }}
                  />
                  
                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 z-20 rounded-b-xl">
                    {/* Progress Bar */}
                    <div className="mb-2">
                      <div 
                        className="h-1 bg-white/30 rounded-full cursor-pointer"
                        onClick={(e) => {
                          if (videoRef.current && duration) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (e.clientX - rect.left) / rect.width;
                            videoRef.current.currentTime = percent * duration;
                          }
                        }}
                      >
                        <div 
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (videoRef.current) {
                              if (isPlaying) {
                                videoRef.current.pause();
                              } else {
                                videoRef.current.play();
                              }
                              setIsPlaying(!isPlaying);
                            }
                          }}
                          className="bg-black/60 hover:bg-black/80 rounded-full p-1.5 transition-all backdrop-blur-sm"
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4 text-white" />
                          ) : (
                            <Play className="h-4 w-4 text-white" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            if (videoRef.current) {
                              videoRef.current.muted = !isMuted;
                              setIsMuted(!isMuted);
                            }
                          }}
                          className="bg-black/60 hover:bg-black/80 rounded-full p-1.5 transition-all backdrop-blur-sm"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <VolumeX className="h-4 w-4 text-white" />
                          ) : (
                            <Volume2 className="h-4 w-4 text-white" />
                          )}
                        </button>
                        <span className="text-xs text-white/90">
                          {Math.floor(currentTime / 60)}:{(Math.floor(currentTime % 60)).toString().padStart(2, '0')} / {Math.floor(duration / 60)}:{(Math.floor(duration % 60)).toString().padStart(2, '0')}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          if (videoRef.current) {
                            if (!isFullscreen) {
                              if (videoRef.current.requestFullscreen) {
                                videoRef.current.requestFullscreen();
                              } else if (videoRef.current.webkitRequestFullscreen) {
                                videoRef.current.webkitRequestFullscreen();
                              } else if (videoRef.current.mozRequestFullScreen) {
                                videoRef.current.mozRequestFullScreen();
                              } else if (videoRef.current.msRequestFullscreen) {
                                videoRef.current.msRequestFullscreen();
                              }
                            } else {
                              if (document.exitFullscreen) {
                                document.exitFullscreen();
                              } else if (document.webkitExitFullscreen) {
                                document.webkitExitFullscreen();
                              } else if (document.mozCancelFullScreen) {
                                document.mozCancelFullScreen();
                              } else if (document.msExitFullscreen) {
                                document.msExitFullscreen();
                              }
                            }
                          }
                        }}
                        className="bg-black/60 hover:bg-black/80 rounded-full p-1.5 transition-all backdrop-blur-sm"
                        aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                      >
                        {isFullscreen ? (
                          <Minimize className="h-4 w-4 text-white" />
                        ) : (
                          <Maximize className="h-4 w-4 text-white" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg pointer-events-none"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg pointer-events-none"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg pointer-events-none"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pressImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-square bg-muted rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                    <img
                      src={image}
                      alt={`Press & News ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-primary/90 rounded-full p-2">
                          <ImageIcon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
              <img
                src={selectedImage}
                alt="Press & News"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PressAndNews;

