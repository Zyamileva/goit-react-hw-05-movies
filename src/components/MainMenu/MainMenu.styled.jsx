import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  display: flex;
  gap: 80px;
  font-size: 18px;
  font-weight: 700;
  padding: 20px;
  box-shadow: inset -2px -2px 5px #d3d3d3, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const NavStyle = styled.nav`
  display: flex;
  gap: 35px;
`;
export const NavLinkStyle = styled(NavLink)`
  color: black;
  transition: all 200ms ease-in-out;
  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
