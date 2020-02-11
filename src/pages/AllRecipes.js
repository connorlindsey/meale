import React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"
import { Input } from "../style/Form"

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

const SearchBox = styled(Input)`
  box-shadow: ${props => props.theme.elevationInner};
  border: 3px solid ${props => props.theme.grey["400"]};
  margin: 0;
  width: auto;

  &::placeholder {
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.grey["500"]};
  }
`

const AllRecipes = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <SearchBox
          type='text'
          placeholder='Search'/>
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
