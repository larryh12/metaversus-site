'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* section motion wrapper */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* text text text */}
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText title="Insights about metaverse" textStyles="text-center" />
    </motion.div>
  </section>
);

export default Insights;
