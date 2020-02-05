import React from "react"
import { Button } from "../style/Button"
import { Form, Input, Label } from "../style/Form"
import { Card } from "../style/Card"
import { Type } from "../style/Typography"
import styled from "styled-components"

import book from "../assets/book.svg"
import calendar from "../assets/calendar.svg"
import shoppingCart from "../assets/shopping-cart.svg"

const Container = styled.div`
  background: ${props => props.theme.primary["300"]};
  min-height: 100vh;
  margin: 0;
  padding: 16px;
  width: 100%;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  width: 95%;
  margin: 4rem auto;
  max-width: ${props => props.theme.maxWidth};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Info = styled.div``

const Feature = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    height: 24px;
    width: 24px;
  }
`

const Icon = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.primary["200"]};
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
  return (
    <Container>
      <Header>
        <Type as='h1' fontSize='36px' weight='500' color='900'>
          MEALE
        </Type>
        <nav>
          <Button>Go to Your Meale</Button>
        </nav>
      </Header>

      <Main>
        {/* Info */}
        <Info>
          <Type as='h2' fontSize='32px' weight='600' color='900'>
            Delicious meals, made simple.
          </Type>
          <Divider />
          <Feature>
            <Icon>
              <img src={book} alt='Book icon' />
            </Icon>
            <Type>Your personalized, digital recipe book</Type>
          </Feature>
          <Feature>
            <Icon>
              <img src={shoppingCart} alt='Shopping cart icon' />
            </Icon>
            <Type>Auto-generated shopping lists save you time</Type>
          </Feature>
          <Feature>
            <Icon>
              <img src={calendar} alt='Calendar icon' />
            </Icon>
            <Type>Effortless meal planning and prep</Type>
          </Feature>
        </Info>

        {/* Sign up Form */}
        <Card maxWidth='400px' bg='200' padding='1rem 2rem'>
          <Form>
            <Type as='h2' tAlign='center' color='900' weight='700'>
              Sign Up - It's Free!
            </Type>
            <Label htmlFor='email'>
              Email
              <Input type='email' name='email' />
            </Label>
            <Label htmlFor='password'>
              Password
              <Input type='password' name='password' />
            </Label>
            <Button type='submit' margin='0'>
              Sign Up
            </Button>
            <Type fontSize='14px' tAlign='center' color='700' weight='600' hover>
              Have an account? Sign in
            </Type>
          </Form>
        </Card>
      </Main>
    </Container>
  )
}

export default Home
