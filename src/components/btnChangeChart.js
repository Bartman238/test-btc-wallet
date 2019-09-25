import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

let linkStyled = {
  'text-decoration': 'none'
}


export default function btnChangeChart() {
  return (
    <div>
      <Link to='/' style={linkStyled} > Day </Link>
      <Link to='/' style={linkStyled} > Week </Link>
      <Link to='/' style={linkStyled} > Mouth </Link>
    </div>
  );
}