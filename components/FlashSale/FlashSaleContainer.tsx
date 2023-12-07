import React from 'react'
import FlashSaleHeader from './FlashSaleHeader'
import FlashSalesProducts from './FlashSalesProducts'

export default function FlashSaleContainer() {
    return (
        <div className='flex flex-col gap-0.5'>
            <FlashSaleHeader />
            <FlashSalesProducts />
        </div>
    )
}
