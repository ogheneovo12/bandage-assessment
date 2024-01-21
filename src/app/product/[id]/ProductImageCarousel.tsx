"use client";
import Image, { StaticImageData } from "next/image";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Thumbs } from "swiper/modules";

export const ProductImageCarousel = ({
  productImages,
}: {
  productImages?: (string | StaticImageData)[];
}) => {
  const swiperElRef = useRef<SwiperRef>(null);
  const swiperThumbElRef = useRef<SwiperRef>(null);

  useEffect(() => {
    register();

    // listen for Swiper events using addEventListener

    const params = {
      modules: [Thumbs],
      slidesPerView: 1,
      injectStyles: [
        `
        .swiper-button-prev,.swiper-button-next{
          color:#23A6F0;
        }
        `, //white was used in the design, but it's not accessible, hence why primary is used here
      ],
    };
    const thumbParams = {
      slidesPerView: 4,
      className: "my-thumbs mt-2",
    };
    if (swiperElRef?.current && swiperThumbElRef?.current) {
      Object.assign(swiperElRef.current, params);
      Object.assign(swiperThumbElRef.current, thumbParams);
    }

    try {
      swiperThumbElRef.current?.initialize();
      swiperElRef.current?.initialize();
    } catch (err) {}
  }, []);

  return (
    <div className="min-h-[450px] overflow-hidden w-full max-w-[506px]">
      <swiper-container
        ref={swiperElRef}
        className="mySwiper"
        thumbs-swiper=".my-thumbs"
        init={false}
        navigation
        pagination
      >
        {productImages?.map((image, index) => (
          <swiper-slide key={index}>
            <div className="relative w-[506px] h-[450px]">
              <Image
                className="object-cover"
                fill
                src={image}
                alt="slide changed"
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>

      <swiper-container
        ref={swiperThumbElRef}
        free-mode
        watch-slides-progress
        init={false}
      >
        {productImages?.map((image, index) => (
          <swiper-slide key={index}>
            <div className="relative w-[100px] h-[75px]">
              <Image
                className="object-cover"
                fill
                src={image}
                alt="slide changed"
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};
