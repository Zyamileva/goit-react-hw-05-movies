import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
  font-weight: 700;
  font-size: 20px;
`;

export const NavLinks = styled(NavLink)`
  color: black;
  display: inline-block;
  text-align: center;
  padding: 10px;
  width: 100px;
  box-shadow: inset -2px -2px 5px #d3d3d3, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in-out;
  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
