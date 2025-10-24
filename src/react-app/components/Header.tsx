import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import logoKerjain from '../assets/images/logo-kerjain-digital-studio.webp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <div className="relative">
                <img
                  src={logoKerjain}
                  alt="Kerjain Digital Studio"
                  className="h-12 w-auto mr-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => location.pathname === '/' ? scrollToSection('home') : navigateToPage('/')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/'
                  ? 'bg-red-50 text-red-500'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
              }`}
            >
              <div className="flex items-center space-x-1">
                <span>Home</span>
              </div>
            </button>
            <button
              onClick={() => navigateToPage('/layanan')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/layanan'
                  ? 'bg-red-50 text-red-500'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
              }`}
            >
              Layanan
            </button>
            <button
              onClick={() => navigateToPage('/tentang')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/tentang'
                  ? 'bg-red-50 text-red-500'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
              }`}
            >
              Tentang Kami
            </button>
            <button
              onClick={() => location.pathname === '/' ? scrollToSection('testimoni') : navigateToPage('/#testimoni')}
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-all duration-300 font-medium"
            >
              Testimoni
            </button>
            <button
              onClick={() => navigateToPage('/kontak')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === '/kontak'
                  ? 'bg-red-50 text-red-500'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
              }`}
            >
              Kontak
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => navigateToPage('/kontak')}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Konsultasi Gratis Sekarang</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg rounded-b-2xl mt-1 mx-2">
              <button
                onClick={() => location.pathname === '/' ? scrollToSection('home') : navigateToPage('/')}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium w-full text-left ${
                  location.pathname === '/'
                    ? 'bg-red-50 text-red-500'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Beranda</span>
                </div>
              </button>
              <button
                onClick={() => navigateToPage('/layanan')}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium w-full text-left ${
                  location.pathname === '/layanan'
                    ? 'bg-red-50 text-red-500'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
                }`}
              >
                Layanan
              </button>
              <button
                onClick={() => navigateToPage('/tentang')}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium w-full text-left ${
                  location.pathname === '/tentang'
                    ? 'bg-red-50 text-red-500'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
                }`}
              >
                Tentang Kami
              </button>
              <button
                onClick={() => location.pathname === '/' ? scrollToSection('testimoni') : navigateToPage('/#testimoni')}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-all duration-300 font-medium w-full text-left"
              >
                Testimoni
              </button>
              <button
                onClick={() => navigateToPage('/kontak')}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium w-full text-left ${
                  location.pathname === '/kontak'
                    ? 'bg-red-50 text-red-500'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-red-500'
                }`}
              >
                Kontak
              </button>
              <div className="px-3 py-2">
                <button
                  onClick={() => navigateToPage('/kontak')}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Konsultasi Gratis Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
