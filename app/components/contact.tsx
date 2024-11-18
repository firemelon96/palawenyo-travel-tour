import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import dynamic from "next/dynamic";
import Link from "next/link";

const Map = dynamic(
  () => {
    return import("./map");
  },
  { ssr: false },
);

const Contact = () => {
  return (
    <section className="bg-background py-20" id="contact">
      <div className="container mx-auto md:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full p-4 md:w-1/2">
            <Map />
          </div>
          <div className="w-full p-4 md:w-1/2">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="mb-20 w-full text-center text-4xl font-semibold text-primary md:text-start">
                <span>Got any Inquiries?</span>
                <p className="text-third">Message us</p>
              </div>
              <Link
                href="https://wa.me/639989573011?text=I'm%20interested%20in%20your%20tour%20booking"
                className="flex w-full items-center justify-center gap-3 border p-4 text-3xl text-third"
              >
                <BsWhatsapp /> Chat on Whatsapp
              </Link>
              <Link
                href="https://m.me/107338648650143?text=I'm%20interested%20in%20your%20tour%20booking"
                className="flex w-full items-center justify-center gap-3 border p-4 text-3xl text-third"
              >
                <BsMessenger /> Messenger
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
