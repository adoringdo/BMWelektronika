import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2300);
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <NavBar />
      <div className="page">
        <Header />
      </div>
    </>
  );
}

export default App;
