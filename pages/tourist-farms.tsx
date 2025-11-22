import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const TouristFarms: React.FC = () => {
  const farms = [
    {
      id: 1,
      title: "مزرعة الزيتونة",
      location: "مدينة الباحة",
      description: "أول مزرعة سياحية معتمدة من وزارة السياحة على مستوى المملكة",
      image:
        "https://bahaadmin.baha.gov.sa/Uploads/Images/fbe39d87-ac9a-43cd-a36d-a7197e7db6d0_%D8%A6%D8%A6.jpg",
      features: [
        "كهف الزيتونة الفريد",
        "وحدات سكنية مجهزة",
        "متاجر المنتجات المحلية",
        "مسجد للصلاة",
      ],
      activities: [
        "ركوب الخيل",
        "الرمي بالسهام",
        "حديقة الطيور",
        "حديقة الفراشات",
        "مزرعة الفراولة",
        "معاصر الزيتون",
      ],
      highlights: "تجربة عائلية متكاملة مع مدرجات زراعية طبيعية",
    },
    {
      id: 2,
      title: "أكواخ بساتين اللوز",
      location: "مدينة الباحة",
      description: "تجربة ريفية أصيلة في قلب الطبيعة",
      image:
        "https://al-hadath.com/storage/post/media/2022/Jun/89ad954a17db4d172545d1b4109018d2.jpg",
      features: [
        "أكواخ خشبية مجهزة",
        "غرفتان في كل كوخ",
        "مقهى بجلسات مميزة",
        "كوخ مخصص للطيور",
      ],
      activities: [
        "التجول بين الأشجار",
        "مشاهدة المنتجات الزراعية",
        "الاستمتاع بالطبيعة الريفية",
        "التصوير الفوتوغرافي",
      ],
      highlights: "إقامة ريفية في أكواخ خشبية وسط بساتين اللوز",
    },
    {
      id: 3,
      title: "مزرعة الجسر",
      location: "قرية القريع - محافظة بلجرشي",
      description: "مزرعة بانورامية مع جسر خشبي معلق بطول 100 متر",
      image: "https://www.al-madina.com/uploads/images/2021/06/02/1897311.jpeg",
      features: [
        "جسر معلق 100 متر",
        "300 شجرة متنوعة",
        "4 قنوات مائية",
        "مشتل نباتات",
      ],
      activities: [
        "المشي على الجسر المعلق",
        "التجول في الممشى",
        "مشاهدة الأزهار والورود",
        "الاستمتاع بالقنوات المائية",
      ],
      highlights: "إطلالة بانورامية من الجسر الخشبي المعلق",
    },
  ];

  return (
    <Layout
      title="المزارع السياحية - الباحة"
      description="اكتشف أجمل المزارع السياحية في منطقة الباحة"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-b from-primary-600 to-primary-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://portalcdn.spa.gov.sa/backend/original/202411/2A7MoM5HoVDtVHjGiC0ihaMeyqxjZMlXlUAb5arh.jpg')`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              المزارع السياحية
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
              تجارب زراعية وريفية أصيلة في أحضان الطبيعة
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              استمتع بتجربة الحياة الريفية
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              تضم منطقة الباحة مجموعة من المزارع السياحية المعتمدة التي تقدم
              تجارب فريدة للزوار، حيث يمكنك الاستمتاع بالأنشطة الزراعية،
              والإقامة في أجواء ريفية أصيلة، والتعرف على المنتجات المحلية في
              بيئة طبيعية خلابة.
            </p>
          </div>
        </div>
      </section>

      {/* Farms Grid */}
      <section className="py-16">
        <div className="container-custom">
          {farms.map((farm, index) => (
            <div
              key={farm.id}
              className={`mb-20 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Farm Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div
                      className="h-80 lg:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${farm.image}')` }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <svg
                        className="w-5 h-5 text-primary-600"
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
                      <span className="text-gray-600">{farm.location}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {farm.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{farm.description}</p>

                    {/* Highlight */}
                    <div className="bg-primary-50 border-r-4 border-primary-500 p-4 mb-6">
                      <p className="text-primary-800 font-medium">
                        {farm.highlights}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        المميزات:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {farm.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        الأنشطة المتاحة:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {farm.activities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                          >
                            {activity}
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
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              نصائح لزيارة المزارع السياحية
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600"
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
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      أفضل الأوقات للزيارة
                    </h3>
                    <p className="text-gray-600">
                      يُنصح بزيارة المزارع في الصباح الباكر أو قبل الغروب
                      للاستمتاع بأجواء لطيفة
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      التصوير الفوتوغرافي
                    </h3>
                    <p className="text-gray-600">
                      احضر كاميرتك لالتقاط صور رائعة للمناظر الطبيعية والأنشطة
                      الزراعية
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600"
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
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      مناسب للعائلات
                    </h3>
                    <p className="text-gray-600">
                      جميع المزارع مجهزة لاستقبال العائلات مع أنشطة مناسبة
                      للأطفال
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      المنتجات المحلية
                    </h3>
                    <p className="text-gray-600">
                      لا تفوت فرصة شراء المنتجات الطازجة والعسل والسمن البلدي
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز لتجربة الحياة الريفية؟
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            احجز زيارتك اليوم واستمتع بتجربة فريدة في أحضان الطبيعة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/accommodations" className="btn-secondary">
              أماكن الإقامة القريبة
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

export default TouristFarms;
