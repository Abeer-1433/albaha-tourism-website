import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Restaurants: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      title: "مطعم وكافيه سول",
      location: "مدينة الباحة",
      category: "مطعم ومقهى",
      priceRange: "$$",
      cuisine: "متنوع",
      image:
        "https://scth.scene7.com/is/image/scth/soul:crop-760x570?defaultImage=soul",
      description: "تصميم معماري مستوحى من التراث الأندلسي المميز",
      features: [
        "طابقين بتصميم أندلسي",
        "جلسات داخلية وخارجية",
        "قائمة حلويات متنوعة",
        "مواقف سيارات متوفرة",
      ],
      menu: {
        specialties: [
          "الحلويات الشرقية",
          "القهوة المختصة",
          "المشروبات الباردة",
          "الوجبات الخفيفة",
        ],
        popular: [
          "كنافة بالقشطة",
          "تشيز كيك بالتوت",
          "قهوة تركية",
          "موكا بارد",
        ],
      },
      hours: "8:00 ص - 12:00 م",
      rating: 4.5,
      ambiance: ["عائلي", "هادئ", "رومانسي"],
    },
    {
      id: 2,
      title: "مطعم فيفث سيزون",
      location: "مدينة الباحة",
      category: "مطعم",
      priceRange: "$$$",
      cuisine: "عربي أصيل",
      image:
        "https://static.wixstatic.com/media/479f4f_55f3744941b148fa8e37bf078957f6df~mv2.jpeg/v1/fill/w_852,h_1280,al_c/479f4f_55f3744941b148fa8e37bf078957f6df~mv2.jpeg",
      description: "وجهة مثالية للباحثين عن المأكولات العربية الأصيلة",
      features: [
        "مأكولات عربية تقليدية",
        "أجواء راقية ومريحة",
        "خدمة ممتازة",
        "صالات خاصة للعائلات",
      ],
      menu: {
        specialties: ["الكبسة", "المندي", "المظبي", "الحنيذ"],
        popular: ["كبسة لحم", "دجاج مندي", "سمك مشوي", "مقبلات متنوعة"],
      },
      hours: "12:00 م - 11:30 م",
      rating: 4.7,
      ambiance: ["عائلي", "تقليدي", "فاخر"],
    },
    {
      id: 3,
      title: "كافيه بوكا دي",
      location: "مدينة الباحة",
      category: "كافيه",
      priceRange: "$$",
      cuisine: "مقهى",
      image:
        "https://bahaadmin.baha.gov.sa/Uploads/Images/a52345ed-bbf7-45c4-bd3c-be10fe916f4a_2.jpg",
      description: "مقهى عصري بتصميم حديث ومريح",
      features: [
        "دورين مع جلسات متنوعة",
        "صالات داخلية مكيفة",
        "جلسات خارجية مميزة",
        "تشكيلة واسعة من القهوة",
      ],
      menu: {
        specialties: [
          "القهوة المختصة",
          "الحلويات الغربية",
          "العصائر الطازجة",
          "السندويشات",
        ],
        popular: ["لاتيه", "كابوتشينو", "كروسان", "وافل بالفواكه"],
      },
      hours: "7:00 ص - 1:00 ص",
      rating: 4.3,
      ambiance: ["عصري", "اجتماعي", "مريح"],
    },
  ];

  const renderPriceRange = (price: string) => {
    const levels = price.length;
    return (
      <div className="flex">
        {[1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className={`text-lg ${
              level <= levels ? "text-primary-600" : "text-gray-300"
            }`}
          >
            ر.س
          </span>
        ))}
      </div>
    );
  };

  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <svg
                key={i}
                className="w-5 h-5 text-secondary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          } else if (i === fullStars && hasHalfStar) {
            return (
              <svg
                key={i}
                className="w-5 h-5 text-secondary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half)"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            );
          } else {
            return (
              <svg
                key={i}
                className="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          }
        })}
        <span className="text-gray-600 mr-2">{rating}</span>
      </div>
    );
  };

  return (
    <Layout
      title="المطاعم والمقاهي - الباحة"
      description="اكتشف أفضل المطاعم والمقاهي في منطقة الباحة"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-b from-amber-700 to-amber-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://destinationksa.com/wp-content/uploads/content/%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D9%88%D9%83%D8%A7%D9%81%D9%8A%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9-2-1.jpg')`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              المطاعم والمقاهي
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
              تذوق أشهى المأكولات واستمتع بأفضل المشروبات
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              تجارب طعام لا تُنسى
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              تتميز منطقة الباحة بتنوع خياراتها من المطاعم والمقاهي التي تقدم
              أشهى الأطباق العربية التقليدية والعالمية، في أجواء تجمع بين
              الأصالة والحداثة، مع إطلالات خلابة على جبال السروات.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-12">
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div
                  className={`lg:flex ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="lg:w-2/5">
                    <div
                      className="h-80 lg:h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${restaurant.image}')` }}
                    >
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium shadow-lg">
                          {restaurant.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-3xl font-bold text-gray-800">
                          {restaurant.title}
                        </h3>
                        {renderPriceRange(restaurant.priceRange)}
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4 text-gray-500"
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
                            {restaurant.location}
                          </span>
                        </div>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">
                          {restaurant.cuisine}
                        </span>
                        <span className="text-gray-400">|</span>
                        {renderRating(restaurant.rating)}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {restaurant.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        المميزات:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {restaurant.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-amber-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Menu Highlights */}
                    <div className="mb-6 bg-amber-50 rounded-lg p-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        من القائمة:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">
                            التخصصات:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.menu.specialties.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">
                            الأكثر طلباً:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.menu.popular.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
                      <div className="flex items-center gap-6">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-600">
                            {restaurant.hours}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {restaurant.ambiance.map((amb, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              {amb}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Tips */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            نصائح لتجربة طعام مميزة
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                أوقات الذروة
              </h3>
              <p className="text-sm text-gray-600">
                تجنب أوقات الذروة (1-3 ظهراً و 8-10 مساءً) للحصول على خدمة أفضل
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                الحجز المسبق
              </h3>
              <p className="text-sm text-gray-600">
                يُنصح بالحجز المسبق خاصة في عطلة نهاية الأسبوع والمناسبات
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
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
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                قسم العائلات
              </h3>
              <p className="text-sm text-gray-600">
                جميع المطاعم توفر أقساماً خاصة للعائلات مع خصوصية كاملة
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                التخصصات المحلية
              </h3>
              <p className="text-sm text-gray-600">
                لا تفوت تجربة الأطباق المحلية الشهيرة مثل الكبسة والحنيذ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            استكشف المزيد من التجارب
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            اكتشف المزيد من الأماكن الرائعة في منطقة الباحة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/traditional-markets" className="btn-secondary">
              الأسواق الشعبية
            </Link>
            <Link
              href="/tourist-farms"
              className="btn-primary bg-white text-amber-700 hover:bg-gray-100"
            >
              المزارع السياحية
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurants;
