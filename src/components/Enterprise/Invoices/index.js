import { Grid, Space } from "antd";
import React from "react";
import { GlobalTextP1, GlobalTextP4 } from "../../../shared/GlobalComponents";
import DataTable from "./DataTable";
import { DollarOutlined, FileTextOutlined } from "@ant-design/icons";
import { Container, InfoCard } from "../ReviewsAndRatings/Stylesheet";

const { useBreakpoint } = Grid;

const RatingsInfo = ({ title, infoText, bgColor }) => {
  return (
    <InfoCard bgColor={bgColor}>
      <Space size={"middle"}>
        <div className="ratingInfo__iconBox">
          {title === "Invoices Generated" ? (
            <FileTextOutlined className="ratingInfo__icon" />
          ) : (
            <DollarOutlined className="ratingInfo__icon" />
          )}
        </div>
        <Space size={3} direction="vertical">
          <GlobalTextP4 className="margin-b0" color="#696969">
            {title}
          </GlobalTextP4>
          <GlobalTextP1 className="margin-b0" weight="600">
            {infoText}
          </GlobalTextP1>
        </Space>
      </Space>
    </InfoCard>
  );
};

function Invoices() {
  const screens = useBreakpoint();

  return (
    <Container>
      <Space
        size={"middle"}
        className="margin-b2"
        direction={screens?.xs ? "vertical" : "horizontal"}
      >
        <RatingsInfo
          title={"Payment Made"}
          infoText={"₹1.46 lacs"}
          bgColor="#4CCB86"
        />
        <RatingsInfo
          title={"Payment Due"}
          infoText={"₹1.46 lacs"}
          bgColor="#FFC727"
        />
        <RatingsInfo
          title={"Invoices Generated"}
          infoText={13}
          bgColor="#4668D6"
        />
      </Space>
      <DataTable />
    </Container>
  );
}

export default Invoices;
