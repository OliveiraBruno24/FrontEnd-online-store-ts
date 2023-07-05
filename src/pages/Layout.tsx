import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

function Layout() {
  return (
    <>
      <aside>
        <Categories />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
