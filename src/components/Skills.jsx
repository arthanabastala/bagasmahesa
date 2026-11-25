import { motion } from 'motion/react';
import { Code2, Cpu, Layers, Layout, PenTool, Smartphone } from 'lucide-react';
import portfolio from '../data/portfolio';

const ICON_MAP = {
  Code2,
  Layers,
  Layout,
  Smartphone,
  PenTool,
  Cpu,
};

export default function Skills() {
  return (
    <section id="keahlian" className="py-20 sm:py-24 border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#2563EB] mb-2">Keahlian</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance mb-3">
            Kompetensi inti dalam pengembangan web dan desain antarmuka.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Kombinasi pendekatan visual dan rekayasa frontend untuk menghasilkan produk digital yang konsisten dan efisien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.skills.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;

            return (
              <motion.article
                key={skill.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white border border-[#E4E4E7] rounded-2xl p-6 flex flex-col justify-between transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center text-[#0F172A] mb-5">
                    <IconComponent className="w-5 h-5 text-[#2563EB]" strokeWidth={1.75} />
                  </div>

                  <h3 className="font-display text-lg font-semibold text-[#0F172A] mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E4E7]/80">
                  <div className="flex items-center justify-between text-xs font-medium text-[#64748B] mb-2">
                    <span>Tingkat Penguasaan</span>
                    <span className="font-mono tabular-nums text-[#0F172A]">
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full h-1.5 bg-[#F4F4F5] rounded-full overflow-hidden mb-3"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Tingkat penguasaan ${skill.name}`}
                  >
                    <div
                      className="h-full bg-[#2563EB] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {skill.tools.join(' · ')}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
