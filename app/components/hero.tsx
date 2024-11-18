import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="bg-sky-800 mt-20 flex w-full overflow-hidden">
      <div className="relative h-[540px] w-full">
        <Image
          fill
          alt="Palawan island"
          src="/resources/coron.avif"
          className="w-full object-cover object-center"
          priority
        />

        <div className="text-sky-50 container absolute inset-0 mx-auto flex items-center font-bold xl:px-20">
          <div className="w-full space-y-2 px-4 text-center md:w-2/3 md:text-start">
            <h1 className="text-2xl lg:text-6xl">
              Providing affordable and reasonable travel packages
            </h1>
            <p className="text-sky-100 stroke-1 text-base lg:text-2xl">
              Going the extra mile to go beyond our client&apos;s expectations
            </p>

            <Link
              href="#tours"
              className="flex items-center justify-center md:justify-start"
            >
              <button className="bg-sky-500 mt-5 flex items-center rounded-full px-4 py-3 text-sm font-light tracking-wider">
                EXPLORE NOW <BiChevronRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
