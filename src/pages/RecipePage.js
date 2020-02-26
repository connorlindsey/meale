import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import { useParams, NavLink as Link } from "react-router-dom"
import recipeData from "../assets/recipes"
import { SecondaryButton } from "../style/Button"

const Container = styled.div`
  background: ${props => props.theme.grey["100"]};
  min-height: 100vh;
  height: 100%;
  margin: 0;
  width: 100%;
`

const Main = styled.main`
  width: 95%;
  max-width: 900px;
  margin: 3rem auto 0;
  height: 100%;
`

const RecipeCard = styled.div`
  box-shadow: ${props => props.theme.elevation2};
  background-color: ${props => props.theme.grey["0"]};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;

  h3 {
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    color: ${props => props.theme.grey["900"]};
    overflow: hidden;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.grey["700"]};

    max-width: 600px;
  }

  img {
    min-height: 100%;
    max-width: 40%;
    object-fit: cover;
    margin-left: 1rem;
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
  max-width: 400px;
`

const Tag = styled.span`
  height: 30px;
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

const Img = styled.img`
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
`

const Steps = styled.div`
  margin: 1rem 0;
`

const Step = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  ul {
    font-size: 18px;
    color: ${props => props.theme.grey["900"]};
    list-style: none;
    margin: 0;
    width: 40%;
    padding-left: 0;

    span.quantity {
      font-weight: 600;
      margin-right: 0.5rem;
      color: ${props => props.theme.grey["600"]};
    }

    li.none {
      color: ${props => props.theme.grey["500"]};
    }
  }

  p {
    font-size: 18px;
    color: ${props => props.theme.grey["900"]};
    width: 45%;
  }
`

const Spacer = styled.div`
  width: 5%;
  margin: 0 1rem;
  border-bottom: 3px solid ${props => props.theme.grey["400"]};
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
        {recipe && (
          <RecipeCard>
            <Info>
              <h3>{recipe.name}</h3>
              <p>20 minutes - Makes 4 servings</p>
              <p>{recipe.description}</p>
              <Tags>
                {recipe.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
              <Steps>
                {recipe.steps.map(step => (
                  <Step>
                    <ul>
                      {step.ingredients.length === 0 && <li className='none'>No ingredients</li>}
                      {step.ingredients.map(i => (
                        <li>
                          <span className='quantity'>{i.qty}</span>
                          <span>{i.name}</span>
                        </li>
                      ))}
                    </ul>
                    <Spacer />
                    <p>{step.instructions}</p>
                  </Step>
                ))}
              </Steps>
            </Info>
            <Img src={recipe.image} alt={recipe.name} />
          </RecipeCard>
        )}
        <SecondaryButton as={Link} to="/edit-recipe" margin='0'>Edit Recipe</SecondaryButton>
      </Main>
    </Container>
  )
}

export default RecipePage
