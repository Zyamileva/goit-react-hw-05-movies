import React from 'react';
import { HeaderStyle, NavStyle, NavLinkStyle } from './MainMenu.styled';

const MainMenu = props => {
  return (
    <HeaderStyle>
      <NavStyle>
        <NavLinkStyle to="/">Home</NavLinkStyle>
        <NavLinkStyle to="/movies">Movies</NavLinkStyle>
      </NavStyle>
    </HeaderStyle>
  );
};

export default MainMenu;
