'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Check } from 'lucide-react';
import { saveUserPreferences } from '@/lib/localStorage';

export default function NewsletterSignup() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Save to localStorage
      const preferences = {
        newsletter: true,
        email: email,
        subscribedAt: new Date().toISOString(),
      };
      saveUserPreferences(preferences);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">{t('marketing.newsletterTitle')}</h2>
          <p className="text-gray-300 mb-6">{t('marketing.newsletterSubtitle')}</p>
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('marketing.emailPlaceholder')}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <button
              type="submit"
              className={`px-6 py-3 rounded-lg font-medium transition shadow-md ${
                subscribed
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-amber-600 hover:bg-amber-700'
              }`}
            >
              {subscribed ? (
                <span className="flex items-center gap-2">
                  <Check size={20} />
                  {t('marketing.subscribed')}
                </span>
              ) : (
                t('marketing.subscribe')
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

