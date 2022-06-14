import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { SlideLeft, SlideRight } from 'svgs/longArrowCircle';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import designSrc from 'public/images/slides/design.png';
import secureSrc from 'public/images/slides/secure.png';
import interactionSrc from 'public/images/slides/intraction.png';
import identitySrc from 'public/images/slides/identity.png';

import * as S from './styles';

const IntroSlides = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const customSlider = useRef<Slider | null>(null);
  const router = useRouter();

  const handleLaunchApp = () => {
    router.push(RouteName.Register);
  };

  const next = () => {
    // @ts-ignore
    customSlider.current.slickNext();
  };

  const previous = () => {
    // @ts-ignore
    customSlider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (index: number) => {
      setSlideIndex(index);
      console.warn(index);
    },
  };

  const slides = [
    {
      id: 1,
      imgSrc: designSrc,
      imgWidth: 224,
      imgHeight: 280,
      title: 'Useful by design',
      desc: "Rabet is designed with accessibility in mind, allowing users to execute Stellar's major operations in a user-friendly environment.",
    },
    {
      id: 2,
      imgSrc: secureSrc,
      imgWidth: 254,
      imgHeight: 260,
      title: 'Secure by default',
      desc: 'All the data in the Rabet is encrypted and stored on your local device. Therefore, you are in complete control of your data.',
    },
    {
      id: 3,
      imgSrc: interactionSrc,
      imgWidth: 262,
      imgHeight: 299,
      title: 'Made for interaction',
      desc: 'Anything you have yet gained was derived from the interaction. The structure of Rabet is designed such that one can interact with the next generation financial network, i.e., Stellar.',
    },
    {
      id: 4,
      imgSrc: identitySrc,
      imgWidth: 274,
      imgHeight: 358,
      title: 'Rabet is Your Identity',
      desc: 'In the Stellar world, Rabet is your passport, letting you interact with any SApp you wish.',
    },
  ];

  return (
    <>
      <Slider {...settings} ref={customSlider}>
        {slides.map((slide) => (
          <div key={slide.id} className="pt-[30px]">
            <div className="flex justify-center">
              <Image
                src={slide.imgSrc}
                width={slide.imgWidth}
                height={slide.imgHeight}
              />
            </div>

            <div className="text-center">
              <S.HeadText>{slide.title}</S.HeadText>
              <S.MainText>{slide.desc}</S.MainText>
            </div>
          </div>
        ))}
      </Slider>

      <S.SliderArrows className="space-x-8">
        <button type="button" onClick={previous}>
          <S.Circle
            thirdSlide={slideIndex === 2}
            disabled={slideIndex === 0}
          >
            <SlideLeft disabled={slideIndex === 0} />
          </S.Circle>
        </button>
        <button type="button" onClick={next}>
          <S.Circle
            thirdSlide={slideIndex === 2}
            disabled={slideIndex === 2}
          >
            <SlideRight />
          </S.Circle>
        </button>
      </S.SliderArrows>

      {slideIndex === 2 && (
        <div className="absolute bottom-[50px] right-0 left-0 px-4">
          <Button
            type="button"
            variant="primary"
            size="medium"
            content="Launch the App"
            onClick={handleLaunchApp}
            className="!rounded"
          />
        </div>
      )}
    </>
  );
};

export default IntroSlides;
