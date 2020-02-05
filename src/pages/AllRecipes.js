import React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"

const Container = styled.div`
  background: ${props => props.theme.primary["100"]};
  min-height: 100vh;
  height: 100%;
  margin: 0;
  width: 100%;
`

const Main = styled.main`
  width: 90%;
  margin: 2rem auto;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 350px;
`

const AllRecipes = () => {
  return (
    <Container>
      <Nav />
      <Main>
        This is the all recipes page
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </Main>
    </Container>
  )
}

export default AllRecipes
