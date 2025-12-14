'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const brands = [
  { name: 'Caterpillar', key: 'caterpillar', initial: 'C', color: 'bg-yellow-500' },
  { name: 'Deere', key: 'deere', initial: 'D', color: 'bg-green-600' },
  { name: 'Genie', key: 'genie', initial: 'G', color: 'bg-blue-500' },
  { name: 'JLG', key: 'jlg', initial: 'J', color: 'bg-red-500' },
  { name: 'Komatsu', key: 'komatsu', initial: 'K', color: 'bg-orange-500' },
  { name: 'Volvo', key: 'volvo', initial: 'V', color: 'bg-blue-600' },
  { name: 'Bobcat', key: 'bobcat', initial: 'B', color: 'bg-orange-600' },
  { name: 'Case', key: 'case', initial: 'C', color: 'bg-red-600' },
  { name: 'JCB', key: 'jcb', initial: 'J', color: 'bg-yellow-600' },
  { name: 'Hyundai', key: 'hyundai', initial: 'H', color: 'bg-gray-700' },
];

export default function PopularBrands() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#333333] mb-8">{t('brands.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.key}
              href={`/categories?brand=${brand.key}`}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 group text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${brand.color} flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform shadow-lg`}>
                {brand.initial}
              </div>
              <p className="text-sm font-semibold text-gray-700 group-hover:text-[#333333] transition">
                {t(`brands.${brand.key}`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

