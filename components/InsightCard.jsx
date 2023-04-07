'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    {/* insight thumbnail */}
    <img
      src={imgUrl}
      alt={`insight-${index}`}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
  </motion.div>
);

export default InsightCard;
