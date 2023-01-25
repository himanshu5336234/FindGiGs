import { Space } from "antd";
import React from "react";
import {
  GlobalSubText,
  GlobalTextP2,
  GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { StatusTab } from "./Stylesheet";
import { DollarCircleFilled, ClockCircleFilled } from "@ant-design/icons";
import moment from "moment";

function DetailCard({ data }) {
  const getBgColor = (status) => {
    if (status === 0) {
      return "#FFFAEB";
    } else if (status === 1 || status === 1) {
      return "#D8FFE5";
    } else if (status === 2 || status === 2) {
      return "#FFEEE9";
    } else if (status === 4) {
      return "#FAE9FF";
    }
  };
  const getTextColor = (status) => {
    if (status === 0) {
      return "#FFC727";
    } else if (status === 1 || status === 1) {
      return "#3ACC6C";
    } else if (status === 3 || status === 3) {
      return "#FF511A";
    } else if (status === 4) {
      return "#974BAD";
    }
  };

  const getText = (status) => {
    if (status === 0) {
      return "Response Awaited";
    } else if (status === 1 || status === 1) {
      return "Bid Accepted";
    } else if (status === 3 || status === 3) {
      return "Bid rejected";
    } else if (status === 4) {
      return "Update from freelancer";
    }
  };

  const getHours = (duration) => {
    let tempTime = moment.duration(duration);
    let y = tempTime.hours();
    return y;
  };
  return (
    <div className="detailCard__container">
      <StatusTab bgColor={getBgColor(data?.status)}>
        <GlobalTextP4 className="margin-b0" color={getTextColor(data?.status)}>
          {getText(data?.status)}
        </GlobalTextP4>
      </StatusTab>
      <GlobalTextP2 color="#0C0E17" className="margin-b0">
        {data?.gigs?.title}
      </GlobalTextP2>
      <GlobalTextP4 color="#696969" className="margin-b0">
        {data?.gigs?.description}
      </GlobalTextP4>
      <Space size={"large"}>
        <Space size={"small"} align="center">
          <DollarCircleFilled
            className="detailcard__icon"
            style={{ color: "#0ACF83" }}
          />
          <Space direction="vertical" size={1}>
            <p className="detailCard__iconTitle">BUDGET</p>
            <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17">
              Rs. {data?.gigs?.total_budget}
            </GlobalSubText>
          </Space>
        </Space>
        <Space size={"small"} align="center">
          <ClockCircleFilled
            className="detailcard__icon"
            style={{ color: "#4668D6" }}
          />
          <Space direction="vertical" size={1}>
            <p className="detailCard__iconTitle">DURATION</p>
            <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17">
              {getHours(data?.estimated_duration)} hours
            </GlobalSubText>
          </Space>
        </Space>
      </Space>
    </div>
  );
}

export default DetailCard;
