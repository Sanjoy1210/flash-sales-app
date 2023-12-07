import BannerContainer from '@/components/Banner/BannerContainer';
import CategoriesContainer from '@/components/Categories/CategoriesContainer';
import FeaturesContainer from '@/components/Features/FeaturesContainer';
import FlashSaleContainer from '@/components/FlashSale/FlashSaleContainer';

export default function Home() {
  return (
    <div className='flex flex-col gap-2'>
      <BannerContainer />
      <FeaturesContainer />
      <FlashSaleContainer />
      <CategoriesContainer />
    </div>
  )
}
