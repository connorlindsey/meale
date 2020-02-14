import React, { useState, useEffect } from 'react'
import { Type } from "../style/Typography"
import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi"
import { ItemTypes } from '../utils/DragItems'
import { useDrop } from 'react-dnd'

const StyledSlot = styled.div`
  min-width: 100px;
  border: 2px solid ${props => props.theme.grey["300"]};
  border-radius: ${props => props.theme.borderRadius};
  height: 2rem;
  background: ${props => props.canDrop ? props.theme.primary["400"] : props.theme.grey["200"]};
  outline: none;
  margin: 0.5rem auto;
  padding-left: 4px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const HiddenPlus = styled(FiPlus)`
  cursor: default;
  position: absolute;
  height: 16px;
  width: 16px;
  right: 8px;
  top: 6px;
  color: ${props => props.theme.grey["200"]};
  ${StyledSlot}:hover & {
    cursor: pointer;
    color: ${props => props.theme.grey["500"]};
  }
`

const HiddenMinus = styled(FiMinus)`
  cursor: default;
  position: absolute;
  height: 16px;
  width: 16px;
  right: 8px;
  top: 6px;
  color: ${props => props.theme.grey["200"]};
  ${StyledSlot}:hover & {
    cursor: pointer;
    color: ${props => props.theme.grey["500"]};
  }
`

const RecipeSlot = ({ recipe, date, clearRecipe, meal }) => {
  // Recipe State
  const [rec, setRec] = useState();
  useEffect(() => {
    setRec(recipe);
  }, [setRec, recipe])
  const removeRecipe = () => {
    clearRecipe(date);
    setRec(null)
  }

  // Drag and drop
  const [{ canDrop, isOver }, drop] = useDrop({
		accept: ItemTypes.RECIPE,
    drop: () => ({ date, meal }),
		collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop()
		}),
  })
  
  return (
    <StyledSlot ref={drop} canDrop={canDrop && isOver}>
      {rec && (
        <Type as="h4" fontSize="12px" color="800">{rec.name}</Type>
      )}
      {rec ? <HiddenMinus onClick={removeRecipe} /> : <HiddenPlus />}
    </StyledSlot>
  )
}

export default RecipeSlot
