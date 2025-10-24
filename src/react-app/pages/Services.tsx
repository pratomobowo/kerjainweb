import { useEffect } from 'react';
import { ArrowRight, Globe, Server, Wrench, Smartphone, Star, Megaphone } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

const services = [
  {
    icon: Globe,
    title: 'Jasa Pembuatan Website',
    description: 'Website profesional untuk bisnis Anda. Mudah dikelola, cepat, dan tampilan menarik yang bikin customer tertarik!',
    features: ['Website Company Profile', 'Toko Online/E-Commerce', 'Website Landing Page', 'Website Custom'],
    detailedDescription: 'Kami buatkan website profesional yang tidak hanya bagus dilihat, tapi juga membantu bisnis Anda dapat lebih banyak customer. Website yang kami buat sudah dioptimasi biar mudah ditemukan di Google, loading cepat, dan bisa diakses dari HP. Cocok untuk pemilik bisnis di Bandung yang ingin punya website profesional tanpa ribet.',
    seoKeywords: 'jasa pembuatan website Bandung, web developer Bandung, website profesional, buat website bisnis, website murah Bandung'
  },
  {
    icon: Megaphone,
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Iklan di Facebook dan Instagram yang tepat sasaran. Dapatkan customer lebih banyak dengan budget yang efisien.',
    features: ['Facebook Ads', 'Instagram Ads', 'Campaign Management', 'Performance Report'],
    detailedDescription: 'Bikin iklan Facebook dan Instagram yang tepat sasaran biar customer jadi banyak. Kami bantu dari buat iklan, setting target audience, sampai monitoring hasil. Dengan budget yang efisien, iklan Anda akan muncul di orang yang tepat dan tertarik dengan produk Anda. Cocok untuk bisnis di Bandung yang mau dapat lebih banyak customer dari sosial media.',
    seoKeywords: 'jasa Meta Ads Bandung, Facebook Ads Bandung, Instagram Ads Bandung, jasa iklan sosial media, digital marketing Bandung, iklan Facebook murah'
  },
  {
    icon: Server,
    title: 'Setting Hosting, Server dan Domain',
    description: 'Layanan setup hosting cepat dan domain untuk website Anda. Online 24 jam dengan support teknis.',
    features: ['Web Hosting', 'Domain Registration', 'SSL Certificate', 'Email Bisnis'],
    detailedDescription: 'Setiap website butuh rumah (hosting) dan alamat (domain). Kami bantu setup hosting yang cepat dan stabil biar website Anda selalu online 24 jam. Dapatkan domain .com/.id yang profesional dan SSL certificate biar website Anda aman dan terpercaya di mata customer.',
    seoKeywords: 'jasa hosting Bandung, domain murah Bandung, web hosting Indonesia, SSL certificate, hosting website cepat, setup server Bandung'
  },
  {
    icon: Wrench,
    title: 'Service Laptop & Komputer',
    description: 'Perbaikan semua masalah laptop/komputer Anda. Dari yang ringan sampai berat, kami tangani dengan profesional.',
    features: ['Ganti LCD/Layar', 'Upgrade Komponen', 'Install Ulang Laptop', 'Data Recovery'],
    detailedDescription: 'Laptop Anda bermasalah? Kami bantu! Dari laptop yang lemot, tidak bisa nyala, lupa password, sampai LCD pecah - semua bisa kami perbaiki. Teknisi kami berpengalaman tangani semua merek laptop (Lenovo, ASUS, HP, Dell, dll) dengan harga terjangkau dan garansi.',
    seoKeywords: 'service laptop Bandung, reparasi laptop Bandung, service komputer Bandung, ganti LCD laptop, laptop lemot Bandung'
  },
  {
    icon: Smartphone,
    title: 'Service Handphone',
    description: 'Perbaikan semua merek handphone. Layar pecah, baterai drop, atau masalah lainnya? Kami solusinya!',
    features: ['Ganti LCD/Layar', 'Ganti Baterai', 'Service Charging Port', 'Software/Hardware'],
    detailedDescription: 'HP Anda rusak? Jangan khawatir! Kami service semua merek handphone (iPhone, Samsung, Xiaomi, Oppo, Vivo, dll). Mulai dari layar pecah, baterai yang cepat habis, tidak bisa cas, sampai lupa password/pola. Dengan sparepart original dan teknisi berpengalaman, HP Anda akan kembali normal.',
    seoKeywords: 'service hp Bandung, reparasi handphone Bandung, service smartphone Bandung, ganti LCD hp, baterai hp drop'
  },
];

export default function ServicesPage() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply Poppins font to body
    document.body.style.fontFamily = "'Poppins', sans-serif";

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Layanan Teknologi Terpercaya di Bandung
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Website Profesional &{' '}
              <span className="text-red-500 relative">
                Service Teknologi Terpercaya
                <span className="absolute -top-2 -right-2 text-2xl">💻</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Buat website bisnis yang menarik customer plus service laptop & handphone terpercaya.
              Solusi lengkap kebutuhan digital Anda dengan harga terjangkau di Bandung.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services-list');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-red-500 hover:text-red-500 transition-all duration-300"
              >
                Lihat Semua Layanan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services-list" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Layanan Digital Lengkap Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Website profesional untuk bisnis Anda plus layanan service laptop & handphone terpercaya.
              Semua kebutuhan digital Anda dalam satu tempat dengan harga terjangkau.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Apa yang Anda dapatkan:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={scrollToContact}
                      className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center"
                    >
                      Konsultasi Layanan Ini
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <IconComponent className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">
                          {service.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-2 italic">
                          {service.seoKeywords}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Service Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Butuh Bantuan Teknologi Lainnya?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Masalah teknologi lainnya? Tim kami siap membantu dengan berbagai kebutuhan IT custom Anda.
              Konsultasi gratis untuk semua solusi teknologi di Bandung!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Konsultasi Teknologi Custom
              </button>
              <button
                onClick={() => window.location.href = 'mailto:hello@kerjain.studio'}
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
              >
                Kirim Brief Project
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}