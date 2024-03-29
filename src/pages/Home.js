import React, { useState } from "react"
import { Button } from "../style/Button"
import { Form, Input, Label } from "../style/Form"
import { Card } from "../style/Card"
import { Type } from "../style/Typography"
import styled from "styled-components"

import { FiBook, FiCalendar, FiShoppingCart } from "react-icons/fi"
import { useHistory } from "react-router-dom"

const Container = styled.div`
  background: ${props => props.theme.primary["200"]};
  min-height: 100vh;
  margin: 0;
  padding: 16px;
  width: 100%;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  width: 95%;
  margin: 4rem auto 0;
  padding: 0 2rem;
  max-width: 1100px;


  @media screen and (max-width: 900px) {
    margin: 2rem auto 0;
    flex-direction: column;
  }
`

const Info = styled.div`
  @media screen and (max-width: 900px) {
    margin-bottom: 3rem;
  }
`

const Feature = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    color: ${props => props.theme.primary["800"]};
    stroke-width: 2px;
    height: 24px;
    width: 24px;
  }
`

const Icon = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.primary["300"]};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -54px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    margin: 0;
  }
`

const Divider = styled.hr`
  width: 80px;
  height: 6px;
  background-color: ${props => props.theme.primary["400"]};
  border-radius: ${props => props.theme.borderRadius};
  margin: -1rem 0 1rem;
  border: none;
`

const Home = () => {
  const history = useHistory()
  const [currentForm, setCurrentForm] = useState("SIGNUP")
  const [values, setValues] = useState({
    name: "",
    password: "",
  })

  const handleInputChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const toggleForm = () => {
    const val = currentForm === "SIGNUP" ? "LOGIN" : "SIGNUP"
    setCurrentForm(val)
  }

  const submitForm = event => {
    event.preventDefault()
    setTimeout(() => {
      history.push("/dashboard")
    }, 300)
  }

  let form
  if (currentForm === "SIGNUP") {
    form = (
      <Form onSubmit={submitForm}>
        <Type as='h2' tAlign='center' color='900' weight='700' margin='0 0 1rem'>
          Sign Up - It's Free!
        </Type>
        <Label htmlFor='email'>
          Email
          <Input type='email' name='email' required onChange={handleInputChange} />
        </Label>
        <Label htmlFor='password'>
          Password
          <Input type='password' name='password' required onChange={handleInputChange} />
        </Label>
        <Button type='submit' margin='0'>
          Sign Up
        </Button>
        <Type
          fontSize='14px'
          tAlign='center'
          color='700'
          margin='.5rem 0'
          weight='600'
          hover
          onClick={toggleForm}>
          Have an account? Sign in
        </Type>
      </Form>
    )
  } else {
    form = (
      <Form onSubmit={submitForm}>
        <Type as='h2' tAlign='center' color='900' weight='700' margin='0 0 1rem'>
          Welcome back!
        </Type>
        <Label htmlFor='email'>
          Email
          <Input type='email' name='email' required onChange={handleInputChange} />
        </Label>
        <Label htmlFor='password'>
          Password
          <Input type='password' name='password' required onChange={handleInputChange} />
        </Label>
        <Button type='submit' margin='0'>
          Login
        </Button>
        <Type
          fontSize='14px'
          tAlign='center'
          color='700'
          weight='600'
          margin='.5rem 0'
          hover
          onClick={toggleForm}>
          Don't have an account? Sign up
        </Type>
      </Form>
    )
  }

  return (
    <Container>
      <Header>
        <Type as='h1' fontSize='36px' weight='500' color='900'>
          MEALE
        </Type>
        <nav>
          <Button
            onClick={() => {
              setTimeout(() => {
                history.push("/dashboard")
              }, 300)
            }}>
            Go to Your Meale
          </Button>
        </nav>
      </Header>

      <Main>
        {/* Info */}
        <Info>
          <Type as='h2' fontSize='32px' weight='700' color='900' margin='0 0 1rem'>
            Delicious meals, made simple.
          </Type>
          <Divider />
          <Feature>
            <Icon>
              <FiBook />
            </Icon>
            <Type margin='1rem 0'>Your personalized, digital recipe book</Type>
          </Feature>
          <Feature>
            <Icon>
              <FiShoppingCart />
            </Icon>
            <Type margin='1rem 0'>Auto-generated shopping lists save you time</Type>
          </Feature>
          <Feature>
            <Icon>
              <FiCalendar />
            </Icon>
            <Type margin='1rem 0'>Effortless meal planning and prep</Type>
          </Feature>
        </Info>

        {/* Sign up Form */}
        <Card width='95%' maxWidth='400px' bg='200' padding='1rem 2rem' margin='0'>
          {form}
        </Card>
      </Main>
    </Container>
  )
}

export default Home
