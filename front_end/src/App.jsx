// import React from 'react'
// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
// Router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
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
