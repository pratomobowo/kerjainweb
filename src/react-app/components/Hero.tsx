import { ArrowRight, Sparkles, Star, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Hero() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/kontak');
  };

  const navigateToServices = () => {
    navigate('/layanan');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-gray-50 pt-16 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Top Left Pattern */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100 to-red-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        
        {/* Bottom Right Pattern */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-100 to-red-50 rounded-full transform translate-x-1/2 translate-y-1/2 opacity-70"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-300"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
            <Star className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="absolute bottom-20 left-20">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
            <Zap className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-10">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
            <Target className="w-6 h-6 text-red-500" />
          </div>
        </div>
        
        <div className="absolute top-1/2 right-10">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
            <Zap className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Solusi Teknologi Terpercaya di Bandung
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Website Profesional &{' '}
            <span className="text-red-500 relative">
              Service Teknologi Terpercaya
              <span className="absolute -top-2 -right-2 text-2xl">💻</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Buat website bisnis Anda yang menarik dan profesional, dilengkapi layanan service laptop & handphone terpercaya.
            Solusi lengkap kebutuhan digital Anda - dari website company profile hingga perbaikan perangkat teknologi di Bandung.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={navigateToContact}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={navigateToServices}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              Lihat Layanan Kami
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">100+</div>
              <div className="text-gray-600 font-medium">Website Profesional</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">150+</div>
              <div className="text-gray-600 font-medium">Device Diservis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">Bandung</div>
              <div className="text-gray-600 font-medium">Area Layanan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">Same Day</div>
              <div className="text-gray-600 font-medium">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
