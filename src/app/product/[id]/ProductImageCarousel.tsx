"use client";
import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';


export const ProductImageCarousel = ({ productImages }: { productImages?: (string | StaticImageData)[] }) => {
  const swiperElRef = useRef<SwiperRef>(null);
  const swiperThumbElRef = useRef<SwiperRef>(null);

  useEffect(() => {

    register();

    // listen for Swiper events using addEventListener

    const params = {
      slidesPerView: 1,
    };
    const thumbParams = {
      slidesPerView: 4,
    };
    if (swiperElRef?.current && swiperThumbElRef?.current) {
      Object.assign(swiperElRef.current, params);
      Object.assign(swiperThumbElRef.current, thumbParams);

    }


    swiperThumbElRef.current?.initialize();
    swiperElRef.current?.initialize();
  }, []);

  return (
    <div className='min-h-[450px] overflow-hidden w-full max-w-[506px]'>
      <swiper-container
        ref={swiperElRef}
        thumbs-swiper=".my-thumbs"
        navigation
        pagination
      >
        {
          productImages?.map((image, index) => (
            <swiper-slide key={index}>
              <div className='relative w-[506px] h-[450px]'>
                <Image className='object-cover' fill src={image} alt="slide changed" />
              </div>
            </swiper-slide>
          ))
        }
      </swiper-container>

      <swiper-container ref={swiperThumbElRef} className="my-thumbs">
        {
          productImages?.map((image, index) => (
            <swiper-slide key={index}>
              <div className='relative w-[100px] h-[75px]'>
                <Image className='object-cover' fill src={image} alt="slide changed" />
              </div>
            </swiper-slide>
          ))
        }
      </swiper-container>


    </div>
  );
};