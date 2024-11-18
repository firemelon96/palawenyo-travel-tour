import Image from "next/image";

const OtherServices = () => {
  return (
    <section className="relative pb-10">
      <Image
        src="/resources/van.png"
        fill
        alt="van transfer"
        className="object-cover object-bottom"
      />
      <div className="flex flex-col items-center justify-center gap-4 bg-primary/70 p-4 text-center backdrop-blur-sm md:h-[600px]">
        <div className="container mb-10 items-start text-center md:px-20 md:text-start">
          <p className="text-4xl font-semibold text-secondary">
            Van <span className="text-third">Transfer</span>
          </p>
          <p className="text-2xl text-third">Private or Joiners</p>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 md:px-20 lg:grid-cols-6">
          <div className="flex h-56 items-center justify-center rounded-xl border-2 border-secondary">
            <p className="p-4 text-3xl text-secondary">
              Puerto Princesa City to El Nido
            </p>
          </div>
          <div className="flex h-56 items-center justify-center rounded-xl border-2 border-secondary">
            <p className="p-4 text-3xl text-secondary">
              El Nido to Puerto Princesa City
            </p>
          </div>
          <div className="flex h-56 items-center justify-center rounded-xl border-2 border-secondary">
            <p className="p-4 text-3xl text-secondary">Airport Transfer</p>
          </div>
          <div className="flex h-56 items-center justify-center rounded-xl border-2 border-secondary">
            <p className="p-4 text-3xl text-secondary">
              Puerto Princesa City to Port Barton
            </p>
          </div>
          <div className="flex h-56 items-center justify-center rounded-xl border-2 border-secondary">
            <p className="p-4 text-3xl text-secondary">
              Port Barton to Puerto Princesa City
            </p>
          </div>
          <div className="flex h-56 items-center justify-center rounded-xl border-2 border-secondary">
            <p className="p-4 text-3xl text-secondary">Inland Tour</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
