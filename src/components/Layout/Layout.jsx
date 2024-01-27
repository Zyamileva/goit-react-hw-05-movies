import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from 'components/MainMenu/MainMenu';
import { Container } from './Layout.styled';

const Layout = props => {
  return (
    <>
      <MainMenu />
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
