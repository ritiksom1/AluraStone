import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import product images
import Img1 from "../../assets/shirt/shirt1.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import Img4 from "../../assets/shirt/shirt4.png";
import Img5 from "../../assets/shirt/shirt5.png";
import Img6 from "../../assets/shirt/shirt6.png";
import Img7 from "../../assets/shirt/shirt7.png";
import Img8 from "../../assets/shirt/shirt8.png";
import Img9 from "../../assets/shirt/shirt9.png";
import Img10 from "../../assets/shirt/shirt10.png";
import Img11 from "../../assets/shirt/shirt11.png";
import Img12 from "../../assets/shirt/shirt12.png";
import Img13 from "../../assets/shirt/shirt13.png";
import Img14 from "../../assets/shirt/shirt14.png";
import Img15 from "../../assets/shirt/shirt15.png";
import Img16 from "../../assets/shirt/shirt16.png";

const ProductsData = [
  { id: 1, img: Img1, title: "Aurora Diamond Band", description: "A sleek diamond band with radiant shine, perfect for everyday elegance." },
  { id: 2, img: Img2, title: "Celeste Gold Ring", description: "Crafted in glowing gold, this ring blends classic and modern beauty." },
  { id: 3, img: Img3, title: "Evelyn Silver Band", description: "Minimalist silver band designed for timeless sophistication and durability." },
  { id: 4, img: Img4, title: "Luna Pearl Ring", description: "A delicate pearl centerpiece, symbolizing purity and grace." },
  { id: 5, img: Img5, title: "Joi Ring", description: "A refined design combining elegance with comfort for any occasion." },
  { id: 6, img: Img6, title: "Aria Gold Twist", description: "An artistic twist design in gold, symbolizing harmony and connection." },
  { id: 7, img: Img7, title: "Adelina Ring", description: "Timeless beauty that celebrates love and commitment with finesse." },
  { id: 8, img: Img8, title: "Serene Silver Band", description: "Polished silver crafted for simplicity and effortless everyday style." },
  { id: 9, img: Img9, title: "Nova Gemstone Ring", description: "Features a radiant gemstone centerpiece, adding vibrant charm." },
  { id: 10, img: Img10, title: "Radiance Band", description: "A modern yet classic band designed for bold elegance." },
  { id: 11, img: Img11, title: "Eterna Ring", description: "A symbol of infinity and everlasting commitment." },
  { id: 12, img: Img12, title: "Nuri Gold Band", description: "Classic golden band with sleek finish for timeless wear." },
  { id: 13, img: Img13, title: "Opal Glow Ring", description: "Captures the subtle glow of opal for a unique, magical touch." },
  { id: 14, img: Img14, title: "Stella Sparkle", description: "Dazzling sparkle ring that reflects brilliance in every angle." },
  { id: 15, img: Img15, title: "Harmony Band", description: "A balance of strength and elegance in a smooth band finish." },
  { id: 16, img: Img16, title: "Classic Heritage Ring", description: "Inspired by tradition, crafted for modern sophistication." },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container">
      {/* Header */}
      <div className="text-left mb-10">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-500 dark:text-white">
          Handpicked designs loved by our customers, lightweight, elegant, and made for everyday comfort.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 }, // small screens
          768: { slidesPerView: 3 }, // tablets
          1024: { slidesPerView: 4 }, // desktops
        }}
        className="pb-10"
      >
        {ProductsData.map((data) => (
          <SwiperSlide key={data.id}>
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white shadow-xl duration-300 group max-w-[320px] mx-auto"
            >
              {/* Image */}
              <div className="h-[220px] flex items-center justify-center">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[180px] h-[180px] object-cover rounded-xl block mx-auto transform group-hover:scale-110 duration-300 drop-shadow-lg"
                />
              </div>

              {/* Details */}
              <div className="p-4 text-center">
                {/* Stars */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h1 className="text-lg font-bold">{data.title}</h1>
                <p className="text-sm text-black dark:text-white group-hover:text-white duration-300 line-clamp-2">
                  {data.description}
                </p>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-2 px-5 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopProducts;
