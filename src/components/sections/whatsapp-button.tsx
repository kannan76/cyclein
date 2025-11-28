"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "918001234567"; // Replace with actual WhatsApp business number
  const message = encodeURIComponent("Hi! I'm interested in your products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366]"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
