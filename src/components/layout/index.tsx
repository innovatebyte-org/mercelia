import { Nav } from "./nav";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="w-full">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
