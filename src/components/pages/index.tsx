import ProductCard from "../ProductCard"

function HomePage() {
  return (
    <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:mx-auto xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      <ProductCard/>
    </div>
  )
}

export default HomePage