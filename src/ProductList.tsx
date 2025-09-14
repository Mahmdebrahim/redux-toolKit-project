import type { IProduct } from './interfaces';
import ProductCard from './components/ProductCard';
import useCustomQuery from './hooks/useCustomQuery';

function ProductList() {
    const { data, isLoading } = useCustomQuery({
        queryKey: ["ProductList"],
        url: `/products?limit=15&select=title,price,thumbnail`,
    });
    console.log(data);
    if (isLoading) return <h3>Loading...</h3>;
  return (
   <div className="grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-4 lg:mx-auto xl:grid-cols-4 gap-3 md:gap-4 p-2 rounded-md">
      {data.products.map((product:IProduct) => ( 
        <ProductCard product={product}/>
      ))}
    </div>
  )
}
export default ProductList