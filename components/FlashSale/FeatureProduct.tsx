import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { ProductDataType } from "./productsData";

export default function FeatureProduct({imageUrl, title, percentOff, newPrice, oldPrice}: ProductDataType) {
  return (
    <div className="flex-1 w-1/3 bg-white relative">
        <div className='relative h-28 aspect-square'>
            <Image 
                src={imageUrl} 
                alt={title} 
                fill 
                sizes="100%"
                priority={true}
                className='object-contain w-full h-full p-1.5'
            />
        </div>
        <div className="flex flex-col gap-2.5 p-1.5">
            {/* Percentage */}
            <div className="bg-primary px-2 py-1 capitalize text-[8px] font-medium text-white max-w-max border-l-2 border-r-2 border-dotted">
                <span>
                    {percentOff}% off
                </span>
            </div>
            <p className='text-[10px] text-dark'>
                {title}
            </p>
            <div className="flex items-center gap-1.5">
                <p className="text-xs text-primary font-semibold flex items-center gap-1">
                    <FaBangladeshiTakaSign />
                    <span>{newPrice}</span>
                </p>
                <p className="text-[8px] text-black flex items-center gap-1 line-through">
                    <FaBangladeshiTakaSign />
                    <span>{oldPrice}</span>
                </p>
            </div>
        </div>

        {/* favorite icon */}
        <div className="absolute top-2 right-2 flex justify-center items-center w-6 h-6 rounded-full shadow-xl bg-white text-[#9C9C9C] text-sm">
            <FaRegHeart />
        </div>
    </div>
  )
}
