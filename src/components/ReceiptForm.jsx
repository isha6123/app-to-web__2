import React, { useState } from 'react';

const ReceiptForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    city: '',
    location: '',
    vehicleNo: '',
    amount: '',
    date: '',
    time: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm({ ...form, imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="bg-[#97ced1] min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Parking Receipt</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input type="text" name="city" placeholder="City" onChange={handleChange} className="w-full border p-2" required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} className="w-full border p-2" required />
        <input type="text" name="vehicleNo" placeholder="Vehicle No" onChange={handleChange} className="w-full border p-2" required />
        <input type="number" name="amount" placeholder="Amount ₹" onChange={handleChange} className="w-full border p-2" required />
        <input type="date" name="date" onChange={handleChange} className="w-full border p-2" required />
        <input type="time" name="time" onChange={handleChange} className="w-full border p-2" required />

        <div>
          <label className="block mb-1">Upload Vehicle Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
        </div>

        {form.imageUrl && (
          <img src={form.imageUrl} alt="Preview" className="w-24 h-24 rounded-full mt-4 object-cover" />
        )}

        <button type="submit" className="w-full bg-blue-700 text-white py-2 font-semibold">Generate Receipt</button>
      </form>
    </div>
  );
};

export default ReceiptForm;
