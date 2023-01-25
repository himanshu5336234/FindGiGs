import { Button, Col, Grid, Row, Space } from "antd";
import React, { useState } from "react";
import {
    GlobalButton,
    GlobalTextP2,
    GlobalTextP4,
} from "../../../shared/GlobalComponents";
import {
    ClockCircleOutlined,
    DollarCircleOutlined,
    UsergroupAddOutlined,
    SnippetsOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import { SaveIcon } from "../../../shared/icons";
import ShareModal from "./ShareModal";
import SendBidDrawer from "./SendBidDrawer";
import BidSuccessModal from "./BidSuccessModal";
import { useSelector, useDispatch } from "react-redux";
import { postGig } from "../../../api/freelancer/gigsAPIs";
const { useBreakpoint } = Grid;

export const GigOverviewIconBox = ({ icon, title, dataText }) => {
    return (
        <Space size={"middle"} align="start">
            <Button
                shape="circle"
                icon={icon}
                className="gigDetail__MilestoneDetailIcon"
            ></Button>
            <Space direction="vertical" size={"small"}>
                <GlobalTextP4 className="margin-b0">{title}</GlobalTextP4>
                <GlobalTextP2 className="margin-b0" weight="bold">
                    {dataText}
                </GlobalTextP2>
            </Space>
        </Space>
    );
};

function GigOverview({ gigId }) {
    const screens = useBreakpoint();
    const [modalVisible, setModalVisible] = useState(false);
    const [sendBidVisible, setSendBidVisible] = useState(false);
    const [bidSuccessVisible, setBidSuccessVisible] = useState(false);
    const { activeGig } = useSelector((state) => state.gigs);
    const dispatch = useDispatch();
    const showDrawer = () => {
        setSendBidVisible(true);
    };

    const onClose = () => {
        setSendBidVisible(false);
    };

    const gigs = {
        gigs: {
            id: gigId,
        },
    };

    const saveGig = () => {
        dispatch(postGig({ record: gigs }));
    };

    const getDuration = (string_duration, payment_type) => {
        let tempDurationArray = string_duration?.split(" ");
        if (payment_type === 1) {
            return tempDurationArray[0] + " " + tempDurationArray[1];
        } else if (payment_type === 2) {
            return tempDurationArray[6] + " " + tempDurationArray[7];
        } else if (payment_type === 3) {
            return tempDurationArray[0] + " " + tempDurationArray[1];
        }
    };

    return (
        <div className="gigOverview__container">
            <BidSuccessModal
                modalVisible={bidSuccessVisible}
                setModalVisible={setBidSuccessVisible}
            />
            <ShareModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <SendBidDrawer
                gigId={gigId}
                onClose={onClose}
                visible={sendBidVisible}
                setBidSuccessVisible={setBidSuccessVisible}
            />
            <GlobalTextP2 className="margin-b2">Gig Overview</GlobalTextP2>
            <Row gutter={[16, 16]}>
                <Col xs={12} sm={24}>
                    <GigOverviewIconBox
                        icon={
                            <DollarCircleOutlined
                                style={{ color: "#4668D6" }}
                            />
                        }
                        title="Budget"
                        dataText={activeGig?.gigData?.total_budget + "/Fixed"}
                    />
                </Col>
                <Col xs={12} sm={24}>
                    <GigOverviewIconBox
                        icon={
                            <ClockCircleOutlined style={{ color: "#4668D6" }} />
                        }
                        title="Duration"
                        dataText={
                            activeGig?.gigData?.string_duration
                                ? activeGig?.gigData?.string_duration
                                : "0"
                        }
                        // dataText={getDuration(
                        //     activeGig?.gigData?.string_duration,
                        //     activeGig?.gigData?.payment_type
                        // )}
                    />
                </Col>
                <Col xs={12} sm={24}>
                    <GigOverviewIconBox
                        icon={<SnippetsOutlined style={{ color: "#4668D6" }} />}
                        title="Experience"
                        dataText={
                            activeGig?.gigData?.required_experience
                                ? activeGig?.gigData?.required_experience
                                : "0"
                        }
                    />
                </Col>
                <Col xs={12} sm={24}>
                    <GigOverviewIconBox
                        icon={
                            <UsergroupAddOutlined
                                style={{ color: "#4668D6" }}
                            />
                        }
                        title="Freelancers Required"
                        dataText={activeGig?.gigData?.no_fl_required}
                    />
                </Col>

                <Col xs={12} sm={24}>
                    <GigOverviewIconBox
                        icon={
                            <DollarCircleOutlined
                                style={{ color: "#4668D6" }}
                            />
                        }
                        title="Budget Per Freelancer"
                        dataText={activeGig?.gigData?.total_budget + "/Fixed"}
                    />
                </Col>
            </Row>
            <Space
                direction={screens.xs ? "horizontal" : "vertical"}
                size={"middle"}
                className="w-100 margin-t2"
            >
                <GlobalButton type="primary" block onClick={showDrawer}>
                    Bid on the Gig
                </GlobalButton>
                <div className="gigOverview__save w-100">
                    {screens.xs ? (
                        <GlobalButton>
                            <SaveIcon />
                        </GlobalButton>
                    ) : (
                        <GlobalButton block onClick={saveGig}>
                            Save
                        </GlobalButton>
                    )}
                    <GlobalButton onClick={() => setModalVisible(true)}>
                        <ShareAltOutlined style={{ fontSize: "2.2rem" }} />
                    </GlobalButton>
                </div>
            </Space>
        </div>
    );
}

export default GigOverview;
