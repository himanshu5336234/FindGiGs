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
import {
    getBidsSent,
    getOffersRecieved,
} from "../../../api/freelancer/gigsAPIs";

const { TabPane } = Tabs;
const { Option } = Select;
const { useBreakpoint } = Grid;

function BidsAndOffers() {
    const screens = useBreakpoint();
    const [selectedTab, setSelectedTab] = useState("1");
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.userData);
    useEffect(() => {
        dispatch(getBidsSent(userData.freelancer_id));
        dispatch(getOffersRecieved(userData.freelancer_id));
    }, [dispatch, userData.freelancer_id]);

    const bidsData = useSelector((state) => state.gigs.bidsSent);
    const offersData = useSelector((state) => state.gigs.offersRecieved);

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
                <TabPane tab="Bids Sent" key="1">
                    {bidsData?.bids?.length === 0 ? (
                        <GlobalTextP2>No Gigs Found</GlobalTextP2>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {bidsData?.map((item) => (
                                <Col key={item?.id} sm={24} md={12} lg={8}>
                                    <GigInfoCard
                                        bidsData={item}
                                        selectedTab={selectedTab}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )}
                </TabPane>
                <TabPane tab="Offers Recieved" key="2">
                    {offersData?.length === 0 ? (
                        <GlobalTextP2>No Gigs Found</GlobalTextP2>
                    ) : (
                        <Row gutter={[16, 16]}>
                            {offersData?.map((item) => (
                                <Col key={item?.id} sm={24} md={12} lg={8}>
                                    <GigInfoCard
                                        bidsData={item}
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

export default BidsAndOffers;
