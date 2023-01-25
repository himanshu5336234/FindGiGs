import { Col, Grid, Row, Select, Space, Tabs } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import {
    GlobalButton,
    GlobalSubText,
    GlobalTextP2,
} from "../../../shared/GlobalComponents";
import {
    CustomTabs,
    SortSelect,
} from "../../Enterprise/ExploreTalent/Stylesheet";
import { Container, SortButton } from "./StyleSheet";
import { SortAscendingOutlined } from "@ant-design/icons";
import GigInfoCard from "./GigInfoCard";
import { useDispatch, useSelector } from "react-redux";
import RouteConstant from "../../../router/constants";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
const { Option } = Select;
const { useBreakpoint } = Grid;

const dummyGigInfoData = [
  {
    id: 824,
    title: "Front End Developer",
    status: "Due",
    duration: "2 Months",
    budget: 200000,
    completed: 72,
    offers_sent: 3,
    bids_received: 10,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 2,
    title: "Front End Developer",
    status: "Paid",
    duration: "2 Months",
    budget: 200000,
    completed: 72,
    offers_sent: 3,
    bids_received: 10,
    description:
      "Bot Framework Composer is an open-source, visual authoring canvas for developers and multi-disciplinary teams to design and build conversational .....",
  },
  {
    id: 3,
    title: "Front End Developer",
    status: "Paid",
    duration: "2 Months",
    budget: 200000,
    offers_sent: 3,
    bids_received: 10,
    completed: 72,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
  {
    id: 3,
    title: "Front End Developer",
    status: "Due",
    duration: "2 Months",
    budget: 200000,
    offers_sent: 3,
    bids_received: 10,
    completed: 72,
    description:
      "In this role, you are required to solve routine problems, largely through precedent and referral to general guidelines. Your expected interactions ....",
  },
];

function Payments() {
    const screens = useBreakpoint();
    const [selectedTab, setSelectedTab] = useState("1");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = (id) =>
        navigate(
            RouteConstant.HOME +
                "/" +
                RouteConstant.BIDS_AND_OFFERS_DETAILS +
                "/" +
                id
        );

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
                <TabPane tab="Paid" key="1">
                    {dummyGigInfoData.length === 0 ? (
                        <GlobalTextP2>No Gigs Found</GlobalTextP2>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {dummyGigInfoData?.map((item) => (
                                <Col key={item?.id} sm={24} md={12} lg={8}>
                                    <GigInfoCard
                                        data={item}
                                        selectedTab={selectedTab}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )}
                </TabPane>
                <TabPane tab="Due" key="2">
                    {dummyGigInfoData.length === 0 ? (
                        <GlobalTextP2>No Gigs Found</GlobalTextP2>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {dummyGigInfoData?.map((item) => (
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
            </CustomTabs>
        </Container>
    );
}

export default Payments;
