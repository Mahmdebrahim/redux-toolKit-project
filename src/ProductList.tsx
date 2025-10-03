// import useCustomQuery from './hooks/useCustomQuery';
// import { useEffect } from 'react';
// import { useAppDispatch, type RootState} from './app/store';
// import { useSelector } from 'react-redux';
// import { getProducts } from './app/features/products/createAsyncThunk';
import type { IProduct } from "./interfaces";
import ProductCard from "./components/ProductCard";
import { useGetProductsQuery } from "./app/features/products/productSlice";

function ProductList() {
  // ** using react query
  // const { data, isLoading } = useCustomQuery({
  //     queryKey: ["ProductList"],
  //     url: `/products?limit=15&select=title,price,thumbnail`,
  // });
  // console.log(data);
  // if (isLoading) return <h3>Loading...</h3>;
  // ** using redux toolkit
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [dispatch])
  // const {data,error,loading} = useSelector(({products}: RootState) => products)
  // if(loading) return <h3>Loading...</h3>
  // if(error) return <h3>{(error as any).message}</h3>
  // ** using redux toolkit query
  const { data, error, isLoading } = useGetProductsQuery();
  console.log({error,data,isLoading});
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>{error.status}</h3>;

  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-4 lg:mx-auto xl:grid-cols-4 gap-3 md:gap-4 p-2 rounded-md">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductList;
