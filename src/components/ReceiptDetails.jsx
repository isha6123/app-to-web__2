import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const ReceiptDetails = ({ data }) => {
  const { city, vehicleNo, amount, date, time, imageUrl, location } = data;

  return (
    <div className="min-h-screen bg-[#e4d6c8] text-black font-sans flex flex-col items-center px-4 pt-4">
      {/* Header */}
      <div className="flex justify-between items-center w-full text-xl font-semibold mb-4">
        <button onClick={() => window.location.reload()} className="text-2xl">&larr;</button>
        <h2 className="text-lg font-bold">Receipt Details</h2>
        <button className="text-2xl">&#x1F4E4;</button>
      </div>

      {/* Image and City */}
      <div className="flex flex-col items-center mt-2">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Vehicle"
            className="w-24 h-24 rounded-full object-cover border"
          />
        )}
        <h1 className="text-2xl font-bold mt-2">{city}</h1>
      </div>

      <div className="w-full h-[2px] bg-green-500 mt-4 mb-4" />

      <p className="text-lg font-semibold mb-2">Paid Parking</p>

      <div className="text-sm text-center space-y-1 mb-6">
        <p><span className="font-semibold">DATE:</span> {date}, <span className="font-semibold">Time:</span> {time}</p>
        <p><span className="font-semibold">Vehicle No :</span> {vehicleNo}</p>
        <p><span className="font-semibold">Amount:</span> ₹{amount}</p>
      </div>

      <QRCodeCanvas
        value={`City:${city}, Vehicle:${vehicleNo}, Date:${date}, Time:${time}, Amount:${amount}`}
        size={160}
        className="bg-white p-2 rounded"
      />

      <div className="w-full h-[2px] bg-green-500 mt-6 mb-4" />

      <p className="text-base font-semibold mb-8">Thank you, {location}!</p>
    </div>
  );
};

export default ReceiptDetails;
