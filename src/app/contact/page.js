'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#333333] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('footer.contact')}</h1>
            <p className="text-xl text-gray-300">Get in touch with us</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-amber-600 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">Santo Domingo, Dominican Republic</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="text-amber-600 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (809) 555-0000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="text-amber-600 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">info@neffixheavy.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="text-amber-600 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">Hours</p>
                        <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
                        <p className="text-gray-600">Sat: 9AM-2PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

