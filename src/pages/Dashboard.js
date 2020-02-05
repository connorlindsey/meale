import React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"
import { Card } from "../style/Card"
import { Type } from "../style/Typography"

const Container = styled.div`
  background: ${props => props.theme.primary["100"]};
  min-height: 100vh;
  margin: 0;
  width: 100%;
`

const Main = styled.main`
  width: 95%;
  margin: 24px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 300px;
`

const Calendar = styled.div`
  grid-column: 0 / 1;
  width: 100%;
`

const CalendarBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

const MonthSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Sidebar = styled.div`
  width: 25%;
  max-width: 250px;

  & * {
    margin-bottom: 2rem;
  }
`

const Dashboard = () => {
  return (
    <Container>
      <Nav />
      <Main>
        {/* Calendar */}
        <Calendar>
          <Card width="100%" max-width="100%">
          {/* Title and date selection */}
          <CalendarBar>
            <Type>Meal calendar</Type>
            <MonthSelector>
              <span>Left</span>
              <Type>January 2020</Type>
              <span>Right</span>
            </MonthSelector>
          </CalendarBar>
          <div>
            The calendar will go here
          </div>
          </Card>
        </Calendar>
        {/* Sidebar */}
        <Sidebar>
          {/* Recipes */}
          <Card width="300px" maxWidth="300px">Recipes</Card>

          {/* Shopping List */}
          <Card width="300px" maxWidth="300px">Shopping List</Card>
        </Sidebar>
      </Main>
    </Container>
  )
}

export default Dashboard
