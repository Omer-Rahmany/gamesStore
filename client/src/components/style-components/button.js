import styled from 'styled-components';

export const ButtonContainer = styled.button`
  color: black;
  font-size: 1.4rem;
  background: transparent;
  margin: 1em;
  padding: 0.25em 1em;
  
  border-radius: 3px;
  &:hover{
  background:var(--lightBlue);
  }
  &:focus {
    border: 2px solid palevioletred;
  }
`;

export const CheckOutButtonContainer = styled.button`
  color: black;
  font-size: 1.4rem;
  background: transparent;
  margin: 1em;
  padding: 0.25em 1em;
  
  border-radius: 3px;
  &:hover{
  background:var(--green);
  }
  &:focus {
    border: 2px solid palevioletred;
  }
`;