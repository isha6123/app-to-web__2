import React, { useState } from "react";
import { jsPDF } from "jspdf";

const VehiclePricingForm = () => {
  const [vehicle, setVehicle] = useState("");
  const [prices, setPrices] = useState({
    "30min-2hr": "",
    "2hr-6hr": "",
    "6hr-12hr": "",
    "12hr-24hr": "",
    pass: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Vehicle Pricing Report", 20, 20);

    // Vehicle info
    doc.setFontSize(14);
    doc.text(`Vehicle: ${vehicle || "Not selected"}`, 20, 35);

    // Pricing details
    const entries = Object.entries(prices);
    let y = 50;
    doc.setFontSize(12);
    entries.forEach(([key, value]) => {
      doc.text(`${key.replace(/-/g, " ")}: ${value || "N/A"}`, 20, y);
      y += 10;
    });

    // Save PDF
    doc.save(`${vehicle || "vehicle"}_pricing_report.pdf`);
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 mb-12 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-0">Add vehicle</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pricing</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Vehicle name</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="">Choose an option</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="truck">Truck</option>
          </select>
        </div>

        {[
          { label: "Add price for 30 min to 2 hours", name: "30min-2hr" },
          { label: "Add price for 2 hours to 6 hours", name: "2hr-6hr" },
          { label: "Add price for 6 hours to 12 hours", name: "6hr-12hr" },
          { label: "Add price for 12 hours to 24 hours", name: "12hr-24hr" },
          { label: "Add pass price for vehicle", name: "pass" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-semibold text-gray-600 mb-1">{label}</label>
            <input
              type="text"
              name={name}
              value={prices[name]}
              onChange={handleChange}
              placeholder={name === "pass" ? "Pass Price" : "Add Pricing for vehicle"}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 placeholder-gray-400"
            />
          </div>
        ))}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={handleDownloadPDF}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehiclePricingForm;
