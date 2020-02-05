import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"

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
const RecipeForm = () => {
  return (
    <Container>
      <Nav />
      <Main>
        This is a form :(
        <form action=''>Fill it out</form>
      </Main>
    </Container>
  )
}

export default RecipeForm
