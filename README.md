# Heavy Machinery Marketplace

A modern, professional marketplace for buying and selling construction equipment, inspired by Machinery Trader. Built with Next.js 14, featuring multi-language support, localStorage functionality, and a beautiful, responsive design.

## 🎯 Features

✅ **Multi-Language Support** - English, Spanish, and French (i18next)  
✅ **LocalStorage Integration** - Save equipment to favorites, search history, and preferences  
✅ **Modern Design** - Professional blue/orange color scheme with smooth animations  
✅ **Equipment Categories** - 21+ categories including excavators, dozers, loaders, and more  
✅ **Equipment Listings** - Browse and save equipment with detailed information  
✅ **Popular Brands** - Showcase top manufacturers (Caterpillar, Deere, Komatsu, etc.)  
✅ **Parts & Attachments** - Search for parts and dismantled machines  
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✅ **Search Functionality** - Quick search across all equipment  
✅ **Save to Favorites** - Heart icon to save equipment to localStorage  

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📦 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **i18next** - Internationalization (English, Spanish, French)
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **LocalStorage API** - Client-side data persistence

## 🌍 Languages Supported

- 🇺🇸 **English** - Default language
- 🇪🇸 **Spanish** - Full translation
- 🇫🇷 **French** - Full translation

Switch languages using the globe icon in the header.

## 💾 LocalStorage Features

The application saves data to localStorage:

- **Saved Equipment** - Favorite equipment items
- **Search History** - Last 10 search queries
- **User Preferences** - Language and other settings

### Usage Example

```javascript
import { saveEquipment, getSavedEquipment, removeEquipment } from '@/lib/localStorage';

// Save equipment
saveEquipment({
  id: 1,
  year: 2022,
  manufacturer: 'Caterpillar',
  model: '320 GC',
  price: 125000,
  // ... other fields
});

// Get saved equipment
const saved = getSavedEquipment();

// Remove equipment
removeEquipment(equipmentId);
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with i18n provider
│   ├── page.js            # Main homepage
│   └── globals.css        # Global styles
├── components/
│   ├── Header.js          # Navigation header with language switcher
│   ├── CategoryGrid.js    # Equipment categories grid
│   ├── EquipmentCard.js   # Individual equipment card with save functionality
│   ├── EquipmentListings.js # Equipment listings section
│   ├── PopularBrands.js   # Popular brands showcase
│   ├── PartsSection.js    # Parts and attachments search
│   ├── Footer.js          # Footer with links and social media
│   └── I18nProvider.js    # i18n initialization wrapper
└── lib/
    ├── i18n.js            # i18next configuration
    ├── localStorage.js    # LocalStorage utilities
    └── locales/
        ├── en.json        # English translations
        ├── es.json        # Spanish translations
        └── fr.json        # French translations
```

## 🎨 Design Features

- **Color Scheme**: Professional blue (#2563eb) and orange (#f97316) gradient
- **Animations**: Smooth hover effects, transitions, and scale transforms
- **Typography**: Clean, modern font hierarchy
- **Cards**: Elevated cards with shadow effects
- **Responsive**: Mobile-first design approach

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Equipment

Edit `src/components/EquipmentListings.js` and add to the `sampleEquipment` array:

```javascript
{
  id: 11,
  year: 2023,
  manufacturer: 'Caterpillar',
  model: '259D',
  category: 'Skid Steers',
  price: 68000,
  hours: 350,
  location: 'Texas, USA',
  icon: '🚜',
}
```

### Adding New Categories

1. Add the category key to translation files (`en.json`, `es.json`, `fr.json`)
2. Add the category object to `src/components/CategoryGrid.js`

### Changing Colors

Edit `tailwind.config.js` or update the color classes in components. The main colors are:
- Primary Blue: `blue-600`, `blue-700`
- Accent Orange: `orange-500`, `orange-600`

## 🌟 Key Components

### Header
- Top navigation bar with login/register links
- Language switcher (EN/ES/FR)
- Main search bar
- Mobile-responsive menu

### EquipmentCard
- Displays equipment information
- Save to favorites button (localStorage)
- Price, hours, location display
- Hover effects and animations

### CategoryGrid
- 21 equipment categories
- Icon-based navigation
- Responsive grid layout

## 📊 Data Persistence

All saved data persists in browser localStorage:
- Equipment favorites are saved with timestamp
- Search history (last 10 searches)
- User preferences (language, etc.)

## 🎯 Use Cases

Perfect for:
- Construction equipment marketplaces
- Heavy machinery dealers
- Equipment rental platforms
- B2B equipment trading
- International equipment sales

## 🚀 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Notes

This is a frontend-only demonstration. For production use, you would need:
- Backend API for equipment data
- User authentication
- Payment processing
- Image upload functionality
- Database integration

## 📄 License

This is a demo project for portfolio/client demonstration purposes.

---

**Built with ❤️ to impress tier 1 country clients with a professional, multi-language marketplace**
