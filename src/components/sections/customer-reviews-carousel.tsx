"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  title: string;
  text: string;
  author: string;
}

const reviews: Review[] = [
  {
    title: "Jasmine Oil",
    text: "Very good",
    author: "Srineel Mazumdar",
  },
  {
    title: "Navagraha Series – Rahu Jatamansi Cones",
    text: "We always have been using your product very well organized firm Thank you very much",
    author: "Tejasvi Mahesh",
  },
  {
    title: "Excellent product",
    text: "Agarbatti quality is TOP Available in Many Fragrance",
    author: "SRINIVASA MADH BUDAN",
  },
  {
    title: "Amogha Guggul masala Incense Sticks",
    text: "are class apart. Pure ingredients, wonderful & calm Fragrance. Gives feeling of Temple. Thanks cycle for Amogha Series.",
    author: "RAKESH SHARMA",
  },
  {
    title: "Rahasyamai 19\" Long Agarbatti",
    text: "One of the best products from Cycle.in. Happy to give five stars.",
    author: "ANJALI GUPTA",
  },
  {
    title: "Premium Yagna Agarbatti Pack (250g)",
    text: "Very good",
    author: "NAVEEN KUMAR",
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center text-rating">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div>
            <StarRating rating={5} />
            <h4 className="mt-3 mb-2 font-medium text-text-primary">{review.title}</h4>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">{review.text}</p>
        </div>
        <p className="text-sm font-medium tracking-wider text-primary">{review.author}</p>
    </div>
);

const CustomerReviewsCarousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = useCallback(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setCanScrollLeft(scrollLeft > 1);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        checkScrollability();
        container?.addEventListener('scroll', checkScrollability, { passive: true });
        window.addEventListener('resize', checkScrollability);

        return () => {
            container?.removeEventListener('scroll', checkScrollability);
            window.removeEventListener('resize', checkScrollability);
        };
    }, [checkScrollability]);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container) {
            const card = container.firstElementChild as HTMLElement;
            if (card) {
                const scrollAmount = card.offsetWidth;
                container.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto max-w-6xl px-6">
                <h2 className="text-center text-3xl font-semibold text-text-primary md:text-[36px] leading-tight">
                    3 Generations of Trust.
                </h2>
                <div className="mt-4 mb-12 flex items-center justify-center gap-2">
                    <StarRating rating={5} />
                    <p className="text-sm text-text-secondary">from 8120 reviews</p>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="no-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 snap-center basis-[90%] sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
                            >
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-gray-400 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-gray-400 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviewsCarousel;