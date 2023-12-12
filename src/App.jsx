import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Projects from './Components/Projects/Projects';
import Overview from './Components/Overview/Overview';
import Contact from './Components/Contact/Contact';

function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2400);
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <div
        style={{
          overflow: isLoading ? 'hidden' : 'unset',
          height: isLoading ? '100vh' : 'unset',
        }}
      >
        <NavBar />
        <Header />
        <Projects />
        <Overview />
        <Contact />
      </div>
    </>
  );
}

export default App;
