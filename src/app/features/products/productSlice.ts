import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";


export const productApiSlice = createApi({
    reducerPath: 'products',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
       getProducts: builder.query({
           query: () =>  `/products?limit=15&select=title,price,thumbnail`,
       })
    }),
})

export const { useGetProductsQuery } = productApiSlice;


