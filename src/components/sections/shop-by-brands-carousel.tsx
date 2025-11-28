'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

interface Brand {
  name: string
  logoUrl: string
  link: string
  width: number
  height: number
}

const brands: Brand[] = [
  { name: 'Pujaroom.com', logoUrl: 'https://cycle.in/cdn/shop/files/pujaroom.com-Logo-1.png?v=1673868661', link: '#', width: 170, height: 26 },
  { name: 'Ishta', logoUrl: 'https://cycle.in/cdn/shop/files/ishta-logo_360x.png?v=1673868841', link: '#', width: 120, height: 49 },
  { name: 'IRIS', logoUrl: 'https://cycle.in/cdn/shop/files/Iris-logo_360x.png?v=1673868884', link: '#', width: 110, height: 97 },
  { name: 'Soulveda', logoUrl: 'https://cycle.in/cdn/shop/files/Soulveda-logo_360x.png?v=1673868925', link: '#', width: 180, height: 32 },
  { name: 'Cycle', logoUrl: 'https://cycle.in/cdn/shop/files/Cycle-logo_360x.png?v=1673868953', link: '#', width: 160, height: 35 },
  { name: 'Amogha', logoUrl: 'https://cycle.in/cdn/shop/files/amogha_360x.png?v=1673869001', link: '#', width: 170, height: 75 },
]

export default function ShopByBrandsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-primary font-semibold text-[32px] lg:text-[34px] mb-12">
          Shop By Brands
        </h2>

        <div className="relative group mx-auto max-w-[1200px]">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className="-ml-8">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="pl-8 basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <Link href={brand.link} passHref legacyBehavior>
                    <a className="flex h-28 w-full items-center justify-center bg-transparent p-4 transition-transform duration-300 hover:scale-105">
                      <Image
                        src={brand.logoUrl}
                        alt={`${brand.name} logo`}
                        width={brand.width}
                        height={brand.height}
                        className="object-contain"
                      />
                    </a>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xl:flex disabled:hidden" />
            <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xl:flex disabled:hidden" />
          </Carousel>
        </div>

        <div className="flex justify-center gap-2.5 mt-8">
          {Array.from({ length: brands.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                current === index ? 'w-4 bg-primary' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to brand slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}