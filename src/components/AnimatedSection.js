import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-16 md:py-24"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;