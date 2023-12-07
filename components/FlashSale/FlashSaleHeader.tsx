import { IoIosArrowForward } from "react-icons/io";

export default function FlashSaleHeader() {
  return (
    <div className='bg-white rounded-sm py-2 px-1.5 flex justify-between items-center'>
        <div className="flex justify-between items-center gap-2.5">
            <h3 className='text-primary text-sm leading-4'>Flash Sale</h3>
            <div className="flex justify-between item-center gap-1.5">
                <span className="bg-primary rounded text-white text-[10px] font-medium inline-block py-[3px] px-1">10</span>
                <span className="bg-primary rounded text-white text-[10px] font-medium inline-block py-[3px] px-1">10</span>
                <span className="bg-primary rounded text-white text-[10px] font-medium inline-block py-[3px] px-1">10</span>
            </div>
        </div>
        <button type="button" className='text-primary text-[10px] font-medium flex items-center'>
            <span>See More</span>
            <IoIosArrowForward className="text-sm" />
        </button>
    </div>
  )
}
