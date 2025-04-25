import React, { useState } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';

const UserCollection = ({ users }) => {
  return (
    <div className="mt-10 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">User Collection</h2>
      {users.length === 0 ? (
        <p className="text-gray-500 text-center">No users added yet.</p>
      ) : (
        users.map((user, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow-md p-5 mb-6"
          >
            <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold text-lg">
              <FaUser />
              {user.name}
            </div>
            <div className="flex items-center gap-2 text-gray-700 mb-4">
              <FaPhone />
              +91 {user.phone}
            </div>
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="text-green-600 font-bold text-lg">₹ {user.total || 0}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [total, setTotal] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !total) return;

    setUsers([...users, { name, phone, total }]);
    setName('');
    setPhone('');
    setTotal('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#b0d2e1b0] px-4 py-10 relative" id="add-user">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-radial from-yellow-300 via-transparent to-transparent rounded-full opacity-30 pointer-events-none"></div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-2xl shadow-2xl z-10">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-2">
          Add User <br />
          <span className="text-blue-500">Details</span>
        </h1>
        <p className="text-gray-600 mb-6">Fill in the details below to add a new user.</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-gray-800 font-medium mb-2">
              User name
            </label>
            <input
              id="username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter user name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
              Phone number
            </label>
            <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-yellow-400">
              <span className="px-4 py-3 bg-gray-100 text-gray-700 border-r border-gray-300">+91</span>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full px-4 py-3 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Total Amount */}
          <div>
            <label htmlFor="total" className="block text-gray-800 font-medium mb-2">
              Total Amount
            </label>
            <input
              id="total"
              type="number"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              placeholder="Enter total amount"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-800 text-white font-semibold py-3 rounded-md shadow-md transition-all"
          >
            ADD USER
          </button>
        </form>
      </div>

      {/* User List */}
      <UserCollection users={users} />
    </div>
  );
};

export default AddUserForm;
