import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
