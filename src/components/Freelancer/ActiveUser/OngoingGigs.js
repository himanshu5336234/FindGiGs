import { Avatar, Button, Space } from "antd";

import TechMLogo from "../../../assets/images/common/TechMLogo.svg";
import React, { useEffect } from "react";
import {
  IconContainer,
  OngoingGigsCard,
  OngoingGigsProgress,
  Title,
  OngoingHeader,
} from "./Stylesheet";
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
import { getGigStatus } from "../../../api/freelancer/gigsAPIs";
import { useDispatch } from "react-redux";
import { Header } from "antd/lib/layout/layout";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGigStatus());
  }, [dispatch]);
  const { gigStatus } = useSelector((state) => state.gigs);
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    if (index === gigStatus.length - 1) {
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
    <div style={{marginLeft:"10px"}}>
      <Title>Ongoing Gigs</Title>

      <OngoingGigsCard>
        <div  className="OngoingHeader">
          <div style={{
            display: "flex",
            gap: "10px"
          }} >
            <img  src={TechMLogo}/>
            <div>
              <h3>Front End Developer</h3>
              <p>Tech Mahindra</p>
            </div>
          </div>
          <p className="title">In Progress</p>
        </div>

        <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam labore et dolore magna aliqua. Ut enim ad minim veniam.</p>


        <div className="faqs">
        <NotStartedDetails
                    duration={
                        ""
                        // gigStatus?.inProgressGigs[index]?.estimated_duration
                    }
                    budget={gigStatus[index]?.total_budget}
                />
        </div>
        <div className=" ongoinGigsCard__header progress-bar">
        <OngoingGigsProgress
                        percent={60}
                        strokeColor={"#41DF77"}
                        format={(percent) => `${percent}% Completed`}
                    />
                    <div className="arrows">

                        <button>{ "<"} </button>
                        <button>{">"}</button>

                    </div>
        </div>
      </OngoingGigsCard>

      {/* <OngoingGigsCard status={status}>
                <div className="ongoinGigsCard__header">
                    <Title className="margin-b0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam labore et dolore magna aliqua. Ut enim ad minim veniam.
                        {gigStatus[index]?.title}
                    </Title>
                    <div className="ongoinGigsCard__status">
                        <p>In Progress{status}</p>
                    </div>
                </div>
                <GlobalTextP4 className="margin-t1" color="#696969">
                    {/* {gigStatus?.inProgressGigs[index]?.description}
                </GlobalTextP4>

                <NotStartedDetails
                    duration={
                        ""
                        // gigStatus?.inProgressGigs[index]?.estimated_duration
                    }
                    budget={gigStatus[index]?.total_budget}
                />

                <div style={{ display: "flex" }}>
                    <OngoingGigsProgress
                        percent={60}
                        strokeColor={"#41DF77"}
                        format={(percent) => `${percent}% Completed`}
                    />
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
            </OngoingGigsCard> */}
    </div>
  );
}
export default OngoingGigs;
