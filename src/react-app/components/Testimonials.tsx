import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Pemilik Toko Laptop',
    company: 'Tech Store Bandung',
    content: 'Laptop saya yang mati total berhasil diperbaiki dalam 1 hari. Pengerjaan cepat dan hasil memuaskan. Sangat membantu sekali!',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Mahasiswa',
    company: 'Universitas Padjadjaran',
    content: 'Laptop lupa password Windows dan ada data penting. Tim Kerjain berhasil bantu reset password tanpa kehilangan data. Respons cepat dan profesional!',
    rating: 5,
    image: '👩‍🎓'
  },
  {
    name: 'Budi Santoso',
    role: 'Owner Cafe',
    company: 'Kopi Kenangan Bandung',
    content: 'Website company profile yang dibuat sangat profesional dan SEO friendly. Pelanggan jadi mudah menemukan cafe kami di Google. Highly recommended!',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Maya Kusuma',
    role: 'Freelancer',
    company: 'Digital Creative',
    content: 'LCD laptop pecar diganti dengan harga terjangkau dan pengerjaan cepat. Teknisi ramah dan jelaskan masalah dengan detail. Puas sekali!',
    rating: 5,
    image: '👩‍💻'
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Startup Founder',
    company: 'Tech Startup Bandung',
    content: 'Setup server untuk aplikasi kami dilakukan dengan sangat profesional. Dari konfigurasi hingga maintenance, semuanya dijelaskan dengan baik.',
    rating: 5,
    image: '👨‍💻'
  },
  {
    name: 'Rina Marlina',
    role: 'Online Shop Owner',
    company: 'Fashion Online',
    content: 'Flash ulang laptop dan install ulang semua software. Sekarang laptop jadi cepat dan ringan. Pelayanan sangat memudahkan, nggak perlu antri!',
    rating: 5,
    image: '👩‍🎨'
  }
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Pelanggan Kami di Bandung
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Lebih dari 150+ pelanggan telah mempercayakan perangkat dan kebutuhan teknologi mereka kepada kami.
            Ini adalah beberapa feedback dari pelanggan setia kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-red-500 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-red-500 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
}
