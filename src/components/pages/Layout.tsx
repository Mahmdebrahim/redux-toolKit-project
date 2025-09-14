import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";


const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
