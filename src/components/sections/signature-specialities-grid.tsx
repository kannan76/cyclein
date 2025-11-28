"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Dasara Agarbatti",
    priceRange: "From Rs. 50.00 to Rs. 200.00",
    rating: 5,
    reviewCount: 381,
    imageUrl: "https://cycle.in/cdn/shop/products/dasara.jpg?v=1704430752&width=533",
    href: "#",
  },
  {
    id: 2,
    name: "Yagna Agarbatti",
    priceRange: "From Rs. 50.00 to Rs. 204.00",
    rating: 5,
    reviewCount: 177,
    imageUrl: "https://cycle.in/cdn/shop/products/yagna-1.jpg?v=1704431055&width=533",
    href: "#",
  },
  {
    id: 3,
    name: "Woods Agarbatti - Fragrance of the Forest",
    priceRange: "From Rs. 75.00 to Rs. 220.00",
    rating: 5,
    reviewCount: 372,
    imageUrl: "https://cycle.in/cdn/shop/products/Woods_3a8b251d-b575-47eb-ba62-fa545362cd0e.jpg?v=1704431065&width=533",
    href: "#",
  },
  {
    id: 4,
    name: "Oudh Natural Incense",
    priceRange: "Rs. 60.00",
    rating: 5,
    reviewCount: 94,
    imageUrl: "https://cycle.in/cdn/shop/products/Oudh3.jpg?v=1704431059&width=533",
    href: "#",
  },
];

const StarRating = ({ rating, count }: { rating: number; count: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      }`}
    />
  ));

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="text-xs text-muted-foreground">({count})</span>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const cardHeightClass = product.name.length > 30 ? "h-[190px]" : "h-[170px]";
  
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
      <div className="relative overflow-hidden aspect-square">
        <Link href={product.href} className="block">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={280}
            height={280}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className={`p-4 flex flex-col flex-grow`}>
        <h3 className="text-sm font-medium text-foreground mb-2 h-10">
          <Link href={product.href} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{product.priceRange}</p>
        <div className="mb-4">
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>
        <div className="mt-auto flex gap-2">
          <button className="flex-1 bg-accent text-accent-foreground text-sm font-medium py-2.5 rounded-md hover:bg-yellow-400 transition-colors">
            ADD
          </button>
          <button className="p-2 border border-border rounded-md hover:bg-secondary transition-colors">
            <Heart className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SignatureSpecialitiesGrid() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
            Signature Specialities
          </h2>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline whitespace-nowrap"
          >
            View all products
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}