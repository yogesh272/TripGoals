'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types';
import { getImageUrl } from '@/lib/appwrite';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories?filter=${category.name}`}>
      <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={getImageUrl(category.imageId)}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
          <p className="text-gray-200 opacity-90">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}