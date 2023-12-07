"use client"
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { productsData } from './productsData';
import Image from 'next/image';
import {useState} from "react";
import { FaRegHeart } from "react-icons/fa";

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex === productsData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? productsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative flex gap-0.5">
        <div className="flex-1 w-1/3 bg-white relative">
          <div className='relative h-28 aspect-square'>
            <Image 
              src={productsData?.[currentIndex]?.imageUrl} 
              alt={productsData?.[currentIndex]?.title} 
              fill 
              sizes="100%"
              className='object-contain w-full h-full p-1.5'
            />
          </div>
          <div className="flex flex-col gap-2.5 p-1.5">
            <div className="bg-primary px-2 py-1 capitalize text-[8px] font-medium text-white max-w-max border-l-2 border-r-2 border-dotted">
              <span>
                {productsData?.[currentIndex]?.percentOff}% off
              </span>
            </div>
            <p className='text-[10px] text-dark'>
              {productsData?.[currentIndex]?.title}
            </p>
            <div className="flex items-center gap-1.5">
              <p className="text-xs text-primary font-semibold flex items-center gap-1">
                <FaBangladeshiTakaSign />
                <span>{productsData?.[currentIndex]?.newPrice}</span>
              </p>
              <p className="text-[8px] text-black flex items-center gap-1 line-through">
                <FaBangladeshiTakaSign />
                <span>{productsData?.[currentIndex]?.oldPrice}</span>
              </p>
            </div>
          </div>

          {/* favorite icon */}
          <div className="absolute top-2 right-2 flex justify-center items-center w-6 h-6 rounded-full shadow-xl bg-white text-[#9C9C9C] text-sm">
            <FaRegHeart />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-[calc(100%-33.333333%)]">
          {productsData.map((item, index) => (
            <div
              key={item.id}
              className={`transform transition-all text-center w-full h-full bg-white pt-[5px] px-[18px] pb-[14px] duration-300 ${
                index >= currentIndex && index <= currentIndex + 3 ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <div className='relative h-16'>
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  fill 
                  sizes="100%"
                  className='object-center object-contain w-full h-full'
                />
              </div>
              <p className="text-[10px] text-dark capitalize pt-2.5">{item.category}</p>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className={`absolute flex items-center justify-center bg-white rounded-full w-6 h-6 shadow-md text-lg text-light-gray top-1/2 left-0 transform -translate-y-1/2 ${currentIndex === 0 ? 'hidden' : 'block'}`}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide} className={`absolute flex items-center justify-center bg-white rounded-full w-6 h-6 shadow-md text-lg text-light-gray top-1/2 right-0 transform -translate-y-1/2 ${currentIndex === productsData?.length - 1 ? 'hidden' : 'block'}`}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
