import React, { useState, useEffect } from "react"
import Nav from "../components/Nav"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { Card } from "../style/Card"
import { Type } from "../style/Typography"
import { Input } from "../style/Form"
import { Button } from "../style/Button"
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi"

import RecipeSlot from "../components/RecipeSlot"
import recipeData, { calendarRecipes } from "../assets/recipes.js"
import Recipe from "../components/Recipe"

import moment from "moment"

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
  min-height: 100vh;
  margin: 0 auto;
`

const CalendarContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 350px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
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
  height: 2.25rem;
  width: 200px;

  border: 1px solid ${props => props.theme.grey["500"]};
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 16px;
  color: ${props => props.theme.grey["800"]};

  svg {
    height: 24px;
    width: 24px;
    color: ${props => props.theme.grey["600"]};
    cursor: pointer;
  }
`

const Sidebar = styled.div`
  width: 350px;
  max-width: 350px;
  padding: 1rem;
  background: ${props => props.theme.grey["50"]};
`

const Row = styled.div`
  display: flex;
  margin: 0.5rem 0;
  justify-content: space-between;
`

const SearchBox = styled(Input)`
  box-shadow: ${props => props.theme.elevationInner};
  border: 3px solid ${props => props.theme.grey["400"]};
  width: 350px;

  &::placeholder {
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.grey["500"]};
  }
`

const ScrollContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-right: 1rem;
  margin-right: -1rem;
`

const Calendar = styled.table`
  width: 95%;
  margin: 1rem auto;
  text-align: center;
  border-collapse: collapse;

  & td,
  & th {
    border: 1px solid ${props => props.theme.grey["300"]};
  }
  & tr:first-child th {
    border-top: 0;
  }
  & tr:last-child td {
    border-bottom: 0;
  }
  & tr td:first-child,
  & tr th:first-child {
    border-left: 0;
  }
  & tr td:last-child,
  & tr th:last-child {
    border-right: 0;
  }

  th {
    font-size: 11px;
    color: ${props => props.theme.grey["700"]};
    text-transform: uppercase;
  }

  td {
    padding: 0.15rem 0.5rem;
    .date {
      font-size: 11px;
      color: ${props => props.theme.grey["700"]};
    }

    .today {
      color: ${props => props.theme.primary["600"]};
      font-weight: 700;
    }
  }
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
  padding: 0.1rem 0.5rem;
  margin: 1rem auto;
  border-radius: ${props => props.theme.borderRadius};
