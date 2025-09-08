'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import PackageCard from './PackageCard';
import { Package } from '@/types';
import { getLatestPackages, getPackages } from '@/lib/appwrite';

interface PackageSectionProps {
  title: string;
  section: 'popular' | 'special' | 'new';
  limit?: number;
}

export default function PackageSection({ title, section, limit = 4 }: PackageSectionProps) {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = section === 'new'? await getLatestPackages(limit) : await getPackages(limit, section);
        setPackages(response.documents as Package[]);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [section, limit]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {title}
          </h2>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-72 md:w-80 lg:w-96">
                  <div className="bg-white rounded-2xl h-80 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="overflow-hidden py-3" ref={emblaRef}>
          <div className="flex gap-6">
            {packages.map((pkg) => (
              <div key={pkg.$id} className="flex-shrink-0 w-72 md:w-80 lg:w-96">
                <PackageCard package={pkg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}