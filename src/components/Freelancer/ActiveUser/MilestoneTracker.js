import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import {
  GlobalSubText,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { CustomProgress, LegendDot, Title,MilestoneTrackerCard } from "./Stylesheet";

const milesToneDetails = [
  {
    id: 1,
    milestone_name: "Create a Chatbot",
    completed: 67,
    steps: 3,
    milestone_details: [0, 0, 2],
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
    <div >
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <Title >Milestone Tracker</Title>
        <GlobalTextP4 color="#909090" weight="bold" className="margin-b0">
         
        </GlobalTextP4>
      </div>
      <MilestoneTrackerCard >
        <ul style={{display:"flex",alignItems:"flex-end"}} className="milestoneTracker__legend">
          <li style={{margin:"0px 10px"}}>
            <LegendDot bgColor={"#3ACC6C"} />
            Completed
          </li>
          <li style={{margin:"0px 10px"}}>
            <LegendDot bgColor={"#4668D6"} />
            In Progress
          </li>
          <li style={{margin:"0px 10px"}}>
            <LegendDot bgColor={"#FFC727"} />
            Overdue
          </li>
          <li style={{margin:"0px 10px"}}>
            <LegendDot bgColor={"#E1E2E7"} />
            Upcoming
          </li>
        </ul>
        <Row gutter={[16, 16]} className="margin-t2">
          {milesToneDetails.map((detail) => (
            <React.Fragment key={detail.id}>
              <Col md={6}>
                <GlobalSubText  color="#0C0E17" className="margin-b0">
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
          <Col md={4}>
            <GlobalTextP5 color="#9A9A9A" style={{ marginTop: "5px" }}>
            
            </GlobalTextP5>
          </Col>
          <Col md={18} style={{
                display: "flex",
                justifyContent: "space-evenly"
            }}>
            {milestoneData?.map((data) => (
              <div  key={data.id}  className="milestoneTracker__milestoneTitle">
                <GlobalSubText  align="center" color="#9A9A9A">
                  {data.name}
                </GlobalSubText>
              </div>
            ))}
          </Col>
        </Row>
      </MilestoneTrackerCard>
    </div>
  );
}

export default MilestoneTracker;
