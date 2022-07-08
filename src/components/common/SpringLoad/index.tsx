import React from 'react';
import { useSpring, animated } from 'react-spring';

const SpringLoad = ({ children }: { children: React.ReactNode }) => {
  const springs = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
  });
  return <animated.div style={springs}>{children}</animated.div>;
};

export default SpringLoad;
