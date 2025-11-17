import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const RaghdanParkPage: React.FC = () => {
  const features = [
    {
      title: "مساحات خضراء واسعة",
      description: "تمتد على مساحة شاسعة من الأشجار الكثيفة",
      icon: "🌲",
    },
    {
      title: "مسارات للمشي",
      description: "ممرات مخصصة للمشي والركض وسط الطبيعة",
      icon: "🚶",
    },
    {
      title: "مناطق للشواء",
      description: "أماكن مجهزة للشواء والطبخ في الهواء الطلق",
      icon: "🔥",
    },
    {
      title: "ألعاب للأطفال",
      description: "مناطق ألعاب آمنة ومتنوعة للأطفال",
      icon: "🎠",
    },
  ];

  const activities = [
    "التنزه والاستمتاع بالطبيعة",
    "ممارسة رياضة المشي والركض",
    "التخييم في المناطق المخصصة",
    "الشواء والطبخ في الهواء الطلق",
    "التصوير الفوتوغرافي للطبيعة",
    "الاسترخاء والتأمل",
  ];

  const facilities = [
    { title: "دورات مياه", icon: "🚻" },
    { title: "مصليات", icon: "🕌" },
    { title: "مواقف سيارات", icon: "🚗" },
    { title: "مقاهي ومطاعم", icon: "☕" },
    { title: "متاجر صغيرة", icon: "🏪" },
    { title: "خدمات أمنية", icon: "👮" },
  ];

  return (
    <Layout title="غابة رغدان - منتزه طبيعي في منطقة الباحة">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://wakebeconomic.com/wp-content/uploads/2024/07/IMG-20240728-WA0038-scaled.jpg)",
          }}
        />
        <div className="hero-overlay"></div>

        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            غابة رغدان
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            واحة خضراء ومتنفس طبيعي في قلب الباحة
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">
                نبذة عن غابة رغدان
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                غابة رغدان من أجمل المنتزهات الطبيعية في منطقة الباحة، تقع على
                بعد 5 كيلومترات شمال مدينة الباحة. تتميز بكثافة أشجارها وخاصة
                أشجار العرعر والطلح، وتعتبر المتنفس الأول لسكان المنطقة وزوارها.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                توفر الغابة بيئة مثالية للعائلات للاستمتاع بالطبيعة الخلابة
                والهواء النقي، حيث تم تجهيزها بكافة المرافق والخدمات التي تضمن
                تجربة ممتعة ومريحة للزوار.
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
                  <span className="text-gray-700">5 كم شمال الباحة</span>
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
                  <span className="text-gray-700">24 ساعة يومياً</span>
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
                  <span className="text-gray-700">الدخول مجاني</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://static.srpcdigital.com/styles/1037xauto/public/2024-08/750363.jpeg.webp)",
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
              مميزات غابة رغدان
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              استمتع بتجربة فريدة وسط الطبيعة الخلابة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                الأنشطة المتاحة
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                تقدم غابة رغدان مجموعة متنوعة من الأنشطة التي تناسب جميع أفراد
                العائلة:
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

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://sanews.sa/wp-content/uploads/2024/07/8e35ccb1-c390-487d-819c-fd2fe634c137-scaled.jpeg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              المرافق والخدمات
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مرافق متكاملة لضمان راحتكم
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">{facility.icon}</div>
                  <p className="text-gray-700 font-semibold">
                    {facility.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              نصائح للزيارة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-b-4">
              <div>
                <h3 className="text-xl font-bold mb-4">أفضل الأوقات للزيارة</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>الصباح الباكر للاستمتاع بالهواء النقي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>فترة العصر لتجنب حرارة الشمس</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>عطلة نهاية الأسبوع للفعاليات العائلية</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">ما يجب إحضاره</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>أدوات الشواء والطعام</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>بساط للجلوس ومظلات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>ألعاب للأطفال وكرة القدم</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">الموقع على الخريطة</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              موقع غابة رغدان في منطقة الباحة
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
                    <p>4 كم شمال غرب مدينة الباحة</p>
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
                    <p className="font-bold mb-1">المساحة</p>
                    <p>أكثر من 600,000 متر مربع</p>
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
                    <p className="font-bold mb-1">الارتفاع</p>
                    <p>أكثر من 1700 متر فوق مستوى سطح البحر</p>
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
                    <p>مواقف واسعة تتسع لأكثر من 500 سيارة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.4567890123!2d41.46194441500757!3d20.00700008702345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef4cd987654321%3A0xfedcba0987654321!2sRaghadan%20Forest%20Park!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
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

      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">معرض الصور</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مناظر طبيعية خلابة من غابة رغدان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // Add your 6 image links here
              "https://alsyahaalarabia.com/wp-content/uploads/2023/08/F4iGngGXsAAXcnu.jpeg",
              "https://i0.wp.com/waditrip.sa/wp-content/uploads/2018/10/%D8%B3%D9%84%D9%82%D9%8A%D8%A7%D8%A8%D8%AA%D9%84%D9%86%D8%A7.jpg?fit=1024%2C576&quality=89&ssl=1",
              "https://mallsruh.com/blog/wp-content/uploads/2022/09/%D9%85%D9%86%D8%AA%D8%B2%D9%87-%D8%BA%D8%A7%D8%A8%D8%A9-%D8%B1%D8%BA%D8%AF%D8%A7%D9%86-1-1.jpg",
              "https://albiladdaily.com/wp-content/uploads/2021/08/BLD_P04_12082021_ED1-3.jpg",
              "https://www.al-madina.com/uploads/images/2025/08/17/2443705.jpg",
              "https://scth.scene7.com/is/image/scth/zip-line-six:crop-760x570?defaultImage=zip-line-six",
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

      {/* CTA Section */}
    </Layout>
  );
};

export default RaghdanParkPage;
