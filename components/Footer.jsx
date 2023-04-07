'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* gradient layer */}
    <div className="footer-gradient" />
    {/* overall footer text wrapper */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      footer
    </div>
  </motion.footer>
);

export default Footer;
