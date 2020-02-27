import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { ItemTypes } from "../utils/DragItems"
import { useDrag, DragPreviewImage } from "react-dnd"
import mealIcon from "../assets/meal.png"

const RecipeCard = styled.div`
  box-shadow: ${props => props.theme.elevation1};
  background-color: ${props => props.theme.grey["0"]};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  margin: 1rem 0;
  opacity: ${props => props.isDragging && "0.5"};
  cursor: pointer;

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
  padding-right: 0.25rem;
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 160px;
  overflow-x: hidden;
`

const Tag = styled.span`
  height: 24px;
  padding: 0 8px;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  margin-right: 0.5rem;
  letter-spacing: 0.25;
  text-decoration: none;
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  background-color: ${props => props.theme.grey["300"]};
  text-align: center;
  color: ${props => props.theme.grey["700"]};
`

const Img = styled.img`
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
`

const StyledPreview = styled(DragPreviewImage)`
  height: 32px;
  width: 32px;
  opacity: 0.9;
`

const Recipe = ({ recipe, addRecipeToDate }) => {
  const history = useHistory()
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.RECIPE, recipe },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        addRecipeToDate(item.recipe, dropResult.date, dropResult.meal)
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const goToRecipe = () => {
    history.push(`/recipe/${recipe.id}`)
  }

  return (
    <>
      <StyledPreview connect={preview} src={mealIcon} />
      <RecipeCard onClick={goToRecipe} ref={drag} isDragging={isDragging}>
        <Info>
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
          <Tags>
            {recipe.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
        </Info>
        <Img src={recipe.image} alt={recipe.name} />
      </RecipeCard>
    </>
  )
}

export default Recipe
