import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    title: "ذي عين",
    description:
      "قرية أثرية تتميز بمبانيها الحجرية القديمة وعين الماء التي تتدفق من الجبل",
    image:
      "https://portalcdn.spa.gov.sa/backend/original/202406/KzWk4yAHAC6Yst9cbhiHfKeHe6K2GCzsz5rQIpem.jpg",
    link: "/thee-ain",
    features: ["قرية تراثية", "عين ماء طبيعية", "مباني حجرية قديمة"],
  },
  {
    id: 2,
    title: "غابة رغدان",
    description:
      "غابة طبيعية خلابة تتميز بأشجارها الكثيفة والمناظر الجبلية الرائعة",
    image:
      "https://www.alriyadh.com/media/article/2021/08/11/img/2285600579.jpg",
    link: "/raghdan-park",
    features: ["غابة طبيعية", "مناظر جبلية", "أماكن للتنزه"],
  },
  {
    id: 3,
    title: "منتزه جدر",
    description:
      "منتزه عائلي مميز يوفر مساحات خضراء واسعة ومرافق ترفيهية متنوعة",
    image:
      "https://portalcdn.spa.gov.sa/backend/original/202406/4i53OXTYnxbzXnhhPxd8OSIcfa8ly9iZ0ihyBHoI.jpg",
    link: "/jodur-park",
    features: ["منتزه عائلي", "مساحات خضراء", "مرافق ترفيهية"],
  },
];

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero
        videoSrc="/videos/video-bg.mp4"
        imageSrc="https://images.unsplash.com/photo-1586040230073-8db81dcdf73d?q=80&w=2070"
      />

      {/* About Section */}
      <section
        id="about"
        className="section-padding bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient">
              نبض الباحة
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              منطقة الباحة جوهرة سياحية في قلب المملكة، تجمع بين جمال الطبيعة
              وعراقة التاريخ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">موقع استراتيجي</h3>
              <p className="text-gray-600 leading-relaxed">
                تقع في الجزء الجنوبي الغربي من المملكة على سلسلة جبال السروات
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">مناخ معتدل</h3>
              <p className="text-gray-600 leading-relaxed">
                تتمتع بمناخ معتدل صيفاً وبارد شتاءً مما يجعلها وجهة سياحية
                مثالية
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">تراث عريق</h3>
              <p className="text-gray-600 leading-relaxed">
                تزخر بالمواقع الأثرية والقرى التراثية التي تحكي تاريخاً عريقاً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection
        videoSrc="/videos/video-bg.mp4"
        title="عن الباحة"
        description="شاهد جمال منطقة الباحة الساحر من خلال هذا الفيديو التعريفي  "
      />

      {/* Destinations Section */}
      <section id="destinations" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              الوجهات السياحية المميزة
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              استكشف أجمل المعالم السياحية في منطقة الباحة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="card group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${destination.image})`,
                      backgroundColor: "#e5e7eb",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {destination.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <svg
                            className="w-5 h-5 text-primary-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={destination.link}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group/link"
                  >
                    <span>اكتشف المزيد</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover/link:-translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                لماذا تزور منطقة الباحة؟
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">تنوع سياحي فريد</h3>
                    <p className="text-gray-600 leading-relaxed">
                      من القرى التراثية إلى المنتزهات الطبيعية والمواقع الأثرية
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">كرم الضيافة</h3>
                    <p className="text-gray-600 leading-relaxed">
                      أهل الباحة معروفون بكرمهم وحسن استقبالهم للزوار
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">طبيعة خلابة</h3>
                    <p className="text-gray-600 leading-relaxed">
                      جبال شاهقة وغابات خضراء ومناظر طبيعية تأسر القلوب
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://vid.alarabiya.net/images/2019/07/06/5013005d-bb6d-4a38-8378-f0ac380e387a/5013005d-bb6d-4a38-8378-f0ac380e387a_16x9_1200x676.jpg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Categories Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              اكتشف المزيد من التجارب
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تجارب متنوعة تناسب جميع الأذواق والاهتمامات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tourist Farms */}
            <Link href="/tourist-farms" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">المزارع السياحية</h3>
                  </div>
                  <p className="text-sm text-gray-200">
                    تجارب زراعية وريفية أصيلة
                  </p>
                </div>
              </div>
            </Link>

            {/* Accommodations */}
            <Link href="/accommodations" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">أماكن الإقامة</h3>
                  </div>
                  <p className="text-sm text-gray-200">فنادق وشاليهات مميزة</p>
                </div>
              </div>
            </Link>

            {/* Restaurants */}
            <Link href="/restaurants" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">المطاعم والمقاهي</h3>
                  </div>
                  <p className="text-sm text-gray-200">
                    أشهى المأكولات المحلية
                  </p>
                </div>
              </div>
            </Link>

            {/* Traditional Markets */}
            <Link href="/traditional-markets" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1578662996442-48f60103fc9e?w=800')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">الأسواق الشعبية</h3>
                  </div>
                  <p className="text-sm text-gray-200">تراث وحرف يدوية أصيلة</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                20+
              </div>
              <p className="text-gray-600">معلم سياحي</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                15+
              </div>
              <p className="text-gray-600">فندق ومنتجع</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                30+
              </div>
              <p className="text-gray-600">مطعم ومقهى</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                400+
              </div>
              <p className="text-gray-600">سنة من التراث</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ابدأ رحلتك في استكشاف منطقة الباحة
          </h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            خطط لزيارتك اليوم واستمتع بتجربة سياحية لا تُنسى
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tourist-farms" className="btn-secondary">
              المزارع السياحية
            </Link>
            <Link
              href="/traditional-markets"
              className="btn-primary bg-primary-800 hover:bg-primary-900"
            >
              الأسواق الشعبية
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
