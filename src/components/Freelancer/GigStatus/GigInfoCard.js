import { Space } from "antd";
import React from "react";
import {
    GlobalButton,
    GlobalSubText,
    GlobalTextP2,
    GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { StatusTab } from "../../Enterprise/BidsAndOffers/Stylesheet";
import {
    DollarCircleOutlined,
    ClockCircleOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import flagImg from "../../../assets/images/common/flag.png";
import { OngoingGigsProgress } from "../../Enterprise/ActiveUser/StyleSheet";
import { Link } from "react-router-dom";
function GigInfoCard({ data, selectedTab, handleNavigate }) {
    console.log("first", data);
    const getBgColor = (status) => {
        if (status === "In Progress") {
            return "#EBF0FF";
        } else if (status === "Overdue") {
            return "#FFF8E3";
        }
    };
    const getTextColor = (status) => {
        if (status === "In Progress") {
            return "#4668D6";
        } else if (status === "Overdue") {
            return "#FFC727";
        } else if (status === "completed") {
            return "#3ACC6C";
        }
    };
    return (
        <div className="gigInfoCard" onClick={() => handleNavigate(data?.id)}>
            {selectedTab === "1" && (
                <StatusTab bgColor={getBgColor("In Progress")}>
                    <GlobalTextP4
                        className="margin-b0"
                        color={getTextColor("In Progress")}
                    >
                        {"In Progress"}
                    </GlobalTextP4>
                </StatusTab>
            )}
            {selectedTab === "2" && (
                <StatusTab bgColor={getBgColor("In Progress")}>
                    <GlobalTextP4
                        className="margin-b0"
                        color={getTextColor("completed")}
                    >
                        {"Completed"}
                    </GlobalTextP4>
                </StatusTab>
            )}
            <div style={{ display: "flex", gap: "0.5rem" }}>
                <div>
                    <img
                        src=""
                        alt="dp"
                        width={30}
                        height={30}
                        style={{ background: "gray", borderRadius: "50%" }}
                    />
                </div>
                <div>
                    <GlobalTextP2 className="margin-b0">
                        {data?.title || "Front End Developer"}{" "}
                    </GlobalTextP2>
                    <GlobalTextP4 className="margin-b0" color="#696969">
                        {data?.company || "Antino Labs PVT."}
                    </GlobalTextP4>
                </div>
            </div>
            <GlobalTextP4 className="margin-b0" color="#696969">
                {data?.description}
            </GlobalTextP4>
            <Space size={"large"}>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <DollarCircleOutlined className="gigInfoCard__icon" />
                    </div>
                    <Space direction="vertical" size={1}>
                        <GlobalTextP4 className="margin-b0" color="#909090">
                            Budget
                        </GlobalTextP4>
                        <GlobalSubText
                            className="margin-b0"
                            weight="bold"
                            color="#0C0E17"
                            style={{ frontSize: "0.5rem" }}
                        >
                            Rs. {data?.total_budget}
                        </GlobalSubText>
                    </Space>
                </Space>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <ClockCircleOutlined className="gigInfoCard__icon" />
                    </div>
                    <Space direction="vertical" size={1}>
                        <GlobalTextP4
                            className="margin-b0"
                            color="#909090"
                        ></GlobalTextP4>
                        <GlobalSubText
                            style={{ fontSize: "0.6rem" }}
                            className="margin-b0"
                            weight="bold"
                            color="#0C0E17"
                        >
                            {data?.duration_unit}
                        </GlobalSubText>
                    </Space>
                </Space>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <img
                            src={flagImg}
                            alt=""
                            className="gigInfoCard__icon"
                        />
                    </div>
                    <Space direction="vertical" size={1}>
                        <GlobalTextP4 className="margin-b0" color="#909090">
                            {/* Duration */}
                        </GlobalTextP4>
                        <GlobalSubText
                            style={{ fontSize: "0.6rem" }}
                            className="margin-b0"
                            weight="bold"
                            color="#0C0E17"
                        ></GlobalSubText>
                    </Space>
                </Space>
            </Space>
            {(selectedTab === "1" || selectedTab === "2") && (
                <OngoingGigsProgress
                    percent={data?.completed}
                    strokeColor={"#3ACC6C"}
                    format={(percent) => `${percent}% Completed`}
                    className="margin-t1"
                />
            )}
            {selectedTab === "2" && (
                <div className="gigInfocard__draftData">
                    <Space size={"large"}>
                        <Space size={"small"} align="center">
                            <div className="gigInfoCard__iconBox">
                                <DollarCircleOutlined className="gigInfoCard__icon" />
                            </div>
                            <GlobalSubText
                                className="margin-b0"
                                weight="bold"
                                color="#0C0E17"
                            >
                                {data?.bids_received} Bids received
                            </GlobalSubText>
                        </Space>
                        <Space size={"small"} align="center">
                            <div className="gigInfoCard__iconBox">
                                <ProfileOutlined className="gigInfoCard__icon" />
                            </div>
                            <GlobalSubText
                                className="margin-b0"
                                weight="bold"
                                color="#0C0E17"
                            >
                                {data?.offers_sent} Offers sent
                            </GlobalSubText>
                        </Space>
                    </Space>
                </div>
            )}
            {selectedTab === "3" && (
                <Space className="margin-t1">
                    <GlobalButton type="primary">
                        <Link to={`/home/review-gig-details?id=${data?.id}`}>
                            Continue Editing
                        </Link>
                    </GlobalButton>
                </Space>
            )}
        </div>
    );
}
export default GigInfoCard;
