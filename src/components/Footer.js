import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full bg-beige text-white p-3">
      <div className="flex justify-between drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <div className="w-1/4">
          <h6 className="mb-4 font-semibold uppercase text-pink-100">
            Products
          </h6>
          <ul className="space-y-2">
            <li>
              <a href="#!" className="hover:text-pink-100  duration-200">
                Haircuts
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-pink-100  duration-200">
                Hair Color
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-pink-100  duration-200">
                Facials
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-pink-100  duration-200">
                Nails
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h6 className="mb-4 font-semibold uppercase text-pink-100">Links</h6>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-100  duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-me"
                className="hover:text-pink-100  duration-200"
              >
                About Me
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
                to="/contact-me"
                className="hover:text-pink-100  duration-200"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h6 className="mb-4 font-semibold uppercase text-pink-100">
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
            <li>
              <a
                href="https://www.google.com/maps/place/Milan+Institute+-+Palm+Desert/@33.7834298,-116.3532231,17z/data=!4m14!1m7!3m6!1s0x80dafcf3ea6ba699:0x562c53cbdeb07b75!2sMilan+Institute+-+Palm+Desert!8m2!3d33.7834298!4d-116.3532231!16s%2Fm%2F0clw5hy!3m5!1s0x80dafcf3ea6ba699:0x562c53cbdeb07b75!8m2!3d33.7834298!4d-116.3532231!16s%2Fm%2F0clw5hy?entry=ttu"
                className="hover:text-pink-100  duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-map-pin"></i> Directions
              </a>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
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
