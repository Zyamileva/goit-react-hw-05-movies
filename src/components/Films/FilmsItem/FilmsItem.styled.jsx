import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmItems = styled.li`
  width: calc((100% - 15px * 4) / 5);
  overflow: hidden;
  min-height: 370px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const FilmLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover img {
    filter: grayscale(0);
  }

  &:hover p {
    color: black;
    font-weight: 800;
  }
`;

export const FilmImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  filter: grayscale(0.2);
`;

export const FilmName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  color: #474a51;
  padding: 10px;
`;
