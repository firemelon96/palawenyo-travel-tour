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
      <h3 className="mb-10 text-center text-4xl font-semibold text-primary md:text-start">
        Customers <span className="text-third">Testimonial</span>
      </h3>
      <div className="flex h-96 flex-col items-center gap-4 md:flex-row">
        <div className="flex w-full flex-row items-center justify-center gap-2 md:w-1/3 md:flex-col">
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
              className={`flex w-full cursor-pointer items-start justify-start gap-4 rounded-md ${selectMessage.index === index && "bg-background"} p-4 shadow-sm`}
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image src={review.image} fill alt="avatar" />
              </div>
              <div className="hidden flex-col p-2 md:flex">
                <span className="text-3xl text-third">{review.name}</span>
                <p className="text-xl text-third">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full items-center text-center md:w-2/3 md:text-start">
          <div className="flex flex-col gap-3 p-4">
            <p className="text-3xl font-medium text-third">
              {selectMessage?.heading}
            </p>
            <div className="flex justify-center gap-2 md:justify-start">
              {Array.from({ length: selectMessage?.starRating! }).map(
                (_, i) => (
                  <BsStarFill key={i} className="fill-orange-500" />
                ),
              )}
            </div>
            <p className="pb-10 text-2xl text-third">
              {selectMessage?.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMap;
