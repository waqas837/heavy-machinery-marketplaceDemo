'use client';

import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

export default function PartsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('parts.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Search Parts */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('parts.searchParts')}</h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('parts.partNumber')}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="searchType" defaultChecked className="text-slate-900" />
                  <span className="text-sm text-gray-700">Starts With</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="searchType" className="text-slate-900" />
                  <span className="text-sm text-gray-700">Exact Match</span>
                </label>
              </div>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-medium transition shadow-md">
                {t('hero.search')}
              </button>
            </div>
          </div>

          {/* Search Dismantled Machines */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('parts.searchDismantled')}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('parts.selectManufacturer')}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500">
                  <option>{t('parts.allManufacturers')}</option>
                  <option>Caterpillar</option>
                  <option>John Deere</option>
                  <option>Komatsu</option>
                  <option>Volvo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('parts.selectModel')}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500">
                  <option>{t('parts.allModels')}</option>
                </select>
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition shadow-md">
                {t('hero.search')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

