import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useRouter } from 'next/router';

import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import designSrc from 'public/images/slides/design.png';
import secureSrc from 'public/images/slides/secure.png';
import identitySrc from 'public/images/slides/identity.png';
import interactionSrc from 'public/images/slides/interaction.png';
import ButtonContainer from 'components/common/ButtonContainer';

import * as S from './styles';

const IntroSlides = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const customSlider = useRef<Slider | null>(null);
  const router = useRouter();

  const handleLaunchApp = () => {
    router.push(RouteName.Register);
  };

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,

    afterChange: (i: number) => {
      setCurrentIndex(i);
    },
    customPaging: (i: number) => (
      <S.Pagination index={i} activeIndex={CurrentIndex} />
    ),
  };

  const slides = [
    {
      id: 1,
      padding: 'pt-[62px]',
      imgSrc: designSrc,
      imgWidth: 269,
      imgHeight: 336,
      title: 'Useful by design',
      desc: "Rabet is designed with accessibility in mind, allowing users to execute Stellar's major operations in a user-friendly environment.",
    },
    {
      id: 2,
      padding: 'pt-[80px]',
      imgSrc: secureSrc,
      imgWidth: 305,
      imgHeight: 318,
      title: 'Secure by default',
      desc: 'All the data in the Rabet is encrypted and stored on your local device. Therefore, you are in complete control of your data.',
    },
    {
      id: 3,
      padding: 'pt-[39px]',
      imgSrc: interactionSrc,
      imgWidth: 314,
      imgHeight: 359,
      title: 'Made for interaction',
      desc: 'Anything you have yet gained was derived from the interaction. The structure of Rabet is designed such that one can interact with the next generation financial network, i.e., Stellar.',
    },
    {
      id: 4,
      padding: 'pt-[40px]',
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
          <div
            key={slide.id}
            className={`relative h-[100vh] ${slide.padding}`}
          >
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

      {CurrentIndex === 3 && (
        <ButtonContainer fixedBottom mb={50}>
          <Button
            type="button"
            variant="primary"
            size="medium"
            content="Launch the App"
            onClick={handleLaunchApp}
            className="!rounded"
          />
        </ButtonContainer>
      )}
    </>
  );
};

export default IntroSlides;
