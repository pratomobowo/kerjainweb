import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleWhatsApp = () => {
    const phoneNumber = '6281234567890';
    const message = encodeURIComponent('Halo! Saya ingin konsultasi tentang layanan Kerjain Digital Studio.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@kerjain.studio';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const services = [
    'Web Development (Company Profile, E-Commerce)',
    'Server Setup & Configuration',
    'Service Laptop (Hardware & Software)',
    'Service Handphone & Smartphone',
    'Data Recovery & Backup',
    'Lainnya / Custom IT Solution'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi Kami
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Butuh Bantuan{' '}
              <span className="text-red-500 relative">
                Teknologi di Bandung?
                <span className="absolute -top-2 -right-2 text-2xl">🔧</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Service laptop, pembuatan website, atau setup server? Hubungi kami sekarang untuk
              konsultasi gratis dan solusi teknologi terbaik di Bandung.
            </p>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Kirim Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cara Tercepat Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda. Tim teknisi kami siap membantu kebutuhan teknologi Anda di Bandung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div 
              onClick={handleWhatsApp}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">+62 812-3456-7890</p>
              <p className="text-sm text-green-600 font-medium">Response kurang dari 1 jam</p>
            </div>

            {/* Email */}
            <div 
              onClick={handleEmailClick}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-4">hello@kerjain.studio</p>
              <p className="text-sm text-red-600 font-medium">Response kurang dari 12 jam</p>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telepon</h3>
              <p className="text-gray-600 mb-4">+62 812-3456-7890</p>
              <p className="text-sm text-blue-600 font-medium">Senin - Jumat, 09:00-18:00</p>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokasi</h3>
              <p className="text-gray-600 mb-4">Bandung, Indonesia</p>
              <p className="text-sm text-purple-600 font-medium">Melayani seluruh Indonesia</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form & Operating Hours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kirim Detail Masalah & Jam Operasional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Punya masalah laptop atau butuh website? Kirim detail masalah dan kami akan berikan solusi cepat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 mb-6 text-white">
                <h3 className="text-2xl font-bold">Kirim Detail Masalah Anda</h3>
                <p className="text-red-100 mt-2">Jelaskan detail kerusakan laptop atau kebutuhan website Anda</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Terima Kasih! Pesan Anda Terkirim
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Tim teknisi kami akan segera menghubungi Anda dalam beberapa jam. Siap untuk solusi teknologi Anda!
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                      Kirim Pesan Lagi
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                          placeholder="Nama kamu"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                          placeholder="email@kamu.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          No. WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Layanan yang Dibutuhkan *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Pilih Layanan</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Detail Masalah / Pesan *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Jelaskan detail masalah laptop atau kebutuhan website Anda..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Side - Operating Hours */}
            <div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 mb-6 text-white">
                <h3 className="text-2xl font-bold">Jam Operasional & Service</h3>
                <p className="text-blue-100 mt-2">Kami siap membantu di jam-jam berikut untuk area Bandung</p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <p className="text-gray-300 mb-8 text-lg">
                  Kami siap membantu Anda di jam-jam berikut. Untuk emergency service laptop,
                  jangan ragu hubungi kami via WhatsApp 24/7 untuk area Bandung.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span className="font-medium">Senin - Jumat</span>
                    </div>
                    <span className="text-red-400 font-semibold">09:00 - 18:00 WIB</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium">Sabtu</span>
                    </div>
                    <span className="text-yellow-400 font-semibold">09:00 - 15:00 WIB</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Minggu & Libur</span>
                    </div>
                    <span className="text-green-400 font-semibold">Emergency Only</span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Butuh Service Darurat?</h4>
                  <p className="text-gray-300 mb-6">
                    Laptop rusak mendadak atau website down? Hubungi kami via WhatsApp untuk emergency service 24/7 di Bandung.
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Emergency Service Bandung
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}