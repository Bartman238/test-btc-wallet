import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

let BtnReturnStyle = styled.i`
  color: white;
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 100%;
  font-size: 30px;
  i {
    margin: 10px;
  }
  :hover {
    background-color: grey;
  }
`

let linkStyled = {
  'display': 'flex',
  'text-decoration': 'none',
  'width': '50px',
  'height': '50px',
  'margin-top': '15px',
  'margin-bottom': '20px'
}

export default function BtnReturn() {
  return (
    <div>
      <Link to='/' style={linkStyled}> <BtnReturnStyle> <i className="fas fa-arrow-left"></i> </BtnReturnStyle> </Link>
    </div>
  );
}