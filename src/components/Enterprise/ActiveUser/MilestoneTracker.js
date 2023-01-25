import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import {
  GlobalSubText,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { CustomProgress, LegendDot, Title } from "./StyleSheet";

const milesToneDetails = [
  {
    id: 1,
    milestone_name: "Create a Chatbot",
    completed: 67,
    steps: 3,
    milestone_details: [0, 0, 2],
  },
  {
    id: 2,
    milestone_name: "Develop a Landing page for App",
    completed: 50,
    steps: 2,
    milestone_details: [0, 1],
  },
  {
    id: 3,
    milestone_name: "Bug Fixes in Payment Gateway",
    completed: 0,
    steps: 2,
    milestone_details: [1, 3],
  },
  {
    id: 4,
    milestone_name: "Design a Login Form",
    completed: 25,
    steps: 4,
    milestone_details: [0, 1, 3, 3],
  },
];

const milestoneData = [
  {
    id: 1,
    name: "Milestone 1",
  },
  {
    id: 2,
    name: "Milestone 2",
  },
  {
    id: 3,
    name: "Milestone 3",
  },
  {
    id: 4,
    name: "Milestone 4",
  },
];

function MilestoneTracker() {
  const gigMilestoneData = useSelector(
    (state) => state.gigsEnterprise.gigMilestoneData
  );

  // Get color function for progress bar
  const getProgressColor = (type) => {
    if (type === 0) {
      return "#3ACC6C";
    } else if (type === 1) {
      return "#4668D6";
    } else if (type === 2) {
      return "#FFC727";
    } else if (type === 3) {
      return "#E1E2E7";
    }
  };

  return (
    <div className="milestoneTracker">
      <div className="milestoneTracker__header">
        <Title className="margin-b0">Milestone Tracker</Title>
        <GlobalTextP4 color="#909090" weight="bold" className="margin-b0">
          View All
        </GlobalTextP4>
      </div>
      <div className="milestoneTracker__card">
        <ul className="milestoneTracker__legend">
          <li>
            <LegendDot bgColor={"#3ACC6C"} />
            Completed
          </li>
          <li>
            <LegendDot bgColor={"#4668D6"} />
            In Progress
          </li>
          <li>
            <LegendDot bgColor={"#FFC727"} />
            Overdue
          </li>
          <li>
            <LegendDot bgColor={"#E1E2E7"} />
            Upcoming
          </li>
        </ul>
        <Row gutter={[16, 16]} className="margin-t2">
          {milesToneDetails.map((detail) => (
            <React.Fragment key={detail.id}>
              <Col md={6}>
                <GlobalSubText color="#0C0E17" className="margin-b0">
                  {detail?.milestone_name}
                </GlobalSubText>
              </Col>
              <Col md={18}>
                <CustomProgress
                  percent={detail?.completed}
                  steps={detail?.steps}
                  size="default"
                  strokeColor={detail?.milestone_details.map((item) =>
                    getProgressColor(item)
                  )}
                />
              </Col>
            </React.Fragment>
          ))}
          <Col md={6}>
            <GlobalTextP5 color="#9A9A9A" style={{ marginTop: "5px" }}>
              Milestones
            </GlobalTextP5>
          </Col>
          <Col md={18}>
            {milestoneData?.map((data) => (
              <div key={data.id} className="milestoneTracker__milestoneTitle">
                <GlobalSubText align="center" color="#9A9A9A">
                  {data.name}
                </GlobalSubText>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MilestoneTracker;
