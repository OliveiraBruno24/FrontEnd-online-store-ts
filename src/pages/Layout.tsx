import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

function Layout() {
  return (
    <>
      <Categories />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
