import Image from 'next/image';

export default function CategoryItem() {
  return (
    <div className="bg-white rounded-sm px-4 pt-2.5 pb-5 text-center">
      <div className='relative h-16 w-20 mx-auto'>
          <Image 
              src="/images/bag.png" 
              alt="Bag" 
              fill 
              sizes="100%"
              className='object-cover w-full h-full'
          />
      </div>
      <p className="text-[8px] text-dark capitalize pt-5">Hand Dishwashing</p>
    </div>
  )
}
