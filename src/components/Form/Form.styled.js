import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 12px;
`;

export const Field = styled.label`
  display: block;
  color: #6b7a83;
  font-weight: 500;
  margin-bottom: 12px;
  width: 160px;
`;

export const Input = styled.input`
  display: block;
  height: 24px;
  border: 1px solid #87969f;
  border-radius: 4px;
  margin-top: 5px;
  &:focus-visible {
    outline: 1px solid #87969f;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: #6d8da1;
  color: #ffffff;
  border: none;
  padding: 7px 10px;
  border-radius: 15px;
  transition: background-color 150ms linear;
  &:hover {
    background-color: #4c6f84;
  }
`;
