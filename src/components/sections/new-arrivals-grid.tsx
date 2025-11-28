"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Product = {
  name: string;
  imageSrc: string;
  isNew: boolean;
  discount?: string;
  salePrice: string;
  originalPrice?: string;
  reviews: string;
};

const newArrivalsData: Product[] = [
  {
    name: "IRIS Set of 2 Fragranced Pillar Candle - Damask Rose",
    imageSrc: "https://cdn.shopify.com/s/files/1/0582/0339/5373/files/DSC_3002.jpg?v=1711611116",
    isNew: true,
    discount: "-10%",
    salePrice: "Rs. 323.00",
    originalPrice: "Rs. 359.00",
    reviews: "No reviews",
  },
  {
    name: "IRIS Lavender Fragrance Gift Set",
    imageSrc: "https://cdn.shopify.com/s/files/1/0582/0339/5373/products/LavenderFragranceGiftSet.jpg?v=1708688402",
    isNew: true,
    discount: "-10%",
    salePrice: "Rs. 675.00",
    originalPrice: "Rs. 750.00",
    reviews: "No reviews",
  },
  {
    name: "IRIS Rose Potpourri",
    imageSrc: "https://cdn.shopify.com/s/files/1/0582/0339/5373/products/IRISRosePotpourri.jpg?v=1708602715",
    isNew: true,
    salePrice: "Rs. 150.00",
    reviews: "No reviews",
  },
  {
    name: "IRIS Amber Oudh Fragrance Plug on | Lasts Up to 60 Days",
    imageSrc: "https://cdn.shopify.com/s/files/1/0582/0339/5373/files/AmberOudh.jpg?v=1710926105",
    isNew: true,
    discount: "-5%",
    salePrice: "Rs. 284.00",
    originalPrice: "Rs. 299.00",
    reviews: "No reviews",
  },
  {
    name: "IRIS Blue Berry Fragrance Sachet - Pack of 2",
    imageSrc: "https://cdn.shopify.com/s/files/1/0582/0339/5373/files/BlueberrySachet.jpg?v=1710502120",
    isNew: true,
    salePrice: "Rs. 190.00",
    reviews: "No reviews",
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-card border border-[#eeeeee] rounded-[8px] overflow-hidden group transition-shadow duration-300 hover:shadow-lg flex flex-col h-full min-h-[465px]">
    <div className="relative">
      <Link href="#" className="block w-full aspect-square">
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={306}
          height={306}
          className="w-full h-full object-cover"
        />
      </Link>
      {product.discount && (
        <span className="absolute top-[10px] left-[10px] bg-destructive text-destructive-foreground text-[11px] font-medium px-2 py-0.5 rounded-[4px]">
          {product.discount}
        </span>
      )}
      {product.isNew && (
        <span className="absolute top-[10px] right-[10px] bg-primary text-primary-foreground text-[11px] font-medium px-2 py-0.5 rounded-[4px]">
          NEW
        </span>
      )}
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-[14px] font-medium text-text-primary h-[42px] leading-[1.5] line-clamp-2">
        <Link href="#" className="hover:underline">{product.name}</Link>
      </h3>
      <div className="mt-1">
        <span className="font-bold text-[18px] text-text-primary">{product.salePrice}</span>
        {product.originalPrice && (
          <span className="line-through text-muted-foreground text-[14px] ml-2">
            {product.originalPrice}
          </span>
        )}
      </div>
      <div className="flex items-center my-3">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gray-300" fill="currentColor" />
          ))}
        </div>
        <span className="text-[12px] text-muted-foreground ml-2">{product.reviews}</span>
      </div>
      <div className="mt-auto flex gap-2">
        <button className="flex-1 bg-accent text-accent-foreground font-medium py-3 px-4 rounded-[6px] text-[14px] hover:bg-yellow-400 transition-colors uppercase">
          ADD
        </button>
        <button className="p-3 border border-border rounded-[6px] hover:bg-secondary transition-colors">
          <Heart className="w-5 h-5 text-text-secondary" />
        </button>
      </div>
    </div>
  </div>
);

const NewArrivalsGrid = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-6 max-w-[1248px]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[28px] font-semibold text-text-primary">New Arrivals</h2>
          <Link href="#" className="text-[14px] font-medium text-primary hover:underline">
            View all products
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {newArrivalsData.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default NewArrivalsGrid;
