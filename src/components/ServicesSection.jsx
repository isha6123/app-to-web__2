import React from "react";
import FastagIcon from "../assets/fastag-icon.png";
import PetrolIcon from "../assets/petrol-icon.png";
import ChallanIcon from "../assets/challan-icon.png";
import StoreIcon from "../assets/store-icon.png";
import CarLoanIcon from "../assets/car-loan-icon.png";

// List of services
const services = [
  { name: "Add Vehicle", img: FastagIcon, link: "#add-vehicle" },
  { name: "Add User", img: PetrolIcon, link: "#add-user" },
  { name: "Collection", img: ChallanIcon, link: "#collection-data" },
  { name: "Edit Information", img: StoreIcon, link: "#" },
  { name: "View Vehicle", img: CarLoanIcon, link: "#" },
];

const ServicesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Do more with Apka Parking
      </h2>

      <div className="bg-white shadow-md p-6 rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <a
            href={service.link} 
            key={index}
            className="cursor-pointer no-underline text-inherit"
          >
            <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg">
                <img
                  src={service.img}
                  alt={service.name}
                  className="max-w-[56px] max-h-[56px] transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="mt-2 text-gray-700 font-medium text-sm text-center">
                {service.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
