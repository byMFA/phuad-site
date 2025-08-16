'use client';

import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User, Star, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

const PhuadHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Blazer Collection",
      price: "₺2,890",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Blazers"
    },
    {
      id: 2,
      name: "Luxury Dress Series",
      price: "₺3,450",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Dresses"
    },
    {
      id: 3,
      name: "Signature Coat",
      price: "₺4,200",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Coats"
    },
    {
      id: 4,
      name: "Executive Suit",
      price: "₺5,100",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Suits"
    }
  ];

  const collections = [
    {
      name: "Spring/Summer 2024",
      description: "Hafiflik ve zarafet buluşuyor",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Executive Collection",
      description: "İş dünyası için premium seçimler",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Evening Elegance",
      description: "Özel günler için mükemmel parçalar",
      image: "https://images.unsplash.com/photo-1566479179817-92cf5e1cba8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Auto-slide hero images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 tracking-wider">PHUAD</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">Kadın</a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">Erkek</a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">Koleksiyonlar</a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">Hakkımızda</a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">İletişim</a>
              </div>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors" />
              <User className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors" />
              <ShoppingBag className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600">Kadın</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600">Erkek</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600">Koleksiyonlar</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600">Hakkımızda</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600">İletişim</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[currentImageIndex]}
            alt="PHUAD Fashion"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
              PHUAD
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8 font-light">
              Premium Giyimde Yeni Standart
            </p>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
              Zarafet ve kaliteyi bir araya getiren, her detayında mükemmelliği hissedebileceğiniz premium koleksiyonlar
            </p>
            <button className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors duration-300 tracking-wide">
              KOLEKSİYONU KEŞFET
            </button>
          </div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Öne Çıkan Ürünler</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Her parçası özenle seçilmiş, yüksek kalite ve zarif tasarımın buluştuğu premium koleksiyonumuz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-white rounded-lg shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-2xl font-light text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Koleksiyonlarımız</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Farklı yaşam tarzları için tasarlanmış, her koleksiyonumuz kendine özgü karakteri ile öne çıkıyor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-medium mb-2">{collection.name}</h4>
                    <p className="text-white/90">{collection.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Marka Hikayemiz</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PHUAD, zarafet ve kalitenin buluştuğu noktada doğdu. Her parçamız, modern yaşamın dinamizmini klasik estetiğin 
                zamansızlığıyla harmanlayarak sizlere sunuluyor.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Premium kumaşlar, özel tasarımlar ve mükemmel işçilik bir araya gelerek, sadece giyim değil, bir yaşam tarzı 
                sunuyoruz. PHUAD ile farkınızı ortaya koyun.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-light text-gray-900">100+</div>
                  <div className="text-gray-600">Özel Tasarım</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900">5★</div>
                  <div className="text-gray-600">Müşteri Memnuniyeti</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900">2024</div>
                  <div className="text-gray-600">Kuruluş Yılı</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="PHUAD Atelier"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-light mb-4">Exclusive Updates</h3>
          <p className="text-gray-300 mb-8">
            Yeni koleksiyonlarımızdan ve özel kampanyalarımızdan ilk siz haberdar olun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 bg-white text-black rounded-none focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors">
              ABONE OL
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-wider">PHUAD</h4>
              <p className="text-gray-600 mb-6 max-w-md">
                Premium giyimin adresi. Kalite, zarafet ve mükemmel işçiliği bir araya getiren koleksiyonlarımızla 
                tarzınızı keşfedin.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 mb-4">Alışveriş</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Kadın</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Erkek</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Koleksiyonlar</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Yeni Ürünler</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 mb-4">Müşteri Hizmetleri</h5>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">İletişim</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Kargo & İade</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Beden Rehberi</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">SSS</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-8 text-center text-gray-600">
            <p>&copy; 2024 PHUAD. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhuadHomepage;