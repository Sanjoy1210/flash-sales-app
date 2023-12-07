"use client"
import { IoIosArrowForward } from "react-icons/io";
import FlashTimer from "./FlashTimer";

export default function FlashSaleHeader() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className='bg-white rounded-sm py-2 px-1.5 flex justify-between items-center'>
        <div className="flex justify-between items-center gap-2.5">
            <h3 className='text-primary text-sm leading-4'>Flash Sale</h3>
            <FlashTimer expiryTimestamp={time} />
        </div>
        <button type="button" className='text-primary text-[10px] font-medium flex items-center'>
            <span>See More</span>
            <IoIosArrowForward className="text-sm" />
        </button>
    </div>
  )
}
