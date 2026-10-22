import React, { useState, useEffect } from "react";
import WhatsappIcon from "./icons/WhatsappIcon";

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      // Hide if near the very bottom footer to prevent overlap
      if (scrollY + windowHeight > totalHeight - 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message = "Hello! I am interested in your web services.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/917907294980?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
    >
      <WhatsappIcon size={22} className="shrink-0" />
      <span className="hidden sm:inline-block text-xs font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default Whatsapp;
