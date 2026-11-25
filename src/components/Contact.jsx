import { useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import portfolio from '../data/portfolio';

export default function Contact() {
  const { profile, socialMedia } = portfolio;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const whatsappLink = `${socialMedia.whatsapp}?text=${encodeURIComponent(
    profile.whatsappPrefill
  )}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Nama lengkap wajib diisi.';
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = 'Nama minimal terdiri dari 2 karakter.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nextErrors.email = 'Alamat email wajib diisi.';
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Format alamat email tidak valid.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Pesan tidak boleh kosong.';
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Tuliskan pesan minimal 10 karakter agar lebih jelas.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  const socialItems = [
    { name: 'GitHub', href: socialMedia.github, icon: Github },
    { name: 'LinkedIn', href: socialMedia.linkedin, icon: Linkedin },
    { name: 'Instagram', href: socialMedia.instagram, icon: Instagram },
  ].filter((item) => Boolean(item.href));

  return (
    <section id="kontak" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-semibold text-[#2563EB] mb-2">Kontak</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance mb-4">
              Mari berdiskusi tentang proyek atau kolaborasi Anda.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mb-8">
              Kirim pesan melalui formulir di samping atau hubungi saya langsung melalui email dan WhatsApp.
            </p>

            <div className="space-y-4 mb-8">
              {/* Email Row */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#64748B]">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] truncate block transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Salin alamat email"
                  className="inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1.5 text-xs font-medium text-[#475569] hover:text-[#0F172A] bg-white border border-[#E4E4E7] rounded-lg transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Row */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#64748B]">Lokasi</p>
                  <p className="text-sm font-semibold text-[#0F172A]">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[46px] px-6 py-3 text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#15803D] rounded-xl transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 mb-8"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat via WhatsApp</span>
            </a>

            {/* Social Media */}
            <div>
              <p className="text-xs font-medium text-[#64748B] mb-3">Media Sosial</p>
              <div className="flex flex-wrap items-center gap-2.5">
                {socialItems.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 text-xs font-semibold text-[#0F172A] bg-[#FAFAFA] hover:bg-[#F4F4F5] border border-[#E4E4E7] rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <Icon className="w-4 h-4 text-[#475569]" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10 text-center max-w-md mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">
                    Pesan Siap Dikirim
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    Terima kasih, <span className="font-semibold text-[#0F172A]">{formData.name}</span>. Data formulir Anda telah tervalidasi. Anda dapat melanjutkan pengiriman melalui email atau mengirim pesan baru.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        `Pesan Portfolio dari ${formData.name}`
                      )}&body=${encodeURIComponent(
                        `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                      )}`}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Buka di Aplikasi Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F4F4F5] border border-[#E4E4E7] rounded-xl transition-colors"
                    >
                      Tulis Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#0F172A] mb-1.5"
                    >
                      Nama
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full min-h-[46px] px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white border rounded-xl transition-colors focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-[#DC2626] focus:ring-[#DC2626]/25'
                          : 'border-[#E4E4E7] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#DC2626]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#0F172A] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@domain.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full min-h-[46px] px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white border rounded-xl transition-colors focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-[#DC2626] focus:ring-[#DC2626]/25'
                          : 'border-[#E4E4E7] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#DC2626]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#0F172A] mb-1.5"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan kebutuhan proyek, lini waktu, atau pertanyaan Anda..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'contact-message-error' : undefined
                      }
                      className={`w-full px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] bg-white border rounded-xl resize-y transition-colors focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-[#DC2626] focus:ring-[#DC2626]/25'
                          : 'border-[#E4E4E7] focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#DC2626]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[46px] px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
