import React from "react";
import { LegendText, Title } from "./StyleSheet";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
const data = [
  {
    name: "#2345",
    offers_sent: 40,
    bids_received: 24,
    bids_reviewed: 24,
  },
  {
    name: "#2344",
    offers_sent: 30,
    bids_received: 13,
    bids_reviewed: 22,
  },
  {
    name: "#2245",
    offers_sent: 20,
    bids_received: 98,
    bids_reviewed: 22,
  },
  {
    name: "#2322",
    offers_sent: 27,
    bids_received: 39,
    bids_reviewed: 20,
  },
  {
    name: "#2389",
    offers_sent: 18,
    bids_received: 48,
    bids_reviewed: 21,
  },
  {
    name: "#2325",
    offers_sent: 23,
    bids_received: 38,
    bids_reviewed: 25,
  },
  {
    name: "#2333",
    offers_sent: 34,
    bids_received: 43,
    bids_reviewed: 21,
  },
];

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="bidActivities__legend">
      {payload.map((entry, index) => (
        <LegendText key={`item-${index}`} color={entry.color}>
          <span className="legend__bullet"></span>
          {entry.value}
        </LegendText>
      ))}
    </ul>
  );
};

function BidActivities() {
  const gigGraphData = useSelector(
    (state) => state.gigsEnterprise.gigGraphData
  );

  if (gigGraphData === null) {
    return <div className="bidActivities">Loading</div>;
  }

  return (
    <div className="bidActivities">
      <Title className="margin-b0" style={{ marginTop: "5px" }}>
        Bid Activities
      </Title>
      <div className="bidActivities__graph">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={gigGraphData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 10,
            }}
            barCategoryGap={"20%"}
          >
            <Legend
              verticalAlign="top"
              height={50}
              content={renderLegend}
              align="right"
            />
            <XAxis dataKey="id" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            {/* <Bar
              dataKey="bids_reviewed"
              stackId="a"
              fill="#C67FFF"
              maxBarSize={12}
            /> */}
            <Bar
              dataKey="bids"
              stackId="a"
              fill="#9C3CE7"
              maxBarSize={12}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="invite"
              fill="#FF9F43"
              radius={[10, 10, 0, 0]}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BidActivities;
