import { ShoppingCart } from "lucide-react";
import Button from "./ui/Button";
import type { IProduct } from "../interfaces";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../app/features/cart/cartSlice";


interface ProductCardProps {
  product: IProduct,
}
const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const {id,price,thumbnail,title,qty} = product;
  const dispatch = useDispatch();
  
  return (
    <div key={id}>
        <div className="relative flex w-full max-h-fit max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a href="#">
            <img className="object-cover" src={thumbnail} alt={title} />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-indigo-500 px-2 text-center text-sm font-medium text-white">
              39% OFF
            </span>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-l tracking-tight text-slate-900">
                {title.length >= 20 ? `${title.slice(0, 20)}...` : title}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-2xl font-bold text-stone-900">
                  ${price}
                </span>
                <span className="text-sm text-slate-500 line-through">
                  $650
                </span>
              </p>
              <div className="text-indigo-500 flex items-center">
               {qty ? ` quntity: ${qty}` : ""}
              </div>
            </div>
            <Button
              fullWidth
              className="py-1.5 gap-1.5 cursor-pointer"
              onClick={() =>
                dispatch(addItemToCart(product))
              }
            >
              <ShoppingCart />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
