import React, { useEffect } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSpring, config } from '@react-spring/web';

import * as S from './styles';

type AppProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  height: number;
};

type OpenArg = {
  canceled: any;
};

const BottomSheet = ({
  children,
  isOpen,
  height,
  setOpen,
}: AppProps) => {
  const [{ y }, api] = useSpring(() => ({ y: height }));

  const open = ({ canceled }: OpenArg) => {
    setOpen(true);
    api.start({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
  };

  const close = (velocity = 0) => {
    setOpen(false);
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
  };

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
      canceled,
    }) => {
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (my < -70) cancel();

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0)
          ? close(vy)
          : open({ canceled });
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  const bgStyle = {
    backgroundColor: y.to(
      [0, height],
      ['rgba(0, 0, 0, 0.24)', 'transparent'],
    ),
    display,
  };

  useEffect(() => {
    if (isOpen) {
      open({ canceled: false });
    } else {
      close();
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden">
      <S.Overlay onClick={() => close()} style={bgStyle} />

      <S.Sheet
        {...bind()}
        style={{
          display,
          bottom: `calc(-100vh + ${height - 100}px)`,
          y,
        }}
      >
        {children}
      </S.Sheet>
    </div>
  );
};

export default BottomSheet;
