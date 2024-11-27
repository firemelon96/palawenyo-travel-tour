import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ReviewsMap from "./components/reviewsMap";
import PackageTour from "./components/tours-reused";
import { getDayTours, getPackageTours } from "./lib/helpers";
import ToursReused from "./components/tours-reused";

export default function Home() {
  const dayTours = getDayTours();
  const tourPackages = getPackageTours();
  return (
    <div className="bg-white dark:bg-slate-800">
      <Navbar />
      <Hero />
      {/* <FeaturedTour /> */}
      <ToursReused
        sectionId="packageTours"
        label="Package tours in Coron"
        tours={tourPackages}
      />
      <ToursReused
        sectionId="tours"
        label="Explore Coron Day Tours"
        tours={dayTours}
      />
      {/* <OtherServices /> */}
      <ReviewsMap />
      {/* <TripByLocation /> */}
      <Contact />
      <Footer />
    </div>
  );
}