`

const Dashboard = () => {
  const [isNotificationShowing, setNotification] = useState(true)
  const history = useHistory()
  const createRecipe = () => {
    history.push("/edit-recipe")
  }

  /*=============
  Load recipes
  =============*/
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    let tmp = recipes
    for (const prop in recipeData) {
      tmp.push(recipeData[prop])
    }
    setRecipes(tmp)
  }, [recipes])

  /*=============
  Search
  =============*/
  const [search, setSearch] = useState("")
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  useEffect(() => {
    let tmp = recipes.filter(
      recipe =>
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredRecipes(tmp)
  }, [search, recipes])

  /*=============
  Calendar
  =============*/
  const [displayRecipes, setDisplayRecipes] = useState(calendarRecipes)
  const [dateObject, setDateObject] = useState(new moment())
  let weekdayshort = moment.weekdaysShort()
  let weekdayshortname = weekdayshort.map(day => {
    return (
      <th key={day} className='week-day'>
        {day}
      </th>
    )
  })

  const getYear = () => dateObject.format("YYYY")
  const getMonth = () => dateObject.format("MMMM")
  const incMonth = () => {
    let obj = moment(dateObject).set("month", dateObject.month() + 1)
    setDateObject(obj)
  }
  const decMonth = () => {
    let obj = moment(dateObject).set("month", dateObject.month() - 1)
    setDateObject(obj)
  }

  const firstDayOfMonth = () => {
    let d = dateObject
    let firstDay = moment(d)
      .startOf("month")
      .format("d")
    return firstDay
  }

  let blanks = []
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td key={i * 10}>{""}</td>)
  }

  const getDaysInMonth = () => {
    return dateObject.daysInMonth()
  }

  const getCurrentDay = () => {
    return dateObject.format("D")
  }

  const getRecipeByDay = (day, meal) => {
    const month = getMonth()
    if (typeof displayRecipes[month] === "undefined") {
      return null
    } else if (typeof displayRecipes[month][day] === "undefined") {
      return null
    } else if (typeof displayRecipes[month][day][meal] === "undefined") {
      return null
    }
    return displayRecipes[month][day][meal]
  }

  const [num, setNum] = useState(0)
  const addRecipeToDate = (recipe, day, meal) => {
    const month = getMonth()
    if (typeof calendarRecipes[month] === "undefined") {
      calendarRecipes[month] = {}
    }
    if (typeof calendarRecipes[month][day] === "undefined") {
      calendarRecipes[month][day] = {}
    }
    calendarRecipes[month][day][meal] = recipe
    setDisplayRecipes(displayRecipes)
    setNum(num + 1)
  }

  const clearRecipe = (day, meal) => {
    const month = getMonth()
    if (typeof calendarRecipes[month] === "undefined") {
      return null
    } else if (typeof calendarRecipes[month][day] === "undefined") {
      return null
    } else if (typeof calendarRecipes[month][day][meal] === "undefined") {
      return null
    }
    calendarRecipes[month][day][meal] = null
  }

  let daysInMonth = []
  for (let d = 1; d <= getDaysInMonth(); d++) {
    let currentDay = d === getCurrentDay() ? "today" : ""
    daysInMonth.push(
      <td key={d}>
        <span className={`date ${currentDay}`}>{d}</span>
        <RecipeSlot
          date={d}
          meal={"b"}
          recipe={getRecipeByDay(d, "b")}
          clearRecipe={clearRecipe}
          addRecipe={addRecipeToDate}
        />
        <RecipeSlot
          date={d}
          meal={"l"}
          recipe={getRecipeByDay(d, "l")}
          clearRecipe={clearRecipe}
          addRecipe={addRecipeToDate}
        />
        <RecipeSlot
          date={d}
          meal={"d"}
          recipe={getRecipeByDay(d, "d")}
          clearRecipe={clearRecipe}
          addRecipe={addRecipeToDate}
        />
      </td>
    )
  }

  let totalSlots = [...blanks, ...daysInMonth]
  let rows = []
  let cells = []

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row) // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells) // when reach next week we contain all td in last week to rows
      cells = [] // empty container
      cells.push(row) // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) {
      // when end loop we add remain date
      rows.push(cells)
    }
  })

  let daysinmonth = rows.map((d, i) => {
    return <tr key={d + i}>{d}</tr>
  })

  return (
    <Container>
      <Nav />
      <Main>
        {/* Calendar */}
        {isNotificationShowing && (
          <Notification>
            <p>Drag and drop recipes onto meal slots to add to your calendar</p>
            <Close onClick={() => setNotification(false)} />
          </Notification>
        )}
        <Card
          width='100%'
          bg='0'
          max-width='100%'
          elevation='elevation1'
          margin='1rem auto'
          padding='0'>
          <CalendarContainer>
            <div style={{ padding: "1rem" }}>
              {/* Title and date selection */}
              <CalendarBar>
                <Type fontSize='24px' weight='500'>
                  Meal calendar
                </Type>
                <MonthSelector>
                  <FiChevronLeft onClick={decMonth} />
                  <Type color='700'>{getMonth() + " " + getYear()}</Type>
                  <FiChevronRight onClick={incMonth} />
                </MonthSelector>
              </CalendarBar>
              <div>
                <Calendar>
                  <thead>
                    <tr>{weekdayshortname}</tr>
                  </thead>
                  <tbody>{daysinmonth}</tbody>
                </Calendar>
              </div>
            </div>
            {/* Sidebar */}
            <Sidebar>
              {/* Recipes */}
              <Type as='h2' fontSize='24px' color='900' weight='500'>
                Search recipes
              </Type>
              <Row>
                <SearchBox
                  type='text'
                  placeholder='Search'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Button height='2.25rem' margin='0 0 0 1rem' padding="0 4px" onClick={createRecipe} width="80%">
                  Create recipe
                </Button>
              </Row>
              {/* No recipes message */}
              {recipes.length === 0 && (
                <Type fontSize='24px' weight='500' color='500' tAlign='center'>
                  You don't have any recipes. Create a new one!
                </Type>
              )}
              {/* Display recipes */}
              <ScrollContainer>
                {recipes.length > 0 &&
                  filteredRecipes.map(recipe => (
                    <Recipe recipe={recipe} key={recipe.id} addRecipeToDate={addRecipeToDate} />
                  ))}
              </ScrollContainer>
            </Sidebar>
          </CalendarContainer>
        </Card>
      </Main>
    </Container>
  )
}

export default Dashboard
