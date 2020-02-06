import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./style/Theme"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AllRecipes from "./pages/AllRecipes"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import RecipeForm from "./pages/RecipeForm"
import RecipePage from "./pages/RecipePage"
import "./style/index.css"

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/recipe/:id' component={RecipePage} />
          <Route path='/edit-recipe' component={RecipeForm} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/recipes' component={AllRecipes} />
        </Router>
    </ThemeProvider>
  )
}

export default App
