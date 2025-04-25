import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';

const parkingOptions = [
  { rate: 20, label: 'Upto 2 Hours' },
  { rate: 30, label: 'Upto 6 Hours' },
  { rate: 40, label: 'Upto 12 Hours' },
  { rate: 50, label: 'Upto 24 Hours' },
];

const ParkingRates = () => {
  const [selectedRate, setSelectedRate] = useState(null);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [receipt, setReceipt] = useState(null);

  const handleGenerate = () => {
    if (!selectedRate || !vehicleNumber.trim()) {
      alert('Please select a rate and enter vehicle number');
      return;
    }

    setReceipt({
      vehicleNumber,
      amount: selectedRate.rate,
      duration: selectedRate.label,
      timestamp: new Date().toLocaleString(),
    });
  };

  return (
    <div className="min-h-screen bg-[#e9dbcf] py-12 px-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Parking Rates</h1>

      <div className="space-y-4 w-full max-w-md">
        {parkingOptions.map((option, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedRate(option)}
            className={`flex justify-between items-center border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedRate?.rate === option.rate
                ? 'border-yellow-400 bg-white'
                : 'border-black bg-[#e7dcd1]'
            }`}
          >
            <div className="text-xl font-semibold text-black">₹ {option.rate}</div>
            <div className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1 rounded">
              <FaClock />
              <span>{option.label}</span>
            </div>
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Add vehicle number"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
        className="mt-6 p-3 border border-black w-full max-w-md rounded text-center text-lg"
      />

      <button
        onClick={handleGenerate}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-black text-white font-semibold text-lg rounded shadow-md hover:scale-105 transition-transform"
      >
        Generate Receipt
      </button>

      {/* Receipt Display */}
      {receipt && (
        <div className="mt-10 p-4 bg-white rounded-lg shadow-lg w-full max-w-md border">
          <h2 className="text-xl font-bold mb-2 text-green-700">Receipt</h2>
          <p><strong>Vehicle:</strong> {receipt.vehicleNumber}</p>
          <p><strong>Rate:</strong> ₹{receipt.amount} ({receipt.duration})</p>
          <p><strong>Date/Time:</strong> {receipt.timestamp}</p>
        </div>
      )}
    </div>
  );
};

export default ParkingRates;


