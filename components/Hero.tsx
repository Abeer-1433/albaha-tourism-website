import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ videoSrc, imageSrc }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('Hero component mounted with videoSrc:', videoSrc);

    // Force video to play on mount
    if (videoRef.current && videoSrc) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video autoplay started successfully');
          })
          .catch((error) => {
            console.error('Video autoplay failed:', error);
            // Try to play again after user interaction
            document.addEventListener('click', () => {
              if (videoRef.current) {
                videoRef.current.play();
              }
            }, { once: true });
          });
      }
    }
  }, [videoSrc]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fallback background image (always rendered) */}
      {imageSrc && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSrc})`,
            display: videoLoaded && !videoError ? 'none' : 'block'
          }}
        />
      )}

      {/* Video Background */}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            display: videoError ? 'none' : 'block'
          }}
          onCanPlay={() => {
            console.log('Video can play');
            setVideoLoaded(true);
          }}
          onLoadedData={() => {
            console.log('Video loaded successfully');
            setVideoLoaded(true);
          }}
          onError={(e) => {
            console.error('Video loading error:', e);
            setVideoError(true);
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            مرحباً بكم في
            <span className="block text-primary-400 mt-2">منطقة الباحة</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
            استكشف جمال الطبيعة الساحر وعبق التاريخ العريق في قلب المملكة العربية السعودية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-200">
            <Link
              href="#destinations"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              اكتشف الوجهات السياحية
            </Link>
            <Link
              href="#about"
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              تعرف على المنطقة
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-1/2 translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;