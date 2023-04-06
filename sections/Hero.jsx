'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    {/* parent motion div to render animation */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      // anime not only once but multiple time when scroll to viewport
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      bla
    </motion.div>
  </section>
);

export default Hero;
