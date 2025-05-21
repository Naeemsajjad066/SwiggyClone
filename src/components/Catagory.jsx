import React from "react";
import { useState, useEffect } from "react";
function Catagory() {

  const [slides, setSlides] = useState(0);

  const moveLeft = () => {
    if (slides === 0) return;
    setSlides((prev) => Math.max(prev - 3, 0));
  };
  
  const moveRight = () => {
    const maxSlide = slidesItems.length - visibleCount;
    if (slides >= maxSlide) return;
    setSlides((prev) => Math.min(prev + 3, maxSlide));
  };

  const visibleCount = 6;
  const slidesItems = [
    {
      image: "/images/jgp.jpeg",
      name: "pizza",
    },
    {
      image: "/images/Thigh.jpeg",
      name: "Thigh",
    },
    {
      image: "/images/Wings.jpeg",
      name: "Wings",
    },
    {
      image: "/images/pasta.jpeg",
      name: "Pasta",
    },
    {
      image: "/images/jgp.jpeg",
      name: "Zinger Burger",
    },
    {
      image: "/images/jgp.jpeg",
      name: "Sprite",
    },
    {
      image: "/images/coke.jpeg",
      name: "Coke",
    },
    {
      image: "/images/jgp.jpeg",
      name: "Chicken",
    },
    {
      image: "/images/jgp.jpeg",
      name: "Fries",
    },
    {
      image: "/images/jgp.jpeg",
      name: "Shawarma",
    },
    {
      image: "/images/jgp.jpeg",
      name: "Sandwich",
    },
    {
      image: "/images/jgp.jpeg",
      name: "Burger",
    },
  ];
  
  return (
    <>
      <div className="max-w-[1200px]  mx-auto mt-4 shadow ">
        <div className="flex items-center justify-between p-3">
          <div className="text-[25px] font-bold">What's on your Mind? </div>
          <div className="flex gap-4">
            <div onClick={moveLeft} className=" flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 cursor-pointer hover:bg-black hover:text-white transition duration-300">
              <i className="fa-solid fa-arrow-left text-orange-500 "></i>
            </div>
            <div onClick={moveRight} className=" flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 cursor-pointer hover:bg-black hover:text-white transition duration-300">
              <i className="fa-solid fa-arrow-right text-orange-500"></i>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          {slidesItems.map((item, index) => {
            return(
              <div className="flex flex-col items-center justify-center w-2/6 md:w-1/6 shrink-0 gap-2 my-3 transition duration-700" key={index} style={{
                transform: `translateX(-${slides * 100}%)`
              }}>
                <div className="flex items-center justify-center rounded-full bg-gray-200 w-24 h-24 cursor-pointer shadow-xl transition duration-1000">
                  <img className="rounded-full w-[90px] h-[90px]" src={item.image} alt="" />
                </div>
                <div className="text-center text-[13px] font-bold">{item.name}</div>
              </div>
            )
          }
          )}
        </div>
        <hr className=" my-4 border border-b-6" />
      </div>
    </>
  );
}
export default Catagory;
