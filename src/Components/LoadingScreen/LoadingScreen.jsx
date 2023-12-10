import styles from './LoadingScreen.module.css';
import loadingAnimation from '../../assets/loading.mp4';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className={styles.loadingContainer}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video src={loadingAnimation} autoPlay muted></video>
    </motion.div>
  );
}
