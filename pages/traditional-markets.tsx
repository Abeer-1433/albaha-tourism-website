import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const TraditionalMarkets: React.FC = () => {
  const markets = [
    {
      id: 1,
      title: "سوق السبت",
      location: "محافظة بلجرشي",
      day: "سبت",
      image:
        "https://saudipedia.com/saudipedia/uploads/images/2023/07/15/59101.jpg",
      description: "سوق تاريخي عريق يُعقد منذ أكثر من 400 عام",
      history:
        "يعتبر من أقدم الأسواق الشعبية في المنطقة، حيث يُعقد في نفس المكان والزمان منذ أربعة قرون، مما يجعله شاهداً حياً على التراث والتاريخ القديم للمنطقة.",
      features: [
        "عمر يتجاوز 400 سنة",
        "قسم خاص للنساء",
        "منتجات محلية أصيلة",
        "حرف يدوية تقليدية",
      ],
      products: {
        traditional: [
          "المفروشات التراثية",
          "المصنوعات الجلدية",
          "الأدوات الزراعية",
          "الحرف اليدوية",
        ],
        food: [
          "العسل البلدي",
          "السمن البلدي",
          "الفواكه الموسمية",
          "التوابل المحلية",
        ],
        women: [
          "البخور",
          "الملابس التقليدية",
          "الحلي الشعبية",
          "مستحضرات طبيعية",
        ],
      },
      bestTime: "من الساعة 7 صباحاً حتى 2 ظهراً",
      tips: "يُنصح بالحضور مبكراً للحصول على أفضل المنتجات الطازجة",
    },
    {
      id: 2,
      title: "سوق الثلاثاء",
      location: "محافظة المخواة",
      day: "ثلاثاء",
      image: "https://pbs.twimg.com/media/Gh-nxXbXsAALsgW.jpg",
      description: "أحد أكبر الأسواق الشعبية بطابع تهامي مميز",
      history:
        "يقع شرق مدينة المخواة بالقرب من الطريق الرابط بين المخواة والباحة، ويتميز بطابعه التهامي الفريد حيث أن معظم البائعين من سكان الشريط الساحلي.",
      features: [
        "طابع تهامي فريد",
        "موقع استراتيجي",
        "تنوع كبير في المنتجات",
        "بائعون من تهامة",
      ],
      products: {
        traditional: [
          "المنتجات التهامية",
          "الأقمشة التقليدية",
          "السلال المجدولة",
          "الفخاريات",
        ],
        food: ["الموز التهامي", "المانجو", "البن المحلي", "السمك المجفف"],
        crafts: [
          "المصنوعات الخوصية",
          "الأواني الفخارية",
          "المنسوجات اليدوية",
          "الأدوات التراثية",
        ],
      },
      bestTime: "من الساعة 6 صباحاً حتى 3 عصراً",
      tips: "السوق معروف بمنتجاته التهامية الفريدة التي لا تجدها في أسواق أخرى",
    },
    {
      id: 3,
      title: "سوق الأحد",
      location: "محافظة قلوة",
      day: "أحد",
      image:
        "https://portalcdn.spa.gov.sa/backend/original/202301/lPAb440KWjsTYz5jEaCgOrpJ4amhoANj4xCU32gp.jpg",
      description: "سوق شعبي أصيل يعكس تراث المنطقة",
      history:
        "يُقام كل أحد في مركز الحجرة، ويعتبر ملتقى تجارياً واجتماعياً مهماً لسكان المنطقة والقرى المجاورة.",
      features: [
        "يقع في مركز الحجرة",
        "منتجات زراعية طازجة",
        "حرف يدوية محلية",
        "أجواء تراثية أصيلة",
      ],
      products: {
        traditional: ["المنتجات الزراعية", "الملابس الشعبية", "الحرف اليدوية"],
        food: [
          "الخضروات الطازجة",
          "الفواكه المحلية",
          "منتجات الألبان",
          "اللحوم الطازجة",
        ],
        local: ["العسل", "السمن البلدي", "التمور", "الحبوب والبقوليات"],
      },
      bestTime: "من الساعة 7 صباحاً حتى 2 ظهراً",
      tips: "السوق مشهور بالمنتجات الزراعية الطازجة من المزارع المحلية",
    },
  ];

  const marketDays = [
    { day: "السبت", market: "سوق السبت - بلجرشي", active: true },
    { day: "الأحد", market: "-", active: false },
    { day: "الاثنين", market: "أسواق أخرى", active: false },
    { day: "الثلاثاء", market: "سوق الثلاثاء - المخواة", active: true },
    { day: "الأربعاء", market: "سوق الأربعاء - العقيق", active: true },
    { day: "الخميس", market: "أسواق محلية", active: false },
    { day: "الجمعة", market: "-", active: false },
  ];

  return (
    <Layout
      title="الأسواق الشعبية - الباحة"
      description="اكتشف الأسواق الشعبية التراثية في منطقة الباحة"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-b from-orange-700 to-orange-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://media.assettype.com/ajel%2F2023-01%2Fd3680cc7-6fb6-403e-8122-3001055019e7%2FDST_1842853_3774245_60_7_2023012219421846.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100')`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              الأسواق الشعبية
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
              تراث حي وتجارة أصيلة منذ مئات السنين
            </p>
          </div>
        </div>
      </div>

      {/* Market Calendar */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            جدول الأسواق الأسبوعية
          </h2>
          <div className="grid grid-cols-7 gap-2 max-w-5xl mx-auto">
            {marketDays.map((item) => (
              <div
                key={item.day}
                className={`text-center p-3 rounded-lg ${
                  item.active
                    ? "bg-orange-100 border-2 border-orange-400"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="font-bold text-sm mb-1">{item.day}</div>
                <div
                  className={`text-xs ${
                    item.active ? "text-orange-700" : "text-gray-500"
                  }`}
                >
                  {item.market}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              أسواق تحكي قصة التراث
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              تمثل الأسواق الشعبية في منطقة الباحة نافذة حية على التراث والثقافة
              المحلية، حيث تجتمع فيها الحرف اليدوية التقليدية والمنتجات المحلية
              الأصيلة في أجواء تعكس عراقة المنطقة وأصالة أهلها.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  400+
                </div>
                <div className="text-sm text-gray-600">سنة من التاريخ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  100+
                </div>
                <div className="text-sm text-gray-600">نوع من المنتجات</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  1000+
                </div>
                <div className="text-sm text-gray-600">زائر أسبوعياً</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Detail */}
      <section className="py-16">
        <div className="container-custom">
          {markets.map((market, index) => (
            <div key={market.id} className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div
                  className={`lg:flex ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div
                      className="h-96 lg:h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${market.image}')` }}
                    >
                      <div className="absolute top-4 right-4">
                        <div className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold">
                          كل {market.day}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-10">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {market.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5"
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
                        <span>{market.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{market.description}</p>

                    <div className="bg-orange-50 border-r-4 border-orange-400 p-4 mb-6">
                      <p className="text-gray-700">{market.history}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        مميزات السوق:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {market.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-orange-600 flex-shrink-0"
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

                    {/* Products */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">
                        المنتجات المتوفرة:
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">
                            المنتجات التراثية:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {market.products.traditional.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">
                            المأكولات:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {market.products.food.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                        {market.products.women && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                              قسم النساء:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {market.products.women.map((product, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                                >
                                  {product}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {market.products.crafts && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                              الحرف اليدوية:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {market.products.crafts.map((product, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                                >
                                  {product}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {market.products.local && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">
                              المنتجات المحلية:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {market.products.local.map((product, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                                >
                                  {product}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Visit Info */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <svg
                            className="w-5 h-5"
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
                          <span>{market.bestTime}</span>
                        </div>
                        <p className="text-sm text-gray-500">{market.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Tips */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            نصائح للتسوق في الأسواق الشعبية
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
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
                التوقيت المناسب
              </h3>
              <p className="text-gray-600">
                احرص على الحضور مبكراً للحصول على أفضل المنتجات الطازجة وتجنب
                الازدحام
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">المساومة</h3>
              <p className="text-gray-600">
                المساومة جزء من ثقافة الأسواق الشعبية، لكن كن معتدلاً ومحترماً
                في التفاوض
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                احضر حقيبة
              </h3>
              <p className="text-gray-600">
                أحضر معك حقائب للتسوق حيث أن بعض البائعين قد لا يوفرون أكياساً
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                النقد الكافي
              </h3>
              <p className="text-gray-600">
                معظم البائعين يتعاملون بالنقد فقط، لذا تأكد من إحضار نقود كافية
                معك
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
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
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                جودة المنتجات
              </h3>
              <p className="text-gray-600">
                تأكد من فحص المنتجات جيداً قبل الشراء، خاصة المنتجات الغذائية
                والحرفية
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
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
              <h3 className="text-lg font-bold text-gray-800 mb-2">التصوير</h3>
              <p className="text-gray-600">
                استأذن البائعين قبل التصوير، واحترم خصوصية الناس في السوق
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            عش تجربة التسوق التراثية
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            زر الأسواق الشعبية واكتشف كنوز التراث والمنتجات المحلية الأصيلة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/restaurants" className="btn-secondary">
              المطاعم والمقاهي
            </Link>
            <Link
              href="/accommodations"
              className="btn-primary bg-white text-orange-700 hover:bg-gray-100"
            >
              أماكن الإقامة
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TraditionalMarkets;
