import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedTour from "./components/featured-tour";
import Footer from "./components/footer";
import Tours from "./components/tours";
import OtherServices from "./components/other-services";
import Contact from "./components/contact";
import ReviewsMap from "./components/reviewsMap";

export default function Home() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <Hero />
      {/* <FeaturedTour /> */}
      <Tours />
      {/* <OtherServices /> */}
      <ReviewsMap />
      {/* <TripByLocation /> */}
      <Contact />
      <Footer />
    </div>
  );
}
