import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;