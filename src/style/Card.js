import styled from "styled-components"

export const Card = styled.div`
  max-width: ${props => props.maxWidth};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme[props.elevation] || props.theme.elevation2};
  padding: ${props => props.padding || "1rem"};
  background-color: ${props => props.theme.grey[props.bg] || props.theme.grey["100"]}
`
