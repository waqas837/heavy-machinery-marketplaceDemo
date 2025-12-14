'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EnhancedSearch() {
  const { t } = useTranslation();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    manufacturer: '',
    priceMin: '',
    priceMax: '',
    yearMin: '',
    yearMax: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      manufacturer: '',
      priceMin: '',
      priceMax: '',
      yearMin: '',
      yearMax: '',
    });
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== '').length;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('hero.searchPlaceholder')}
                className="w-full pl-14 pr-4 py-4 text-lg focus:outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-2 px-4 border-l border-gray-200">
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`relative p-2 rounded-lg transition ${
                  showFilters || activeFiltersCount > 0
                    ? 'bg-amber-100 text-amber-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <SlidersHorizontal size={24} />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-md flex items-center gap-2"
              >
                <Search size={20} />
                {t('hero.search')}
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="border-t border-gray-200 bg-gray-50 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Filter size={20} />
                  {t('inventory.filters')}
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    <X size={16} />
                    {t('inventory.clearFilters')}
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('inventory.category')}
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">All Categories</option>
                    <option value="excavators">{t('categories.excavators')}</option>
                    <option value="dozers">{t('categories.dozers')}</option>
                    <option value="loaders">{t('categories.wheelLoaders')}</option>
                    <option value="skid-steers">{t('categories.skidSteers')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('inventory.manufacturer')}
                  </label>
                  <select
                    value={filters.manufacturer}
                    onChange={(e) => setFilters({ ...filters, manufacturer: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">All Manufacturers</option>
                    <option value="caterpillar">Caterpillar</option>
                    <option value="deere">John Deere</option>
                    <option value="komatsu">Komatsu</option>
                    <option value="volvo">Volvo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('inventory.priceRange')}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

