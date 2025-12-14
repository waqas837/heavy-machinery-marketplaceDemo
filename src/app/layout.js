import "./globals.css";
import I18nProvider from '@/components/I18nProvider';

export const metadata = {
  title: 'Heavy Machinery Marketplace | Construction Equipment For Sale',
  description: 'Buy and sell new and used construction equipment. Browse thousands of listings from top manufacturers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body className="antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
