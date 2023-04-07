'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* motion wrapper */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      whatsnew
    </motion.div>
  </section>
);

export default WhatsNew;
