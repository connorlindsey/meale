import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const RecipeCard = styled.div`
  box-shadow: ${props => props.theme.elevation1};
  background-color: ${props => props.theme.grey["100"]};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.5rem;

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
  color: #fff;
`

const Recipe = ({ recipe }) => {
  const history = useHistory()

  const goToRecipe = () => {
    history.push(`/recipe/${recipe.id}`)
  }

  return (
    <RecipeCard onClick={goToRecipe}>
      <div>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <Tags>
          {recipe.tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
      </div>
      <img src={recipe.image} alt={recipe.name} />
    </RecipeCard>
  )
}

export default Recipe
