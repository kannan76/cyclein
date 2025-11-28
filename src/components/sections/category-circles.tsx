import Image from 'next/image';
import Link from 'next/link';

// NOTE: A serif font is used for the heading for a more accurate visual match
// to the screenshot, as requested by the "elegant font" instruction. This implementation
// uses Tailwind's arbitrary value feature `font-['DM_Serif_Display']` and assumes the font
// is globally available. If not, the fallback sans-serif font will be used.

interface Category {
  name: string;
  href: string;
  imgSrc: string | null;
}

// Data is mapped from the provided <assets> list. Placeholders (null imgSrc) are used
// for categories where no suitable image was found in the provided assets,
// adhering to the project guidelines.
const categoriesData: Category[] = [
  { name: 'Best Sellers', href: '#', imgSrc: null },
  { 
    name: 'Agarbatti', 
    href: '#', 
    imgSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/51WvqP2G7eL_f1a52600-2e8a-4667-b03f-db3e9fe27d45-28.jpg' 
  },
  { 
    name: 'Puja Essentials', 
    href: '#', 
    imgSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/naivedya_Life_style-30.jpg'
  },
  { name: 'Bambooless Incense', href: '#', imgSrc: null },
  { name: 'Incense Cones', href: '#', imgSrc: null },
  { 
    name: 'Karpure', 
    href: '#', 
    imgSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/7102qpmIUuL__SL1500_2e832300-b1c0-4706-b105-7019fe-27.jpg' 
  },
  { 
    name: 'Eco-Friendly Havan Cups', 
    href: '#', 
    imgSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Naivedya_15_cups_pack_3-29.jpg' 
  },
  { name: 'Puja Accessories', href: '#', imgSrc: null },
];

const CategoryCircles = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-[40px] font-['DM_Serif_Display'] font-normal mb-8 md:mb-12" style={{ color: 'rgb(74, 47, 139)' }}>
          Fragrances For Divine Experiences
        </h2>
        
        <div className="relative">
          <div className="flex gap-x-2 sm:gap-x-5 lg:justify-center overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categoriesData.map((category) => (
              <div key={category.name} className="flex-shrink-0 w-[120px] sm:w-[144px]">
                <Link href={category.href} className="group flex flex-col items-center text-center gap-4">
                  <div className="relative w-[110px] h-[110px] sm:w-[144px] sm:h-[144px] rounded-full overflow-hidden bg-gradient-to-b from-[#FEF9E4] to-[#FBEBCA] flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105">
                    {category.imgSrc ? (
                      <div className='relative w-full h-full p-4 sm:p-5'>
                        <Image
                          src={category.imgSrc}
                          alt={category.name}
                          fill
                          sizes="(max-width: 640px) 110px, 144px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      // Placeholder visual is the gradient background
                      <div className="w-full h-full"></div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-text-primary px-1">
                    {category.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCircles;