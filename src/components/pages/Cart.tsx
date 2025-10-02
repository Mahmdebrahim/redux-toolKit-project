import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import type { IProduct } from "../../interfaces"
import ProductCard from "../ProductCard"

function cart() {
  const {cartItems} = useSelector(({cart}: RootState) => cart) 
  return (
    cartItems.length ? (
      <div className="grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-4 lg:mx-auto xl:grid-cols-4 gap-3 md:gap-4 p-2 rounded-md">
        {cartItems.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <div>No product yet in cary</div>
    )
  )
}

export default cart