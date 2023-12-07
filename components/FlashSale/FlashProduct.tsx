import Image from "next/image"

type FlashProductProps = {
    isShow: boolean,
    imageUrl: string,
    title: string,
    category: string,
    isLast: boolean,
}

export default function FlashProduct({ isShow, imageUrl, title, category, isLast }: FlashProductProps) {
  return (
    <div
        className={`transform transition-all text-center w-full h-full bg-white rounded-sm pt-[5px] px-[18px] pb-[14px] duration-300 ${
            isShow ? 'opacity-100' : 'opacity-0 hidden'
        } ${isLast ? 'h-full flex justify-center items-center flex-col' : ''}`}
        style={{ gridRow: isLast ? 'span 2' : 'auto' }}
    >
        <div className="relative w-full">
            <div className='relative h-16'>
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill 
                    sizes="100%"
                    priority={true}
                    className='object-center object-contain w-full h-full'
                />
            </div>
        </div>
        <p className="text-[10px] text-dark capitalize pt-2.5">{category}</p>
    </div>
  )
}
