'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import { saveEquipment, removeEquipment, isEquipmentSaved } from '@/lib/localStorage';

export default function EquipmentCard({ equipment }) {
  const { t } = useTranslation();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isEquipmentSaved(equipment.id));
  }, [equipment.id]);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (saved) {
      removeEquipment(equipment.id);
      setSaved(false);
    } else {
      saveEquipment(equipment);
      setSaved(true);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group">
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {equipment.images && equipment.images.length > 0 ? (
          <Image
            src={equipment.images[0]}
            alt={`${equipment.manufacturer} ${equipment.model}`}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20">{equipment.icon || '🚜'}</span>
          </div>
        )}
        <button
          onClick={handleSave}
          className={`absolute top-2 right-2 p-2 rounded-full transition ${
            saved
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
          aria-label={saved ? t('listings.saved') : t('listings.saveToList')}
        >
          <Heart size={20} fill={saved ? 'currentColor' : 'none'} />
        </button>
        {equipment.featured && (
          <span className="absolute top-2 left-2 bg-amber-600 text-white px-2 py-1 rounded text-xs font-semibold shadow-md">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-slate-900 transition">
          {equipment.year} {equipment.manufacturer} {equipment.model}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{equipment.category}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-[#333333]">
            DOP {equipment.price.toLocaleString()}
          </span>
          {equipment.hours && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock size={14} />
              <span>{equipment.hours.toLocaleString()} {t('listings.hours')}</span>
            </div>
          )}
        </div>
        {equipment.location && (
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
            <MapPin size={14} />
            <span>{equipment.location}</span>
          </div>
        )}
        <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg font-medium transition shadow-md">
          {t('listings.viewDetails')}
        </button>
      </div>
    </div>
  );
}

