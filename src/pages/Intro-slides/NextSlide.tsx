import { useSwiper } from 'swiper/react';

type Props = { children: React.ReactNode };

const NextSlide = ({ children }: Props) => {
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
