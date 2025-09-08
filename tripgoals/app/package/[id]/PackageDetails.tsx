'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Calendar, MapPin, MessageCircle, Users, CheckCircle } from 'lucide-react';
import { Package } from '@/types';
import { getPackageById, getImageUrl } from '@/lib/appwrite';
import toast from 'react-hot-toast';

export default function PackageDetails() {
  const params = useParams();
  const [packageData, setPackageData] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(2);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        if (params.id) {
          const response = await getPackageById(params.id as string);
          setPackageData(response as unknown as Package);
        }
      } catch (error) {
        console.error('Error fetching package:', error);
        toast.error('Failed to load package details');
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [params.id]);

  const handleWhatsAppContact = () => {
    if (!packageData) return;

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || '+1234567890';
    const message = encodeURIComponent(
      `Hi! I'm interested in ${packageData.title} priced at ₹${packageData.price} for ${quantity} people. Please provide more details.`
    );
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <p className="text-gray-600">The package you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={getImageUrl(packageData.imageId)}
          alt={packageData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {packageData.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{packageData.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">Price: ₹{packageData.price}</p>
            <p className="text-xl md:text-2xl opacity-90">{packageData.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Package Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold">{packageData.days} Days</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold">{packageData.category}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Price: ₹{packageData.price}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Package</h2>
              <p className="text-gray-700 leading-relaxed">{packageData.description}</p>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packageData.whatsIncluded.map((item: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Package</h3>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of People
                </label>
                <div className="flex items-center space-x-4">
                  <Users className="h-5 w-5 text-gray-600" />
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Contact us on WhatsApp</span>
              </button>
              <p className="text-sm text-gray-600 text-center mt-2">
                Get instant responses and personalized assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}