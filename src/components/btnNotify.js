import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

let BtnNotifyStyle = styled.i`
  // margin-right: 10px;
  // float: right;
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

export default function BtnNotify() {
  return (
      <Link to='/' style={linkStyled}> <BtnNotifyStyle> <i className="fas fa-bell"></i> </BtnNotifyStyle> </Link>
  );
}