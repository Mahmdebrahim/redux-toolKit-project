import { ShoppingCart } from "lucide-react";
import Button from "./ui/Button";
import useCustomQuery from "./hooks/useCustomQuery";
import type { IProduct } from "../interfaces";

function ProductCard() {
  const { data, isLoading } = useCustomQuery({
    queryKey: ["ProductList"],
    url: `/products?limit=15&select=title,price,thumbnail`,
  });
  console.log(data);
  if (isLoading) return <h3>Loading...</h3>;

  //render products
  const renderProducts = data.products.map((product: IProduct ) => (
    <div key={product.id}>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a href="#">
          <img
            className="object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              {product.title.length >= 20 ? `${product.title.slice(0, 20)}...` : product.title}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${product.price}
              </span>
              <span className="text-sm text-slate-900 line-through">$650</span>
            </p>
          </div>
          <Button fullWidth className="py-1.5 gap-1.5 cursor-pointer" onClick={() => {}}>
            <ShoppingCart />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  ));
  return (
    // {data ? (renderProducts ): "we"}
    renderProducts
  );
}

export default ProductCard;
