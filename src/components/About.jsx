import { motion } from 'motion/react';
import portfolio from '../data/portfolio';
import SafeImage from './SafeImage';

export default function About() {
  const { profile, about } = portfolio;

  return (
    <section id="tentang" className="py-20 sm:py-24 bg-white border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Workspace Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#F4F4F5]">
              <SafeImage
                src={profile.aboutPhoto}
                alt={`Ruang kerja ${profile.name}`}
                fallbackTitle="Studio & Ruang Kerja"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative & Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-semibold text-[#2563EB] mb-2">Tentang Saya</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance mb-5">
              {about.title}
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#475569] mb-8 max-w-[65ch]">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <dl className="divide-y divide-[#E4E4E7] border-t border-b border-[#E4E4E7]">
              {about.details.map((item) => (
                <div
                  key={item.label}
                  className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4"
                >
                  <dt className="text-sm font-medium text-[#64748B]">{item.label}</dt>
                  <dd className="text-sm font-medium text-[#0F172A] sm:col-span-2">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
