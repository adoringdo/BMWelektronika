import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Projects from './Components/Projects/Projects';
import Overview from './Components/Overview/Overview';
import Contact from './Components/Contact/Contact';
import { LanguageContext } from './Components/Contexts/languageContext';
import ScrollIndicator from './Components/Scrollbar/ScrollIndicator';

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  //loading screen
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2700);
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
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <ScrollIndicator />
          <NavBar />
          <Header />
          <Projects />
          <Overview />
          <Contact />
        </LanguageContext.Provider>
      </div>
    </>
  );
}

export default App;
