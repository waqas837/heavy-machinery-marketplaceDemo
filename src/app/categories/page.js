'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryGrid from '@/components/CategoryGrid';
import Link from 'next/link';

export default function CategoriesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#333333] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('categories.title')}</h1>
            <p className="text-xl text-gray-300">Browse equipment by category</p>
          </div>
        </section>
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  );
}

