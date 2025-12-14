'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function FindDealersPage() {
  const { t } = useTranslation();

  const dealers = [
    {
      name: 'Heavy Equipment Solutions',
      location: t('dominican.santoDomingo'),
      phone: '+1 (809) 555-0100',
      email: 'info@heavyeq.com',
      website: 'www.heavyeq.com',
    },
    {
      name: 'Construction Machinery Pro',
      location: t('dominican.santiago'),
      phone: '+1 (809) 555-0200',
      email: 'sales@cmp.com',
      website: 'www.cmp.com',
    },
    {
      name: 'Dominican Equipment Hub',
      location: t('dominican.puntaCana'),
      phone: '+1 (809) 555-0300',
      email: 'contact@deh.com',
      website: 'www.deh.com',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#333333] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.findDealers')}</h1>
            <p className="text-xl text-gray-300">{t('dominican.findLocalDealers')}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealers.map((dealer, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{dealer.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="text-amber-600" size={20} />
                      <span>{dealer.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="text-amber-600" size={20} />
                      <span>{dealer.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="text-amber-600" size={20} />
                      <span>{dealer.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Globe className="text-amber-600" size={20} />
                      <span>{dealer.website}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-medium transition">
                    Contact Dealer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

