import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, Cell, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { 
  personalityGroupColors,
  checkAbbreviationForAnalyst,
  checkAbbreviationForDiplomat,
  checkAbbreviationForSentinel,
  checkAbbreviationForExplorer
} from '../../util/personality-algorithms';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart width={500} height={800} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} layout="vertical">
       <XAxis type="number"/>
       <YAxis dataKey="abbreviation" type="category" />
       <Tooltip/>
       <Bar dataKey="amount" fill={"#8884d8"}>
        {
          this.props.data.map((entry, index) => {
            let color = '#8884d8';
            if (checkAbbreviationForAnalyst(entry.abbreviation)) {
              color = personalityGroupColors.Analysts;
            }
            if (checkAbbreviationForDiplomat(entry.abbreviation)) {
              color = personalityGroupColors.Diplomats;
            }
            if (checkAbbreviationForSentinel(entry.abbreviation)) {
              color = personalityGroupColors.Sentinels;
            }
            if (checkAbbreviationForExplorer(entry.abbreviation)) {
              color = personalityGroupColors.Explorers;
            }
            return <Cell fill={color} />;
          })
        }
       </Bar>
      </BarChart>
    );
  }
}