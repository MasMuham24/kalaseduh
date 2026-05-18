import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import Button from "../components/Button";
import { FiMail, FiPhone, FiInstagram, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert("Pesan berhasil dikirim!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Hubungi Kami"
          title="Mulai Project Anda Sekarang"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Informasi Kontak
            </h3>
            <p className="text-slate-600 mb-10">
              Jangan ragu untuk menghubungi kami untuk konsultasi gratis. Kami
              siap membantu mewujudkan website impian Anda.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    WhatsApp / Phone
                  </h4>
                  <p className="text-slate-600">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">hello@webstudio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0">
                  <FiInstagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Instagram</h4>
                  <p className="text-slate-600">@sitekita.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white outline-none resize-none"
                  placeholder="Ceritakan tentang project Anda..."
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim...
                  </span>
                ) : (
                  "Kirim Pesan Sekarang"
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
