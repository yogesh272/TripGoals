'use client';

import { useState, useEffect } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Discover Amazing Places',
      subtitle: 'Create unforgettable memories with our curated travel experiences'
    },
    {
      image: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Adventure Awaits',
      subtitle: 'Explore breathtaking destinations around the world'
    },
    {
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Luxury Escapes',
      subtitle: 'Indulge in premium travel experiences tailored just for you'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto max-sm: mt-20">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            {slides[currentSlide].subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 max-sm:px-4 max-sm:py-2 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Explore Packages
            </button>
            {/* <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 max-sm:px-4 max-sm:py-2 rounded-full font-semibold text-lg transition-all duration-300">
              Plan Your Trip
            </button> */}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-2" />
              <div className="text-3xl max-sm:text-2xl font-bold">50+</div>
              <div className="text-sm opacity-90">Destinations</div>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 mb-2" />
              <div className="text-3xl max-sm:text-2xl font-bold">100+</div>
              <div className="text-sm opacity-90">Tour Packages</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-2" />
              <div className="text-3xl max-sm:text-2xl font-bold">5000+</div>
              <div className="text-sm opacity-90">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}