import React from "react";

import hemaImg from "/src/assets/hema.jpg";
import reshamImg from "/src/assets/resma.jpg";
import sanjayImg from "/src/assets/sanjay.jpg";
import prashantImg from "/src/assets/prshant.jpg";

const testimonials = [
  {
    id: 1,
    name: "Hema Rastogi",
    image: hemaImg, 
    rating: 5,
    review:
      "My experience with Apka Parking for fastag purchase was excellent. Fastag was delivered within 5 working days after purchase. Activation was successful with ₹99 as an initial balance.",
  },
  {
    id: 2,
    name: "Resham Beri",
    image: reshamImg,
    rating: 5,
    review:
      "It's a great app for my car needs. I use it for my FASTag recharge regularly. I even got my vaccine second dose because of the vaccination camps you organised.",
  },
  {
    id: 3,
    name: "Sanjay Mahajan",
    image: sanjayImg, 
    review:
      "With the help of the Apka Parking app, I came to know that my vehicle was challaned on 25 Aug. I was able to check this on the app and pay the due amount without any hassle.",
  },
  {
    id: 4,
    name: "Prashant Rai",
    image: prashantImg, //  Use imported image
    rating: 5,
    review:
      "I tried Apka Parking car wash services and have been a fan of it ever since. It's quick and everything happens on the app, super easily and swiftly.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/*  Section Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          This is why we do, <br /> what we do
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-10 px-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            {/* Star Rating */}
            <div className="text-yellow-400 text-xl">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 mt-2 text-sm">{testimonial.review}</p>

            {/* User Info */}
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image} // ✅ Image will load properly
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <h3 className="font-medium text-gray-800">{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
