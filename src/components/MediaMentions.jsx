// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// //Import images from src/assets
// import gw from "../assets/gw.jpg";
// import mobility from "../assets/mobility.jpg";
// import business from "../assets/business.jpg";
// import toi from "../assets/toi.jpg";
// import et from "../assets/et.jpg";

// //Media Mentions Data (Using imported images)
// const mediaMentions = [
//   {
//     id: 1,
//     logo: gw,
//     title: "Apka Parking, building a super app for car owners",
//     content: "India has more car owners than parking slots...",
//     author: "MANU BALACHANDRAN",
//     date: "November 28, 2022",
//     link: "#",
//   },
//   {
//     id: 2,
//     logo: mobility,
//     title: "Mooving, Apka Parking to deploy 2,000 battery swapping stations",
//     content: "Battery swapping stations will play a pivotal role...",
//     author: "Express Mobility Desk",
//     date: "November 30, 2022",
//     link: "#",
//   },
//   {
//     id: 3,
//     logo: business,
//     title: "My town my pride: J&K’s first FASTag enabled parking",
//     content: "First of its kind in J&K and second across the whole country...",
//     author: "SANJAY KHAJURIA",
//     date: "December 03, 2022",
//     link: "#",
//   },
//   {
//     id: 4,
//     logo: toi,
//     title: "After Gurugram, Apka Parking ties up with Noida mall for vaccination",
//     content: "The move, launched with Gautam Budh Nagar administration...",
//     author: "Neha Alawadhi",
//     date: "May 16, 2021",
//     link: "#",
//   },
//   {
//     id: 5,
//     logo: et,
//     title: "Life during Covid: Digital solutions to keep offices safe",
//     content: "For Anil Kumar, a security guard at an office building...",
//     author: "Rishi Ranjan Kala",
//     date: "May 05, 2020",
//     link: "#",
//   },
// ];

// const MediaMentions = () => {
//   const swiperRef = useRef(null);

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6 text-left">
//         <h2 className="text-4xl font-bold text-gray-900 flex items-center">
//           <span className="text-indigo-400 text-9xl mr-4 font-serif">❝</span>
//           Media Mentions
//         </h2>
//       </div>

//       <div className="relative mt-10 max-w-7xl mx-auto">
//         {/* Custom Navigation Buttons */}
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-4 shadow-lg rounded-full z-10 hover:bg-gray-200"
//           onClick={() => swiperRef.current?.slidePrev()}
//         >
//           <FaChevronLeft className="text-gray-600 text-xl" />
//         </button>

//         {/* Swiper Component */}
//         <Swiper
//           ref={swiperRef}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           slidesPerView={1.2}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           spaceBetween={20}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation={false} //  Disable default Swiper navigation
//           modules={[Navigation, Pagination, Autoplay]}
//           className="px-6"
//         >
//           {mediaMentions.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
//                 <img
//                   src={item.logo}
//                   alt={item.title}
//                   className="w-16 h-16 object-contain mb-4"
//                   loading="lazy"
//                 />
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2 text-sm">{item.content}</p>
//                 <a
//                   href={item.link}
//                   className="text-indigo-500 font-medium mt-2 block hover:underline"
//                 >
//                   Read more...
//                 </a>
//                 <p className="text-gray-500 text-sm mt-2">by {item.author}</p>
//                 <p className="text-gray-400 text-xs">{item.date}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/*  Custom Next Button */}
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 shadow-lg rounded-full z-10 hover:bg-gray-200"
//           onClick={() => swiperRef.current?.slideNext()}
//         >
//           <FaChevronRight className="text-gray-600 text-xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MediaMentions;


