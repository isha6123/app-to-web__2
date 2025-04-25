import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-blue-100 py-16 px-6 mt-20"> {/* Keeps space below upper section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Heading */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            5 years. Multitude of solutions. <br className="hidden md:block" />
            Countless Happy car owners
          </h2>
        </div>

        {/* Right Side: Statistics */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700">6 Million+</h3>
            <p className="text-gray-600 text-sm md:text-base">Cars listed on APKA PARKING</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700">12 Million+</h3>
            <p className="text-gray-600 text-sm md:text-base">FASTag Transactions</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700">8 Million+</h3>
            <p className="text-gray-600 text-sm md:text-base">Trusted users</p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700">200000+</h3>
            <p className="text-gray-600 text-sm md:text-base">Parking Locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
