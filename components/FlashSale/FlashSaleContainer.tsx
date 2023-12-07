import FlashSaleHeader from './FlashSaleHeader'
import ProductSlider from './ProductSlider'

export default function FlashSaleContainer() {
    return (
        <div className='flex flex-col gap-0.5'>
            <FlashSaleHeader />
            <ProductSlider />
        </div>
    )
}
