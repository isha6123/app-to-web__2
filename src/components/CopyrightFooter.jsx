const CopyrightFooter = () => {
    return (
      <div className="bg-purple-900 text-white text-sm py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          
          {/* Left Side - Copyright Text */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Apka Parking. All rights reserved
          </p>
  
          {/* Right Side - Links */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default CopyrightFooter;
  