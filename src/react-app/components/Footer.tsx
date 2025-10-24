import { Mail, MessageCircle, MapPin, Star, Zap, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleWhatsApp = () => {
    const phoneNumber = '6281234567890';
    const message = encodeURIComponent('Halo! Saya ingin tahu lebih lanjut tentang layanan Kerjain Digital Studio.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const navigateToSection = (path: string, sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Top Left Pattern */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-800 to-red-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        
        {/* Bottom Right Pattern */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-800 to-red-900 rounded-full transform translate-x-1/2 translate-y-1/2 opacity-20"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-600 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-600 rounded-full animate-pulse delay-300"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full shadow-lg">
            <Star className="w-6 h-6 text-red-500" />
          </div>
        </div>
        
        <div className="absolute bottom-20 left-20">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full shadow-lg">
            <Zap className="w-6 h-6 text-red-500" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-10">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full shadow-lg">
            <Heart className="w-5 h-5 text-red-500" />
          </div>
        </div>
        
        <div className="absolute top-1/2 right-10">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full shadow-lg">
            <Zap className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Kerjain Digital Studio
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Solusi teknologi terpercaya di Bandung. Web development, setup server, dan service laptop profesional
              di workshop kami. Partner teknologi untuk bisnis dan personal Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </button>
              <button
                onClick={() => window.location.href = 'mailto:hello@kerjain.studio'}
                className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-500 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Kami
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigasi Cepat</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateToPage('/')}
                  className={`transition-colors ${
                    location.pathname === '/' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToPage('/layanan')}
                  className={`transition-colors ${
                    location.pathname === '/layanan' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                  }`}
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToPage('/tentang')}
                  className={`transition-colors ${
                    location.pathname === '/tentang' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                  }`}
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection('/', 'testimoni')}
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Testimoni
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToPage('/artikel')}
                  className={`transition-colors ${
                    location.pathname === '/artikel' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                  }`}
                >
                  Artikel
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToPage('/kontak')}
                  className={`transition-colors ${
                    location.pathname === '/kontak' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                  }`}
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a 
                    href="mailto:hello@kerjain.studio"
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    hello@kerjain.studio
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <button
                    onClick={handleWhatsApp}
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    +62 812-3456-7890
                  </button>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Area Layanan</p>
                  <p className="text-white">Bandung & Sekitarnya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © 2025 Kerjain Digital Studio — All Rights Reserved.
              <span className="ml-2 text-red-500">
                <Heart className="w-4 h-4 inline" />
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Area Bandung</span>
              <span>•</span>
              <span>Workshop Service</span>
              <span>•</span>
              <span>Emergency Support</span>
              <span>•</span>
              <span>Konsultasi Gratis</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
