import { Space } from "antd";
import React from "react";
import {
  GlobalButton,
  GlobalSubText,
  GlobalTextP2,
  GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { StatusTab } from "../BidsAndOffers/Stylesheet";
import {
  DollarCircleOutlined,
  ClockCircleOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { OngoingGigsProgress } from "../ActiveUser/StyleSheet";
import { Link, useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";

function GigInfoCard({ data, selectedTab, handleNavigate }) {
  const navigate = useNavigate();

  const getBgColor = (status) => {
    if (status === "In Progress") {
      return "#EBF0FF";
    } else if (status === "Overdue") {
      return "#FFF8E3";
    }
  };
  const getTextColor = (status) => {
    if (status === "In Progress") {
      return "#4668D6";
    } else if (status === "Overdue") {
      return "#FFC727";
    }
  };
  return (
    <div className="gigInfoCard" onClick={() => handleNavigate(data?.id)}>
      {selectedTab === "1" && (
        <StatusTab bgColor={getBgColor("In Progress")}>
          <GlobalTextP4
            className="margin-b0"
            color={getTextColor("In Progress")}
          >
            {"In Progress"}
          </GlobalTextP4>
        </StatusTab>
      )}
      <GlobalTextP2 className="margin-b0">{data?.title}</GlobalTextP2>
      <GlobalTextP4 className="margin-b0" color="#696969">
        {data?.description}
      </GlobalTextP4>
      <Space size={"large"}>
        <Space size={"small"} align="center">
          <div className="gigInfoCard__iconBox">
            <DollarCircleOutlined className="gigInfoCard__icon" />
          </div>
          <Space direction="vertical" size={1}>
            <GlobalTextP4 className="margin-b0" color="#909090">
              Budget
            </GlobalTextP4>
            <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17">
              Rs. {data?.total_budget}
            </GlobalSubText>
          </Space>
        </Space>
        <Space size={"small"} align="center">
          <div className="gigInfoCard__iconBox">
            <ClockCircleOutlined className="gigInfoCard__icon" />
          </div>

          <Space direction="vertical" size={1}>
            <GlobalTextP4 className="margin-b0" color="#909090">
              Duration
            </GlobalTextP4>
            <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17">
              400 hours
            </GlobalSubText>
          </Space>
        </Space>
      </Space>
      {(selectedTab === "1" || selectedTab === "4") && (
        <OngoingGigsProgress
          percent={data?.completed}
          strokeColor={"#3ACC6C"}
          format={(percent) => `${percent}% Completed`}
          className="margin-t1"
        />
      )}
      {selectedTab === "2" && (
        <div className="gigInfocard__draftData">
          <Space size={"large"}>
            <Space size={"small"} align="center">
              <div className="gigInfoCard__iconBox">
                <DollarCircleOutlined className="gigInfoCard__icon" />
              </div>
              <GlobalSubText
                className="margin-b0"
                weight="bold"
                color="#0C0E17"
              >
                {data?.bids_received} Bids received
              </GlobalSubText>
            </Space>
            <Space size={"small"} align="center">
              <div className="gigInfoCard__iconBox">
                <ProfileOutlined className="gigInfoCard__icon" />
              </div>

              <GlobalSubText
                className="margin-b0"
                weight="bold"
                color="#0C0E17"
              >
                {data?.offers_sent} Offers sent
              </GlobalSubText>
            </Space>
          </Space>
        </div>
      )}
      {selectedTab === "3" && (
        <Space className="margin-t1">
          <GlobalButton type="primary">
            <Link to={`/home/review-gig-details?id=${data?.id}`}>
              Continue Editing
            </Link>
          </GlobalButton>
        </Space>
      )}
    </div>
  );
}

export default GigInfoCard;
