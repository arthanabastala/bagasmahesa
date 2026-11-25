import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import portfolio from '../data/portfolio';

export default function Education() {
  return (
    <section id="pendidikan" className="py-20 sm:py-24 bg-white border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#2563EB] mb-2">Pendidikan</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance mb-3">
            Latar belakang akademik dan pembelajaran terstruktur.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Perjalanan pendidikan formal dan program intensif yang membentuk fondasi rekayasa perangkat lunak saya.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical Connector Line */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] md:left-[180px] top-2 bottom-2 w-px bg-[#E4E4E7]"
          />

          <div className="space-y-8">
            {portfolio.education.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.06, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10 pl-10 md:pl-0"
              >
                {/* Year Column (Desktop Left, Mobile Top) */}
                <div className="md:text-right md:pr-8 pt-0.5">
                  <span className="font-mono text-sm font-medium tabular-nums text-[#2563EB]">
                    {item.period}
                  </span>
                  <p className="text-xs text-[#64748B] mt-0.5">{item.location}</p>
                </div>

                {/* Milestone Node */}
                <div
                  aria-hidden="true"
                  className="absolute left-[10px] md:left-[175px] top-1.5 w-[11px] h-[11px] rounded-full bg-white border-2 border-[#2563EB]"
                />

                {/* Content Card */}
                <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0F172A]">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-medium text-[#334155] mt-0.5">
                        {item.major}
                      </p>
                    </div>
                    <div className="hidden sm:flex w-9 h-9 rounded-lg bg-white border border-[#E4E4E7] items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                    </div>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
