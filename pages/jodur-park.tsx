import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const JodurParkPage: React.FC = () => {
  const features = [
    {
      title: "وادي المياه والسد",
      description: "وادي جميل يحتوي على ممشى مظلل",
      icon: "🚣",
    },
    {
      title: "الشلال",
      description: "جلسات للتنزه مع إطلالات جميلة على الشلال",
      icon: "🏞️",
    },
    {
      title: "مناطق عائلية",
      description: "جلسات عائلية مظللة ومريحة",
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  const activities = [
    "الجسر الزجاجي على الشلال",
    "الشلالات والمياه الجارية",
    "الجلسات العائلية والشبابية",
    "ممارسة الرياضات المختلفة",
    "التنزه في الحدائق المختلقة",
  ];

  return (
    <Layout title="منتزه جدر - وجهة ترفيهية عائلية في منطقة الباحة">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://media.assettype.com/sabq%2F2024-06%2Fa62c51e8-0dfa-4ae5-b0ad-d34e4511fff4%2F9cY6ZFZ75laIozYLck2hfqbRo1qAp54A5V27KXIA.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100)",
          }}
        />
        <div className="hero-overlay"></div>

        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            منتزه جدر
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            وجهة ترفيهية متكاملة للعائلات في أحضان الطبيعة
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">
                نبذة عن منتزه جدر
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                منتزه جدر من أحدث المنتزهات العائلية في منطقة الباحة، يقع في
                موقع استراتيجي قريب من وسط المدينة. يتميز المنتزه بتصميمه العصري
                ومرافقه المتطورة التي تلبي احتياجات جميع أفراد العائلة.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                يضم المنتزه بحيرة صناعية جميلة، وحدائق مزهرة، ومناطق ألعاب
                متنوعة، بالإضافة إلى مسرح مفتوح يستضيف العديد من الفعاليات
                والعروض الترفيهية على مدار العام.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">وسط مدينة الباحة</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">8 ص - 12 م يومياً</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    10 ريال للكبار | 5 ريال للأطفال
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://vid.alarabiya.net/images/2018/02/20/23ecc3bd-1a77-4b7e-80c9-788b52bb7cfe/23ecc3bd-1a77-4b7e-80c9-788b52bb7cfe.jpg?crop=1:1&width=1000)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              مميزات منتزه جدر
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مرافق ترفيهية متنوعة لتجربة عائلية متكاملة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://portalcdn.spa.gov.sa/backend/original/202507/RDJmT1d8KQQHO6wYRaXEIj0cgNtAKITHezeyu12l.jpg)",
                  }}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                الأنشطة الترفيهية
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                يوفر منتزه جدر مجموعة واسعة من الأنشطة الترفيهية المناسبة لجميع
                الأعمار:
              </p>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 text-lg">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">معرض الصور</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              جولة مصورة في أرجاء منتزه جدر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // Add your 6 image links here
              "https://media.assettype.com/sabq%2F2024-06%2F3f66286e-a4f1-40d2-a886-4c7c78625a0e%2FQbakKJRxpuLj0sT2PHFhqEqv9FdAoVxHFGYpvysq.webp?w=640&auto=format%2Ccompress",
              "https://media.assettype.com/sabq%2F2024-06%2Fa62c51e8-0dfa-4ae5-b0ad-d34e4511fff4%2F9cY6ZFZ75laIozYLck2hfqbRo1qAp54A5V27KXIA.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB1xE7BmOeYkWVoP1RIgXlYggFZN2pXesBVTDseFS56RxiMwh3-QM_5jy3YD4Z3J4wWk&usqp=CAU",
              "https://static.srpcdigital.com/styles/1037xauto/public/2025-02/954999.jpeg.webp",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGue4Jmf6rWIYIQbDeaUKYonE087Gy5JGbQ&s",
              "https://media.assettype.com/sabq%2F2024-06%2Faa288f22-36e8-4e98-a23d-a7640a8f616d%2FxVrf4x0mqWsaJoY4GQc6CTMcnCS3qtvJIwsNtVzq.webp?w=1200&auto=format%2Ccompress",
            ].map((imageUrl, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              الموقع على الخريطة
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              موقع منتزه جدر في منطقة الباحة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-900">
                معلومات الموقع
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary-600 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">الموقع</p>
                    <p>10 كم غرب مدينة الباحة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary-600 mt-1"
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
                  <div>
                    <p className="font-bold mb-1">العنوان</p>
                    <p>طريق الملك فهد، الباحة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary-600 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">التصنيف</p>
                    <p>منتزه طبيعي وحديقة عامة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary-600 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">مواقف السيارات</p>
                    <p>مواقف واسعة متوفرة للزوار</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1365.16192737343!2d41.387995082840604!3d20.059849381865206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef49a5d47226d1%3A0xa792f9c62521fc86!2z2K3Yr9mK2YLYqSDYrNmE2Kkg2KzYr9ix!5e1!3m2!1sar!2ssa!4v1763393101658!5m2!1sar!2ssa"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JodurParkPage;
