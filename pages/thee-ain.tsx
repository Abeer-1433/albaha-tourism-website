import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const TheeAinPage: React.FC = () => {
  const features = [
    {
      title: "العمارة التراثية",
      description: "مباني حجرية قديمة يعود تاريخها لأكثر من 400 عام",
      icon: "🏛️",
    },
    {
      title: "عين الماء",
      description: "عين طبيعية تتدفق من الجبل طوال العام",
      icon: "💧",
    },
    {
      title: "الموقع الجبلي",
      description: "تقع على سفح جبل أبيض في وادي راش",
      icon: "⛰️",
    },
    {
      title: "المدرجات الزراعية",
      description: "مدرجات زراعية قديمة لزراعة الموز والليمون",
      icon: "🌱",
    },
  ];

  const activities = [
    "جولات سياحية مع مرشدين محليين",
    "التصوير الفوتوغرافي للمباني التراثية",
    "زيارة المتحف المحلي",
    "التسوق من المنتجات التراثية",
    "تذوق المأكولات الشعبية",
    "حضور الفعاليات التراثية",
  ];

  return (
    <Layout title="ذي عين - قرية تراثية في منطقة الباحة">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202401%2FeB8FEGqHlOZgTtnuaihGfCmH99wVxdUapVwGjxMG.jpg&w=3840&q=75)",
          }}
        />
        <div className="hero-overlay"></div>

        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            قرية ذي عين التراثية
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            من أجمل القرى التراثية في المملكة
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">
                نبذة عن ذي عين
              </h2>
              <p className="text-2xl text-gray-600 mb-4 leading-relaxed">
                قرية ذي عين التراثية من أهم المواقع الأثرية في منطقة الباحة، تقع
                على بعد 24 كيلومتراً من مدينة الباحة. تتميز القرية بمبانيها
                الحجرية المتراصة التي شُيدت بطريقة هندسية فريدة على سفح جبلي.
              </p>
              <p className="text-2xl text-gray-600 mb-6 leading-relaxed">
                يعود تاريخ القرية إلى أكثر من 400 عام، وقد كانت محطة مهمة
                للقوافل التجارية القديمة. سُميت بذي عين نسبة إلى عين الماء التي
                تنبع من الجبال المحيطة وتروي بساتين القرية.
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
                  <span className="text-gray-700">24 كم من الباحة</span>
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
                  <span className="text-gray-700">يومياً 8 ص - 6 م</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202406%2FKzWk4yAHAC6Yst9cbhiHfKeHe6K2GCzsz5rQIpem.jpg&w=3840&q=75)",
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
              مميزات قرية ذي عين
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              اكتشف ما يجعل هذه القرية التراثية وجهة سياحية فريدة
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
            <div className="order-2 lg:order-1">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://www.alyaum.com/uploads/images/2022/12/25/1676877.jpg)",
                  }}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                الأنشطة السياحية
              </h2>
              <p className="text-2xl text-gray-600 mb-6 leading-relaxed">
                استمتع بمجموعة متنوعة من الأنشطة والتجارب الفريدة في قرية ذي
                عين:
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
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              لقطات من جمال قرية ذي عين التراثية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // Add your 6 image links here
              "https://www.aleqt.com/sites/default/files/rbitem/2021/07/29/1718726-2136169655.jpg",
              "https://media.assettype.com/sabq%2F2024-06%2F02c26eab-5b1c-4f96-b0dc-6e2f1328f67e%2F157226.jpeg?w=480&auto=format%2Ccompress&fit=max",
              "https://alsyahaalarabia.com/wp-content/uploads/2023/09/thee-ain-heritage-village-albaha_crop-1160x650-1.webp",
              "https://alraynews.net/wp-content/uploads/7f4f787a-e34a-4d7f-bbef-e3a594ef4542.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VfTVDM75e9_v5t50yKhdK0uKb6fmXxI65TNwlOpXOMD_dShKUewedUoXKOIgMZUnzVk&usqp=CAU",
              "https://destinationksa.com/wp-content/uploads/content/fd3ede11427ab2a9918538da4a9586fbcdcf708f-130721093206.jpg",
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

      {/* Visit Info Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              معلومات الزيارة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
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
                <h3 className="text-2xl font-bold mb-2">أوقات الزيارة</h3>
                <p className="text-gray-600 text-2xl">
                  يومياً من 10:00 صباحاً حتى 6:00 مساءً
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">رسوم الدخول</h3>
                <p className="text-gray-600 text-2xl">مجاناً</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">للتواصل</h3>
                <p className="text-gray-600 text-2xl">8001189999</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/" className="btn-primary text-lg px-8 py-4">
                العودة للصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TheeAinPage;
