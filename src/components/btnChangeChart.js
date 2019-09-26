import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

let linkStyled = {
  textDecoration: 'none',
  color: 'grey',
  textAlign: 'center'
  // backgroundColor: '#454551'
}

let Btn = styled.span`
  min-width: 65%;
  margin-bottom: 0px
  margin-right: 10px;
  margin-left: 10px;
  padding-right: 5px;
`

export default function btnChangeChart() {
  let as = { 
    textDecoration: 'none', 
    backgroundColor: '#454551', 
    color: 'white',
    borderRadius: '5px'
  }
  return (
    <div>
      <NavLink to='/day' style={linkStyled} exact activeStyle={as}> <Btn> Day </Btn> </NavLink>
      <NavLink to='/week' style={linkStyled} exact activeStyle={as}> <Btn> Week </Btn> </NavLink>
      <NavLink to='/mouth' style={linkStyled} exact activeStyle={as}> <Btn> Mouth </Btn> </NavLink>
    </div>
  );
}