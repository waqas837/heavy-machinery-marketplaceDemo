'use client';

import Header from '@/components/Header';
import CategoryGrid from '@/components/CategoryGrid';
import EquipmentListings from '@/components/EquipmentListings';
import PopularBrands from '@/components/PopularBrands';
import PartsSection from '@/components/PartsSection';
import Footer from '@/components/Footer';
import EnhancedSearch from '@/components/EnhancedSearch';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/heroimagebanner.png"
              alt="Construction Equipment"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/90 via-[#333333]/70 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md">
                Find the perfect equipment for your construction needs in Dominican Republic
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/sell-equipment"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-xl text-lg text-center hover:scale-105 transform"
                >
                  {t('nav.sellEquipment')}
                </a>
                <a
                  href="/find-dealers"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition border-2 border-white/30 text-lg text-center hover:scale-105 transform"
                >
                  {t('nav.findDealers')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Search Section */}
        <section className="py-12 bg-white -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <EnhancedSearch />
          </div>
        </section>

        <CategoryGrid />
        <EquipmentListings />
        <PopularBrands />
        <PartsSection />
      </main>
      <Footer />
    </div>
  );
}
