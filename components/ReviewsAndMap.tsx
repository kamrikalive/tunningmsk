'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Star, ChevronDown, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import Link from 'next/link';

const AccordionItem = ({ title, subTitle, children, defaultOpen = false }: { title: string, subTitle: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-xl bg-[#141414]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div>
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{subTitle}</p>
        </div>
        <ChevronDown 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
        <div className="px-5 pb-5">
           {children}
        </div>
      </div>
    </div>
  );
};

export default function ReviewsAndMap() {
  const AVITO_LINK = "https://www.avito.ru/brands/i213156774/all?sellerId=f6f54eb142e0b9e1791c9f9d47644e85";
  const ADDRESS = "Московская обл., Одинцовский г.о., с. Немчиновка, Московская ул., с12";
  // Ссылка на карту с поиском по адресу
  const MAP_URL = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(ADDRESS)}&z=16`;

  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:block">
          <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-[#D4AF37]/10 rounded-full mb-3">
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
                <Star className="text-[#D4AF37]" size={16} fill="#D4AF37" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-white mb-2">
                Мы на <span className="text-[#96e06d]">Авито</span> и Карта
              </h2>
              <p className="text-gray-400 text-sm">
                Проверенный магазин. Мы всегда вам рады!
              </p>
          </div>

          <div className="grid grid-cols-2 gap-8 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА: АВИТО */}
            <div className="flex flex-col h-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale : 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[500px] bg-[#141414] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl flex flex-col items-center justify-center p-8 text-center group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Наш магазин на Авито</h3>
                  <p className="text-gray-400 mb-8 max-w-md relative z-10">
                    Читайте отзывы наших клиентов и смотрите полный ассортимент товаров в нашем профиле.
                  </p>
                  
                  <a 
                    href={AVITO_LINK}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#96e06d] text-black font-bold rounded-xl hover:bg-[#86d05d] transition-all duration-300 transform hover:scale-105 relative z-10"
                  >
                    <ExternalLink size={20} />
                    Перейти в профиль Авито
                  </a>
                </motion.div>
            </div>

            {/* ПРАВАЯ КОЛОНКА: КАРТА */}
            <div className="flex flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-[500px] bg-[#141414] rounded-2xl overflow-hidden border border-white/5 relative"
                >
                  <iframe
                    src={MAP_URL}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ display: "block" }}
                    title="Карта проезда"
                  ></iframe>
                </motion.div>

                <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 px-8 py-3 bg-[#141414] border border-white/10 text-white font-bold rounded-full text-sm uppercase tracking-wider">
                        <MapPin size={18} className="text-[#D4AF37]" />
                        {ADDRESS}
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* --- MOBILE/TABLET VIEW --- */}
        <div className="block lg:hidden">
          <div className="space-y-4">
            
            <AccordionItem 
              title="Магазин на Авито"
              subTitle="Отзывы и ассортимент"
              defaultOpen={true}
            >
                <div className="bg-[#1a1a1a] rounded-lg p-6 text-center border border-white/5">
                  <p className="text-gray-300 mb-6">Перейдите в наш профиль, чтобы увидеть все отзывы и товары</p>
                  <a 
                      href={AVITO_LINK}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#96e06d] text-black font-bold rounded-full hover:bg-[#86d05d] transition-all duration-300 text-sm uppercase tracking-wider w-full justify-center"
                  >
                      <ExternalLink size={18} />
                      Открыть Авито
                  </a>
                </div>
            </AccordionItem>
            
            <AccordionItem 
              title="Адрес и Карта"
              subTitle="с. Немчиновка"
              defaultOpen={true}
            >
              <div className="h-[400px] -mx-1 -mb-1 rounded-lg overflow-hidden">
                 <iframe
                    src={MAP_URL}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ display: "block" }}
                  ></iframe>
              </div>
                <div className="mt-4 text-center">
                   <p className="text-xs text-gray-400 px-4">{ADDRESS}</p>
                </div>
            </AccordionItem>

          </div>
        </div>

      </div>
    </section>
  );
}