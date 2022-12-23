import { ThemeProvider} from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import myCustomTheme from './App.theme';



function App() {
  // add scroll class
  const addScrollClass = () => {
    if (window.scrollY > 40) {
      document.body.classList.add('page-scrolled');
    } else {
      document.body.classList.remove('page-scrolled');
    }
  };
  window.addEventListener('scroll', addScrollClass);
  return (

    <>
      <ThemeProvider theme={myCustomTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );

}

export default App;
