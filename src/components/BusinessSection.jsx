import React, { useState } from "react";
import corporatesImg from "../assets/corporates.png";
import societiesImg from "../assets/societies.png";
import parkingOwnersImg from "../assets/parking-owners.png";
import mallsHotelsImg from "../assets/malls-hotels.png";

const BusinessSection = () => {
  const [activeTab, setActiveTab] = useState("Corporates");

  // Define tab content and corresponding images
  const tabs = [
    { name: "Corporates", image: corporatesImg },
    { name: "Societies", image: societiesImg },
    { name: "Parking owners", image: parkingOwnersImg },
    { name: "Malls/Hotels", image: mallsHotelsImg },
  ];

  const tabContent = {
    Corporates: {
      title: "For Corporates",
      points: [
        "Smart Parking Solution using RFID Technology",
        "ANPR (Automatic Number Plate Recognition) solution",
        "Advanced Parking Guidance System",
        "FASTag based parking solution",
        "Fleet Management solution",
        "EV charging stations",
      ],
      link: "See how we solved the parking problem for RBS",
    },
    Societies: {
      title: "For Societies",
      points: [
        "Secure visitor parking management",
        "Automated access control",
        "Real-time parking availability tracking",
      ],
      link: "Explore how we enhance society parking",
    },
    "Parking owners": {
      title: "For Parking Owners",
      points: [
        "Revenue optimization through smart parking",
        "Digitized ticketing & payment integration",
        "Seamless parking space management",
      ],
      link: "Learn more about our parking solutions",
    },
    "Malls/Hotels": {
      title: "For Malls & Hotels",
      points: [
        "Enhancing customer experience with easy parking",
        "Automated valet parking solutions",
        "Seamless booking & digital payments",
      ],
      link: "Discover how we help malls & hotels",
    },
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-20">
      {/* Top Section: Title + Tabs */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Apka Parking for Businesses
        </h1>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl">
          Our technology has transformed the tricky traffic movement in parking lots
          for various business establishments.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 border-b border-gray-300 pb-2 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`text-lg font-semibold transition-all duration-300 ${
                activeTab === tab.name
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Image */}
        <div>
          <img
            src={tabs.find((tab) => tab.name === activeTab)?.image}
            alt={activeTab}
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-purple-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold">{tabContent[activeTab].title}</h2>
          <ul className="mt-4 space-y-2">
            {tabContent[activeTab].points.map((point, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span> {point}
              </li>
            ))}
          </ul>
          <a href="#" className="text-white font-semibold mt-6 block underline">
            {tabContent[activeTab].link} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
