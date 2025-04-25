import React from "react";

// Images
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import mobileScreen from "../assets/mobile-screen.png";

const MobileAppSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Bringing delight to <br className="hidden sm:inline" /> car ownership
          </h2>
          <p className="text-gray-600 mt-4">
            Download the app and stay on top of your car game with Apka Parking. 
            Sit back and relax while we take care of your car-related needs, all in one place.
          </p>

          {/* App Download Section */}
          <div className="mt-6">
            <p className="font-semibold">Get the App</p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" aria-label="Download on Google Play">
                <img src={googlePlay} alt="Download on Google Play" className="h-12 w-auto" />
              </a>
              <a href="#" aria-label="Download on App Store">
                <img src={appStore} alt="Download on App Store" className="h-12 w-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Right-side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={mobileScreen}
            alt="Mobile App Preview showcasing features"
            className="w-48 sm:w-60 md:w-72 lg:w-80 object-cover shadow-lg rounded-md"
          />
        </div>

      </div>
    </section>
  );
};

export default MobileAppSection;


