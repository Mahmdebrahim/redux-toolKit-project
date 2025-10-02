import type { IProduct } from './interfaces';
import ProductCard from './components/ProductCard';
// import useCustomQuery from './hooks/useCustomQuery';
import { useEffect } from 'react';
import { getProducts } from './app/features/products/productSlice';
import { useAppDispatch} from './app/store';

function ProductList() {
  // ** using react query
  // const { data, isLoading } = useCustomQuery({
    //     queryKey: ["ProductList"],
    //     url: `/products?limit=15&select=title,price,thumbnail`,
    // });
    // console.log(data);
    // if (isLoading) return <h3>Loading...</h3>;


    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])
    
  return (
   <div className="grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-4 lg:mx-auto xl:grid-cols-4 gap-3 md:gap-4 p-2 rounded-md">
      {[].map((product:IProduct) => ( 
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}
export default ProductList