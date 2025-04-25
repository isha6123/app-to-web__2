import React from "react";
import ProductVideo from "../assets/Parking video.mp4"; // Replace with your actual video path

const products = [
  "Car Parking",
  "Traffic Challan",
  "FASTag",
  "Test Drive",
  "Bill Payments",
];

const ProductsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Product List */}
        <div className="space-y-4">
          {products.map((product, index) => (
            <p key={index} className="text-lg font-semibold text-gray-900">
              {product}
            </p>
          ))}

          {/* Highlighted Valet Services Card */}
          <div className="bg-orange-500 text-white p-6 rounded-lg mt-4">
            <h3 className="text-xl font-bold">Valet Services</h3>
            <a href="#" className="text-sm font-semibold underline float-right">
              Learn More
            </a>
            <p className="text-sm mt-2">
              Leading Valet Service in Noida: Professional, Efficient, and Trusted by Top Brands
            </p>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="w-full">
          <video
            src={ProductVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;


