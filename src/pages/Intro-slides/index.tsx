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

export default function App() {
  const [currentSwipe, setCurrentSwipe] = useState({
    activeIndex: 0,
    isBeginning: true,
    isEnd: false,
  });
  const swiperRef = React.useRef(null);
  console.log(currentSwipe);
  return (
    <>
      <S.Container>
        <Swiper ref={swiperRef} onSlideChange={setCurrentSwipe}>
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
        </Swiper>

        <S.LeftCircle
          thirdSlide={currentSwipe.activeIndex === 3}
          disabled={currentSwipe.isBeginning}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <SlideLeft disabled={currentSwipe.activeIndex === 0} />
        </S.LeftCircle>

        <S.RightCircle
          thirdSlide={currentSwipe.activeIndex === 3}
          disabled={currentSwipe.isEnd}
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <SlideRight disabled={currentSwipe.activeIndex === 3} />
        </S.RightCircle>
      </S.Container>
    </>
  );
}
