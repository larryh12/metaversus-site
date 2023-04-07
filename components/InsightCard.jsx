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

    {/* text wrapper inclduing arrow */}
    <div className="w-full flex justify-between items-center">
      {/* text wrapper without arrow, only title and subtitle */}
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
