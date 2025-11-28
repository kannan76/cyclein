import AnnouncementBar from '@/components/sections/announcement-bar';
import HeaderNavigation from '@/components/sections/header-navigation';
import HeroBannerCarousel from '@/components/sections/hero-banner-carousel';
import CategoryCircles from '@/components/sections/category-circles';
import BestSellersGrid from '@/components/sections/best-sellers-grid';
import SignatureSpecialitiesGrid from '@/components/sections/signature-specialities-grid';
import NewArrivalsGrid from '@/components/sections/new-arrivals-grid';
import BrandValuesIcons from '@/components/sections/brand-values-icons';
import HomeEssentialsGrid from '@/components/sections/home-essentials-grid';
import ShopByBrandsCarousel from '@/components/sections/shop-by-brands-carousel';
import TrendingProductsVideos from '@/components/sections/trending-products-videos';
import CustomerReviewsCarousel from '@/components/sections/customer-reviews-carousel';
import FaqAccordion from '@/components/sections/faq-accordion';
import TrustBadges from '@/components/sections/trust-badges';
import Footer from '@/components/sections/footer';
import SeoContent from '@/components/sections/seo-content';
import WhatsAppButton from '@/components/sections/whatsapp-button';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <HeaderNavigation />
      <main>
        <HeroBannerCarousel />
        <CategoryCircles />
        <BestSellersGrid />
        <SignatureSpecialitiesGrid />
        <NewArrivalsGrid />
        <BrandValuesIcons />
        <HomeEssentialsGrid />
        <ShopByBrandsCarousel />
        <TrendingProductsVideos />
        <CustomerReviewsCarousel />
        <FaqAccordion />
        <TrustBadges />
        <SeoContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}