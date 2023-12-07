import { features } from './featuresData';
import Image from 'next/image';

export default function FeaturesContainer() {
  return (
    <section className='px-1.5'>
        <div className="flex justify-between items-center gap-2.5">
            {
                features?.map(feature => (
                    <div key={feature?.id} className="flex flex-col items-center flex-auto">
                        <div className='relative h-9 w-9 bg-white flex justify-center items-center rounded-full'>
                            <div className="relative h-4 w-4 mx-auto">
                                <Image 
                                    src={feature?.imageUrl}
                                    alt={feature?.title} 
                                    fill 
                                    sizes="100%"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                        </div>
                        <p className="text-[9px] text-dark capitalize pt-1">
                            {feature?.title}
                        </p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
