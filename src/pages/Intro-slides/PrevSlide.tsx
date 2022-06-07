import { useSwiper } from 'swiper/react';

const PrevSlide = ({ children }) => {
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
