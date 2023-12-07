import CategoriesContainer from '@/components/Categories/CategoriesContainer';
import FlashSaleContainer from '@/components/FlashSale/FlashSaleContainer';

export default function Home() {
  return (
    <div className='flex flex-col gap-2 overflow-scroll'>
      <FlashSaleContainer />
      <CategoriesContainer />
    </div>
  )
}
