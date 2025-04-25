import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BusinessServices from "./components/BusinessServices";
import ProductsSection from "./components/ProductsSection";
import StatsSection from "./components/StatsSection";
import ReasonsSection from "./components/ReasonsSection";
import BusinessSection from "./components/BusinessSection";
//import CallToAction from "./components/CallToAction";
import SolutionsSection from "./components/SolutionsSection";
// import ClientSlider from "./components/ClientSlider";
// import MediaMentions from "./components/MediaMentions";
import Testimonials from "./components/Testimonials";
import MobileAppSection from "./components/MobileAppSection";
import ContactForm from "./components/ContactForm";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import CopyrightFooter from "./components/CopyrightFooter";
import CollectionCard from "./components/CollectionCard";
import AddUserForm from "./components/AddUserForm";
import ParkingRates from "./components/ParkingRates";
import VehiclePricingForm from "./components/VehiclePricingForm";
import AddVehicleForm from "./components/AddVehicleForm";
import ReceiptForm from "./components/ReceiptForm";
import ReceiptDetails from "./components/ReceiptDetails";

const App = () => {
  const [collectionData, setCollectionData] = useState([
    { date: "02 Apr 2025", due: 0, fix: 70, pass: 3000 },
    { date: "10 Feb 2025", due: 0, fix: 30, pass: 0 },
    { date: "08 Feb 2025", due: 0, fix: 530, pass: 0 },
  ]);

  const [formData, setFormData] = useState({
    date: "",
    due: "",
    fix: "",
    pass: "",
  });

  const [receiptData, setReceiptData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!formData.date || formData.due === "" || formData.fix === "" || formData.pass === "") {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      date: formData.date,
      due: Number(formData.due),
      fix: Number(formData.fix),
      pass: Number(formData.pass),
    };

    setCollectionData((prev) => [...prev, newEntry]);
    setFormData({ date: "", due: "", fix: "", pass: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BusinessServices />
      <ProductsSection />
      <StatsSection />
      <ReasonsSection />
      <BusinessSection />
      {/* <CallToAction /> */}
      <SolutionsSection />
      <AddUserForm />
      <ParkingRates />
      <VehiclePricingForm />
      <AddVehicleForm />

      {/* ===== Receipt Section ===== */}
      <div className="py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Receipt Generator</h2>
        {!receiptData ? (
          <ReceiptForm onSubmit={setReceiptData} />
        ) : (
          <ReceiptDetails data={receiptData} />
        )}
      </div>

      {/* ===== Collection Details Section ===== */}
      <div className="container mx-auto px-4 py-12" id="collection-data">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Collection Details
        </h2>

        {/* Form to Add New Collection */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Add New Entry</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="due"
              placeholder="Due"
              value={formData.due}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="fix"
              placeholder="Fix"
              value={formData.fix}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="pass"
              placeholder="Pass"
              value={formData.pass}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <button
            onClick={handleAdd}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Entry
          </button>
        </div>

        {/* Render Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionData.map((item, index) => (
            <CollectionCard key={index} {...item} />
          ))}
        </div>

        <p className="text-center text-gray-500 mt-6">No more data</p>
      </div>

      <Testimonials />
      <MobileAppSection />
      <ContactForm />
      <DownloadApp />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default App;




// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import ServicesSection from "./components/ServicesSection";
// import BusinessServices from "./components/BusinessServices";
// import ProductsSection from "./components/ProductsSection";
// import StatsSection from "./components/StatsSection";
// import ReasonsSection from "./components/ReasonsSection";
// import BusinessSection from "./components/BusinessSection";
// import CallToAction from "./components/CallToAction";
// import SolutionsSection from "./components/SolutionsSection";
// import ClientSlider from "./components/ClientSlider";
// import MediaMentions from "./components/MediaMentions";
// import Testimonials from "./components/Testimonials";
// import MobileAppSection from "./components/MobileAppSection";
// import ContactForm from "./components/ContactForm";
// import DownloadApp from "./components/DownloadApp";
// import Footer from "./components/Footer";
// import CopyrightFooter from "./components/CopyrightFooter";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <ServicesSection />
//       <BusinessServices />
//       <ProductsSection />
//       <StatsSection />
//       <ReasonsSection />
//       <BusinessSection />
//       <CallToAction />
//       <SolutionsSection />
//       <ClientSlider />
//       <MediaMentions />
//       <Testimonials />
//       <MobileAppSection />
//       <ContactForm />
//       <DownloadApp />
//       <Footer />
//       <CopyrightFooter />
     
         
//     </div>
//   );
// };

// export default App;


// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import ServicesSection from "./components/ServicesSection";
// import BusinessServices from "./components/BusinessServices";
// import ProductsSection from "./components/ProductsSection";
// import StatsSection from "./components/StatsSection";
// import ReasonsSection from "./components/ReasonsSection";
// import BusinessSection from "./components/BusinessSection";
// import CallToAction from "./components/CallToAction";
// import SolutionsSection from "./components/SolutionsSection";
// //import ClientSlider from "./components/ClientSlider";
// //import MediaMentions from "./components/MediaMentions";
// import Testimonials from "./components/Testimonials";
// import MobileAppSection from "./components/MobileAppSection";
// import ContactForm from "./components/ContactForm";
// import DownloadApp from "./components/DownloadApp";
// import Footer from "./components/Footer";
// import CopyrightFooter from "./components/CopyrightFooter";
// import CollectionCard from "./components/CollectionCard";
// import AddUserForm from './components/AddUserForm';
// import ParkingRates from './components/ParkingRates';
// import VehiclePricingForm from './components/VehiclePricingForm';
// import AddVehicleForm from './components/AddVehicleForm';
// import ReceiptDetails from './components/ReceiptDetails';





// const App = () => {
//   const [collectionData, setCollectionData] = useState([
//     { date: "02 Apr 2025", due: 0, fix: 70, pass: 3000 },
//     { date: "10 Feb 2025", due: 0, fix: 30, pass: 0 },
//     { date: "08 Feb 2025", due: 0, fix: 530, pass: 0 },
//   ]);

//   const [formData, setFormData] = useState({
//     date: "",
//     due: "",
//     fix: "",
//     pass: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAdd = () => {
//     if (!formData.date || formData.due === "" || formData.fix === "" || formData.pass === "") {
//       alert("Please fill all fields");
//       return;
//     }

//     const newEntry = {
//       date: formData.date,
//       due: Number(formData.due),
//       fix: Number(formData.fix),
//       pass: Number(formData.pass),
//     };

//     setCollectionData((prev) => [...prev, newEntry]);
//     setFormData({ date: "", due: "", fix: "", pass: "" });
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <HeroSection />
//       <ServicesSection />
//       <BusinessServices />
//       <ProductsSection />
//       <StatsSection />
//       <ReasonsSection />
//       <BusinessSection />
//       <CallToAction />
//       <SolutionsSection />
//       <AddUserForm />
//       <ParkingRates />
//       <VehiclePricingForm />
//       <AddVehicleForm />
//       <ReceiptDetails />
      

//       {/* ===== Collection Details Section ===== */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Collection Details
//         </h2>

//         {/* Form to Add New Collection */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-2xl mx-auto">
//           <h3 className="text-xl font-semibold mb-4">Add New Entry</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="border p-2 rounded"
//             />
//             <input
//               type="number"
//               name="due"
//               placeholder="Due"
//               value={formData.due}
//               onChange={handleChange}
//               className="border p-2 rounded"
//             />
//             <input
//               type="number"
//               name="fix"
//               placeholder="Fix"
//               value={formData.fix}
//               onChange={handleChange}
//               className="border p-2 rounded"
//             />
//             <input
//               type="number"
//               name="pass"
//               placeholder="Pass"
//               value={formData.pass}
//               onChange={handleChange}
//               className="border p-2 rounded"
//             />
//           </div>
//           <button
//             onClick={handleAdd}
//             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Add Entry
//           </button>
//         </div>

//         {/* Render Collection Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {collectionData.map((item, index) => (
//             <CollectionCard key={index} {...item} />
//           ))}
//         </div>

//         <p className="text-center text-gray-500 mt-6">No more data</p>
//       </div>

//       {/* ===== Remaining Sections ===== */}
//       {/* <ClientSlider /> */}
//       {/* <MediaMentions /> */}
//       <Testimonials />
//       <MobileAppSection />
//       <ContactForm />
//       <DownloadApp />
//       <Footer />
//       <CopyrightFooter />
//     </div>
//   );
// };

// export default App;

