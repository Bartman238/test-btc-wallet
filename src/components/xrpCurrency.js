import React from 'react';
import styled from 'styled-components';
import {store} from '../app.js'

let CurrencyBlock = styled.div`
  background-color: #454551;
  border-radius: 10px;
  width: 95%;
  color: white;
  margin-bottom: 10px;
  hr {
    color: grey;
    size: 1;
    noshade;
    width: 95%;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

let CurrencyInfo = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  max-width: 60px;
  span {
    font-size: 35px;
    float: left;
  }
  .currencyName {
    padding-left: 40px;
  }
  h5 {
    margin-top: 0px;
    color: grey;
  }
`
let CurrencyPrice = styled.div`
  padding-left: 20px;
  max-width: 60px;
  margin-bottom: -10px;
  span {
    font-size: 35px;
    float: left;
  }
  .currencyName {
    padding-left: 40px;
  }
  h5 {
    margin-top: 0px;
    color: grey;
  }
`

let CurrencyBalance = styled.div`
  float: right;
  padding-top: 15px;
  padding-right: 5%;
  h5 {
    float: right;
    margin-top: 0px;
    margin-left: 30%;
    color: grey;
  }
`

let Profit = styled.div`
  float: right;
  margin-right: 5%;
  margin-top: -55px;
  height: 10px;
  h5 {
    margin-top: 0px;
    color: grey;
  }
`


export default class extends React.Component {
  state = {
    xrpBalance: null,
    xrpProfitPrc: null
  };

  componentDidMount() {
    this.setState({
      xrpBalance: Math.random().toFixed(9),
      xrpProfitPrc: this.props.xrpProfitPrc
    });
  }
  
  render(){
    let xrp = this.state.xrpBalance * this.props.xrp;
    let profit = parseFloat(this.props.xrpProfitPrc);
    let z = xrp - (xrp - (profit - (xrp / 100))); // Подсчет дохода/убытка


    store.dispatch({ type: 'UPDATE_BALANCE', xrpSum: xrp});
    store.dispatch({ type: 'UPDATE_BALANCE', xrpProfitSummary: z});
    store.dispatch({ type: 'UPDATE_BALANCE', xrpBalance: parseFloat(this.state.xrpBalance)});

    let percent = (col) => {
      if (col >= 0) {
        return '#0ddb86';
      } else { return '#ff7976'; };
    };
    let profitOrLoss = {'color': percent(profit), 'text-align': 'right'};
    return (
      <CurrencyBlock>
        <CurrencyBalance>
          <p> {this.state.xrpBalance} </p>
          <p> <h5> $ {xrp.toFixed(2)} </h5> </p>
        </CurrencyBalance>
        <CurrencyInfo>
          <span className="icon icon-xrp"></span>
          <p className="currencyName">XRP</p>
          <p className="currencyName"> <h5> Ripple </h5> </p>
        </CurrencyInfo>
        <hr></hr>
        <CurrencyPrice>
          <p> ${this.props.xrp}</p>
          <p> <h5> Price </h5> </p>
        </CurrencyPrice>
        <Profit>
          <p style={profitOrLoss}> {profit.toFixed(2)}% </p>
          <p> <h5> Profit / Loss </h5> </p>
        </Profit>
      </CurrencyBlock>
    )
  }
}