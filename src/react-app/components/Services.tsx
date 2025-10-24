import { Globe, Server, Wrench, Smartphone, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router';

const services = [
  {
    icon: Globe,
    title: 'Jasa Pembuatan Website',
    description: 'Website profesional untuk bisnis Anda. Mudah dikelola, cepat, dan tampilan menarik yang bikin customer tertarik!',
    features: ['Website Company Profile', 'Toko Online/E-Commerce', 'Website Landing Page', 'Website Custom'],
    keywords: 'jasa pembuatan website Bandung, web developer Bandung, website profesional, buat website bisnis'
  },
  {
    icon: Megaphone,
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Iklan di Facebook dan Instagram yang tepat sasaran. Dapatkan customer lebih banyak dengan budget yang efisien.',
    features: ['Facebook Ads', 'Instagram Ads', 'Campaign Management', 'Performance Report'],
    keywords: 'jasa Meta Ads Bandung, Facebook Ads Bandung, Instagram Ads Bandung, jasa iklan sosial media, digital marketing Bandung'
  },
  {
    icon: Server,
    title: 'Setting Hosting, Server dan Domain',
    description: 'Layanan setup hosting cepat dan domain untuk website Anda. Online 24 jam dengan support teknis.',
    features: ['Web Hosting', 'Domain Registration', 'SSL Certificate', 'Email Bisnis'],
    keywords: 'jasa hosting Bandung, domain murah Bandung, web hosting Indonesia, SSL certificate'
  },
  {
    icon: Wrench,
    title: 'Service Laptop & Komputer',
    description: 'Perbaikan semua masalah laptop/komputer Anda. Dari yang ringan sampai berat, kami tangani dengan profesional.',
    features: ['Ganti LCD/Layar', 'Upgrade Komponen', 'Install Ulang Laptop', 'Data Recovery'],
    keywords: 'service laptop Bandung, reparasi laptop Bandung, service komputer Bandung, ganti LCD laptop'
  },
  {
    icon: Smartphone,
    title: 'Service Handphone',
    description: 'Perbaikan semua merek handphone. Layar pecah, baterai drop, atau masalah lainnya? Kami solusinya!',
    features: ['Ganti LCD/Layar', 'Ganti Baterai', 'Service Charging Port', 'Software/Hardware'],
    keywords: 'service hp Bandung, reparasi handphone Bandung, service smartphone Bandung, ganti LCD hp'
  },
];

export default function Services() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/kontak');
  };

  const navigateToServicesPage = () => {
    navigate('/layanan');
  };
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jasa Pembuatan Website & Service Teknologi
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Website profesional untuk bisnis Anda plus layanan service laptop & handphone terpercaya.
            Solusi digital lengkap yang mudah dipahami dan harga terjangkau di Bandung.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Keywords for SEO */}
                <p className="text-xs text-gray-500 mt-4 italic">
                  {service.keywords}
                </p>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={navigateToServicesPage}
                    className="text-red-500 font-semibold hover:text-red-600 transition-colors flex items-center group"
                  >
                    Pelajari Lebih Lanjut
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Butuh Website untuk Bisnis atau Service Device?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Konsultasi gratis untuk kebutuhan digital Anda. Buat website profesional yang menarik customer,
              atau perbaikan laptop/handphone - semua bisa kami kerjakan!
            </p>
            <button
              onClick={navigateToContact}
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
