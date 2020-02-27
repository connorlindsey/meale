import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./style/Theme"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AllRecipes from "./pages/AllRecipes"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import RecipeForm from "./pages/RecipeForm"
import RecipePage from "./pages/RecipePage"
import ShoppingList from "./pages/ShoppingList"
import { DndProvider } from "react-dnd"
import Backend from "react-dnd-html5-backend"
import "./style/index.css"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <DndProvider backend={Backend}>
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/recipe/:id' component={RecipePage} />
          <Route path='/edit-recipe' component={RecipeForm} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/recipes' component={AllRecipes} />
          <Route path='/shopping-list' component={ShoppingList} />
        </Router>
      </DndProvider>
    </ThemeProvider>
  )
}

export default App
