import { NavLink } from "react-router-dom";
import {  LogIn, ShoppingBag, ShoppingBasket,} from 'lucide-react';
import Button from "./ui/Button";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";


const Navbar = () => {
 const {cartItems} = useSelector(({cart}: RootState) => cart) 
  return (
    <nav className="max-w-l mx-auto mt-0 bg-white mb-10 px-9 py-2 rounded-md">
      <ul className="flex items-center flex-wrp gap-2 md:justify-between">
        <li className="text-indigo-500 duration-200 font-semibold text-lg">
          <NavLink to="/" className={"flex items-center gap-1"}>
            <ShoppingBag />Shopify
          </NavLink>
        </li>
        <li>
            <ul className="flex items-center text-gray-400 space-x-4">
              <li className="duration-200 hover:text-indigo-500 text-s">
                <NavLink to="/prircing">Pricing</NavLink>
              </li>
              <li className="duration-200 hover:text-indigo-500 text-s">
                <NavLink to="/profile">Featuers</NavLink>
              </li>
              <li className="duration-200 relative hover:text-indigo-500 text-s">
                <NavLink to="/cart">
                 <ShoppingBasket /> 
                 <span className="absolute bottom-3.5 left-4 text-center text-xs w-4 h-4 rounded-full bg-indigo-500 text-white">
                   {cartItems.length}
                  </span>
                </NavLink>
              </li>
              <li className="">
                <Button
                  className="bg-indigo-500 text-white flex items-center gap-1 py-0.5 rounded-md cursor-pointer text-sm"
                  onClick={()=>{}}
                >
                  Login <LogIn size={15}/> 
                </Button>
              </li>
            </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;