import FlashSaleHeader from './FlashSaleHeader'
import ProductSlider from './ProductSlider'

export default function FlashSaleContainer() {
    return (
        <section className='flex flex-col gap-0.5 px-1.5'>
            <FlashSaleHeader />
            <ProductSlider />
        </section>
    )
}
