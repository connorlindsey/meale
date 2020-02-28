import React, { useState } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import { Form, Input, Textarea } from "../style/Form"
import { Type } from "../style/Typography"
import { Button, SecondaryButton, OutlineButton } from "../style/Button"
import { FiImage, FiX } from "react-icons/fi"

const Container = styled.div`
  background: ${props => props.theme.grey["100"]};
  min-height: 100vh;
  height: 100%;
  margin: 0;
  width: 100%;
`

const Main = styled.main`
  width: 98%;
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto 0;
  height: 100%;
  p {
    max-width: 250px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.jc || "space-between"};
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.grey["400"]};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`

const ImageLabel = styled.label`
  background-image: linear-gradient(45deg, #e2e8f0 25%, transparent 25%),
    linear-gradient(-45deg, #e2e8f0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e2e8f0 75%),
    linear-gradient(-45deg, transparent 75%, #e2e8f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  color: ${props => props.theme.grey["800"]};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  margin: 0 0 1rem;
  cursor: pointer;

  &:hover {
  }
`

const FileInput = styled.input`
  cursor: pointer;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const StyledImageIcon = styled(FiImage)`
  width: 36px;
  height: 36px;
  stroke-width: 3px;
  color: ${props => props.theme.grey["600"]};
`

// Notification
const Close = styled(FiX)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${props => props.theme.primary["700"]};
  border-radius: 20px;
  height: 16px;
  width: 16px;
  cursor: pointer;
`

const Notification = styled.div`
  position: relative;
  background-color: ${props => props.theme.primary["300"]};
  width: 100%;
  padding: 1rem 0.5rem;
  margin: 1rem auto;
  border-radius: ${props => props.theme.borderRadius};
`

const RecipeForm = () => {
  const [isNotificationShowing, setNotification] = useState(true)
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <Container>
      <Nav />
      <Main>
        <Form onSubmit={e => handleSubmit(e)}>
          {isNotificationShowing && (
            <Notification>
              <div>Coming Soon! This page is under development</div>
              <Close onClick={() => setNotification(false)} />
            </Notification>
          )}
          {/* Title */}
          <Type as='h1' fontSize='24px' weight='500' color='900'>
            New Recipe
          </Type>
          <Divider />
          {/* Image */}
          <FileInput type='file' name='file' id='file' className='inputfile' />
          <ImageLabel for='file'>
            <StyledImageIcon />
          </ImageLabel>
          {/* About Recipe */}
          <Row>
            <div>
              <Type as='h2' fontSize='18px' color='900' weight='500'>
                About your recipe
              </Type>
              <Type fontSize='14px' color='700'>
                Include a name, image, description, and tags to help organize your recipes.
              </Type>
            </div>
            <Col>
              <Input type='text' placeholder='Recipe name' />
              <Textarea placeholder='Recipe description…' />
              <div>
                <OutlineButton margin='.5rem 0'>+ Tag</OutlineButton>
              </div>
            </Col>
          </Row>
          <Divider />
          {/* Instructions */}
          <Row>
            <div>
              <Type as='h2' fontSize='18px' color='900' weight='500'>
                Instructions
              </Type>
              <Type fontSize='14px' color='700'>
                Write your recipe instructions, including the ingredients required for each step.
              </Type>
            </div>
            <Row jc='end'>
              <Type>1</Type>
              {/* Ingredients */}
              <Col>
                <Row>
                  <Input placeholder='Ingredient' />
                  <Input placeholder='Qty' type='number' />
                </Row>
                <OutlineButton margin='.5rem 0'>+ Ingredient</OutlineButton>
              </Col>
              {/* Step Instructions */}
              <Col>
                <Textarea placeholder='Step instructions' />
                <OutlineButton margin='.5rem 0'>Add step</OutlineButton>
              </Col>
            </Row>
          </Row>
          <Divider />
          {/* Actions */}
          <Row jc='end'>
            <SecondaryButton margin='0rem 0 0 .5rem' type='submit'>
              Cancel
            </SecondaryButton>
            <Button margin='0rem 0 0 .5rem' type='submit'>
              Save
            </Button>
          </Row>
        </Form>
      </Main>
    </Container>
  )
}

export default RecipeForm
