import styled from "styled-components";

/**
 * Use the following font-size
 * 48, 36, 24, 18, 14, 12
 */
export const Type = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.weight};
  color: ${props => props.theme.grey[props.color] || props.theme.grey["900"]};
  text-align: ${props => props.tAlign};
  transition: 0.1s all ease;
  margin: ${props => props.margin || "0"} !important;
  cursor: ${props => props.hover && "pointer"};

  &:hover {
    text-decoration: ${props => props.hover && "underline"};
  }
`