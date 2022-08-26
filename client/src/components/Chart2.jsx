import React from "react";
import { PieChart } from "react-minimal-pie-chart";
export default function Chart2({ nonVej, Vej,fry }) {
  return (
    <React.Fragment>
      <PieChart
        data={[
          { title: "Non Vej", value: nonVej, color: "#E38627" },
          { title: "Vej", value: Vej, color: "#C13C37" },
          { title: "Fry", value: fry, color: "#6A2135" },
        ]}
      />
      ;{" "}
    </React.Fragment>
  );
}
