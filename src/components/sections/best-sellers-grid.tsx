"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Camphor Vaporizer (Premium) with Bhimseni Camphor Tablets 100 gm",
    price: 691.0,
    originalPrice: 768.0,
    rating: 4.5,
    reviews: 36,
    discount: 10,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Catagory-image-BEST-SELLER-7.jpg",
  },
  {
    id: 2,
    title: "Naivedya Cup Sambrani Combo Pack of 3 (15 N per pack)",
    price: 243.0,
    originalPrice: 270.0,
    rating: 4.5,
    reviews: 51,
    discount: 10,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Catagory-image-BEST-SELLER-7.jpg",
  },
  {
    id: 3,
    title: "Woods Agarbatti Combo - Pack of 2 (70 gms each)",
    price: 396.0,
    originalPrice: 440.0,
    rating: 4.5,
    reviews: 57,
    discount: 10,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Catagory-image-BEST-SELLER-7.jpg",
  },
  {
    id: 4,
    title: "Three in One Agarbatti Combo - Pack of 2 (250gm per Pack)",
    price: 270.0,
    originalPrice: 300.0,
    rating: 4.5,
    reviews: 48,
    discount: 10,
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Catagory-image-BEST-SELLER-7.jpg",
  },
];

const StarRating = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 mt-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < fullStars ? "text-rating fill-rating" : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
    </div>
  );
};

const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
  <Card className="w-full h-full overflow-hidden border-[#e9e9e9] rounded-lg group transition-shadow duration-300 hover:shadow-md">
    <CardContent className="p-4 flex flex-col h-full">
      <div className="relative aspect-square mb-3">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-md transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2.5 left-2.5 bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-[4px]">
          -{product.discount}%
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold text-sm text-text-primary leading-[20px] h-10 line-clamp-2 mb-1.5">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-base text-text-primary">
            Rs. {product.price.toFixed(2)}
          </span>
          <span className="text-sm text-[#979797] line-through">
            Rs. {product.originalPrice.toFixed(2)}
          </span>
        </div>
        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
      <div className="mt-4 flex gap-2">
        <Button className="flex-grow w-full bg-accent text-[#212121] font-semibold rounded-[4px] hover:bg-yellow-400 h-10 text-base">
          ADD
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 shrink-0 border-[#dedede] rounded-[4px] hover:bg-secondary"
        >
          <Heart className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default function BestSellersGrid() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 xl:py-20 bg-background">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 px-4 sm:px-0">
          <h2 className="text-[32px] font-semibold text-primary">
            Best Sellers
          </h2>
          <a href="#" className="text-sm text-[#676767] hover:underline">
            View all products
          </a>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
          <CarouselContent className="sm:-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8" />
          </div>
        </Carousel>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-primary w-5" : "bg-border"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}