import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { GlobalTextP4 } from "../../../shared/GlobalComponents";
import { GigStatusContainer, Title } from "./Stylesheet";
import { getGigStatus } from "../../../api/freelancer/gigsAPIs";
import { useDispatch } from "react-redux";
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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGigStatus());
    }, [dispatch]);
    const { gigStatus } = useSelector((state) => state.gigs);
    // const gigsCount = useSelector((state) => state.gigsEnterprise.gigCountData);
    console.log("Gig status count", gigStatus?.data?.closedGigs?.length);
    return (
        <div className="activeUser__gigStatus">
            <Title>Gig Statistics</Title>
            <div style={{minWidth:"224px"}} >
                <div>
                    <GigStatusCard
                        icon={
                            <RiseOutlined
                                style={{ color: "#fff", fontSize: "20px" }}
                            />
                        }
                        iconColor={"#4668D6"}
                        bgColor={"#E9EEFF"}
                        status={"In Progress"}
                        statusData={gigStatus?.data?.inProgressGigs?.length}
                    />
                </div>
                <div>
                    <GigStatusCard
                        icon={
                            <UserOutlined
                                style={{ color: "#fff", fontSize: "20px" }}
                            />
                        }
                        iconColor={"#3ACC6C"}
                        bgColor={"#E4F7EE"}
                        status={"Closed Gigs"}
                        statusData={gigStatus?.data?.closedGigs?.length}
                    />
                </div>
                <div>
                    <GigStatusCard
                        icon={
                            <FileTextOutlined
                                style={{ color: "#fff", fontSize: "20px" }}
                            />
                        }
                        iconColor={"#FF511A"}
                        bgColor={"#FFE9E3"}
                        status={"Saved Gigs"}
                        statusData={gigStatus?.data?.savedGigs?.length}
                    />
                </div>
            </div>
        </div>
    );
}
export default GigStatus;
