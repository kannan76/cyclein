import React from 'react';

const trendingProductsData = [
  {
    videoSrc: "https://cycle.in/cdn/shop/videos/c/vp/17baa2384de14b7ab7786ee1af845915/17baa2384de14b7ab7786ee1af845915.HD-1080p-7.2Mbps-38374165.mp4?v=0",
    title: "NEW LAUNCHES JUST DROPPED!",
    description: "Get ready to enhance your sacred space with our newest arrivals.",
  },
  {
    videoSrc: "https://cycle.in/cdn/shop/videos/c/vp/e8c1667f74494cecad635a0064f7813e/e8c1667f74494cecad635a0064f7813e.HD-1080p-7.2Mbps-39302805.mp4?v=0",
    title: "100 % PURE BHIMSENI CAMPHOR TABLETS",
    description: "Karpure Bhimseni Camphor Tablets is made from absolute high quality, 100% pure camphor.",
  },
  {
    videoSrc: "https://cycle.in/cdn/shop/videos/c/vp/193a67be8c944dddac2ded024966cec9/193a67be8c944dddac2ded024966cec9.HD-720p-4.5Mbps-38374321.mp4?v=0",
    title: "NAIVEDYA CUP SAMBRANI 15 CUPS",
    description: "Instantly refresh and energize your living spaces with Om Shanthi Naivedya Cup Sambrani.",
  },
  {
    videoSrc: "https://cycle.in/cdn/shop/videos/c/vp/c2befca5f2e24d558479688a88a95cb0/c2befca5f2e24d558479688a88a95cb0.HD-1080p-7.2Mbps-36308831.mp4?v=0",
    title: "NAIVEDYA GOLD SERIES, SAMBRANI CUPS",
    description: "Handcrafted charcoal-free Havan cups with Free Holder",
  },
];

const TrendingProductsVideos = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-12">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProductsData.map((product, index) => (
            <div key={index} className="group transition-transform duration-300 ease-in-out hover:-translate-y-1">
              <div className="overflow-hidden rounded-lg border border-border bg-black">
                <video
                  src={product.videoSrc}
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide leading-snug">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProductsVideos;