import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="absolute inset-x-0 bottom-0 bg-gray-800 text-white p-8">
            <div className="flex justify-between">

                {/* Tailwind ELEMENTS Section */}
                <div className="w-1/4">
                    <h6 className="mb-4 font-semibold uppercase">Darelie Ramos</h6>
                </div>

                {/* Products section */}
                <div className="w-1/4">
                    <h6 className="mb-4 font-semibold uppercase">Products</h6>
                    <ul className="space-y-2">
                        <li><a href="#!" className="hover:underline">Haircuts</a></li>
                        <li><a href="#!" className="hover:underline">Hair Color</a></li>
                        <li><a href="#!" className="hover:underline">Facials</a></li>
                        <li><a href="#!" className="hover:underline">Nails</a></li>
                    </ul>
                </div>

                {/* Useful Links section */}
                <div className="w-1/4">
                    <h6 className="mb-4 font-semibold uppercase">Useful Links</h6>
                    <ul className="space-y-2">
                        <li><Link className="hover:underline">Home</Link></li>
                        <li><a href="#!" className="hover:underline">About Me</a></li>
                        <li><a href="#!" className="hover:underline">Services</a></li>
                        <li><a href="#!" className="hover:underline">Contact Me</a></li>
                    </ul>
                </div>

                {/* Contact section */}
                <div className="w-1/4">
                    <h6 className="mb-4 font-semibold uppercase">Contact</h6>
                    <ul className="space-y-2">
                        <li><a href="mailto:contact@example.com" className="hover:underline">Email: contact@example.com</a></li>
                        <li><a href="tel:+1234567890" className="hover:underline">Phone: +123 456 7890</a></li>
                        <li><a href="#!" className="hover:underline">Address: 123 Main St, City, Country</a></li>
                    </ul>
                    <div className="mt-4 flex space-x-4">
                        <a href="https://www.instagram.com/your_username/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/your_username/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.tiktok.com/@your_username" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
