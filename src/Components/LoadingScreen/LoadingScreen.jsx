import styles from './LoadingScreen.module.css';
import loadingAnimation from '../../assets/loading.mp4';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function LoadingScreen() {
  const vidRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      vidRef.current.play();
    }, 700);
  });

  return (
    <motion.div
      className={styles.loadingContainer}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video src={loadingAnimation} ref={vidRef} muted></video>
    </motion.div>
  );
}
