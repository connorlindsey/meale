import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FiMinus } from "react-icons/fi"
import { ItemTypes } from "../utils/DragItems"
import { useDrop } from "react-dnd"

// TODO: Darken border

const StyledSlot = styled.div`
  width: 100px;
  border: 2px solid
    ${props => (props.isLoading ? props.theme.grey["400"] : props.theme.grey["200"])};
  border-radius: ${props => props.theme.borderRadius};
  height: 1.8rem;
  background: ${props => (props.canDrop ? props.theme.primary["400"] : props.theme.grey["50"])};
  background: ${props => props.isLoading && props.theme.grey["400"]};
  outline: none;
  margin: 0.4rem auto;
  padding-left: 4px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover,&:focus-within {
    background: ${props => props.theme.grey["200"]};
    border: 2px solid ${props => props.theme.grey["300"]};
  }
`

const HiddenMinus = styled(FiMinus)`
  cursor: default;
  position: absolute;
  height: 16px;
  width: 16px;
  right: 8px;
  top: 6px;
  color: ${props => props.theme.grey["100"]};
  ${StyledSlot}:hover & {
    cursor: pointer;
    color: ${props => props.theme.grey["500"]};
  }
`

const Input = styled.input`
  width: 80%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 12px;
  color: ${props => props.theme.grey["700"]};
  font-weight: 700;
`

const RecipeSlot = ({ recipe, date, clearRecipe, meal, addRecipe }) => {
  // Recipe State
  const [rec, setRec] = useState()
  const [val, setVal] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setRec(recipe)
    if (recipe) {
      setVal(recipe.name)
    }
  }, [setRec, recipe])

  const removeRecipe = () => {
    setLoading(true)
    clearRecipe(date)
    setRec(null)
    setVal("")
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }

  // Drag and drop
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.RECIPE,
    drop: () => ({ date, meal }),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const handleInput = event => {
    setVal(event.target.value)
  }

  const handleAddRecipe = () => {
    if (val.length <= 0) return
    setLoading(true)
    let recipe = { name: val }
    setRec(recipe)
    addRecipe(recipe, date, meal)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }

  return (
    <StyledSlot ref={drop} canDrop={canDrop && isOver} isLoading={loading}>
      <form
        onSubmit={e => {
          e.preventDefault()
          handleAddRecipe()
        }}>
        <Input value={val} onChange={handleInput} onBlur={handleAddRecipe} disabled={loading} />
      </form>
      {(rec || val) && <HiddenMinus onClick={removeRecipe} />}
    </StyledSlot>
  )
}

export default RecipeSlot
