import Image from "next/image"

type FlashProductProps = {
    isShow: boolean,
    imageUrl: string,
    title: string,
    category: string,
}

export default function FlashProduct({ isShow, imageUrl, title, category }: FlashProductProps) {
  return (
    <div
        className={`transform transition-all text-center w-full h-full bg-white pt-[5px] px-[18px] pb-[14px] duration-300 ${
            isShow ? 'opacity-100' : 'opacity-0 hidden'
        }`}
    >
        <div className='relative h-16'>
            <Image 
                src={imageUrl} 
                alt={title} 
                fill 
                sizes="100%"
                className='object-center object-contain w-full h-full'
            />
        </div>
        <p className="text-[10px] text-dark capitalize pt-2.5">{category}</p>
    </div>
  )
}
