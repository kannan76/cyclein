'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, ChevronRight } from 'lucide-react';

const FooterTitle = ({ children }: { children: React.ReactNode }) => (
  <h5 className="font-medium text-sm text-white uppercase tracking-[0.7px] mb-5">
    {children}
  </h5>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-text-light hover:text-white text-[15px] leading-relaxed transition-colors duration-300 no-underline">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const policies = [
    { name: 'Privacy Policy', href: '/policies/privacy-policy' },
    { name: 'Shipping & Delivery', href: '/pages/shipping-delivery-policy' },
    { name: 'Terms & Conditions', href: '/policies/terms-of-service' },
    { name: 'Returns & Refund', href: '/policies/refund-policy' },
  ];

  const brands = [
    { name: 'Cycle', href: '#' },
    { name: 'Amogha', href: '#' },
    { name: 'IRIS', href: '#' },
    { name: 'Soulveda', href: '#' },
    { name: 'Gavi', href: '#' },
    { name: 'Karpure', href: '#' },
    { name: 'Ishta', href: '#' },
    { name: 'Pujaroom', href: '#' },
    { name: 'Lia', href: '#' },
    { name: 'Rhythm', href: '#' },
    { name: 'Vasu', href: '#' },
    { name: 'Flute', href: '#' },
    { name: 'Om Shanthi', href: '#' },
    { name: 'Sampoorna Dhyan', href: '#' },
    { name: 'MyIncense', href: '#' },
    { name: 'Pujayu', href: '#' },
  ];
  
  const midPoint = Math.ceil(brands.length / 2);
  const brandsCol1 = brands.slice(0, midPoint);
  const brandsCol2 = brands.slice(midPoint);

  const quickLinks = [
    { name: 'Track Your Order', href: '#' },
    { name: 'About Us', href: '/pages/about-us' },
    { name: 'Contact Us', href: '/pages/contact-us' },
    { name: 'Blog Posts', href: '/blogs/blog' },
    { name: 'Vision & Mission', href: '#' },
    { name: 'Enquiry Form', href: '#' },
    { name: 'Sitemap', href: '/pages/sitemap' },
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:care@cycle.in', name: 'Email' },
    { icon: Facebook, href: 'https://www.facebook.com/CYCLEdotIN/', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/cycle.in_/', name: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/nrrs/', name: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/c/CYCLEdotIN', name: 'YouTube' },
  ];

  const paymentMethods = ['Visa', 'Mastercard', 'Maestro', 'RuPay', 'Amex', 'Diners', 'UPI', 'Google Pay', 'PhonePe', 'Paytm'];

  return (
    <footer className="bg-primary">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          <div className="lg:col-span-4">
            <FooterTitle>ABOUT</FooterTitle>
            <p className="text-text-light text-[15px] leading-6">
              Discover handcrafted luxury incense, pure puja essentials, premium gifting range, and curated spiritual products rooted in 75 countries of tradition, innovation, and eco-consciousness. Cycle.in brings the essence of Indian spirituality to the world, uplifting and connecting you to the divine.
            </p>
          </div>

          <div className="lg:col-span-2">
            <FooterTitle>POLICIES</FooterTitle>
            <ul className="space-y-3">
              {policies.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle>BRANDS</FooterTitle>
            <div className="grid grid-cols-2 gap-x-4">
                <ul className="space-y-3">
                    {brandsCol1.map((link) => (
                        <FooterLink key={link.name} href={link.href}>
                            {link.name}
                        </FooterLink>
                    ))}
                </ul>
                <ul className="space-y-3">
                    {brandsCol2.map((link) => (
                        <FooterLink key={link.name} href={link.href}>
                            {link.name}
                        </FooterLink>
                    ))}
                </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <FooterTitle>QUICK LINKS</FooterTitle>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <div>
            <FooterTitle>BUSINESS INFORMATION</FooterTitle>
            <ul className="space-y-4 text-text-light text-[15px]">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>Vanivilasa Road, Mysuru, Karnataka - 570004</span>
              </li>
              <li>
                <a href="tel:1800-425-7729" className="flex items-center hover:text-white transition-colors duration-300 no-underline">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>1800-425-7729</span>
                </a>
              </li>
              <li>
                <a href="mailto:care@cycle.in" className="flex items-center hover:text-white transition-colors duration-300 no-underline">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>care@cycle.in</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FooterTitle>FOLLOW</FooterTitle>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-text-light hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterTitle>NEWSLETTER</FooterTitle>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center h-11">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                placeholder="email@example.com"
                className="w-full h-full bg-white text-gray-900 px-4 rounded-l-md border-none focus:ring-2 focus:ring-accent focus:outline-none placeholder:text-gray-500 text-sm"
              />
              <button
                type="submit"
                aria-label="Submit newsletter"
                className="h-full bg-gray-500 hover:bg-gray-600 px-3 rounded-r-md transition-colors duration-300"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </form>
          </div>

          <div>
            <FooterTitle>PAYMENT METHODS</FooterTitle>
            <div className="bg-white rounded-md p-3">
              <div className="grid grid-cols-5 gap-2">
                {paymentMethods.map(method => (
                  <div key={method} className="flex items-center justify-center p-1">
                     <img src={`https://cdn.shopify.com/s/files/1/0610/3933/3069/files/payment_${method.toLowerCase().replace(/\s/g, '')}.png?v=1715848981`} alt={method} className="h-4 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#211153] py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-center gap-y-2">
          <p className="text-text-light text-[13px]">
            Copyright © 2025 Cycle.in
          </p>
          <p className="text-text-light text-[13px]">
            Developed By <a href="https://booststar.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 underline">BOOST STAR Experts</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
