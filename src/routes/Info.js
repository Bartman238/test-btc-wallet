import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../app.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import BtnReturn from '../components/btnReturn.js';
import BtnChangeChart from '../components/btnChangeChart.js';
import InfoLinks from '../components/infoLinks.js';
import InfoPageBig from '../components/infoPageBig.js';
import ChartDay from '../components/chartDay.js';
import ChartWeek from '../components/chartWeek.js';
import ChartMouth from '../components/chartMouth.js';

let InfoLinksBlock = styled.div`
  display: flex;
  flex-derection: row;
  justify-content: space-between;
  width: auto;
  overflow-x: auto;
`

let ChangeChartBlock = styled.span`
  display: flex;
  flex-derection: row;
  justify-content: space-between;
  width: auto;
  overflow-x: auto;
`

export default class InfoPage extends React.Component{
  render() {
    return (
      <div>
        <BtnReturn/>
        <InfoLinksBlock>
          <InfoLinks active={this.props.cur} curName='btc'/>
          <InfoLinks active={this.props.cur} curName='eth'/>
          <InfoLinks active={this.props.cur} curName='xrp'/>
        </InfoLinksBlock>
        <InfoPageBig curName={this.props.cur} />
        <Router>
        <ChangeChartBlock>
          <BtnChangeChart/>
        </ChangeChartBlock>
          <Route path='/day' exact component={ () => (<ChartDay cur={this.props.cur} />)} />
          <Route path='/week' exact component={ () => (<ChartWeek cur={this.props.cur} />)} />
          <Route path='/mouth' exact component={ () => (<ChartMouth cur={this.props.cur} />)} />
        </Router>
      </div>
    )
  }
}