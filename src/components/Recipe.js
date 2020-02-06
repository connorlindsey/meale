import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const RecipeCard = styled.div`
  box-shadow: ${props => props.theme.elevation1};
  background-color: ${props => props.theme.grey["100"]};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.grey["900"]};
    max-width: 200px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
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

  img {
    width: 125px;
    min-height: 100%;
    object-fit: cover;
    margin: 0;
  }
`

const Info = styled.div`
  margin: 0 !important;
  padding: 0.75rem;
  padding-right: .25rem;
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 160px;
  overflow-x: hidden;
`

const Tag = styled.span`
  height: 32px;
  padding: 0 14px;
  font-size: 16px;
  line-height: 32px;
  margin: 0;
  margin-right: 0.5rem;
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
      <Info>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <Tags>
          {recipe.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
      </Info>
      <img src={recipe.image} alt={recipe.name} />
    </RecipeCard>
  )
}

export default Recipe
