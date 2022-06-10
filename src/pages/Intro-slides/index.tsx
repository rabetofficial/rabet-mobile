import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper';

import { SlideLeft, SlideRight } from 'svgs/longArrowCircle';

import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

import * as S from './styles';

import NextSlide from './NextSlide';
import PrevSlide from './PrevSlide';

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  console.log(slideIndex);

  return (
    <>
      <Swiper
        // pagination={{
        //   dynamicBullets: true,
        // }}
        // modules={[Pagination]}
        onSlideChange={(e) => {
          setSlideIndex(e.activeIndex);
        }}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
        <S.Navigators />
        <NextSlide>
          <S.RightCircle
            thirdSlide={slideIndex === 3}
            disabled={slideIndex === 3}
          >
            <SlideRight />
          </S.RightCircle>
        </NextSlide>

        <PrevSlide>
          <S.LeftCircle
            thirdSlide={slideIndex === 3}
            disabled={slideIndex === 1}
          >
            <SlideLeft disabled={slideIndex === 0} />
          </S.LeftCircle>
        </PrevSlide>
      </Swiper>
    </>
  );
}
