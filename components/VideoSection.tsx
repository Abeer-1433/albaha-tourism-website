import React, { useState } from "react";
import VideoModal from "./VideoModal";

interface VideoSectionProps {
  videoSrc: string;
  thumbnailSrc?: string;
  title?: string;
  description?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc,
  thumbnailSrc,
  title = "فيديو  بالباحة",
  description = "شاهد جمال منطقة الباحة الساحر من خلال هذا الفيديو التعريفي",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Debug logging
  React.useEffect(() => {
    console.log("VideoSection mounted with:", { videoSrc, title, description });
  }, []);

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white border-t-4 border-b-4 border-primary-500">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-16  text-gradient">
              {title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Video Thumbnail Container */}
          <div className="max-w-5xl mx-auto">
            <div
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Thumbnail Image or Gradient Background */}
              <div className="relative aspect-video">
                {thumbnailSrc ? (
                  <img
                    src={thumbnailSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700">
                    {/* Placeholder pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing ring animation */}
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>

                    {/* Main play button */}
                    <button
                      className="relative w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100 shadow-xl"
                      aria-label="Play video"
                    >
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-primary-600 mr-[-4px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                        {title}
                      </h3>
                      <p className="text-gray-200 text-sm md:text-base">
                        انقر للمشاهدة بملء الشاشة
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm font-medium">HD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        title={title}
      />
    </>
  );
};

export default VideoSection;
