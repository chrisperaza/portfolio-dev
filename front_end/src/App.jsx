// import React from 'react'
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
// Utils
import ScrollToTop from './utils/ScrollToTop';
// Router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
