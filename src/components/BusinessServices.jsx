import React from "react";
import { Link } from "react-router-dom";
import AccessManagement from "../assets/access-management.png";
import FastagCharging from "../assets/fastag-charging.jpg";
import ParkingGuidance from "../assets/parking-guidance.png";
import ANPRSolution from "../assets/anpr-solution.png";
import SmartParking from "../assets/smart-parking.jpg";

// Services Data
const services = [
  {
    title: "Smart Parking Solution",
    description: "Our Smart Parking Solution offers fast vehicle access within 3 seconds...",
    img: SmartParking,
  },
  {
    title: "Access Management System",
    description: "Our Access Management System offers seamless entry for residents...",
    img: AccessManagement,
  },
  {
    title: "FASTag Charging Solution",
    description: "Apka Parking offers seamless vehicle access with the FASTag Charging service...",
    img: FastagCharging,
  },
  {
    title: "Parking Guidance System",
    description: "Apka Parking offers a state-of-the-art Parking Guidance System designed...",
    img: ParkingGuidance,
  },
  {
    title: "ANPR Solution",
    description: "ANPR (Automatic Number Plate Recognition) solution is a technology...",
    img: ANPRSolution,
  },
];

const BusinessServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Apka Parking for Businesses
      </h2>

      {/* Scrollable Services Row */}
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[350px] bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            {/* Service Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Service Details */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-900 text-lg">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>

              Explore Button
              <button className="mt-4 w-full text-indigo-600 border border-indigo-600 rounded-lg px-4 py-2 flex items-center justify-center gap-1 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                Explore <span>→</span>
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessServices;

