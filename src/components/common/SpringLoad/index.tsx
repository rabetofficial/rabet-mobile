import React from 'react';

const { motion } = require('framer-motion');

type AppProps = {
  children: React.ReactNode;
  key?: string;
};

const SpringLoad = ({ children, key }: AppProps) => (
  <motion.div
    key={key}
    initial="initial"
    animate="animate"
    variants={{
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    }}
  >
    {children}
  </motion.div>
);

SpringLoad.defaultProps = {
  key: '',
};

export default SpringLoad;
