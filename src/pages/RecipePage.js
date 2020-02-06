import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import { useParams } from "react-router-dom"
import recipeData from "../assets/recipes"

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
const RecipePage = () => {
  let { id } = useParams()
  const [recipe, setRecipe] = useState()
  useEffect(() => {
    let tmp = recipeData.find(r => r.id === id)
    setRecipe(tmp)
  }, [id, recipe])

  return (
    <Container>
      <Nav />
      <Main>{recipe && <div>{recipe.name}</div>}</Main>
    </Container>
  )
}

export default RecipePage
