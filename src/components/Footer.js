import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full bg-beige text-white p-2 lg:flex-auto lg:text-center">
      <div className="flex justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      <div className="hidden lg:block w-1/4">
          <ul className="space-y-2">
            <li>
              <p to="/" className="hover:text-pink-100  duration-200">
                I specialize in Hair color and Haircuts. Offering a variety of services for all hair and keen attention to detail to ensure you are satisfied with the final product.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h6 className="mb-2 font-semibold uppercase text-pink-100">Links</h6>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-100  duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-pink-100  duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallary"
                className="hover:text-pink-100  duration-200"
              >
                Gallary
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h6 className="mb-2 font-semibold uppercase text-pink-100">
            Contact
          </h6>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:darelie_ramos@yahoo.com"
                className="hover:text-pink-100  duration-200 break-all"
              >
                <i class="fa-regular fa-envelope"></i> Email Me
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                className="hover:text-pink-100  duration-200"
              >
                <i class="fa-solid fa-phone"></i> Call Me
              </a>
            </li>
          </ul>
          <div className="mt-2 space-x-4">
            <a
              href="https://www.instagram.com/deesbeautiess/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-100  duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@deesbeautiess"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-100  duration-200"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
