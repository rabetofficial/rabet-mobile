import React from 'react';
import getOS from 'helpers/getOs';

const { motion } = require('framer-motion');

type AppProps = {
  children: React.ReactNode;
  key?: string;
};

const SpringLoad = ({ children, key }: AppProps) => (
  <>
    {getOS() !== 'ios' ? (
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
    ) : (
      children
    )}
  </>
);

SpringLoad.defaultProps = {
  key: '',
};

export default SpringLoad;
