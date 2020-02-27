import styled from "styled-components"

export const Button = styled.button`
  height: ${props => props.height || "36px"};
  width: ${props => props.width || "auto"};
  padding: 0 14px;
  font-size: 16px;
  margin: ${props => props.margin || `0 .5rem`} !important;
  letter-spacing: 0.25;
  text-decoration: none;
  outline: none;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.primary["500"]};
  border: 2px solid ${props => props.theme.primary["500"]};
  text-align: center;
  color: #fff;
  cursor: pointer;

  transition: all 0.1s ease-out;

  &:hover {
    transform: translateY(-0.5px);
    color: #fff;
  }

  &:active {
    transform: translateY(0.5px);
    background-color: ${props => props.theme.primary["600"]};
    border-color: ${props => props.theme.primary["600"]};
    color: #fff;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.grey["400"]};
  border: 2px solid ${props => props.theme.grey["400"]};
  color: ${props => props.theme.grey["800"]};

  &:hover {
    background-color: ${props => props.theme.grey["500"]};
    border: 2px solid ${props => props.theme.grey["500"]};
  }

  &:active {
    transform: translateY(0.5px);
    background-color: ${props => props.theme.grey["600"]};
    border-color: ${props => props.theme.grey["600"]};
  }
`

export const OutlineButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.primary["500"]};

  &:hover {
    color: #fff;
    background-color: ${props => props.theme.primary["500"]};
  }
`
