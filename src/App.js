import React, { useContext, useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Professional from './Components/Professional';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const lightMode = theme.state.lightMode;

  useEffect(() => {
    if (lightMode) {
      document.documentElement.style.setProperty('--scrollbar-bg', 'var(--textColor)');
    } else {
      document.documentElement.style.setProperty('--scrollbar-bg', 'var(--borderColor)');
    }
  }, [lightMode]);

  return (
    <div className="App" style={{
      background: lightMode ? 'linear-gradient(to bottom right,#e4e6ff,#fff 40%,#e4ebff)' : '',
      color: lightMode ? 'black' : ''
    }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Professional />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;