import * as React from 'react';

import AngleRight from 'svgs/AngleRightLight';
import { Tab } from 'models';

const { motion, AnimatePresence } = require('framer-motion');

type AppProps = {
  data: Tab;
  index: number;
  expanded: boolean | number;
  setExpanded: any;
};

const Accordion = ({
  data,
  index,
  expanded,
  setExpanded,
}: AppProps) => {
  const isOpen = index === expanded;

  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : index)}
      >
        <div className="flex items-center justify-between px-4 py-[19.5px]">
          {data.title}

          <motion.div
            className="block"
            animate={{
              rotate: isOpen ? 90 : 0,
            }}
          >
            <AngleRight />
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {data.content}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
