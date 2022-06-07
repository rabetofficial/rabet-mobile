import { useSwiper } from 'swiper/react';

const NextSlide = ({ children }) => {
  const swiper = useSwiper();

  return (
    <div
      onClick={() => {
        swiper.slideNext();
      }}
    >
      {children}
    </div>
  );
};

export default NextSlide;
