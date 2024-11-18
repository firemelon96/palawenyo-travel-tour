import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Tours from "./components/tours";
import OtherServices from "./components/other-services";
import Contact from "./components/contact";
import ReviewsMap from "./components/reviewsMap";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-800">
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
