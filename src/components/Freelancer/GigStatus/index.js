import { Col, Grid, Row, Select, Space, Tabs } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { GlobalSubText, GlobalTextP2 } from "../../../shared/GlobalComponents";
import {
    CustomTabs,
    SortSelect,
} from "../../Enterprise/ExploreTalent/Stylesheet";
import { Container, SortButton } from "./StyleSheet";
import { SortAscendingOutlined } from "@ant-design/icons";
import GigInfoCard from "./GigInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { getGigStatus } from "../../../api/freelancer/gigsAPIs";
import RouteConstant from "../../../router/constants";
import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;
const { Option } = Select;
const { useBreakpoint } = Grid;
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
    useEffect(() => {
        // if (selectedTab === "1") {
        //   dispatch(getInprogressGigs());
        // } else if (selectedTab === "2") {
        //   dispatch(getPostedGigs());
        // } else if (selectedTab === "3") {
        //   dispatch(getDraftedGigs());
        // } else if (selectedTab === "4") {
        //   dispatch(getClosedGigs());
        // }
    }, [selectedTab]);
    useEffect(() => {
        dispatch(getGigStatus());
    }, [dispatch]);
    const { gigStatus } = useSelector((state) => state.gigs);
    console.log("gigStatus-gigStatus", gigStatus);
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
                    {gigStatus?.data?.inProgressGigs?.length === 0 ? (
                        <GlobalTextP2>No Gigs Found</GlobalTextP2>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {gigStatus?.data?.inProgressGigs?.map((item) => (
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
                <TabPane tab="Closed" key="2">
                    {gigStatus?.data?.closedGigs?.length === 0 ? (
                        <GlobalTextP2>No Gigs Found</GlobalTextP2>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {gigStatus?.data?.closedGigs?.map((item) => (
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
                <TabPane tab="Saved" key="3">
                    {gigStatus?.data?.savedGigs?.length === 0 ? (
                        <GlobalTextP2>No Gigs Found</GlobalTextP2>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {gigStatus?.data?.savedGigs?.map((item) => (
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
export default GigStatus;
