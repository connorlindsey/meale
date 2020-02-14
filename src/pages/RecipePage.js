import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import { useParams } from "react-router-dom"
import recipeData from "../assets/recipes"

const Container = styled.div`
  background: ${props => props.theme.grey["100"]};
  min-height: 100vh;
  height: 100%;
  margin: 0;
  width: 100%;
`

const Main = styled.main`
  width: 95%;
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto 0;
  height: 100%;
`

const BigRecipeCard = styled.div`
  box-shadow: ${props => props.theme.elevation1};
  background-color: ${props => props.theme.grey["100"]};
  border-radius: ${props => props.theme.borderRadius};
  max-width: 75%

  h1 {
    font-size: 40px
  }

  p {
    font-weight: 500;
  }

  img {
    width: 125px;
    min-height: 100%;
    object-fit: cover;
    margin: 0;
  }
`

const Img = styled.img`
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
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
      <Main>
        {recipe && 
        <BigRecipeCard>
          <h1>{recipe.name}</h1>
          <p>{ recipe.description }</p>
          <p>{ }</p>
          <Img src={ recipe.image }></Img>
        </BigRecipeCard>}
      </Main>
    </Container>
  )
}

export default RecipePage
