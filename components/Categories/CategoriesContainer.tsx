import CategoryItem from './CategoryItem'

export default function CategoriesContainer() {
  return (
    <section className='px-1.5 pb-20'>
        <div className='bg-white rounded-sm py-2 px-1.5 flex justify-between items-center'>
            <h3 className='text-light-gray text-sm leading-4'>Categories</h3>
        </div>
        {/* categories */}
        <div className="grid grid-cols-3 gap-0.5 mt-0.5">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
        </div>
    </section>
  )
}
