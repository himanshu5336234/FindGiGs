import { Grid, Select, Space, Tabs } from "antd";
import React, { useState } from "react";
import {
  GlobalSubText,
  GlobalTextP1,
  GlobalTextP2,
  GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { CustomTabs, SortSelect } from "../ExploreTalent/Stylesheet";
import DataTable from "./DataTable";
import { Container, InfoCard } from "./Stylesheet";
import { StarOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewListdata } from "../../../api/enterprise/reviewsAndPaymentsApis";

const { TabPane } = Tabs;
const { Option } = Select;
const { useBreakpoint } = Grid;

const RatingsInfo = ({ title, infoText, bgColor }) => {
  return (
    <InfoCard bgColor={bgColor}>
      <Space size={"middle"}>
        <div className="ratingInfo__iconBox">
          <StarOutlined className="ratingInfo__icon" />
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

function ReviewsAndRatings() {
  const [selectedTab, setSelectedTab] = useState("1");
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const reviewList = useSelector(
    (state) => state.reviewsAndPayments.reviewList
  );

  useEffect(() => {
    dispatch(getReviewListdata());
  }, []);

  const onChange = (key) => {
    setSelectedTab(key);
  };
  const onChangeSelect = () => {};

  const sort = (
    <Space align="center" size={0}>
      <GlobalSubText color="#909090" className="margin-b0">
        Sort by:
      </GlobalSubText>
      <SortSelect
        defaultValue="Recent"
        onChange={onChangeSelect}
        bordered={false}
      >
        <Option value="Recent">Recent</Option>
        <Option value="one">last 1 month</Option>
      </SortSelect>
    </Space>
  );
  return (
    <Container>
      <Space
        size={"middle"}
        className="margin-b2"
        direction={screens?.xs ? "vertical" : "horizontal"}
      >
        <RatingsInfo
          title={"Total ratings"}
          infoText={reviewList?.length === 0 || !reviewList ? 0 : 33}
          bgColor="#4668D6"
        />
        <RatingsInfo
          title={"Rated"}
          infoText={reviewList?.length === 0 || !reviewList ? 0 : 10}
          bgColor="#4CCB86"
        />
        <RatingsInfo
          title={"Unrated"}
          infoText={reviewList?.length === 0 || !reviewList ? 0 : 5}
          bgColor="#FFC727"
        />
      </Space>
      <CustomTabs
        defaultActiveKey="1"
        onChange={onChange}
        animated
        type="line"
        tabBarExtraContent={sort}
      >
        <TabPane tab="Rated" key="1">
          {reviewList?.length === 0 || !reviewList ? (
            <GlobalTextP2>No Data found</GlobalTextP2>
          ) : (
            <DataTable />
          )}
        </TabPane>
        <TabPane tab="Unrated" key="2">
          {reviewList?.length === 0 || !reviewList ? (
            <GlobalTextP2>No Data found</GlobalTextP2>
          ) : (
            <DataTable />
          )}
        </TabPane>
      </CustomTabs>
    </Container>
  );
}

export default ReviewsAndRatings;
