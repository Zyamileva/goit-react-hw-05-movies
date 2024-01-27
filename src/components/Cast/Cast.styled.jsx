import styled from '@emotion/styled';

export const CastLink = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 15px * 4) / 5);
  overflow: hidden;
  min-height: 400px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Character = styled.p``;

export const Name = styled.p`
  font-size: 19px;
  margin-bottom: 5px;
`;

export const Text = styled.span`
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 5px;
  height: 100%;
`;

export const Error = styled.h2`
  font-weight: 700;
`;

export const Loading = styled.h2`
  font-weight: 700;
`;
