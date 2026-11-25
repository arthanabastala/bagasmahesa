// Pusat seluruh data portfolio.
// Ubah isi objek di bawah ini untuk menyesuaikan nama, bio, proyek, galeri,
// riwayat pendidikan, sertifikasi, dan tautan kontak tanpa menyentuh komponen UI.

const portfolio = {
  profile: {
    name: 'Raka Pratama',
    brandName: 'Raka Pratama',
    greeting: 'Halo, saya',
    role: 'Web Developer & UI/UX Designer',
    headline: 'Merancang antarmuka web yang presisi, cepat, dan mudah digunakan.',
    description:
      'Saya mengembangkan produk digital dari tahap riset dan perancangan antarmuka hingga implementasi frontend yang responsif, ringan, dan terstruktur.',
    photo: '/src/assets/images/hero_portrait_1795608702955.jpg',
    aboutPhoto: '/src/assets/images/about_workspace_1795608705588.jpg',
    location: 'Bandung, Indonesia',
    email: 'halo@rakapratama.example',
    phoneDisplay: '+62 812-0000-0000',
    whatsappNumber: '6281200000000',
    whatsappPrefill:
      'Halo Raka, saya tertarik untuk berdiskusi mengenai proyek website.',
  },

  highlights: [
    { value: '4+ Tahun', label: 'Pengalaman Industri' },
    { value: '28+ Proyek', label: 'Produk Digital Selesai' },
    { value: '14 Klien', label: 'Kolaborasi Agensi & Bisnis' },
    { value: 'Bandung, ID', label: 'Tersedia untuk Remote' },
  ],

  about: {
    title: 'Menjembatani estetika visual dengan performa kode yang solid.',
    paragraphs: [
      'Berawal dari ketertarikan pada desain grafis dan tipografi, saya mendalami rekayasa perangkat lunak berbasis web agar setiap konsep desain dapat terwujud secara akurat di browser.',
      'Saya terbiasa bekerja dengan pendekatan modular, mengutamakan keterbacaan kode, aksesibilitas antarmuka, dan kecepatan muat halaman di berbagai ukuran perangkat.',
    ],
    details: [
      { label: 'Pendidikan', value: 'S1 Teknik Informatika — Institut Teknologi Bandung' },
      { label: 'Lokasi', value: 'Bandung, Jawa Barat, Indonesia' },
      { label: 'Bidang Utama', value: 'Frontend Engineering & Product Design' },
      { label: 'Pengalaman', value: '4+ Tahun (Freelance & Studio Produk)' },
      { label: 'Status', value: 'Terbuka untuk proyek & kolaborasi baru' },
    ],
  },

  skills: [
    {
      id: 'web-dev',
      icon: 'Code2',
      name: 'Web Development',
      level: 92,
      description:
        'Membangun aplikasi web modern dengan arsitektur komponen yang bersih, terukur, dan mudah dipelihara.',
      tools: ['JavaScript ES6+', 'React', 'Vite', 'REST API'],
    },
    {
      id: 'ui-ux',
      icon: 'Layers',
      name: 'UI/UX Design',
      level: 90,
      description:
        'Merancang alur pengguna, wireframe, prototipe interaktif, serta sistem desain yang konsisten.',
      tools: ['Figma', 'Design System', 'Wireframing', 'Usability'],
    },
    {
      id: 'frontend',
      icon: 'Layout',
      name: 'Frontend Development',
      level: 94,
      description:
        'Mengonversi desain presisi ke dalam kode semantik dengan performa tinggi dan animasi halus.',
      tools: ['Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
    },
    {
      id: 'responsive',
      icon: 'Smartphone',
      name: 'Responsive Web Design',
      level: 95,
      description:
        'Memastikan tata letak adaptif, tipografi nyaman, dan kontrol sentuh optimal dari 360px hingga 1920px.',
      tools: ['Mobile-First', 'CSS Grid', 'Flexbox', 'Accessibility'],
    },
    {
      id: 'graphic-design',
      icon: 'PenTool',
      name: 'Graphic Design',
      level: 85,
      description:
        'Menyusun identitas visual, hierarki tipografi, aset editorial, dan materi presentasi produk.',
      tools: ['Brand Identity', 'Typography', 'Illustrator', 'Layouting'],
    },
    {
      id: 'problem-solving',
      icon: 'Cpu',
      name: 'Problem Solving',
      level: 88,
      description:
        'Menganalisis kebutuhan bisnis menjadi solusi teknis yang efisien, sederhana, dan berdampak nyata.',
      tools: ['System Thinking', 'Debugging', 'Performance Audit', 'Git'],
    },
  ],

  projects: [
    {
      id: 'finledger-analytics',
      title: 'FinLedger Analytics Suite',
      category: 'Web Development',
      year: '2026',
      thumbnail: '/src/assets/images/project_analytics_1795608704442.jpg',
      description:
        'Dashboard pemantauan arus kas dan metrik operasional real-time untuk tim keuangan perusahaan rintisan.',
      technologies: ['React', 'Tailwind CSS', 'Chart Engine', 'Vite'],
      demoUrl: 'https://example.com/demo-finledger',
      sourceUrl: 'https://github.com/example/finledger-analytics',
    },
    {
      id: 'ruang-karya-commerce',
      title: 'RuangKarya Furniture Store',
      category: 'Web Development',
      year: '2025',
      thumbnail: '/src/assets/images/project_storefront_1795608705275.jpg',
      description:
        'Platform katalog dan pemesanan furnitur arsitektural dengan filter material interaktif dan galeri beresolusi tinggi.',
      technologies: ['React', 'Tailwind CSS', 'Context API', 'SEO'],
      demoUrl: 'https://example.com/demo-ruangkarya',
      sourceUrl: 'https://github.com/example/ruangkarya-store',
    },
    {
      id: 'ritme-habit-tracker',
      title: 'Ritme Daily Focus App',
      category: 'UI/UX Design',
      year: '2025',
      thumbnail: '/src/assets/images/project_mobile_ui_1795608705635.jpg',
      description:
        'Perancangan antarmuka aplikasi produktivitas mobile dengan fokus pada kebiasaan harian dan kalender bebas distraksi.',
      technologies: ['Figma', 'Design Tokens', 'Prototyping', 'Micro-UI'],
      demoUrl: 'https://example.com/demo-ritme',
      sourceUrl: '',
    },
    {
      id: 'architecton-identity',
      title: 'Architecton Brand & Web System',
      category: 'Branding',
      year: '2024',
      thumbnail: '/src/assets/images/project_creative_studio_1795608706058.jpg',
      description:
        'Panduan identitas visual, sistem tipografi editorial, dan situs profil studio arsitektur modern.',
      technologies: ['Brand System', 'Typography', 'React', 'Grid Layout'],
      demoUrl: 'https://example.com/demo-architecton',
      sourceUrl: 'https://github.com/example/architecton-web',
    },
    {
      id: 'studio-portal-ui',
      title: 'Kinetik Workspace Portal',
      category: 'UI/UX Design',
      year: '2024',
      thumbnail: '/src/assets/images/about_workspace_1795608705588.jpg',
      description:
        'Redesain portal kolaborasi internal dengan fokus pada keterbacaan tabel jadwal dan manajemen dokumen tim.',
      technologies: ['Figma', 'User Research', 'Component Library', 'A11y'],
      demoUrl: 'https://example.com/demo-kinetik',
      sourceUrl: '',
    },
    {
      id: 'monolith-gallery-web',
      title: 'Monolith Editorial Showcase',
      category: 'Web Development',
      year: '2024',
      thumbnail: '/src/assets/images/gallery_architecture_1795608706736.jpg',
      description:
        'Situs pameran arsitektur digital dengan optimasi gambar lazy-loading, navigasi keyboard, dan transisi halus.',
      technologies: ['React', 'Motion', 'Tailwind CSS', 'Vite'],
      demoUrl: 'https://example.com/demo-monolith',
      sourceUrl: 'https://github.com/example/monolith-showcase',
    },
  ],

  gallery: [
    {
      id: 'gal-1',
      title: 'Eksplorasi Ruang Studio Minimalis',
      category: 'Arsitektur & Ruang',
      year: '2026',
      image: '/src/assets/images/gallery_architecture_1795608706736.jpg',
      caption:
        'Kajian pencahayaan alami dan garis geometris sebagai inspirasi tata letak antarmuka digital.',
      featured: true,
    },
    {
      id: 'gal-2',
      title: 'Sketsa Wireframe & Alur Pengguna',
      category: 'Proses Desain',
      year: '2025',
      image: '/src/assets/images/gallery_sketching_1795608707211.jpg',
      caption:
        'Tahap eksplorasi awal di atas kertas sebelum masuk ke penyusunan komponen di Figma.',
      featured: false,
    },
    {
      id: 'gal-3',
      title: 'Sistem Tipografi & Panduan Cetak',
      category: 'Identitas Visual',
      year: '2025',
      image: '/src/assets/images/project_creative_studio_1795608706058.jpg',
      caption:
        'Penyusunan skala huruf dan palet warna netral untuk klien studio desain.',
      featured: false,
    },
    {
      id: 'gal-4',
      title: 'Meja Kerja & Setup Pengembangan',
      category: 'Ruang Kerja',
      year: '2025',
      image: '/src/assets/images/about_workspace_1795608705588.jpg',
      caption:
        'Lingkungan kerja harian untuk penulisan kode frontend dan review desain antarmuka.',
      featured: false,
    },
    {
      id: 'gal-5',
      title: 'Antarmuka Analitik Keuangan',
      category: 'Produk Digital',
      year: '2026',
      image: '/src/assets/images/project_analytics_1795608704442.jpg',
      caption:
        'Tangkapan layar implementasi modul grafik keuangan dengan fokus pada kontras data.',
      featured: false,
    },
  ],

  education: [
    {
      id: 'edu-1',
      period: '2020 — 2024',
      institution: 'Institut Teknologi Bandung',
      major: 'S1 Teknik Informatika',
      location: 'Bandung',
      description:
        'Fokus pada Rekayasa Perangkat Lunak dan Interaksi Manusia-Komputer. Tugas akhir membahas optimasi performa rendering antarmuka web modern.',
    },
    {
      id: 'edu-2',
      period: '2023',
      institution: 'Studi Independen Kampus Merdeka',
      major: 'Front-End Web & UI/UX Engineering',
      location: 'Daring',
      description:
        'Menyelesaikan proyek kolaborasi lintas disiplin dalam membangun aplikasi web aksesibel dengan standar industri.',
    },
    {
      id: 'edu-3',
      period: '2017 — 2020',
      institution: 'SMA Negeri 3 Bandung',
      major: 'Matematika & Ilmu Pengetahuan Alam',
      location: 'Bandung',
      description:
        'Aktif dalam ekstrakurikuler desain grafis dan tim pengembangan majalah digital sekolah.',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera & Meta',
      year: '2025',
      credentialId: 'META-FE-2025-8841',
      description:
        'Sertifikasi komprehensif mengenai arsitektur React, manajemen state, pengujian antarmuka, dan desain responsif.',
      verifyUrl: 'https://example.com/verify/meta-fe',
    },
    {
      id: 'cert-2',
      name: 'Google UX Design Professional Certificate',
      issuer: 'Google Career Certificates',
      year: '2024',
      credentialId: 'GGL-UX-2024-4192',
      description:
        'Pelatihan menyeluruh mencakup riset pengguna, penyusunan persona, wireframing, prototyping di Figma, dan usability testing.',
      verifyUrl: 'https://example.com/verify/google-ux',
    },
    {
      id: 'cert-3',
      name: 'Belajar Fundamental Front-End Web Development',
      issuer: 'Dicoding Indonesia',
      year: '2024',
      credentialId: 'DCD-FEW-2024-9031',
      description:
        'Penguasaan JavaScript modern, Web Components, bundlers, serta integrasi asynchronous API.',
      verifyUrl: 'https://example.com/verify/dicoding-fe',
    },
    {
      id: 'cert-4',
      name: 'Web Accessibility & Inclusive Design',
      issuer: 'W3Cx Foundation',
      year: '2023',
      credentialId: 'W3CX-A11Y-2023-5520',
      description:
        'Standar WCAG 2.1 AA untuk kontras warna, navigasi keyboard, dan kompatibilitas pembaca layar.',
      verifyUrl: 'https://example.com/verify/w3cx-a11y',
    },
  ],

  socialMedia: {
    instagram: 'https://instagram.com/username-anda',
    github: 'https://github.com/username-anda',
    linkedin: 'https://linkedin.com/in/username-anda',
    whatsapp: 'https://wa.me/6281200000000',
  },
};

export default portfolio;
