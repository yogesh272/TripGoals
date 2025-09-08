'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CategoryCard from './CategoryCard';
import { Category } from '@/types';
import { getCategories } from '@/lib/appwrite';

export default function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.documents as Category[]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Explore by Category
          </h2>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-64 md:w-72 lg:w-80">
                  <div className="bg-gray-200 rounded-2xl h-64 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Explore by Category
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {categories.map((category) => (
              <div key={category.$id} className="flex-shrink-0 w-64 md:w-72 lg:w-80">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}