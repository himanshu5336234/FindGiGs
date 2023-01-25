import { Col, Grid, Row, Select, Space, Tabs } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  GlobalButton,
  GlobalSubText,
  GlobalTextP2,
} from "../../../shared/GlobalComponents";
import { CustomTabs, SortSelect } from "../ExploreTalent/Stylesheet";
// import { Container, SortButton } from "./StyleSheet";
import { SortAscendingOutlined } from "@ant-design/icons";
import GigInfoCard from "./GigInfoCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getClosedGigs,
  getDraftedGigs,
  getInprogressGigs,
  getPostedGigs,
} from "../../../api/enterprise/gigsApis";
import RouteConstant from "../../../router/constants";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

 const Container = styled.div`
  .gigInfoCard {
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.375rem;
    background: #fff;
    cursor: pointer;
  }
  .gigInfoCard__iconBox {
    border-radius: 50%;
    background: #e9eeff;
    width: 2.1875rem;
    height: 2.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gigInfoCard__icon {
    font-size: 1.1rem;
    color: #4668d6;
  }
  .gigInfocard__draftData {
    padding: 0.7rem;
    border: 1px solid #e3e3e3;
    border-radius: 3.125rem;
    margin-top: 1rem;
  }
`;

 const SortButton = styled(GlobalButton)`
  padding: 0;
  &.ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    border: 1px solid #d3d3d3;
  }

  &.ant-btn {
    border-color: #d3d3d3;
    color: black;
  }
`;


const { TabPane } = Tabs;
const { Option } = Select;
const { useBreakpoint } = Grid;

const dummyGigInfoData = [
  {
    id: 1,
    title: "Bug fixes on landing page",
    status: "In Progress",
    duration: 2,
    budget: 200000,
    completed: 72,
    offers_sent: 3,
    bids_received: 10,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 2,
    title: "Create a Chatbot",
    status: "Overdue",
    duration: 2,
    budget: 200000,
    completed: 72,
    offers_sent: 3,
    bids_received: 10,
    description:
      "Bot Framework Composer is an open-source, visual authoring canvas for developers and multi-disciplinary teams to design and build conversational .....",
  },
  {
    id: 3,
    title: "Bug fixes on landing page",
    status: "In Progress",
    duration: 2,
    budget: 200000,
    offers_sent: 3,
    bids_received: 10,
    completed: 72,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
];

function GigStatus() {
  const screens = useBreakpoint();
  const [selectedTab, setSelectedTab] = useState("1");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (id) =>
    navigate(
      RouteConstant.HOME + "/" + RouteConstant.GIG_DETAILS + "/" + id,

      { state: { gigStatus: parseInt(selectedTab) } }
    );

  const [gigInfoData, setGigInfoData] = useState(dummyGigInfoData);
  const gigList = useSelector((state) => state.gigsEnterprise.gigList);

  useEffect(() => {
    if (selectedTab === "1") {
      dispatch(getInprogressGigs());
    } else if (selectedTab === "2") {
      dispatch(getPostedGigs());
    } else if (selectedTab === "3") {
      dispatch(getDraftedGigs());
    } else if (selectedTab === "4") {
      dispatch(getClosedGigs());
    }
  }, [selectedTab]);

  console.log(gigList, "giglist");

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

  const sortButton = <SortButton icon={<SortAscendingOutlined />} />;

  return (
    <Container>
      <CustomTabs
        defaultActiveKey="1"
        onChange={onChange}
        animated
        type="line"
        tabBarExtraContent={screens?.xs ? sortButton : sort}
      >
        <TabPane tab="In Progress" key="1">
          {gigList.length === 0 ? (
            <GlobalTextP2>No Gigs Found</GlobalTextP2>
          ) : (
            <Row gutter={[16, 16]}>
              {gigList?.map((item) => (
                <Col key={item?.id} sm={24} md={12} lg={8}>
                  <GigInfoCard data={item} selectedTab={selectedTab} />
                </Col>
              ))}
            </Row>
          )}
        </TabPane>
        <TabPane tab="Open" key="2">
          {gigList.length === 0 ? (
            <GlobalTextP2>No Gigs Found</GlobalTextP2>
          ) : (
            <Row gutter={[16, 16]}>
              {gigList?.map((item) => (
                <Col key={item?.id} sm={24} md={12} lg={8}>
                  <GigInfoCard
                    data={item}
                    selectedTab={selectedTab}
                    handleNavigate={handleNavigate}
                  />
                </Col>
              ))}
            </Row>
          )}
        </TabPane>
        <TabPane tab="Drafts" key="3">
          {gigList.length === 0 ? (
            <GlobalTextP2>No Gigs Found</GlobalTextP2>
          ) : (
            <Row gutter={[16, 16]}>
              {gigList?.map((item) => (
                <Col key={item?.id} sm={24} md={12} lg={8}>
                  <GigInfoCard data={item} selectedTab={selectedTab} />
                </Col>
              ))}
            </Row>
          )}
        </TabPane>
        <TabPane tab="Closed" key="4">
          {gigList.length === 0 ? (
            <GlobalTextP2>No Gigs Found</GlobalTextP2>
          ) : (
            <Row gutter={[16, 16]}>
              {gigList?.map((item) => (
                <Col key={item?.id} sm={24} md={12} lg={8}>
                  <GigInfoCard data={item} selectedTab={selectedTab} />
                </Col>
              ))}
            </Row>
          )}
        </TabPane>
      </CustomTabs>
    </Container>
  );
}

export default GigStatus;
