"use client"

import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { productsData } from './productsData';
import {useState} from "react";
import FlashProduct from "./FlashProduct";
import ArrowButton from "./ArrowButton";
import FeatureProduct from "./FeatureProduct";

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
        {/* feature product */}
        <FeatureProduct {...productsData[currentIndex]} />
        
        {/* flash slider */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-[calc(100%-33.333333%)]">
          {productsData.map((item, index) => (
            <FlashProduct 
              key={item?.id} 
              title={item?.title} 
              category={item?.category} 
              imageUrl={item?.imageUrl} 
              isShow={index >= currentIndex && index <= currentIndex + 3}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <ArrowButton 
          onClick={prevSlide} 
          Icon={IoIosArrowBack} 
          isShown={currentIndex === 0} 
          isLeft={true}
        />
        
        <ArrowButton 
          onClick={nextSlide} 
          Icon={IoIosArrowForward} 
          isShown={currentIndex === productsData?.length - 1}
          isLeft={false} 
        />
      </div>
    </div>
  );
};
