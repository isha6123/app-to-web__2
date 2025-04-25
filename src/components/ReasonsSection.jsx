import React from "react";
import Icon1 from "../assets/1.png";
import Icon2 from "../assets/2.png";
import Icon3 from "../assets/3.png";
import Icon4 from "../assets/4.png";

const reasons = [
  {
    icon: Icon1,
    text: "One fastag for all your needs - Parking, Tolls, Malls, Fuel payment",
  },
  {
    icon: Icon2,
    text: "Save time, fuel and effort with smart parking",
  },
  {
    icon: Icon3,
    text: "Reminders to never miss out on your insurance and PUCC renewal",
  },
  {
    icon: Icon4,
    text: "Easy to find information regarding RTO services, traffic rules etc",
  },
];

const ReasonsSection = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">
          More reasons than one to love Apka Parking
        </h2>

        {/* Icons and Texts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={reason.icon}
                alt="icon"
                className="w-20 h-20 mb-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
              />
              <p className="text-gray-700 text-sm md:text-base">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonsSection;

