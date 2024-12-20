"use client";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

interface ImageProps {
  images: string[];
}

const ImageSliderSlick = ({ images }: ImageProps) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={images[i]}
            height={400}
            width={400}
            alt={`image-${i + 1}`}
            className="h-20 w-20 cursor-pointer overflow-x-auto"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image} className="relative h-[500px]">
            <Image
              src={image}
              fill
              alt={`image-${image + 1}`}
              className="object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSliderSlick;
