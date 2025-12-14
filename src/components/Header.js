'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Get current language code (uppercase) to avoid hydration mismatch
  const getCurrentLangCode = () => {
    if (!i18n || !i18n.language) return 'EN';
    const lang = i18n.language;
    return lang.toUpperCase().slice(0, 2);
  };

  const languages = [
    { code: 'en', name: t('common.english') },
    { code: 'es', name: t('common.spanish') },
    { code: 'fr', name: t('common.french') },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <Link href="/login" className="relative text-gray-300 hover:text-amber-400 transition group">
                {t('nav.login')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/register" className="relative text-gray-300 hover:text-amber-400 transition group">
                {t('nav.register')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/dealer-portal" className="relative text-gray-300 hover:text-amber-400 transition group">
                {t('nav.dealerPortal')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/advertising" className="relative text-gray-300 hover:text-amber-400 transition group">
                {t('nav.advertising')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="relative text-gray-300 hover:text-amber-400 transition group">
                {t('nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 hover:text-amber-400 transition text-gray-300"
                >
                  <Globe size={16} />
                  <span suppressHydrationWarning>{getCurrentLangCode()}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[120px] border border-gray-200">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition ${
                          i18n.language === lang.code ? 'bg-slate-100 font-semibold text-slate-900' : ''
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <span className="text-3xl font-black text-[#F29F05] group-hover:text-[#E08F04] transition tracking-tight">
                  OUR LOGO
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/sell-equipment" 
                className="relative text-gray-700 hover:text-[#333333] transition font-medium group"
              >
                {t('nav.sellEquipment')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/financing" 
                className="relative text-gray-700 hover:text-[#333333] transition font-medium group"
              >
                {t('nav.getFinancing')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/categories" 
                className="relative text-gray-700 hover:text-[#333333] transition font-medium group"
              >
                {t('nav.categories')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/find-dealers" 
                className="relative text-gray-700 hover:text-[#333333] transition font-medium group"
              >
                {t('nav.findDealers')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="bg-[#F29F05] hover:bg-[#E08F04] text-white px-6 py-2 rounded-lg font-medium transition shadow-md">
              {t('hero.search')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <div className="relative flex gap-2">
            <input
              type="text"
              placeholder={t('hero.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <button className="bg-[#F29F05] hover:bg-[#E08F04] text-white px-4 py-2 rounded-lg font-medium transition shadow-md">
              {t('hero.search')}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <Link 
              href="/sell-equipment" 
              className="relative block py-3 px-2 text-gray-700 hover:text-[#333333] transition font-medium group rounded-lg hover:bg-gray-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.sellEquipment')}
              <span className="absolute bottom-2 left-2 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
            </Link>
            <Link 
              href="/financing" 
              className="relative block py-3 px-2 text-gray-700 hover:text-[#333333] transition font-medium group rounded-lg hover:bg-gray-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.getFinancing')}
              <span className="absolute bottom-2 left-2 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
            </Link>
            <Link 
              href="/categories" 
              className="relative block py-3 px-2 text-gray-700 hover:text-[#333333] transition font-medium group rounded-lg hover:bg-gray-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.categories')}
              <span className="absolute bottom-2 left-2 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
            </Link>
            <Link 
              href="/find-dealers" 
              className="relative block py-3 px-2 text-gray-700 hover:text-[#333333] transition font-medium group rounded-lg hover:bg-gray-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.findDealers')}
              <span className="absolute bottom-2 left-2 w-0 h-0.5 bg-[#F29F05] transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

