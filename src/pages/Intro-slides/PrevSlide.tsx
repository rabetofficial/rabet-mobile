import { useSwiper } from 'swiper/react';

type Props = { children: React.ReactNode };

const PrevSlide = ({ children }: Props) => {
  const swiper = useSwiper();

  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      {children}
    </div>
  );
};

export default PrevSlide;
