import React from 'react';
import Navbar from '../navbar/Navbar';
import Background from '../background/Background';

import {Outlet} from "react-router-dom";

const Layout = () => {

  return (
    <>
      <Background />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout