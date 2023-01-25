import { Col, Row, Select, Space, Tabs } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBidsReceived,
  getOffersSentBids,
} from "../../../api/enterprise/gigsApis";
import { GlobalSubText, GlobalTextP2 } from "../../../shared/GlobalComponents";
import { CustomTabs, SortSelect } from "../ExploreTalent/Stylesheet";
import DetailCard from "./DetailCard";
import { Container } from "./Stylesheet";

const { TabPane } = Tabs;
const { Option } = Select;

const offersSentJson = [
  {
    id: 1,
    status: "Response Awaited",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 2,
    status: "Offer Accepted",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 3,
    status: "Offer Rejected",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 4,
    status: "Update from freelancer",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
];
const bidsReceivedJson = [
  {
    id: 1,
    status: "Response Awaited",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 2,
    status: "Bid Accepted",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 3,
    status: "Bid Rejected",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 4,
    status: "Update from freelancer",
    title: "Bug fixes on landing page",
    budget: 200000,
    duration: 200,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
];

function BidsAndOffers() {
  const [selectedTab, setSelectedTab] = useState("1");
  const [data, setData] = useState(offersSentJson);
  const bidList = useSelector((state) => state.gigsEnterprise.bidList);
  const dispatch = useDispatch();

  const onChange = (key) => {
    setSelectedTab(key);
  };

  useEffect(() => {
    if (selectedTab === "1") {
      setData(offersSentJson);
      dispatch(getOffersSentBids());
    } else if (selectedTab === "2") {
      setData(bidsReceivedJson);
      dispatch(getBidsReceived());
    }
  }, [selectedTab]);

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
      <CustomTabs
        defaultActiveKey="1"
        onChange={onChange}
        animated
        type="line"
        tabBarExtraContent={sort}
      >
        <TabPane tab="Offers Sent" key="1">
          {bidList?.length === 0 ? (
            <GlobalTextP2>No Data Found</GlobalTextP2>
          ) : (
            <Row gutter={[16, 16]}>
              {bidList?.map((item) => (
                <Col key={item?.id} sm={24} md={12} lg={8}>
                  <DetailCard data={item} />
                </Col>
              ))}
            </Row>
          )}
        </TabPane>
        <TabPane tab="Bids Received" key="2">
          {bidList?.length === 0 ? (
            <GlobalTextP2>No Data Found</GlobalTextP2>
          ) : (
            <Row gutter={[16, 16]}>
              {bidList?.map((item) => (
                <Col key={item?.id} sm={24} md={12} lg={8}>
                  <DetailCard data={item} />
                </Col>
              ))}
            </Row>
          )}
        </TabPane>
      </CustomTabs>
    </Container>
  );
}

export default BidsAndOffers;
