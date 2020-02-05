import styled from "styled-components"

export const Button = styled.button`
  height: 40px;
  padding: 0 14px;
  font-size: 16px;
  margin:${props => props.margin || `0 .5rem`};
  letter-spacing: 0.25;
  text-decoration: none;
  outline: none;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.primary["500"]};
  border: 2px solid ${props => props.theme.primary["500"]};
  text-align: center;
  color: #FFF;
  cursor: pointer;

  transition: all 0.1s ease-out;

  &:hover {
    transform: translateY(-.5px);
    color: #fff;
  }

  &:active {
    transform: translateY(.5px);
    background-color: ${props => props.theme.primary["600"]};
    border-color: ${props => props.theme.primary["600"]};
    color: #fff;
  }
`