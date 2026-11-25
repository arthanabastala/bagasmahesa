import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Award, ExternalLink, Eye, X } from 'lucide-react';
import portfolio from '../data/portfolio';
import SafeImage from './SafeImage';

function CertificatePreviewArtwork({ cert, ownerName, large = false }) {
  if (cert.thumbnail) {
    return (
      <SafeImage
        src={cert.thumbnail}
        alt={`Sertifikat ${cert.name}`}
        fallbackTitle={cert.name}
        eager={large}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div
      className={`w-full h-full bg-[#F8FAFC] flex flex-col justify-between border border-[#E2E8F0] select-none ${
        large ? 'p-8 sm:p-12' : 'p-5'
      }`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] pb-3">
        <div className="flex items-center gap-2">
          <div
            className={`${
              large ? 'w-8 h-8' : 'w-6 h-6'
            } rounded-md bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center`}
          >
            <Award className={large ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
          </div>
          <span
            className={`font-semibold text-[#475569] tracking-tight ${
              large ? 'text-sm' : 'text-[11px]'
            }`}
          >
            {cert.issuer}
          </span>
        </div>
        <span
          className={`font-mono tabular-nums text-[#64748B] ${
            large ? 'text-xs' : 'text-[10px]'
          }`}
        >
          {cert.year}
        </span>
      </div>

      <div className={large ? 'my-8 sm:my-10' : 'my-3'}>
        <p
          className={`text-[#64748B] font-medium mb-1 ${
            large ? 'text-xs' : 'text-[10px]'
          }`}
        >
          Diberikan kepada {ownerName}
        </p>
        <h4
          className={`font-display font-bold text-[#0F172A] leading-snug ${
            large ? 'text-xl sm:text-2xl' : 'text-sm line-clamp-2'
          }`}
        >
          {cert.name}
        </h4>
        {large && (
          <p className="text-sm text-[#475569] leading-relaxed mt-4 max-w-xl">
            {cert.description}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#E2E8F0]">
        <span
          className={`font-mono text-[#64748B] truncate ${
            large ? 'text-xs' : 'text-[10px]'
          }`}
        >
          ID: {cert.credentialId}
        </span>
        <span
          className={`font-medium text-[#2563EB] shrink-0 ${
            large ? 'text-xs' : 'text-[10px]'
          }`}
        >
          Terverifikasi
        </span>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (!activeCert) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCert(null);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert]);

  return (
    <section id="sertifikasi" className="py-20 sm:py-24 border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#2563EB] mb-2">Sertifikasi</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance mb-3">
            Lisensi kompetensi dan sertifikasi profesional.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Kredensial pelatihan teknis dan desain yang mendukung standar kerja profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-[#E4E4E7] rounded-2xl overflow-hidden flex flex-col justify-between transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              {/* Clickable Thumbnail */}
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="group relative aspect-[16/9] w-full overflow-hidden border-b border-[#E4E4E7] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]"
                aria-label={`Lihat sertifikat ${cert.name}`}
              >
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02]">
                  <CertificatePreviewArtwork
                    cert={cert}
                    ownerName={portfolio.profile.name}
                  />
                </div>
              </button>

              <div className="p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#64748B] mb-1.5">
                    {cert.issuer} · <span className="font-mono tabular-nums">{cert.year}</span>
                  </p>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                    {cert.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-4 py-2 text-xs font-semibold text-[#0F172A] bg-[#FAFAFA] hover:bg-[#0F172A] hover:text-white border border-[#E4E4E7] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 self-start sm:self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Sertifikat</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Detail sertifikat ${activeCert.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-[#0F172A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden border border-[#E4E4E7] shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7]">
                <div className="min-w-0 pr-4">
                  <p className="text-xs font-medium text-[#64748B]">
                    {activeCert.issuer} ·{' '}
                    <span className="font-mono tabular-nums">{activeCert.year}</span>
                  </p>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] truncate">
                    {activeCert.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  aria-label="Tutup pratinjau sertifikat"
                  className="w-10 h-10 rounded-lg border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] text-[#0F172A] flex items-center justify-center transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-[#FAFAFA]">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <CertificatePreviewArtwork
                    cert={activeCert}
                    ownerName={portfolio.profile.name}
                    large={true}
                  />
                </div>
              </div>

              <div className="px-6 py-4 bg-white border-t border-[#E4E4E7] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-[#64748B]">
                  Kredensial: {activeCert.credentialId}
                </span>

                {activeCert.verifyUrl && (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <span>Verifikasi Kredensial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
