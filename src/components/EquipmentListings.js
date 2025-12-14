'use client';

import { useTranslation } from 'react-i18next';
import EquipmentCard from './EquipmentCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Sample equipment data
const defaultEquipment = [
  {
    id: 1,
    year: 2022,
    manufacturer: 'Caterpillar',
    model: '320 GC',
    category: 'Excavators',
    price: 125000,
    hours: 1250,
    location: 'Santo Domingo, DR',
    icon: '⛏️',
    featured: true,
  },
  {
    id: 2,
    year: 2021,
    manufacturer: 'John Deere',
    model: '850K',
    category: 'Dozers',
    price: 185000,
    hours: 2100,
    location: 'Santiago, DR',
    icon: '🚧',
  },
  {
    id: 3,
    year: 2023,
    manufacturer: 'Bobcat',
    model: 'T870',
    category: 'Skid Steers',
    price: 75000,
    hours: 450,
    location: 'Punta Cana, DR',
    icon: '🚜',
    featured: true,
  },
  {
    id: 4,
    year: 2020,
    manufacturer: 'Komatsu',
    model: 'PC210LC-10',
    category: 'Excavators',
    price: 145000,
    hours: 3200,
    location: 'La Romana, DR',
    icon: '⛏️',
  },
  {
    id: 5,
    year: 2022,
    manufacturer: 'Volvo',
    model: 'L180H',
    category: 'Wheel Loaders',
    price: 195000,
    hours: 1800,
    location: 'Santo Domingo, DR',
    icon: '🚚',
  },
  {
    id: 6,
    year: 2021,
    manufacturer: 'JLG',
    model: '800AJ',
    category: 'Telehandlers',
    price: 95000,
    hours: 1500,
    location: 'Santiago, DR',
    icon: '📦',
  },
  {
    id: 7,
    year: 2023,
    manufacturer: 'Case',
    model: '580N',
    category: 'Loader Backhoes',
    price: 85000,
    hours: 600,
    location: 'Santo Domingo, DR',
    icon: '🚛',
  },
  {
    id: 8,
    year: 2020,
    manufacturer: 'Genie',
    model: 'S-85',
    category: 'Lifts',
    price: 65000,
    hours: 2800,
    location: 'Punta Cana, DR',
    icon: '⬆️',
  },
  {
    id: 9,
    year: 2022,
    manufacturer: 'Hyundai',
    model: 'HL970A',
    category: 'Wheel Loaders',
    price: 175000,
    hours: 1200,
    location: 'Santiago, DR',
    icon: '🚚',
  },
  {
    id: 10,
    year: 2021,
    manufacturer: 'JCB',
    model: '3CX',
    category: 'Loader Backhoes',
    price: 88000,
    hours: 1900,
    location: 'La Romana, DR',
    icon: '🚛',
  },
  {
    id: 11,
    year: 2023,
    manufacturer: 'Caterpillar',
    model: '259D',
    category: 'Skid Steers',
    price: 68000,
    hours: 350,
    location: 'Santo Domingo, DR',
    icon: '🚜',
  },
  {
    id: 12,
    year: 2020,
    manufacturer: 'Bobcat',
    model: 'E50',
    category: 'Mini Excavators',
    price: 42000,
    hours: 2500,
    location: 'Santo Domingo, DR',
    icon: '🔧',
  },
];

export default function EquipmentListings() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [equipment, setEquipment] = useState(defaultEquipment);
  const itemsPerPage = 6;

  useEffect(() => {
    // Load equipment from localStorage and merge with default
    const savedEquipment = JSON.parse(localStorage.getItem('equipment_listings') || '[]');
    // Convert saved equipment to match format
    const formattedSaved = savedEquipment.map(item => ({
      id: item.id,
      year: item.year,
      manufacturer: item.manufacturer,
      model: item.model,
      category: item.category,
      price: item.price,
      hours: item.hours,
      location: item.location,
      images: item.images || [],
      featured: false,
    }));
    setEquipment([...formattedSaved, ...defaultEquipment]);
  }, []);

  const totalPages = Math.ceil(equipment.length / itemsPerPage);
  const currentItems = equipment.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{t('listings.title')}</h2>
          <a href="#" className="text-slate-900 hover:text-slate-700 font-medium">
            View All →
          </a>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((equipment) => (
              <EquipmentCard key={equipment.id} equipment={equipment} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-8 h-8 rounded-full transition ${
                      currentPage === index
                        ? 'bg-slate-900 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

