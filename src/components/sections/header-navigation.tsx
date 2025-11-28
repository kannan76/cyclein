"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Search,
  User,
  ShoppingCart,
  Heart,
  ChevronDown,
  Truck,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const navItems = [
  { name: "Agarbatti", href: "/collections/agarbatti", hasDropdown: true },
  { name: "Bambooless Incense", href: "/collections/bambooless-incense", hasDropdown: true },
  { name: "Dhoop & Sambrani", href: "#", hasDropdown: true },
  { name: "Puja Samagri", href: "#", hasDropdown: true },
  { name: "Custom Incense", href: "#", hasDropdown: false },
  { name: "IRIS", href: "#", hasDropdown: false },
  { name: "Home & Personal Care", href: "#", hasDropdown: true },
  { name: "Gifting", href: "#", hasDropdown: false },
  { name: "Blog", href: "#", hasDropdown: false },
];

const HeaderNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-center px-4 sm:px-6 lg:justify-between lg:px-8">
          <div className="hidden lg:flex items-center space-x-4">
            <a href="mailto:care@cycle.in" aria-label="Email" className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
            <a href="https://www.facebook.com/CYCLEdotIN/" aria-label="Facebook" className="hover:opacity-80"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/cycle.in_/" aria-label="Instagram" className="hover:opacity-80"><Instagram size={16} /></a>
            <a href="https://www.linkedin.com/company/nrrs/" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin size={16} /></a>
            <a href="https://www.pinterest.com/CYCLEdotIN/" aria-label="Pinterest" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c0-2.209-1.343-4-3-4s-3 1.791-3 4c0 1.521.895 2.826 2.148 3.447.072.036.11.111.095.192l-.248 1.031c-.027.113.045.23.16.275.115.044.24-.007.296-.118l.432-.877A4.002 4.002 0 0 0 12 12z"></path><path d="M21 9c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"></path></svg>
            </a>
            <a href="https://www.youtube.com/c/CYCLEdotIN" aria-label="YouTube" className="hover:opacity-80"><Youtube size={16} /></a>
          </div>
          <div className="flex items-center space-x-2 text-sm font-light">
            <Truck size={20} />
            <span>Free Shipping On All Orders Above ₹399</span>
          </div>
          <div className="hidden lg:block w-[240px]"></div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center lg:flex-1 lg:justify-start">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 lg:hidden" aria-label="Open menu">
              <Menu size={24} className="text-gray-700" />
            </button>
            <div className="ml-2 lg:ml-0">
              <Link href="/" aria-label="Cycle.in home">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/images/Logo_cycle-1.png"
                  alt="Cycle.in"
                  width={200}
                  height={39}
                  priority
                />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-center px-4">
            <div className="relative w-full max-w-[440px]">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search for Bambooless In..."
                className="w-full rounded-md border border-input bg-gray-50 py-2.5 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <a href="/account/login" className="flex items-center space-x-[6px] rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors">
                <User size={20} />
                <span>Account</span>
              </a>
              <button className="flex items-center space-x-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <ShoppingCart size={20} />
                <span>Rs. 0.00</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-primary font-semibold">(0)</span>
              </button>
              <a href="#" aria-label="Wishlist" className="p-2 text-gray-700 hover:text-primary">
                <Heart size={22} />
              </a>
            </div>
            
            <div className="lg:hidden">
               <button className="relative p-2">
                  <ShoppingCart size={24} className="text-gray-700" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">0</span>
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:flex justify-center border-b border-border">
        <ul className="flex h-[52px] items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="group relative flex items-center">
              <a href={item.href} className="flex items-center text-[15px] font-medium text-[#2e1a6b] hover:opacity-75 transition-opacity">
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile menu would be implemented here and toggled by isMobileMenuOpen */}
    </header>
  );
};

export default HeaderNavigation;