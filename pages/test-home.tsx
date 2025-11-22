import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";

export default function TestHome() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "مرحباً بك في عالم الرسوم المتحركة المذهلة";
  const heroRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Scroll handler for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Head>
        <title>صفحة اختبار - رسوم متحركة مذهلة</title>
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(2deg); }
            66% { transform: translateY(10px) rotate(-2deg); }
          }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
            50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8), 0 0 60px rgba(99, 102, 241, 0.4); }
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes morph {
            0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          }

          @keyframes slide-in-left {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes bounce-in {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes rotate-3d {
            0% { transform: rotate3d(0, 1, 0, 0deg); }
            100% { transform: rotate3d(0, 1, 0, 360deg); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .animate-gradient {
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradient-shift 15s ease infinite;
          }

          .animate-morph {
            animation: morph 8s ease-in-out infinite;
          }

          .scroll-animate {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .scroll-animate.animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          .text-glow {
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
          }

          .card-3d {
            transform-style: preserve-3d;
            transition: transform 0.6s;
          }

          .card-3d:hover {
            transform: rotateY(180deg);
          }

          .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
          }

          .card-back {
            transform: rotateY(180deg);
          }

          .parallax-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            will-change: transform;
          }

          .typewriter::after {
            content: '|';
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          .loading-bar {
            background: linear-gradient(90deg, #f59e0b, #ef4444, #8b5cf6, #3b82f6);
            background-size: 200% 100%;
            animation: gradient-shift 2s ease infinite;
          }
        `}</style>
      </Head>

      {/* Animated Background */}
      <div
        className="parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Loading Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="loading-bar h-full transition-all duration-500"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>

      {/* Hero Section with Typing Animation */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center px-4">
          {/* Animated Morphing Shape */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 opacity-50 animate-morph blur-xl"
            style={{
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            }}
          />

          {/* Typing Text Animation */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 typewriter">
            {typedText}
          </h1>

          {/* Glowing Subtitle */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 text-glow animate-pulse">
            اكتشف قوة الحركة والتصميم المبتكر
          </p>

          {/* Animated Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold transform transition-all duration-300 hover:scale-110 hover:rotate-3 animate-pulse-glow">
              ابدأ الرحلة
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:bg-white hover:text-purple-600">
              اكتشف المزيد
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* 3D Cards Section */}
      <section className="py-20 relative">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-white scroll-animate">
            بطاقات ثلاثية الأبعاد تفاعلية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((card) => (
              <div key={card} className="scroll-animate" style={{ animationDelay: `${card * 0.2}s` }}>
                <div className="card-3d relative h-80 cursor-pointer">
                  {/* Front Face */}
                  <div className="card-face rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">✨</div>
                      <h3 className="text-2xl font-bold mb-2">بطاقة {card}</h3>
                      <p>اضغط للكشف عن السحر</p>
                    </div>
                  </div>
                  {/* Back Face */}
                  <div className="card-face card-back rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🎨</div>
                      <h3 className="text-2xl font-bold mb-2">مفاجأة!</h3>
                      <p>محتوى مذهل في الخلف</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Features Grid */}
      <section className="py-20 relative">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-white scroll-animate">
            مميزات متحركة رائعة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚀", title: "سرعة فائقة", delay: "0s" },
              { icon: "💎", title: "تصميم أنيق", delay: "0.1s" },
              { icon: "🎯", title: "دقة عالية", delay: "0.2s" },
              { icon: "⚡", title: "أداء مذهل", delay: "0.3s" },
            ].map((feature, index) => (
              <div
                key={index}
                className="scroll-animate"
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:rotate-3">
                  <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: feature.delay }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Animation Section */}
      <section className="relative h-96 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white text-glow animate-pulse">
            موجات من الإبداع
          </h2>
        </div>
      </section>

      {/* Interactive Hover Grid */}
      <section className="py-20 animate-gradient">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-white scroll-animate">
            شبكة تفاعلية مذهلة
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="scroll-animate group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-40 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl transform transition-transform duration-500 group-hover:scale-150 group-hover:rotate-180">
                      {["🌟", "💫", "✨", "🌈", "🎨", "🚀", "💎", "⚡"][i]}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      عنصر {i + 1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section className="py-20 bg-black/20 backdrop-blur-lg">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "مشروع مكتمل" },
              { number: "500+", label: "عميل سعيد" },
              { number: "50+", label: "جائزة عالمية" },
              { number: "24/7", label: "دعم متواصل" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center scroll-animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl font-bold text-white mb-2 animate-pulse text-glow">
                  {stat.number}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Complex Animation */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient opacity-80" />
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 scroll-animate text-glow">
              هل أعجبتك الرسوم المتحركة؟
            </h2>
            <p className="text-2xl text-white/90 mb-12 scroll-animate">
              هذه مجرد البداية لما يمكننا تحقيقه معًا
            </p>
            <button className="px-12 py-6 bg-white text-purple-600 rounded-full text-xl font-bold transform transition-all duration-500 hover:scale-110 animate-bounce hover:animate-none animate-pulse-glow">
              لنبدأ مشروعك المذهل
            </button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button
        className={`fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-180 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Layout>
  );
}