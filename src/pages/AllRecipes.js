import React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"

const Container = styled.div`
  background: ${props => props.theme.primary["100"]};
  min-height: 100vh;
  margin: 0;
  width: 100%;
`

const AllRecipes = () => {
  return (
    <Container>
      <Nav />
      This is the all recipes page
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </Container>
  )
}

export default AllRecipes
