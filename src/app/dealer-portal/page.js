'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, Package, Users, DollarSign } from 'lucide-react';

export default function DealerPortalPage() {
  const { t } = useTranslation();

  const stats = [
    { icon: Package, label: 'Active Listings', value: '24', color: 'text-blue-600' },
    { icon: Users, label: 'Total Views', value: '1,234', color: 'text-green-600' },
    { icon: DollarSign, label: 'Revenue', value: 'DOP 2.5M', color: 'text-amber-600' },
    { icon: BarChart3, label: 'Conversion Rate', value: '12.5%', color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#333333] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.dealerPortal')}</h1>
            <p className="text-xl text-gray-300">Manage your equipment listings and sales</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <stat.icon className={`${stat.color} mb-4`} size={32} />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <a
                    href="/sell-equipment"
                    className="block w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition text-center"
                  >
                    Add New Listing
                  </a>
                  <button className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 rounded-lg font-medium transition">
                    View All Listings
                  </button>
                  <button className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 rounded-lg font-medium transition">
                    Analytics Dashboard
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-600 pl-4">
                    <p className="font-semibold text-gray-900">New inquiry received</p>
                    <p className="text-sm text-gray-600">Caterpillar 320 GC - 2 hours ago</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold text-gray-900">Listing published</p>
                    <p className="text-sm text-gray-600">Bobcat T870 - 5 hours ago</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Profile updated</p>
                    <p className="text-sm text-gray-600">Yesterday</p>
                  </div>
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

