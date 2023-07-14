import styled from "styled-components";

export const FilterBlock = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 15px;
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