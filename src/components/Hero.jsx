import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import portfolio from '../data/portfolio';
import SafeImage from './SafeImage';

export default function Hero() {
  const { profile, highlights } = portfolio;

  return (
    <section
      id="beranda"
      className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b border-[#E4E4E7]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-[#2563EB] tracking-tight mb-3">
              {profile.greeting} {profile.name}
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.65rem)] font-bold tracking-tight leading-[1.08] text-[#0F172A] text-balance mb-4">
              {profile.headline}
            </h1>

            <p className="font-display text-lg sm:text-xl font-medium text-[#334155] mb-5">
              {profile.role}
            </p>

            <p className="text-base sm:text-[17px] leading-relaxed text-[#475569] max-w-[60ch] mb-8">
              {profile.description}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#karya"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <span>Lihat Karya</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F4F4F5] border border-[#E4E4E7] rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4 text-[#475569]" />
                <span>Hubungi Saya</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#F4F4F5]">
              <SafeImage
                src={profile.photo}
                alt={`Foto profil ${profile.name}`}
                fallbackTitle={profile.name}
                eager={true}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 pt-8 border-t border-[#E4E4E7] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {highlights.map((item) => (
            <div key={item.label} className="min-w-0">
              <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] tabular-nums">
                {item.value}
              </div>
              <div className="text-sm text-[#64748B] mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
