import React, { useState } from 'react';

const AddVehicleForm = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleImage, setVehicleImage] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVehicleImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vehicleName || !vehicleImage) return;

    const newVehicle = {
      id: Date.now(),
      name: vehicleName,
      image: vehicleImage,
    };

    setVehicles([newVehicle, ...vehicles]); // Add to top of list
    setVehicleName('');
    setVehicleImage(null);
  };

  return (
    <div className="min-h-screen bg-[#afd3e7] px-6 py-8 relative text-center" id="add-vehicle">
      <button className="absolute top-4 left-4 text-3xl">&larr;</button>

      <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-400 via-pink-200 to-transparent inline-block p-6 rounded-full mb-6">
        Add Vehicle<br />Name
      </h1>

      {/* Image upload */}
      <div className="my-6">
        <label htmlFor="vehicleImage" className="relative w-28 h-28 rounded-full border-4 border-blue-700 mx-auto flex flex-col items-center justify-center cursor-pointer overflow-hidden">
          {vehicleImage ? (
            <img src={vehicleImage} alt="Preview" className="object-cover w-full h-full" />
          ) : (
            <>
              <span className="text-3xl">&#128100;</span>
              <span className="absolute bottom-2 right-2 text-lg bg-white rounded-full px-1">&#128247;</span>
              <p className="text-xs mt-1">Tap to Add pic</p>
            </>
          )}
        </label>
        <input
          type="file"
          id="vehicleImage"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <div className="w-full max-w-md">
          <label htmlFor="vehicleName" className="block text-left text-sm font-medium mb-1">
            Add vehicle name
          </label>
          <input
            type="text"
            id="vehicleName"
            placeholder="Vehicle name"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
            required
            className="w-full border-2 border-blue-800 p-2 text-lg outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-6 py-3 text-lg uppercase font-bold tracking-wide w-full max-w-md"
        >
          Save Vehicle Details
        </button>
      </form>

      {/* Vehicle List */}
      <div className="mt-10 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-left">Saved Vehicles</h2>
        {vehicles.length === 0 && (
          <p className="text-gray-600 text-left">No vehicles added yet.</p>
        )}
        <ul className="space-y-4">
          {vehicles.map(vehicle => (
            <li
              key={vehicle.id}
              className="flex items-center gap-4 bg-white border border-black p-4 rounded"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-lg font-medium">{vehicle.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddVehicleForm;
