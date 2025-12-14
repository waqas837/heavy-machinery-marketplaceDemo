'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Megaphone, TrendingUp, Eye, Target } from 'lucide-react';

export default function AdvertisingPage() {
  const { t } = useTranslation();

  const benefits = [
    { icon: Eye, title: 'Increased Visibility', desc: 'Reach thousands of potential buyers' },
    { icon: Target, title: 'Targeted Audience', desc: 'Connect with serious buyers in your area' },
    { icon: TrendingUp, title: 'Boost Sales', desc: 'Increase your equipment sales by up to 300%' },
    { icon: Megaphone, title: 'Premium Placement', desc: 'Get featured in top search results' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#333333] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.advertising')}</h1>
            <p className="text-xl text-gray-300">Promote your equipment and reach more buyers</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <benefit.icon className="mx-auto text-amber-600 mb-4" size={40} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Advertising Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                  <p className="text-4xl font-bold text-amber-600 mb-4">DOP 5,000</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="text-gray-600">• 30 days listing</li>
                    <li className="text-gray-600">• Standard placement</li>
                    <li className="text-gray-600">• Basic analytics</li>
                  </ul>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 rounded-lg font-medium transition">
                    Choose Plan
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-amber-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                  <p className="text-4xl font-bold text-amber-600 mb-4">DOP 15,000</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="text-gray-600">• 90 days listing</li>
                    <li className="text-gray-600">• Featured placement</li>
                    <li className="text-gray-600">• Advanced analytics</li>
                    <li className="text-gray-600">• Priority support</li>
                  </ul>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-medium transition">
                    Choose Plan
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-4xl font-bold text-amber-600 mb-4">Custom</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="text-gray-600">• Unlimited listings</li>
                    <li className="text-gray-600">• Top placement</li>
                    <li className="text-gray-600">• Full analytics</li>
                    <li className="text-gray-600">• Dedicated support</li>
                  </ul>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 rounded-lg font-medium transition">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

