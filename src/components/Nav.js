import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Type } from "../style/Typography"

const Header = styled.header`
  margin: 0;
  background-color: ${props => props.theme.primary["400"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  box-shadow: ${props => props.theme.elevation1};

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    text-decoration: none;
    color: #fff;
    font-size: 32px;
    font-weight: 500;
  }
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0.5rem;

  &:hover {
    color: ${props => props.theme.primary["100"]};
  }

  &.is-active {
    color: ${props => props.theme.primary["800"]};
  }
`

const Nav = () => {
  return (
    <Header>
      <NavLink to='/'>
        <Type as='h1' fontSize='36px' weight='500' color='900'>
          MEALE
        </Type>
      </NavLink>
      <nav>
        <StyledLink activeClassName='is-active' to='/dashboard'>
          Dashboard
        </StyledLink>
        <StyledLink activeClassName='is-active' to='/recipes'>
          Recipes
        </StyledLink>
        <StyledLink activeClassName='is-active' to='/shopping-list'>
          Shopping List
        </StyledLink>
        <StyledLink to='/'>Logout</StyledLink>
      </nav>
    </Header>
  )
}

export default Nav
