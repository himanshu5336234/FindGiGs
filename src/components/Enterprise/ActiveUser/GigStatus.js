import { Col, Row } from "antd";
import React from "react";
import { GlobalTextP4 } from "../../../shared/GlobalComponents";
import { GigStatusContainer, Title } from "./StyleSheet";
import {
  RiseOutlined,
  UserOutlined,
  FileTextOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const GigStatusCard = ({ icon, iconColor, bgColor, status, statusData }) => {
  return (
    <GigStatusContainer iconColor={iconColor} bgColor={bgColor}>
      <div className="gigStatus__icon">{icon}</div>
      <div className="gigStatus__content">
        <p>{statusData}</p>
        <GlobalTextP4 className="margin-b0" color="#696969">
          {status}
        </GlobalTextP4>
      </div>
    </GigStatusContainer>
  );
};

function GigStatus() {
  const gigsCount = useSelector((state) => state.gigsEnterprise.gigCountData);

  return (
    <div className="activeUser__gigStatus">
      <Title>Gig Status</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <GigStatusCard
            icon={<RiseOutlined style={{ color: "#fff", fontSize: "20px" }} />}
            iconColor={"#4668D6"}
            bgColor={"#E9EEFF"}
            status={"In Progress"}
            statusData={gigsCount?.inprogressGigs}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <GigStatusCard
            icon={<UserOutlined style={{ color: "#fff", fontSize: "20px" }} />}
            iconColor={"#FF511A"}
            bgColor={"#FFE9E3"}
            status={"Open Gigs"}
            statusData={gigsCount?.postedGigs}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <GigStatusCard
            icon={
              <FileTextOutlined style={{ color: "#fff", fontSize: "20px" }} />
            }
            iconColor={"#FFC727"}
            bgColor={"#FFF5D8"}
            status={"Drafts"}
            statusData={gigsCount?.draftGigs}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <GigStatusCard
            icon={
              <FileDoneOutlined style={{ color: "#fff", fontSize: "20px" }} />
            }
            iconColor={"#3ACC6C"}
            bgColor={"#E4F7EE"}
            status={"Closed Gigs"}
            statusData={gigsCount?.closedGigs}
          />
        </Col>
      </Row>
    </div>
  );
}

export default GigStatus;
