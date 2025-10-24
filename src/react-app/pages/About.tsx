import { useEffect } from 'react';
import { ArrowRight, Users, Target, Lightbulb, Award, Clock, Heart, CheckCircle } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

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

const milestones = [
  {
    year: '2022',
    title: 'Awal Perjalanan',
    description: 'Kerjain Digital Studio didirikan dengan misi membantu UMKM go digital.',
    icon: '🚀'
  },
  {
    year: '2023',
    title: 'Ekspansi Layanan',
    description: 'Menambah berbagai layanan digital marketing dan admin support.',
    icon: '📈'
  },
  {
    year: '2024',
    title: '50+ Klien Puas',
    description: 'Bekerja sama dengan lebih dari 50 UMKM dari berbagai industri.',
    icon: '🤝'
  },
  {
    year: '2025',
    title: 'Inovasi Berlanjut',
    description: 'Terus berinovasi dengan solusi-solusi digital terkini.',
    icon: '💡'
  }
];

const team = [
  {
    name: 'Tim Kreatif',
    role: 'Design & Development',
    description: 'Ahli dalam menciptakan pengalaman digital yang menarik dan fungsional.',
    icon: '👨‍💻'
  },
  {
    name: 'Tim Marketing',
    role: 'Digital Strategy',
    description: 'Spesialis dalam strategi digital marketing yang efektif dan terukur.',
    icon: '📊'
  },
  {
    name: 'Tim Support',
    role: 'Customer Success',
    description: 'Selalu siap membantu dan memastikan kepuasan pelanggan.',
    icon: '💬'
  }
];

export default function AboutPage() {
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
              <Heart className="w-4 h-4 mr-2" />
              Tentang Kami
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cerita Kami,{' '}
              <span className="text-red-500 relative">
                Partner Digital Anda
                <span className="absolute -top-2 -right-2 text-2xl">🤝</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Kami adalah tim kreatif yang fokus membantu UMKM tumbuh lewat solusi digital. 
              Dengan pengalaman bertahun-tahun, kami memahami betul tantangan yang dihadapi 
              bisnis kecil dalam mengembangkan presence digital mereka.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Project Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Bagaimana Semua Dimulai
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kerjain Digital Studio lahir dari keprihatinan melihat banyak UMKM yang 
                kesulitan Go Digital. Harga yang mahal dan proses yang rumit seringkali 
                menjadi penghalang bagi bisnis kecil untuk memiliki presence digital yang kuat.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Misi kami sederhana: memberikan akses teknologi digital berkualitas tinggi 
                dengan harga yang terjangkau, sehingga setiap UMKM bisa bersaing di era digital. 
                Kami percaya bahwa teknologi harus mudah diakses oleh semua, bukan hanya bisnis besar.
              </p>

              {/* Core Values */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nilai-nilai Kami:</h3>
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
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tim Kreatif</h3>
                  <p className="text-gray-600">Siap membantu wujudkan visi digital kamu</p>
                </div>
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
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dari startup kecil hingga menjadi partner digital terpercaya untuk puluhan UMKM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{milestone.icon}</div>
                  <div className="text-red-500 font-bold mb-2">{milestone.year}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai talenta terbaik yang siap membantu kesuksesan digital bisnis kamu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Kenapa Banyak UMKM Percaya pada Kami?
              </h2>
              <p className="text-red-100 text-lg max-w-2xl mx-auto">
                Kami bukan sekadar vendor, kami adalah partner digital yang peduli dengan kesuksesan bisnis kamu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Berpengalaman</h3>
                <p className="text-red-100 text-sm">3+ tahun fokus di solusi digital UMKM</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Tepat Waktu</h3>
                <p className="text-red-100 text-sm">Rata-rata project selesai dalam 3 hari</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Kualitas Terjamin</h3>
                <p className="text-red-100 text-sm">98% tingkat kepuasan klien</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-red-100 text-sm">Support 24/7 untuk semua klien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Siap Mulai Kolaborasi dengan Kami?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Mari wujudkan transformasi digital untuk bisnis kamu. Tim kami siap membantu dengan sepenuh hati.
          </p>
          <div className="bg-gray-900 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <p className="text-gray-300 mb-6">
              Hubungi kami sekarang untuk konsultasi gratis dan temukan solusi digital terbaik untuk bisnis kamu.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}