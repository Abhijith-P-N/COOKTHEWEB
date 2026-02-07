import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll values
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      // Hide if within 300px of the bottom
      if (scrollY + windowHeight > totalHeight - 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message = "Hello! I am interested in your services.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/917907294980?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp ${!isVisible ? "hidden" : ""}`}
    >
      <span className="whatsapp-circle">
        <FaWhatsapp size={28} />
      </span>
      <span className="whatsapp-text">Contact us</span>
    </a>
  );
};

export default Whatsapp;
