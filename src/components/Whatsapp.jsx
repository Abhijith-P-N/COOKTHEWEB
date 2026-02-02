import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const message = "Hello! I am interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  return (
    <a
     href={`https://wa.me/917907294980?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
    >
      <span className="whatsapp-circle">
        <FaWhatsapp size={28} />
      </span>
      <span className="whatsapp-text">Contact us</span>
    </a>
  );
};

export default Whatsapp;
