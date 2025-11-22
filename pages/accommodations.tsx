import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Accommodations: React.FC = () => {
  const accommodations = [
    {
      id: 1,
      title: "فندق المنتزه الوطني",
      location: "محافظة بلجرشي",
      category: "فندق فاخر",
      rating: 5,
      description: "تحفة معمارية فاخرة بتصميم خارجي وداخلي دقيق",
      image: "https://pbs.twimg.com/media/EbsaC7AWoAAwvJ4.jpg",
      features: [
        "تصميم معماري فاخر",
        "غرف وممرات مصممة بعناية",
        "حدائق خلابة محيطة",
        "مطعم ومقهى داخلي",
      ],
      amenities: [
        { icon: "wifi", name: "واي فاي مجاني" },
        { icon: "pool", name: "مسبح" },
        { icon: "restaurant", name: "مطعم" },
        { icon: "parking", name: "موقف سيارات" },
        { icon: "spa", name: "سبا ومنتجع صحي" },
        { icon: "gym", name: "صالة رياضية" },
      ],
      priceRange: "مرتفع",
    },
    {
      id: 2,
      title: "فندق المسواري سويتس",
      location: "مدينة الباحة",
      category: "فندق أجنحة",
      rating: 4,
      description: "أجنحة فندقية متنوعة مع خدمات متكاملة",
      image: "https://zen.wego.com/hotelz/s/86298305/879560935.jpeg",
      features: [
        "غرف فندقية متنوعة",
        "خدمات فندقية كاملة",
        "موقع متميز في المدينة",
        "مواقف خاصة للسيارات",
      ],
      amenities: [
        { icon: "wifi", name: "واي فاي مجاني" },
        { icon: "parking", name: "موقف سيارات خاص" },
        { icon: "room-service", name: "خدمة الغرف" },
        { icon: "laundry", name: "خدمة غسيل" },
        { icon: "breakfast", name: "إفطار مجاني" },
        { icon: "ac", name: "تكييف" },
      ],
      priceRange: "متوسط",
    },
    {
      id: 3,
      title: "شاليهات كاردف",
      location: "محافظة الحجرة",
      category: "شاليهات فاخرة",
      rating: 5,
      description: "شاليهات عائلية فاخرة مع مرافق ترفيهية متكاملة",
      image:
        "https://lbcdn.airpaz.com/hotelimages/2951010/shlyh-krdf-2-d33d58dee8765fe686eba4dbfdd172db.jpg",
      features: [
        "مسابح خاصة للكبار والأطفال",
        "جلسات داخلية وخارجية",
        "غرف نوم مع جاكوزي",
        "منطقة شواء مجهزة",
      ],
      amenities: [
        { icon: "pool", name: "مسبح خاص" },
        { icon: "bbq", name: "منطقة شواء" },
        { icon: "jacuzzi", name: "جاكوزي" },
        { icon: "kitchen", name: "مطبخ كامل" },
        { icon: "garden", name: "حديقة خاصة" },
        { icon: "games", name: "ألعاب أطفال" },
      ],
      priceRange: "مرتفع",
      cardiff1: {
        title: "كاردف 1",
        features: [
          "مسبح مع ألعاب مائية للأطفال",
          "جلسة داخلية كبيرة",
          "جلسة خارجية",
          "طاولة طعام في الدور الثاني",
          "غرفة نوم رئيسية مع جاكوزي",
          "غرفة أطفال",
        ],
      },
      cardiff2: {
        title: "كاردف 2",
        features: [
          "مسبح للكبار",
          "مسبح منفصل للأطفال",
          "صالة جلوس مع طاولة طعام",
          "جلسة خارجية مميزة",
          "غرفة نوم رئيسية مع جاكوزي",
          "غرفة أطفال مجهزة",
        ],
      },
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-secondary-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const getAmenityIcon = (type: string) => {
    const icons: { [key: string]: JSX.Element } = {
      wifi: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
      pool: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          />
        </svg>
      ),
      restaurant: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
          />
        </svg>
      ),
      parking: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      spa: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      gym: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      "room-service": (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      laundry: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      breakfast: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      ac: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0V4m0 0l4 4m-4-4l-4 4m-2 8v8m0 0l-4-4m4 4l4-4"
          />
        </svg>
      ),
      bbq: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      ),
      jacuzzi: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4h13M3 8h13M3 12h13M3 16h13M3 20h13"
          />
        </svg>
      ),
      kitchen: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      garden: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      games: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    };
    return icons[type] || icons.wifi;
  };

  return (
    <Layout
      title="أماكن الإقامة - الباحة"
      description="اكتشف أفضل الفنادق والشاليهات في منطقة الباحة"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-b from-primary-700 to-primary-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://destinationksa.com/wp-content/uploads/2025/02/4_28nd.jpg')`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              أماكن الإقامة
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
              فنادق فاخرة وشاليهات عائلية مميزة
            </p>
          </div>
        </div>
      </div>

      {/* Accommodations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {accommodations.map((accommodation) => (
              <div
                key={accommodation.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className="lg:w-2/5">
                    <div
                      className="h-80 lg:h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${accommodation.image}')`,
                      }}
                    >
                      {/* Category Badge */}
                      <div className="p-4">
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-sm font-medium">
                          {accommodation.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {accommodation.title}
                        </h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-gray-600">
                              {accommodation.location}
                            </span>
                          </div>
                          {renderStars(accommodation.rating)}
                        </div>
                      </div>
                      <div className="text-left">
                        <span className="text-sm text-gray-500">السعر</span>
                        <div className="text-lg font-bold text-primary-600">
                          {accommodation.priceRange}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {accommodation.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        المميزات الرئيسية:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {accommodation.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        وسائل الراحة:
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {accommodation.amenities.map((amenity, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center gap-2"
                          >
                            <div className="text-primary-600">
                              {getAmenityIcon(amenity.icon)}
                            </div>
                            <span className="text-sm text-gray-600">
                              {amenity.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Special Cardiff Options */}
                    {accommodation.cardiff1 && accommodation.cardiff2 && (
                      <div className="mb-6 p-4 bg-primary-50 rounded-lg">
                        <h4 className="text-lg font-bold text-primary-800 mb-4">
                          خيارات الشاليهات:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg">
                            <h5 className="font-bold text-gray-800 mb-2">
                              {accommodation.cardiff1.title}
                            </h5>
                            <ul className="space-y-1">
                              {accommodation.cardiff1.features.map(
                                (feature, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-600 flex items-start gap-2"
                                  >
                                    <span className="text-primary-600">•</span>
                                    {feature}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <h5 className="font-bold text-gray-800 mb-2">
                              {accommodation.cardiff2.title}
                            </h5>
                            <ul className="space-y-1">
                              {accommodation.cardiff2.features.map(
                                (feature, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-600 flex items-start gap-2"
                                  >
                                    <span className="text-primary-600">•</span>
                                    {feature}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            نصائح للحجز والإقامة
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                احجز مبكراً
              </h3>
              <p className="text-gray-600">
                احرص على الحجز المبكر خاصة في موسم الذروة والعطلات للحصول على
                أفضل الأسعار والخيارات
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                تأكد من المرافق
              </h3>
              <p className="text-gray-600">
                راجع قائمة المرافق والخدمات المتاحة للتأكد من توافقها مع
                احتياجاتك ومتطلباتك
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                الموقع المناسب
              </h3>
              <p className="text-gray-600">
                اختر مكان الإقامة حسب الأنشطة والأماكن التي تنوي زيارتها لتوفير
                الوقت والجهد
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ابحث عن مكان إقامتك المثالي
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            احجز إقامتك اليوم واستمتع بضيافة أهل الباحة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tourist-farms" className="btn-secondary">
              المزارع السياحية
            </Link>
            <Link
              href="/restaurants"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
            >
              المطاعم والمقاهي
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accommodations;
