import React from "react";
import Slider from "react-slick"; // ✅ import slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/women/women.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
import Img6 from "../../assets/women/women6.jpg";

import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// ✅ Custom Arrow Components
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/80"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/80"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Adelina Ring",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Marzia Ring",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Zahra Ring",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Desi Ring",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Nuri Gold Band",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "NAcklace",
    rating: 4.5,
    color: "Pink",
    aosDelay: "1000",
  },
];

const Products = () => {
  // ✅ slider settings
 const settings = {
  dots: false,
  infinite: false,  // ✅ stop endless loop
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: false, // ✅ also apply here
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: false,
      },
    },
  ],
};


  return (
    <div className="mt-14 mb-12">
      <div className="container relative"> {/* relative to position arrows */}
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500 dark:text-white">
            🔥 Discover our most-loved rings, chosen by countless happy customers.
💎 Top-selling designs crafted with elegance and style.
🌟 Our bestsellers — trusted for quality, shine, and durability.
💍 Customer favorites that define luxury and elegance.
          </p>
        </div>

        {/* Slider section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ProductsData.map((data) => (
              <div key={data.id} className="space-y-3 p-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                />
                <div className="text-center">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-400">{data.color}</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* view all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
