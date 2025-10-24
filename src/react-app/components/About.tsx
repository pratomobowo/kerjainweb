import { Users, Target, Lightbulb } from 'lucide-react';
import timKerjain from '../assets/images/tim-kerjain.webp';

const values = [
  {
    icon: Users,
    title: 'Kolaboratif',
    description: 'Kami bekerja sama dengan klien untuk menciptakan solusi terbaik.'
  },
  {
    icon: Target,
    title: 'Transparan',
    description: 'Proses kerja yang jelas dan komunikasi yang terbuka sepanjang project.'
  },
  {
    icon: Lightbulb,
    title: 'Cepat Tanggap',
    description: 'Respon cepat dan solusi inovatif untuk setiap tantangan digital.'
  }
];

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang Kerjain Digital Studio
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Kami adalah tim digital profesional yang fokus membantu bisnis dan individu
              di Bandung dengan website berkualitas dan solusi teknologi lengkap. Dengan pengalaman
              bertahun-tahun dalam pembuatan website dan service device, kami memahami betul
              kebutuhan digital pelanggan kami.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Misi kami sederhana: memberikan website profesional yang menarik customer dan
              layanan teknologi terpercaya dengan harga terjangkau. Kami percaya bahwa
              setiap bisnis berhak memiliki website yang bagus dan teknologi yang mudah digunakan.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Nilai-nilai Kami:</h3>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl overflow-hidden h-full min-h-[400px]">
              <img
                src={timKerjain}
                alt="Tim Kerjain Digital Studio"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
              <div className="text-2xl mb-2">💡</div>
              <div className="text-sm font-medium text-gray-800">Ide Kreatif</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-medium text-gray-800">Eksekusi Cepat</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-red-500 mb-2">3+ Tahun</div>
            <div className="text-gray-600">Pengalaman Digital</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-red-500 mb-2">100+</div>
            <div className="text-gray-600">Website Profesional</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-red-500 mb-2">150+</div>
            <div className="text-gray-600">Device Diservis</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-2xl font-bold text-red-500 mb-2">Bandung</div>
            <div className="text-gray-600">Area Layanan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
