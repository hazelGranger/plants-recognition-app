import { Outlet } from "react-router-dom";
import Title from "./Title";
import Footer from "./Footer";

function Layout() {
  return (
    <main className="app-container">
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
