import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'operatory' | 'technology' | 'reception' | 'care'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'operatory', label: 'Treatment Suites' },
    { id: 'technology', label: 'Implant & Diagnostic Tech' },
    { id: 'reception', label: 'Reception Lounge' },
    { id: 'care', label: 'Patient Consultations' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F1FAFA]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            Inside Our Facility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Clinic Gallery & Environment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a visual tour of our modern clinic in Oasis City, Rudrapur. Explore our pristine operatory rooms, advanced dental technology, and calm reception area.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-white rounded-2xl border border-teal-100 max-w-2xl mx-auto shadow-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-[#123B56] text-white shadow-sm'
                    : 'text-[#253746] hover:text-[#123B56] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B56]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="w-full flex items-center justify-between text-white">
                    <span className="text-xs font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                      <span>Click to enlarge</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#16B8A6] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-base text-[#123B56] mb-1.5 group-hover:text-[#16B8A6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close preview"
            className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#16B8A6] block mb-1">
                  {filteredItems[activeLightboxIndex].categoryLabel}
                </span>
                <h3 className="font-display font-bold text-lg text-[#123B56]">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {filteredItems[activeLightboxIndex].description}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 shrink-0 ml-4">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
