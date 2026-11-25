import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import portfolio from '../data/portfolio';
import SafeImage from './SafeImage';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const items = portfolio.gallery;

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + items.length) % items.length
    );
  }, [items.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % items.length
    );
  }, [items.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        showPrev();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, closeModal, showPrev, showNext]);

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <section id="galeri" className="py-20 sm:py-24 border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#2563EB] mb-2">Galeri</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance mb-3">
            Dokumentasi proses kreatif, sketsa, dan eksplorasi visual.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Klik gambar mana saja untuk melihat pratinjau dalam ukuran penuh.
          </p>
        </div>

        {/* Dynamic Bento/Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative text-left rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#F4F4F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                item.featured
                  ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10] lg:aspect-[16/9]'
                  : 'aspect-[4/3] lg:aspect-auto lg:min-h-[260px]'
              }`}
              aria-label={`Buka gambar ${item.title}`}
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                fallbackTitle={item.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />

              {/* Hover Scrim & Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-5">
                <div className="self-end w-10 h-10 rounded-full bg-white/95 text-[#0F172A] flex items-center justify-center shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-xs font-medium text-white/80 mb-1">
                    {item.category} · <span className="font-mono tabular-nums">{item.year}</span>
                  </p>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Pratinjau ${activeItem.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-[#0F172A]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E4E4E7]"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E4E4E7]">
                <div className="min-w-0 pr-4">
                  <p className="text-xs font-medium text-[#64748B]">
                    {activeItem.category} ·{' '}
                    <span className="font-mono tabular-nums">{activeItem.year}</span>
                  </p>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] truncate">
                    {activeItem.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Tutup galeri"
                  className="w-10 h-10 rounded-lg border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] text-[#0F172A] flex items-center justify-center transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-[#0F172A] max-h-[68vh] flex items-center justify-center overflow-hidden">
                <SafeImage
                  src={activeItem.image}
                  alt={activeItem.title}
                  fallbackTitle={activeItem.title}
                  eager={true}
                  className="w-full max-h-[68vh] object-contain"
                />

                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Gambar sebelumnya"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0F172A] flex items-center justify-center shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Gambar berikutnya"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0F172A] flex items-center justify-center shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="px-5 py-4 bg-white border-t border-[#E4E4E7] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-sm text-[#475569] leading-relaxed">
                  {activeItem.caption}
                </p>
                <span className="text-xs font-mono tabular-nums text-[#64748B] shrink-0">
                  {selectedIndex + 1} / {items.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
