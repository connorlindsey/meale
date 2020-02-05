import React, { useState, useEffect } from "react"
import Nav from "../components/Nav"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { Card } from "../style/Card"
import { Type } from "../style/Typography"
import { Input } from "../style/Form"
import { Button } from "../style/Button"

import recipeData from "../assets/recipes.json"

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

const Calendar = styled.div`
  grid-column: 0 / 1;
  width: 100%;
`

const CalendarBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

const MonthSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Sidebar = styled.div`
  width: 25%;
  max-width: 250px;

  & * {
    margin-bottom: 2rem;
  }
`

const Row = styled.div`
  display: flex;
  margin: 0.5rem 0;
  justify-content: space-between;
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

const Recipe = styled.div`
  box-shadow: ${props => props.theme.elevation1};
  background-color: ${props => props.theme.grey["100"]};
  border-radius: ${props => props.theme.borderRadius};
  padding: .5rem;

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.grey["900"]};
  }

  p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.grey["700"]};

    max-width: 200px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`

const Tag = styled.span`
  height: 32px;
  padding: 0 14px;
  font-size: 16px;
  line-height: 32px;
  margin: 0;
  letter-spacing: 0.25;
  text-decoration: none;
  outline: none;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.grey["600"]};
  text-align: center;
  color: #FFF;
`

const Dashboard = () => {
  const history = useHistory()
  const createRecipe = () => {
    history.push("/edit-recipe")
  }

  // Load recipes from JSON
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    let tmp = recipes
    for (const prop in recipeData) {
      tmp.push(recipeData[prop]);
    }
    setRecipes(tmp)
  }, [recipes])
  
  // Search Functionality
  const [search, setSearch] = useState("")
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  useEffect(() => {
    let tmp = recipes.filter(
      recipe => recipe.name.includes(search) || recipe.description.includes(search)
    )
    setFilteredRecipes(tmp)
  }, [search, recipes])

  return (
    <Container>
      <Nav />
      <Main>
        {/* Calendar */}
        <Calendar>
          <Card width='100%' max-width='100%' elevation='elevation1'>
            {/* Title and date selection */}
            <CalendarBar>
              <Type>Meal calendar</Type>
              <MonthSelector>
                <span>Left</span>
                <Type>January 2020</Type>
                <span>Right</span>
              </MonthSelector>
            </CalendarBar>
            <div>The calendar will go here</div>
          </Card>
        </Calendar>
        {/* Sidebar */}
        <Sidebar>
          {/* Recipes */}
          <Card width='350px' maxWidth='350px' elevation='elevation1' bg="0">
            <Type as='h2' fontSize='18px' color='900' weight='500' margin='0 0 .5rem'>
              Recipes
            </Type>
            <Row>
              <SearchBox type='text' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
              <Button height='2.25rem' margin='0' onClick={createRecipe}>
                Create recipe
              </Button>
            </Row>
            {/* No recipes message */}
            {recipes.length === 0 && (
              <Type fontSize='24px' weight='500' color='500' tAlign='center'>
                You don't have any recipes. Create a new one!
              </Type>
            )}
            {recipes.length > 0 &&
              filteredRecipes.map(recipe => (
                <Recipe>
                  <div>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                    <Tags>
                      {recipe.tags.map(tag => (
                        <Tag>{tag}</Tag>
                      ))}
                    </Tags>
                  </div>
                  {/* TODO: Put the image here */}
                </Recipe>
              ))}
            {/* Display recipes */}
          </Card>

          {/* Shopping List */}
          <Card width='350px' maxWidth='350px' elevation='elevation1'>
            Shopping List
          </Card>
        </Sidebar>
      </Main>
    </Container>
  )
}

export default Dashboard
