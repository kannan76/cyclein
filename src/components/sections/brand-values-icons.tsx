import Image from "next/image";

const valuesData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_2_2-3.svg",
    label: "Zero carbon manufacturer",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_4_2-1.svg",
    label: "Plants sacred native trees",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_3_1-2.svg",
    label: "International fragrance standards",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_2_2-3.svg", 
    label: "Trusted in 75 countries",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_4_2-1.svg",
    label: "Global best practices",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_3_1-2.svg",
    label: "Ethical practices",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_2_2-3.svg",
    label: "Pure ingredients",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/Asset_4_2-1.svg",
    label: "Three generations in fragrance creation",
  },
];

// A utility class for hiding scrollbar might need to be defined in a global CSS file, e.g.:
// @layer utilities { .scrollbar-hide { scrollbar-width: none; &::-webkit-scrollbar { display: none; } } }
const BrandValuesIcons = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-primary text-center text-3xl md:text-4xl font-semibold mb-12">
          Cycle Incense Makes Sense
        </h2>
        
        <div className="relative">
          <div className="flex items-start gap-x-4 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-8 lg:gap-x-4 lg:items-start lg:pb-0">
            {valuesData.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center flex-shrink-0 w-32 lg:w-full"
              >
                <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center p-7">
                  <Image
                    src={value.iconSrc}
                    alt={`${value.label} icon`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-sm text-text-primary leading-tight">
                  {value.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandValuesIcons;