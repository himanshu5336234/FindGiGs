import { Space } from "antd";
import React from "react";
import {
    GlobalSubText,
    GlobalTextP2,
    GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { StatusTab } from "../../Enterprise/BidsAndOffers/Stylesheet";
import { Link, useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";
import clockImage from "../../../assets/images/freelancer/clock.svg";
import rupeeImg from "../../../assets/images/freelancer/rupee.svg";
import arrowImg from "../../../assets/images/freelancer/arrow.svg";
function GigInfoCard({ bidsData, selectedTab, handleNavigate }) {

    const navigate = useNavigate();

    const getBgColor = (status) => {
        if (status === "Response Awaited") {
            return "#FFFAEB";
        } else if (status === "Bid Accepted") {
            return "#D4FFE8";
        }
        else if (status === "Bid Rejected") {
            return "#FFE9E3";
        }
    };
    const getTextColor = (status) => {
        if (status === "Response Awaited") {
            return "#FFC727";
        } else if (status === "Bid Accepted") {
            return "#4CCB86";
        } else if (status === "Bid Rejected") {
            return "#FF511A";
        }
    };
    return (
        <div className="gigInfoCard" onClick={() => handleNavigate(bidsData?.id)}>
            {selectedTab === "1" && (
                <StatusTab bgColor={getBgColor(bidsData?.gigs?.status)}>

                    <GlobalTextP4
                        className="margin-b0"
                        color={getTextColor(bidsData?.gigs?.status)}
                    >
                        {bidsData?.gigs?.status}
                    </GlobalTextP4>
                </StatusTab>
            )}
            {selectedTab === "2" && (
                <StatusTab bgColor={getBgColor(bidsData?.gigs?.status)}>
                    <GlobalTextP4 className="margin-b0" color={getTextColor(bidsData?.gigs?.status)}>
                        {bidsData?.gigs?.status}
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
                        {bidsData?.gigs?.title || "Front End Developer"}{" "}
                    </GlobalTextP2>
                    <GlobalTextP4 className="margin-b0" color="#696969">
                        {bidsData?.gigs?.company_name || "Tech Mahindra"}
                    </GlobalTextP4>
                </div>
            </div>
            <GlobalTextP4 className="margin-b0" color="#696969">
                {bidsData?.gigs?.description}
            </GlobalTextP4>
            <Space size={"large"}>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <img src={clockImage} alt="icon" className="gigInfoCard__icon" />
                    </div>
                    <Space direction="vertical" size={1}>
                        <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17" style={{ frontSize: "0.5rem" }}>
                            {bidsData?.estimated_duration}
                        </GlobalSubText>
                    </Space>
                </Space>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <img src={rupeeImg} alt="icon" className="gigInfoCard__icon" />

                    </div>

                    <Space direction="vertical" size={1}>

                        <GlobalSubText style={{ fontSize: "0.6rem" }} className="margin-b0" weight="bold" color="#0C0E17">
                            {bidsData?.gigs?.total_budget}
                        </GlobalSubText>
                    </Space>
                </Space>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <img src={arrowImg} alt="icon" className="gigInfoCard__icon" />
                    </div>

                    <Space direction="vertical" size={1}>

                        <GlobalSubText style={{ fontSize: "0.6rem" }} className="margin-b0" weight="bold" color="#0C0E17">

                        </GlobalSubText>
                    </Space>
                </Space>
            </Space>


        </div>
    );
}

export default GigInfoCard;
