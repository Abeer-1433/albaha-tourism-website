import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="نبض الباحة"
              width={140}
              height={70}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed text-lg">
              اكتشف جمال منطقة الباحة وروعة معالمها السياحية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/thee-ain"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  ذي عين
                </Link>
              </li>
              <li>
                <Link
                  href="/raghdan-park"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  غابة رغدان
                </Link>
              </li>
              <li>
                <Link
                  href="/jodur-park"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  منتزه جدر
                </Link>
              </li>
              <li>
                <Link
                  href="/tourist-farms"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  المزارع السياحية
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodations"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  أماكن الإقامة
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  المطاعم والمقاهي
                </Link>
              </li>
              <li>
                <Link
                  href="/traditional-markets"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  الأسواق الشعبية
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">
          <p className="text-gray-400 text-center text-3xl mr-[45%]">
            جميع الحقوق محفوظة © ٢٠٢٥ نبض الباحة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
