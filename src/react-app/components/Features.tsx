import { CheckCircle, Wrench, Globe, Clock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Website SEO Friendly',
    description: 'Website mudah ditemukan di Google. Customer jadi lebih gampang menemukan bisnis Anda.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Clock,
    title: 'Pengerjaan Cepat',
    description: 'Website jadi 3-7 hari, service device same-day. Cepat tanpa ngurangin kualitas.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Wrench,
    title: 'Tim Profesional',
    description: 'Developer dan teknisi ahli. Berpengalaman buat website dan service semua merek device.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: CheckCircle,
    title: 'Garansi & Support',
    description: 'Garansi semua layanan. Support siap bantu kalau website atau device Anda ada masalah.',
    color: 'bg-red-100 text-red-600'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Pilih Layanan Kami?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Keunggulan layanan digital kami yang membuat Kerjain Digital Studio menjadi
            pilihan terpercaya untuk pembuatan website dan service teknologi di Bandung.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
