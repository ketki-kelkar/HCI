import React from 'react';

import Main from './pages/Main';
import Cafe1 from './pages/Cafe1';
import Cafe2 from './pages/Cafe2';
import Cafe3 from './pages/Cafe3';
import MenuCafe1 from './pages/Menu-Cafe1';
import BookNow from './pages/BookNow';
import DrinkOfTheWeek from './pages/DrinkOfWeek';
import Party from './pages/Party';
import Clients from './pages/Client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Privacy from './pages/Privacy';
import Ads from './pages/Ads';
import Help from './pages/Help';
import AboutUs from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cafe1" element={<Cafe1 />}></Route>
          <Route path="/cafe2" element={<Cafe2 />}></Route>
          <Route path="/cafe3" element={<Cafe3 />}></Route>
          <Route path="/menu-cafe1" element={<MenuCafe1 />}></Route>
          <Route path="/calender-book" element={<BookNow />}></Route>
          <Route path="/drinkOfWeek" element={<DrinkOfTheWeek />}></Route>
          <Route path="/party" element={<Party />}></Route>

          <Route path="/client" element={<Clients />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/ads" element={<Ads/>}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
};

export default App;