import React from 'react';
import LinesPage from './pages/LinesPage';
import Home from "./pages/Home.js";
import About from "./pages/About.js";

import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
      <Route path="About" element={<About/>} />
      <Route path="Line">
        <Route path = ":color" element={<LinesPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
