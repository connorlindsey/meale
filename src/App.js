import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Theme from "./style/Theme"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AllRecipes from "./pages/AllRecipes"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import RecipeForm from "./pages/RecipeForm"
import RecipePage from "./pages/RecipePage"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700&display=swap');  
  
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/recipe/:id' component={RecipePage} />
          <Route path='/edit-recipe' component={RecipeForm} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/recipe' component={AllRecipes} />
        </Router>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
