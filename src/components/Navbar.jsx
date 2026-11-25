import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import portfolio from '../data/portfolio';

const NAV_ITEMS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Karya', href: '#karya' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Sertifikasi', href: '#sertifikasi' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-[#E4E4E7] shadow-[0_1px_12px_rgba(15,23,42,0.05)]'
          : 'bg-[#FAFAFA]/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Brand Wordmark */}
        <a
          href="#beranda"
          onClick={handleLinkClick}
          className="font-display text-lg font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
        >
          {portfolio.profile.brandName}
        </a>

        {/* Desktop Horizontal Navigation */}
        <nav
          aria-label="Navigasi utama"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#475569]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#0F172A] transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#kontak"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#2563EB] rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          >
            Kontak
          </a>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E4E4E7] bg-white text-[#0F172A] hover:bg-[#F4F4F5] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navigasi mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-[#E4E4E7] shadow-lg"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center min-h-[44px] px-3 py-2 text-base font-medium text-[#334155] hover:text-[#0F172A] hover:bg-[#F4F4F5] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-[#E4E4E7]">
                <a
                  href="#kontak"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center min-h-[44px] w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors"
                >
                  Kontak
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
