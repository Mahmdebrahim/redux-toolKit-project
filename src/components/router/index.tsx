import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import RootLayout from "../pages/Layout";
import ErrorHandler from "../errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages";
import Cart from "../pages/Cart";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
      
      <Route path="*" element={<PageNotFound/>}/>
    </>
  )
);

export default router;