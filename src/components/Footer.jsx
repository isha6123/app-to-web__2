import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import googlePlay from "/src/assets/google-play.png";
import appStore from "/src/assets/app-store.png";
import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Grid Parent Container - Prevent Overlap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 text-gray-800">
          
          {/* Left Section - Logo & Social Icons */}
          <div className="flex flex-col items-start space-y-4 text-left w-full md:w-auto">  
            {/* Logo (Fixed Alignment) */}
            <img src={logo} alt="Company Logo" className="h-12 w-auto" />  
            <p className="text-sm">YOUR BUSINESS PAYROLL APP</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 text-xl">
              <FaInstagram className="cursor-pointer hover:text-pink-600 transition" />
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
              <FaTwitter className="cursor-pointer hover:text-blue-600 transition" />
              <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
              <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
            </div>

            {/* App Store Buttons */}
            <div className="flex space-x-3">
              <img src={googlePlay} alt="Google Play" className="w-32 md:w-36 cursor-pointer" />
              <img src={appStore} alt="App Store" className="w-32 md:w-36 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
              <li className="hover:text-blue-600 cursor-pointer">Payroll Services</li>
              <li className="hover:text-blue-600 cursor-pointer">HR Management</li>
              <li className="hover:text-blue-600 cursor-pointer">Salary Management</li>
              <li className="hover:text-blue-600 cursor-pointer">Attendance Tracking</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg">Products</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Employee Management</li>
              <li className="hover:text-blue-600 cursor-pointer">Salary Automation</li>
              <li className="hover:text-blue-600 cursor-pointer">Payslip Generation</li>
              <li className="hover:text-blue-600 cursor-pointer">Loan & Advances</li>
              <li className="hover:text-blue-600 cursor-pointer">Compliance Services</li>
            </ul>
          </div>

          {/* Contact Section with Icons */}
          <div>
            <h3 className="font-bold text-lg">Reach us</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-blue-700" />
                <span>support@company.com</span>
              </li>
              <li className="font-semibold mt-2">For business enquiries:</li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-blue-700" />
                <span>sales@company.com</span>
              </li>
              <li className="flex items-start gap-2">
                <HiLocationMarker className="text-lg text-blue-700 mt-1" />
                <span>
                  Company HQ, 4th Floor, Tech Park, Sector-44, Bangalore, Karnataka 560103
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
