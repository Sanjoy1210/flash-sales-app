import React from 'react'
import { productsData } from './productsData'
import Image from 'next/image'
import ProductSlider from './ProductSlider'

export default function FlashSalesProducts() {
  return (
    <div className=''>
        {/* {
            productsData?.map(product => <div key={product?.id}>
                <Image src={product?.imageUrl} alt={product?.title} width={100} height={100} />
            </div>)
        } */}
        <ProductSlider />
    </div>
  )
}
