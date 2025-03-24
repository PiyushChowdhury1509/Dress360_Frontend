import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PrivacyPolicy } from "./misc/privacy_policy";
import Getstyle from "./getstyle";
import { Link } from "react-router-dom";

// import Button from "./Button"; // Adjust the path as necessary


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-serif">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gray-200">Dress360</a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
            <li><a href="#" className="hover:text-teal-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-teal-500 transition">Men</a></li>
            <li><a href="#" className="hover:text-teal-500 transition">Women</a></li>
            <li><a href="#" className="hover:text-teal-500 transition">Images</a></li>
            <li><a href="#" className="hover:text-teal-500 transition">Blog</a></li>
            <li><Link to="/privacyPolicy" className="hover:text-teal-500 transition">Privacy Policy</Link></li>
            <li><Link to="/getstyle" className="hover:text-teal-500 transition">Get Style </Link></li>

          </ul>

          {/* CTA Button
          <Button className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-xl hover:bg-teal-700">
            Get Recommendations
          </Button> */}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 space-y-4">
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500">Home</a>
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500">Men</a>
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500">Women</a>
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500"></a>
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500">Images</a>
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500">Blog</a>
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500">About</a>
            <a href="#" className="block text-lg text-gray-800 hover:text-teal-500">Privacy</a>
            {/* <Button className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700">
              Get Recommendations
            </Button> */}
          </div>
        )}
      </nav>

      {/* Body */}
      <div className="body w-full h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Discover Your Perfect Style with Dress360
        </h2>

        {/* <div className="mt-6">
          <Button className="bg-gray-500 text-white px-6 py-2 rounded-xl hover:bg-gray-700 font-serif">
            Let's Start
          </Button>
        </div> */}
      </div>
    </div>
  );
}
