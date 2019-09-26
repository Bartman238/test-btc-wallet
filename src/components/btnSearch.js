import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

let BtnSearchStyle = styled.i`
  // margin-left: 10px;
  // float: left;
  color: white;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  border-radius: 100%;
  font-size: 20px;
  i {
    margin: 10px;
  }
  :hover {
    background-color: grey;
  }
`

let linkStyled = {
  'display': 'flex',
  textDecoration: 'none',
  'width': '40px',
  'height': '40px',
  // marginTop: '15px',
  // marginBottom: '20px'
}

export default function BtnSearch() {
  return (
      <Link to='/' style={linkStyled}> <BtnSearchStyle> <i className="fas fa-search"></i> </BtnSearchStyle> </Link>
  );
}