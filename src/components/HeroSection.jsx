import React, { useState } from "react";
import LamborghiniImage from "../assets/lamborghini.jpeg"; // Import the image

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("FASTag");
  const [vehicleNumber, setVehicleNumber] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setVehicleNumber(event.target.value);
  };

  // Handle submit button click
  const handleSubmit = () => {
    if (vehicleNumber.trim() === "") {
      alert("Please enter a vehicle number");
      return;
    }

    alert(`Submitting ${activeTab} request for: ${vehicleNumber}`);
    console.log(`Submitting ${activeTab} request for: ${vehicleNumber}`);

    // Reset input field after submission
    setVehicleNumber("");
  };

  return (
    <section className="relative pt-24 pb-16"> {/* Added pt-24 for spacing */}
      {/*  Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 backdrop-blur-lg"
        style={{ backgroundImage: `url(${LamborghiniImage})` }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section (Text) */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Everything for your car
          </h1>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Begin your car journey with Apka Parking and say goodbye to all your car-related worries - one service at a time.
          </p>
        </div>

        {/* Right Section (FASTag & Challan Box) */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-10 lg:mt-0">
          {/* Tabs */}
          <div className="flex border-b pb-2">
            <button
              className={`flex-1 text-center font-semibold ${
                activeTab === "FASTag"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("FASTag")}
            >
              FASTag
            </button>
            <button
              className={`flex-1 text-center font-semibold ${
                activeTab === "Challan"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("Challan")}
            >
              Challan
            </button>
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter vehicle number"
            value={vehicleNumber}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 mt-4 rounded-lg text-gray-700 focus:outline-none"
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className={`w-full py-2 mt-3 rounded-lg font-semibold ${
              vehicleNumber.trim()
                ? "bg-blue-600 text-white cursor-pointer"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!vehicleNumber.trim()}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
