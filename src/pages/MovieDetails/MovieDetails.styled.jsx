import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

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

export const ButtonLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;
  margin-top: 20px;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover,
  :focus-visible {
    font-weight: 700;
  }

  :focus {
    outline: 3px solid black;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;
