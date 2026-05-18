import React from "react";
import Container from "../components/Container";
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t-4 border-indigo-500">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a
              href="#home"
              aria-label="SiteKita Home"
              className="text-3xl font-heading font-bold text-white mb-6 block"
            >
              Site<span className="text-indigo-400">kita</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Kami adalah digital agency modern yang fokus pada pembuatan
              website profesional dengan performa tinggi dan desain memukau.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Layanan
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  E-Commerce
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Perusahaan
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Sitekita. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
            aria-label="Kembali ke atas"
          >
            <FiArrowUp size={20} />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
