"use client";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { reviews } from "../data/reviews";
import { useState } from "react";

interface MessageObj {
  index: number;
  message: string;
  starRating: number;
  heading: string;
}

const ReviewsMap = () => {
  const [selectMessage, setSelectMessage] = useState<MessageObj>({
    index: 0,
    message: reviews[0].message,
    starRating: reviews[0].starRating,
    heading: reviews[0].heading,
  });

  return (
    <section
      className="container mx-auto h-fit py-20 md:px-20"
      id="testimonial"
    >
      <h3 className="text-slate-500 mb-10 text-center text-2xl md:text-start">
        Traveller&apos;s <span className="text-sky-500">Reviews</span>
      </h3>
      <div className="flex h-96 flex-col items-center md:flex-row">
        <div className="flex w-full flex-row items-center justify-center md:w-1/3 md:flex-col">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              onClick={() => {
                setSelectMessage({
                  index,
                  message: review.message,
                  starRating: review.starRating,
                  heading: review.heading,
                });
              }}
              className={`flex w-full cursor-pointer items-center justify-center rounded-md md:items-start md:justify-start ${selectMessage.index === index && "bg-sky-50 dark:bg-sky-500/10"} p-4`}
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image src={review.image} fill alt="avatar" />
              </div>
              <div className="hidden flex-col p-2 md:flex">
                <span className="text-slate-600 dark:text-slate-300 text-xl">
                  {review.name}
                </span>
                <p className="text-slate-500 text-base">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dark:bg-sky-500/10 bg-sky-50 h-96 w-full items-center rounded-xl text-center md:w-2/3 md:text-start">
          <div className="flex flex-col gap-3 p-4">
            <p className="text-xl font-medium text-third">
              {selectMessage?.heading}
            </p>
            <div className="flex justify-center gap-2 md:justify-start">
              {Array.from({ length: selectMessage?.starRating! }).map(
                (_, i) => (
                  <BsStarFill key={i} className="fill-orange-500" />
                ),
              )}
            </div>
            <p className="text- third pb-10 text-lg">
              {selectMessage?.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMap;
