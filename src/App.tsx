import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import Guide from './components/Guide';
import Home from './components/Home';
import Main from './components/Main';
import Nav from './components/Nav';
import Products from './components/Products';

function App() {
  const param = useLocation();
  return (
    <>
      {param.pathname !== '/' && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
