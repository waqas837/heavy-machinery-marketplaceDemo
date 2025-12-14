'use client';

import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.about')}</h3>
            <p className="text-sm leading-relaxed">
              Heavy Machinery Marketplace is the premier platform for buying and selling construction equipment. 
              Connect with dealers, browse thousands of listings, and find the perfect equipment for your needs.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">{t('footer.advertising')}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">{t('footer.contact')}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">{t('nav.sellEquipment')}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">{t('nav.getFinancing')}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">{t('footer.privacy')}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">{t('footer.terms')}</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-slate-700 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-slate-700 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-slate-700 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

