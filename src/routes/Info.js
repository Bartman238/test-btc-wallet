import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../app.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import BtnReturn from '../components/btnReturn.js'
import BtnChangeChart from '../components/btnChangeChart.js'
import InfoLinks from '../components/infoLinks.js'
import InfoPageBig from '../components/infoPageBig.js'
import ChartDay from '../components/chartDay.js'

let InfoLinksBlock = styled.div`
  display: flex;
  flex-derection: row;
  justify-content: space-between;
  width: auto;
  overflow-x: auto;
`

let ChangeChartBlock = styled.div`
  display: flex;
  flex-derection: row;
  justify-content: space-between;
`

export default class InfoPage extends React.Component{
  render() {
    console.log(this.props.cur + ' hmm')
    return (
      <div>
        <BtnReturn/>
        <InfoLinksBlock>
          <InfoLinks curName='btc'/>
          <InfoLinks curName='eth'/>
          <InfoLinks curName='xrp'/>
        </InfoLinksBlock>
        <InfoPageBig curName={this.props.cur} />
        <ChangeChartBlock>
          <BtnChangeChart/>
        </ChangeChartBlock>

        <ChartDay cur={this.props.cur} />
      </div>
    )
  }
}