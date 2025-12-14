'use client';

import { useTranslation } from 'react-i18next';
import { 
  Truck, Wrench, Hammer, Building2, ArrowUp, Shield, 
  Drill, TreeDeciduous, Settings, Package, 
  MapPin, Link2, Cog, Zap, Layers, Gauge, Square
} from 'lucide-react';

const categories = [
  { key: 'skidSteers', icon: Truck, color: 'from-orange-500 to-orange-600' },
  { key: 'miniExcavators', icon: Wrench, color: 'from-blue-500 to-blue-600' },
  { key: 'excavators', icon: Hammer, color: 'from-yellow-500 to-yellow-600' },
  { key: 'forklifts', icon: Building2, color: 'from-red-500 to-red-600' },
  { key: 'lifts', icon: ArrowUp, color: 'from-green-500 to-green-600' },
  { key: 'dozers', icon: Shield, color: 'from-gray-600 to-gray-700' },
  { key: 'trenchers', icon: Drill, color: 'from-purple-500 to-purple-600' },
  { key: 'cranes', icon: Building2, color: 'from-indigo-500 to-indigo-600' },
  { key: 'loaderBackhoes', icon: Layers, color: 'from-amber-500 to-amber-600' },
  { key: 'wheelLoaders', icon: Truck, color: 'from-teal-500 to-teal-600' },
  { key: 'forestryEquipment', icon: TreeDeciduous, color: 'from-green-600 to-green-700' },
  { key: 'drills', icon: Drill, color: 'from-blue-600 to-blue-700' },
  { key: 'motorGraders', icon: Square, color: 'from-slate-500 to-slate-600' },
  { key: 'sweepers', icon: Gauge, color: 'from-gray-500 to-gray-600' },
  { key: 'aggregateEquipment', icon: Settings, color: 'from-orange-600 to-orange-700' },
  { key: 'telehandlers', icon: Package, color: 'from-cyan-500 to-cyan-600' },
  { key: 'offHighwayTrucks', icon: Truck, color: 'from-red-600 to-red-700' },
  { key: 'asphaltPavers', icon: Square, color: 'from-gray-700 to-gray-800' },
  { key: 'attachments', icon: Link2, color: 'from-blue-700 to-blue-800' },
  { key: 'dismantledMachines', icon: Cog, color: 'from-gray-800 to-gray-900' },
  { key: 'parts', icon: Zap, color: 'from-amber-600 to-amber-700' },
];

export default function CategoryGrid() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('categories.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            if (!IconComponent) {
              console.error(`Icon not found for category: ${category.key}`);
              return null;
            }
            return (
              <a
                key={category.key}
                href={`/categories?type=${category.key}`}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 group"
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent size={32} />
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center group-hover:text-[#333333] transition">
                  {t(`categories.${category.key}`)}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
