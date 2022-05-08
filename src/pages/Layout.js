import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Layout.css';

import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;
