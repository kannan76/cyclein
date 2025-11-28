"use client";

import Image from "next/image";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
} from "lucide-react";

const AnnouncementBar = () => {
  const MarqueeItem = () => (
    <div className="flex items-center shrink-0 px-6 whitespace-nowrap">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8e7a8d57-2a8c-47e0-9682-90c310f6e7f7-cycle-in/assets/svgs/generated-svg-image-4.svg"
        alt="Free Shipping"
        width={28}
        height={16}
        className="mr-3"
      />
      <p className="text-sm font-medium text-foreground">
        Free Shipping On All Orders Above ₹399
      </p>
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
      <div className="bg-accent text-foreground">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:max-w-[1200px] lg:px-0 xl:max-w-[1440px]">
          <div className="relative flex h-11 items-center justify-center">
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex items-center space-x-4">
              <a href="mailto:care@cycle.in" aria-label="Email" className="text-primary transition-opacity hover:opacity-75">
                <Mail size={18} />
              </a>
              <a href="https://www.facebook.com/CYCLEdotIN/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary transition-opacity hover:opacity-75">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/cycle.in_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary transition-opacity hover:opacity-75">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/nrrs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary transition-opacity hover:opacity-75">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/c/CYCLEdotIN" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary transition-opacity hover:opacity-75">
                <Youtube size={18} />
              </a>
            </div>

            <div className="w-full overflow-hidden">
              <div className="animate-marquee flex">
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
              </div>
            </div>

            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 cursor-pointer lg:flex items-center text-sm font-medium text-primary">
              <span>IN / ₹ INR</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementBar;
