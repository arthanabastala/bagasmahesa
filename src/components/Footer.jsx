import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import portfolio from '../data/portfolio';

const FOOTER_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Karya', href: '#karya' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Sertifikasi', href: '#sertifikasi' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Footer() {
  const { profile, socialMedia } = portfolio;

  const socials = [
    { label: 'GitHub', href: socialMedia.github, icon: Github },
    { label: 'LinkedIn', href: socialMedia.linkedin, icon: Linkedin },
    { label: 'Instagram', href: socialMedia.instagram, icon: Instagram },
    { label: 'WhatsApp', href: socialMedia.whatsapp, icon: MessageCircle },
  ].filter((item) => Boolean(item.href));

  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-[#E4E4E7]">
          {/* Brand & Short Bio */}
          <div className="md:col-span-5">
            <a
              href="#beranda"
              className="font-display text-lg font-bold tracking-tight text-[#0F172A] inline-block mb-3"
            >
              {profile.brandName}
            </a>
            <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
              {profile.role} yang berfokus pada pengembangan website modern, bersih, responsif, dan berorientasi pada pengguna.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-[#0F172A] mb-3">Navigasi</p>
            <nav aria-label="Navigasi footer" className="grid grid-cols-2 gap-y-2 gap-x-4">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#475569] hover:text-[#2563EB] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-[#0F172A] mb-3">Terhubung</p>
            <div className="flex items-center gap-2.5">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E7] hover:border-[#2563EB] text-[#475569] hover:text-[#2563EB] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#64748B]">
          <p>&copy; 2026 {profile.name}. All rights reserved.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
