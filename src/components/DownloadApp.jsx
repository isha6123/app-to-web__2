import mobileMockup from "/src/assets/mobile-mockup.png";
const DownloadApp = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Download Apka Parking app
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Stay on top of your car game with Apka Parking. Sit back and relax while we take care of your car-related needs, all in one place.
        </p>

        {/* Mobile Mockup Image */}
        <div className="flex justify-center mt-10">
          <img src={mobileMockup} alt="App Mockup" className="w-80 md:w-96 drop-shadow-lg" />
        </div>

      </div>
    </div>
  );
};

export default DownloadApp;
