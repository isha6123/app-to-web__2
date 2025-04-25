import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
    lookingFor: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Got a business query?
          </h2>
          <p className="text-gray-600 mt-2">
            Just leave your email with us and we'll get back to you shortly!
          </p>
          <img
            src="src/assets/background.png"
            alt="Illustration"
            className="mt-6 w-full h-auto max-h-60 object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              name="lookingFor"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            >
              <option value="">I am looking for</option>
              <option value="consultation">Consultation</option>
              <option value="service">Service</option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />

            <input
              type="text"
              name="mobile"
              placeholder="Your mobile number"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="Your City"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your message"
              className="w-full p-3 border rounded-md"
              rows="4"
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition"
            >
              Send 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
