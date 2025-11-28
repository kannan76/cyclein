import React from 'react';

const cardData = [
  {
    title: 'Bathroom Freshener',
    description: 'Bathroom Freshener, Elevate Every Breath!',
    imageUrl: 'https://placehold.co/306x230/F3EFFF/4A2F8B.png',
    href: '#',
  },
  {
    title: 'Car freshener',
    description: 'A Fresh Start for Every Drive!',
    imageUrl: 'https://placehold.co/306x230/E0F7FA/00796B.png',
    href: '#',
  },
  {
    title: 'Room Fresheners',
    description: 'Revive Every Room with Lasting Freshness!',
    imageUrl: 'https://placehold.co/306x230/E8EAF6/3E2A7F.png',
    href: '#',
  },
  {
    title: 'Gavi Collection',
    description: 'Elevating Every Ritual with Purity!',
    imageUrl: 'https://placehold.co/FFF3E0/E65100.png',
    href: '#',
  },
];

const HomeEssentialsGrid = () => {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary text-center mb-12">
          Home Essentials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              <div className="relative h-[230px] overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col text-center">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary mb-6 flex-grow">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="mt-auto inline-block bg-accent text-accent-foreground font-medium py-3 rounded-md hover:brightness-95 transition-all w-full text-base"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEssentialsGrid;