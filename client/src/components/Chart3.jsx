import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
export default function Chart3({ nonVej, Vej,fry }) {
    const data = [
        {quarter: 1, earnings: nonVej},
        {quarter: 2, earnings: Vej},
        {quarter: 3, earnings: fry}
      ];
  return (
    <React.Fragment>
           <VictoryChart
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Non Vej", "Vej", "Fry"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    </React.Fragment>
  );
}