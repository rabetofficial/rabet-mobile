import React, { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

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
      <S.Container>
        <Swiper
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

          <NextSlide>
            <S.RightCircle
              thirdSlide={slideIndex === 3}
              disabled={slideIndex === 3}
            >
              <SlideRight disabled={slideIndex === 3} />
            </S.RightCircle>
          </NextSlide>

          <PrevSlide>
            <S.LeftCircle
              thirdSlide={slideIndex === 3}
              disabled={slideIndex === 0}
            >
              <SlideLeft disabled={slideIndex === 0} />
            </S.LeftCircle>
          </PrevSlide>
        </Swiper>
      </S.Container>
    </>
  );
}
