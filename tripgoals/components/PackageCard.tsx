'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';
import { Package } from '@/types';
import { getImageUrl } from '@/lib/appwrite';

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/package/${pkg.$id}`}>
      <div className="bg-white h-full mx-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={getImageUrl(pkg.imageId)}
            alt={pkg.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {pkg.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {pkg.title}
          </h3>
          <p className="text-gray-600 mb-2 border w-max px-2 rounded-full">₹{pkg.price}</p>
          <p className="text-gray-600 mb-4 line-clamp-2">{pkg.subtitle}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">{pkg.days} days</span>
            </div>
            <div className="flex items-center text-blue-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">View Details</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}