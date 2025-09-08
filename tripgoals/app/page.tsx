import Hero from '@/components/Hero';
import PackageSection from '@/components/PackageSection';
import CategoriesSection from '@/components/CategoriesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <PackageSection title="Explore New Packages" section="new" />
      <PackageSection title="Popular Packages" section="popular" />
      <PackageSection title="Special Offers" section="special" />
      <CategoriesSection />
    </>
  );
}