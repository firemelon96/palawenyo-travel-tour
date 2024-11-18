import { ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RecommendedTours from "../components/recommended-tours";
import { NavbarSingle } from "./components/nav-bar-single";

const TourLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="dark:bg-slate-800 bg-white">
      <NavbarSingle />
      {children}

      <Footer />
    </main>
  );
};

export default TourLayout;
