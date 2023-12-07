import Image from 'next/image';

export default function BannerContainer() {
  return (
    <div className='relative h-44 w-full'>
        <Image 
            src="/images/banner-1.png" 
            alt="Banner" 
            fill 
            sizes="100%"
            priority={true}
            className='object-cover w-full h-full'
        />
    </div>
  );
}
