import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="bg-linear-to-t from-blue-200 to-purple-300 min-h-screen">
      <Header />
      <div className="mx-0 sm:mx-5 md:mx-10 lg:mx-20 p-20">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;