import React from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Certfications, Name, Projects, Socials, Layout, About } from "./components";
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Name />} />
              <Route path='projects' element={<Projects />} />
              <Route path='about' element={<About />} />
              <Route path='certifications' element={<Certfications />} />
              <Route path='socials' element={<Socials />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App