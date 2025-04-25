import { FaPrint } from "react-icons/fa";

const CollectionCard = ({ date, due, fix, pass }) => {
  const handleDownload = () => {
    const content = `
Receipt
----------------------------
Date: ${date}
Due: ₹${due}
Fix: ₹${fix}
Pass: ₹${pass}
Total: ₹${due + fix + pass}
----------------------------
Thank you!
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `receipt-${date.replace(/\s+/g, "-")}.txt`;
    link.click();
  };

  return (
    <div className="border border-gray-300 bg-white p-5 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-700">Date: {date}</h2>
        <FaPrint
          className="text-green-600 text-xl cursor-pointer"
          onClick={handleDownload}
          title="Download Receipt"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-red-100 p-4 text-center rounded-md">
          <p className="text-red-600 font-bold">Due</p>
          <p className="font-semibold">₹{due}</p>
        </div>
        <div className="bg-green-100 p-4 text-center rounded-md">
          <p className="text-green-600 font-bold">Fix</p>
          <p className="font-semibold">₹{fix}</p>
        </div>
        <div className="bg-blue-100 p-4 text-center rounded-md">
          <p className="text-blue-600 font-bold">Pass</p>
          <p className="font-semibold">₹{pass}</p>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
      >
        Download Receipt
      </button>
    </div>
  );
};

export default CollectionCard;
