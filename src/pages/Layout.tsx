import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';
import Header from '../components/Header';

function Layout() {
  return (
    <>
      <Categories />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
