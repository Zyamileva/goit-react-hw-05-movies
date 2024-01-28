import styled from '@emotion/styled';

export const FormSearch = styled.form`
  display: flex;
  gap: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  width: 350px;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border: none;

  :focus {
    outline: 2px solid #2c2a2a;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  width: 100px;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus-visible {
    color: black;
    background-color: #b0a8a8;
  }
`;
