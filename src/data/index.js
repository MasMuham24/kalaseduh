import {
  FiFigma,
  FiCode,
  FiSmartphone,
  FiMonitor,
  FiZap,
  FiSearch,
} from "react-icons/fi";
import React from "react";

export const features = [
  {
    id: 1,
    title: "Fast Performance",
    description:
      "Optimized code and assets for blazing fast load times and better SEO.",
    icon: React.createElement(FiZap),
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Perfectly adapted for all devices, from mobile phones to large desktop screens.",
    icon: React.createElement(FiSmartphone),
  },
  {
    id: 3,
    title: "Modern UI/UX",
    description:
      "Clean, intuitive, and conversion-focused designs that your users will love.",
    icon: React.createElement(FiFigma),
  },
  {
    id: 4,
    title: "SEO Friendly",
    description:
      "Built with technical SEO best practices to help you rank higher on Google.",
    icon: React.createElement(FiSearch),
  },
  {
    id: 5,
    title: "Clean Code",
    description:
      "Maintainable, scalable, and modern codebase using the latest web technologies.",
    icon: React.createElement(FiCode),
  },
  {
    id: 6,
    title: "Cross-Browser",
    description:
      "Ensuring your website looks and works perfectly across all modern browsers.",
    icon: React.createElement(FiMonitor),
  },
];

export const stats = [
  { id: 1, value: "10+", label: "Total Project" },
  { id: 2, value: "100%", label: "Client Puas" },
  { id: 3, value: "3+", label: "Tahun Pengalaman" },
];

export const projects = [
  {
    id: 1,
    title: "Kala Seduh Coffee",
    category: "Landing Page",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Modern landing page untuk brand kopi lokal",
    image:
     "../public/img/cafe.png",
    link: "https://landing-page-rosy-ten-21.vercel.app/",
  },
  {
    id: 2,
    title: "Bahasa Nusantara",
    category: "Web App", 
    tech: ["Typescript", "Javascript", "Tailwind"],
    description:
      "Website resmi untuk program pengembangan literasi bahasa dan budaya Indonesia bagi diaspora.",
    image:
      "../public/img/bahasa.png", 
    link: "https://bahasa-nusantara.vercel.app/",
  },
  {
    id: 3,
    title: "Creative Agency Portfolio",
    category: "Landing Page",
    tech: ["React", "Framer Motion", "Tailwind"],
    description:
      "Award-winning interactive portfolio with smooth scroll animations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Healthcare App Portal",
    category: "Web App",
    tech: ["React", "Tailwind", "Firebase"],
    description:
      "Secure patient management system with telemedicine integration.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "350.000",
    description: "Cocok untuk personal branding, UMKM, dan bisnis kecil",
    features: [
      "Up To 3 Halaman Website",
      "Responsive All Devices",
      "Modern Landing Page Design",
      "Integrasi WhatsApp",
      "Basic SEO Optimization",
      "Free Domain .com 1 Tahun",
      "Free SSL Security",
      "Revisi 2x",
    ],
    isPopular: false,
  },

  {
    id: 2,
    name: "Professional",
    price: "850.000",
    description: "Solusi profesional untuk bisnis berkembang",
    features: [
      "Up To 7 Halaman Website",
      "Responsive All Devices",
      "Premium UI/UX Design",
      "SEO Optimization",
      "Google Analytics Integration",
      "WhatsApp & Google Maps Integration",
      "Free Domain .com 1 Tahun",
      "Free Hosting 1 Tahun",
      "Free SSL Security",
      "Fast Performance Optimization",
      "Revisi 5x",
    ],
    isPopular: true,
  },

  {
    id: 3,
    name: "Enterprise",
    price: "1.500.000",
    description: "Website custom lengkap untuk perusahaan dan brand besar",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "Product Catalog & WebCommerce",
      "Checkout WhatsApp System",
      "Admin Dashboard",
      "Premium UI/UX Custom Design",
      "Advanced SEO Optimization",
      "Free Domain .com 1 Tahun",
      "Free Hosting 1 Tahun",
      "Free SSL Security",
      "Priority Support",
      "Maintenance 1 Tahun",
    ],
    isPopular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "CEO StartupX",
    content:
      "Website buatan tim ini sangat luar biasa. Desainnya modern, loading cepat, dan konversi sales kami naik drastis sejak launch!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Owner Fashion Store",
    content:
      "Pelayanan sangat profesional. Mereka mengerti persis apa yang saya mau untuk e-commerce saya. Sangat direkomendasikan!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmad Reza",
    role: "Marketing Director",
    content:
      "Kerja cepat dan hasilnya premium. Komunikasi lancar dan selalu siap sedia saat ada revisi. The best web agency!",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5,
  },
];
