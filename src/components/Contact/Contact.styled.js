import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  background-color: #e0e0e0;
  color: #000;
  border: none;
  padding: 7px 10px;
  border-radius: 15px;
  transition: all 150ms linear;
  &:hover {
    background-color: #ad0b19;
    color: #e0e0e0;
  }
`;
