'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* motion wrapper */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* add texts */}
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title="Track friends around you and invite them to play together in the same world"
        textStyles="text-center"
      />

      {/* world map */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="map.png" alt="map" className="w-full h-full object-cover" />
        {/* add people on top of map */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
