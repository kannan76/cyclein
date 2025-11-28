"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  href: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    desktopImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Iris-Banner-for-cycle_in-_1_1-16.webp",
    mobileImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Mobile%20version-_3_1-15.webp",
    alt: "A refined collection of Fine Fragrances for Your Space by IRIS",
    href: "#",
  },
  {
    id: 2,
    desktopImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Ishta_Puzzle_Desktop_Version-min_1-18.webp",
    mobileImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Ishta_Puzzle_Mobile_Version-min-17.webp",
    alt: "Ishta Puzzle Collection - Learn & Play",
    href: "#",
  },
  {
    id: 3,
    desktopImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Desktop_Palm-Leaf-Hanuman-Chalisa-Banner-20.webp",
    mobileImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Mobile_Version_Palm-Leaf-Hanuman-Chalisa-Banner-19.webp",
    alt: "Palm Leaf Hanuman Chalisa - Available Now",
    href: "#",
  },
  {
    id: 4,
    desktopImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Custom_insence_banner-desktop-22.webp",
    mobileImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Custom-Insence-Mobile-Version-21.webp",
    alt: "Custom Incense Banner - Your Scent, Your Story",
    href: "#",
  },
  {
    id: 5,
    desktopImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Desktop_1-24.webp",
    mobileImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Mobile_37d5ced4-5bfb-460f-9252-dea30b465821-23.webp",
    alt: "Cycle Products Banner",
    href: "#",
  },
];

const HeroBannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovering) {
      resetTimeout();
      return;
    }
    resetTimeout();
    timeoutRef.current = setTimeout(goToNext, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, goToNext, resetTimeout, isHovering]);

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero Banner Carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div key={slide.id} className="w-full h-[450px] md:h-[550px] flex-shrink-0">
            <Link href={slide.href} className="block w-full h-full">
              <div className="relative w-full h-full md:hidden">
                <Image
                  src={slide.mobileImage}
                  layout="fill"
                  objectFit="cover"
                  alt={slide.alt}
                  priority={index === 0}
                />
              </div>
              <div className="relative w-full h-full hidden md:block">
                <Image
                  src={slide.desktopImage}
                  layout="fill"
                  objectFit="cover"
                  alt={slide.alt}
                  priority={index === 0}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-white/80 backdrop-blur-sm py-1.5 px-2 rounded-full">
        <button
          onClick={goToPrev}
          className="p-1 rounded-full text-primary hover:bg-gray-200/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-primary w-4" : "bg-gray-400 hover:bg-primary/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-1 rounded-full text-primary hover:bg-gray-200/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroBannerCarousel;