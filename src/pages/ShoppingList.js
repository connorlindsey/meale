import React, { useState } from "react"
import { Label } from "../style/Form"
import { Card } from "../style/Card"
import { Type } from "../style/Typography"
import { Button } from "../style/Button"
import { FiShoppingCart } from "react-icons/fi"
import styled from "styled-components"
import Nav from "../components/Nav"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Row = styled.div`
  display: flex;
  margin: 0.5rem 0;
  justify-content: space-between;
`
// TODO: Fix how dark
// TODO: Close on deselect

const ScrollContainer = styled.div`
  height: 300px;
  overflow-y: auto;
  padding-right: 1rem;
  margin-right: -1rem;
`

const StyledDatePicker = styled(DatePicker)`
  /* Input styles */
  width: 95%;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  height: 2.25rem;
  background: ${props => props.theme.grey["100"]};
  outline: none;
  padding-left: 10px;
  box-shadow: ${props => props.theme.elevation1};
  font-size: 14px;
  color: ${props => props.theme.grey["500"]};
  text-transform: uppercase;
`

const ListItem = styled.div`
  display: flex;
  margin: 0.5rem 0;

  .item-name {
    font-size: 16px;
    width: 100%;
    display: block;
    color: ${props => props.theme.grey["800"]};
  }
  .item-qty {
    font-size: 16px;
    color: ${props => props.theme.grey["600"]};
  }
  .spacer {
    width: 100%;
    padding: 0 0.25rem;
    border-bottom: 1px dotted ${props => props.theme.grey["300"]};
  }
`

const Divider = styled.hr`
  width: 80px;
  height: 3px;
  background-color: ${props => props.theme.grey["400"]};
  border-radius: ${props => props.theme.borderRadius};
  margin: -1rem 0 1rem;
  border: none;
`

const ListAction = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.primary["500"]};
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  background: ${props => props.theme.grey["100"]};
  min-height: 100vh;
  height: 100% !important;
  margin: 0;
  padding: 0;
  width: 100%;
`

const Main = styled.main`
  width: 95%;
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 350px;
  height: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ShoppingList = () => {
  /*=============
  Shopping List
  =============*/
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [shoppingList, setShoppingList] = useState([])

  const generateShoppingList = () => {
    let tmp = [
      { qty: "4", name: "Tilapia" },
      { qty: "1", name: "Cilantro" },
      { qty: "12", name: "Eggs" },
      { qty: "1", name: "Flour" },
      { qty: "2", name: "Bell Peppers" },
      { qty: "1", name: "Olive Oil" },
      { qty: "1", name: "Milk" },
      { qty: "1", name: "Oatmeal" },
      { qty: "1", name: "Rye Flour" },
      { qty: "3", name: "Fresh greens" },
    ]
    setShoppingList(tmp)
  }

  return (
    <Container>
      <Nav />
      <Main>
        <Card width='350px' maxWidth='350px' elevation='elevation1' bg='0' padding='1rem 1rem 0'>
          <Type as='h2' fontSize='18px' color='900' weight='500' margin='0 0 .5rem'>
            Generate your shopping list
          </Type>
          <Row>
            <Label>
              Start date
              <StyledDatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </Label>
            <Label>
              End date
              <StyledDatePicker selected={endDate} onChange={date => setEndDate(date)} />
            </Label>
            <Button margin='1.4rem 0 0 0' height='2.25rem' onClick={generateShoppingList}>
              <FiShoppingCart />
            </Button>
          </Row>
          <ScrollContainer>
            {shoppingList.length > 0 && (
              <div>
                <Row>
                  <Type fontSize='18px' color='800' margin='0 0 1rem'>
                    Your list
                  </Type>
                  <div>
                    <ListAction>Print list</ListAction>
                    <ListAction>Send via text</ListAction>
                  </div>
                </Row>
                <Divider />
                {shoppingList.map(item => (
                  <ListItem key={item.name}>
                    <div className='item-name'>{item.name}</div>
                    <div className='spacer'></div>
                    <div className='item-qty'>{item.qty}</div>
                  </ListItem>
                ))}
              </div>
            )}
          </ScrollContainer>
        </Card>
      </Main>
    </Container>
  )
}

export default ShoppingList
