import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import portfolio from '../data/portfolio';
import SafeImage from './SafeImage';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(portfolio.projects.map((p) => p.category)));
    return ['Semua', ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Semua') return portfolio.projects;
    return portfolio.projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="karya" className="py-20 sm:py-24 bg-white border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-2">Karya Pilihan</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance mb-3">
              Proyek yang dirancang dengan perhatian penuh pada detail dan fungsi.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Beberapa hasil eksplorasi, studi kasus desain, dan pengembangan aplikasi web yang pernah saya kerjakan.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div
            role="tablist"
            aria-label="Filter kategori proyek"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F4F4F5] border border-[#E4E4E7] rounded-xl self-start md:self-auto"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-sm'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F4F4F5] border-b border-[#E4E4E7]">
                  <SafeImage
                    src={project.thumbnail}
                    alt={`Preview proyek ${project.title}`}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#64748B] mb-2">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <p className="text-xs font-medium text-[#64748B]">
                    {project.technologies.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-white border-t border-[#E4E4E7] flex items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#2563EB] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <span>Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-4 py-2 text-xs font-semibold text-[#0F172A] bg-white hover:bg-[#F4F4F5] border border-[#E4E4E7] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <Github className="w-3.5 h-3.5 text-[#475569]" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
