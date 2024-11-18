import Description from "../components/description";
import Itenerary from "../components/itenerary";
import ListBox from "../components/list-box";
import FormWithZOD from "../components/form-with-zod";
import ImageSliderSlick from "@/app/components/image-slider-slick";
import { formatPeso, getTourById } from "@/app/lib/helpers";
import RecommendedTours from "@/app/components/recommended-tours";
import { Metadata } from "next";
import { tours } from "@/app/data/tours";
import { SocialShare } from "@/app/components/social-share";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return tours.map(({ id }) => id);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTourById((await params).id);
  return {
    title: tour.name,
    description: tour.description,
    openGraph: {
      images: [{ url: tour.images[0] }],
    },
  };
}

const SingleTour = async ({ params }: Props) => {
  const { id } = await params;
  const tour = getTourById(id);

  const shareLink = `${process.env.NEXT_PUBLIC_BASE_URL}/tours/${tour.id}`;

  return (
    <>
      <div className="container mx-auto mt-20 md:px-20">
        <div className="flex flex-col gap-0 md:flex-row">
          <div className="flex w-full flex-col gap-4 p-4 md:w-2/3">
            <div className="bg-sky-500/10">
              <ImageSliderSlick images={tour.images} />
            </div>
            <SocialShare url={shareLink} />
            <Description
              tourName={tour.name}
              price={tour.price}
              description={tour.description}
            />
            <Itenerary itineraries={tour.itinerary} />
          </div>
          <div className="flex w-full flex-col gap-4 px-4 py-0 md:sticky md:top-20 md:w-1/3 md:px-0 md:py-4">
            <div className="bg-sky-50 dark:bg-sky-500/10 border-slate-300 dark:border-slate-600 border p-4 shadow-md">
              <h4 className="text-slate-500 text-sm">
                {tour.price
                  ? `Price starts at ${formatPeso(tour.price)}`
                  : "Book now to request for Price"}
              </h4>
              <hr className="my-2" />
              <h5 className="text-sky-500 text-xl">{tour.name}</h5>
              <p className="text-slate-500">{tour.address}</p>

              <FormWithZOD price={tour.price} duration={tour.duration} />
            </div>
            <ListBox items={tour.inclusions} type="Inclusion" />
            <ListBox items={tour.exclusions} type="Exclusion" />

            <ListBox
              items={tour.additionalInformation.whatToBring}
              type="What to bring"
            />

            <div className="bg-sky-50 dark:bg-sky-500/10 p-4">
              <p className="text-slate-400 text-xl">Notes</p>
              <span className="text-slate-500">
                {tour.additionalInformation.notes}
              </span>
            </div>
          </div>
        </div>
      </div>
      <RecommendedTours id={id} />
    </>
  );
};

export default SingleTour;
