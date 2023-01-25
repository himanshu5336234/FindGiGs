import { Avatar, Button, Space } from "antd";
import React from "react";
import {
  IconContainer,
  OngoingGigsCard,
  OngoingGigsProgress,
  Title,
} from "./StyleSheet";
import {
  LeftOutlined,
  RightOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

import {
  GlobalSubText,
  GlobalTextP2,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { useSelector } from "react-redux";
import { useState } from "react";

const InProgressDetails = ({ freelancers, budget }) => {
  return (
    <Space size={"middle"} align="start" className="margin-b1">
      <Space size={"small"} direction="vertical">
        <GlobalTextP5 className="margin-b0" color="#9A9A9A">
          FREELANCERS
        </GlobalTextP5>
        <Space size={4}>
          {freelancers.map((freelancer, idx) => (
            <Avatar key={idx} size={32}>
              {freelancer.charAt(0)}
            </Avatar>
          ))}
        </Space>
      </Space>
      <Space size={"small"} direction="vertical">
        <GlobalTextP5 className="margin-b0" color="#9A9A9A">
          BUDGET
        </GlobalTextP5>
        <GlobalTextP2 className="margin-b0" color="#0C0E17">
          Rs. {budget}
        </GlobalTextP2>
      </Space>
    </Space>
  );
};
const NotStartedDetails = ({ duration, budget }) => {
  return (
    <Space size={"large"} className="margin-b1">
      <Space size={"small"} align="center">
        <IconContainer>
          <ClockCircleOutlined className="notStarted__icon" />
        </IconContainer>
        <Space direction="vertical" size={0}>
          <GlobalTextP5 className="margin-b0" color="#696969">
            Duration
          </GlobalTextP5>
          <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17">
            {duration}
          </GlobalSubText>
        </Space>
      </Space>
      <Space size={"small"} align="center">
        <IconContainer>
          <DollarCircleOutlined className="notStarted__icon" />
        </IconContainer>
        <Space direction="vertical" size={0}>
          <GlobalTextP5 className="margin-b0" color="#696969">
            Budget
          </GlobalTextP5>
          <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17">
            Rs. {budget}
          </GlobalSubText>
        </Space>
      </Space>
    </Space>
  );
};

function OngoingGigs({ status }) {
  const [index, setIndex] = useState(0);
  const ongoingGigsData = useSelector(
    (state) => state.gigsEnterprise.ongoingGigsData
  );

  const handleRight = () => {
    if (index === ongoingGigsData.length - 1) {
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const handleLeft = () => {
    if (index === 0) {
      return;
    }
    setIndex((prev) => prev - 1);
  };
  return (
    <div className="ongoingGigs">
      <div className="ongoinGigs__header">
        <Title className="margin-b0">Ongoing Gigs</Title>
        <Space size={"small"}>
          <Button
            shape="round"
            icon={
              <LeftOutlined
                style={{
                  color: "#4668D6",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              />
            }
            onClick={handleLeft}
            className="ongoing__actionButton"
          />
          <Button
            shape="round"
            icon={
              <RightOutlined
                style={{
                  color: "#4668D6",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              />
            }
            onClick={handleRight}
            className="ongoing__actionButton"
          />
        </Space>
      </div>
      <OngoingGigsCard status={status}>
        <div className="ongoinGigsCard__header">
          <Title className="margin-b0">{ongoingGigsData[index]?.title}</Title>
          <div className="ongoinGigsCard__status">
            <p>{status}</p>
          </div>
        </div>
        <GlobalTextP4 className="margin-t1" color="#696969">
          {ongoingGigsData[index]?.description}
        </GlobalTextP4>
        {status === "In Progress" && (
          <InProgressDetails
            freelancers={["Asim", "Mehta"]}
            budget={ongoingGigsData[index]?.total_budget}
          />
        )}
        {status === "Not Started" && (
          <NotStartedDetails
            duration={"2 Months"}
            budget={ongoingGigsData[index]?.total_budget}
          />
        )}
        <OngoingGigsProgress
          percent={0}
          strokeColor={"#41DF77"}
          format={(percent) => `${percent}% Completed`}
        />
      </OngoingGigsCard>
    </div>
  );
}

export default OngoingGigs;
