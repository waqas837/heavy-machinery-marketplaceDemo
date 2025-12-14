'use client';

import { useEffect } from 'react';
import '@/lib/i18n';

export default function I18nProvider({ children }) {
  useEffect(() => {
    // Ensure i18n is initialized
    import('@/lib/i18n');
  }, []);

  return <>{children}</>;
}

