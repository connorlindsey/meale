import React, { useState, useEffect } from "react"
import Nav from "../components/Nav"
import { useHistory } from "react-router-dom"
import { Input } from "../style/Form"
import { Button } from "../style/Button"
import { Type } from "../style/Typography"
import styled from "styled-components"

import recipeData from "../assets/recipes.js"
import Recipe from "../components/Recipe"

const Container = styled.div`
  background: ${props => props.theme.primary["100"]};
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchBox = styled(Input)`
  box-shadow: ${props => props.theme.elevationInner};
  border: 3px solid ${props => props.theme.grey["400"]};
  margin: 0;
  margin-right: 1rem;

  &::placeholder {
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.grey["500"]};
  }
`

const RecipeGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const AllRecipes = () => {
  const history = useHistory()
  const createRecipe = () => {
    history.push("/edit-recipe")
  }

  /*=============
  Load recipes
  =============*/
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    let tmp = recipes
    for (const prop in recipeData) {
      tmp.push(recipeData[prop])
    }
    setRecipes(tmp)
  }, [recipes])

  /*=============
  Search
  =============*/
  const [search, setSearch] = useState("")
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  useEffect(() => {
    let tmp = recipes.filter(
      recipe =>
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredRecipes(tmp)
  }, [search, recipes])

  return (
    <Container>
      <Nav />
      <Main>
        <Row>
          <Type fontSize="36px" color="900" weight="300">Your recipes</Type>
          <Row>
            <SearchBox
              type='text'
              placeholder='Search'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Button height='2.25rem' margin='0' onClick={createRecipe}>
              Create recipe
            </Button>
          </Row>
        </Row>
        <RecipeGrid>
          {recipes.length > 0 &&
            filteredRecipes.map(recipe => <Recipe recipe={recipe} key={recipe.id} />)}
        </RecipeGrid>
      </Main>
    </Container>
  )
}

export default AllRecipes
