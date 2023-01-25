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

function GigInfoCard({ data, selectedTab, handleNavigate }) {
    const navigate = useNavigate();

    const getBgColor = (status) => {
        if (status === "Due") {
            return "#FFFAEB";
        } else if (status === "Paid") {
            return "#D4FFE8";
        }
        else if (status === "Bid Rejected") {
            return "#FFE9E3";
        }
    };
    const getTextColor = (status) => {
        if (status === "Due") {
            return "#FFC727";
        } else if (status === "Paid") {
            return "#4CCB86";
        } else if (status === "Bid Rejected") {
            return "#FF511A";
        }
    };
    return (
        <div className="gigInfoCard" onClick={() => handleNavigate(data?.id)}>
            {selectedTab === "1" && (
                <StatusTab bgColor={getBgColor(data.status)}>

                    <GlobalTextP4
                        className="margin-b0"
                        color={getTextColor(data.status)}
                    >
                        {data.status}
                    </GlobalTextP4>
                </StatusTab>
            )}
            {selectedTab === "2" && (
                <StatusTab bgColor={getBgColor(data.status)}>
                    <GlobalTextP4 className="margin-b0" color={getTextColor(data.status)}>
                        {data.status}
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
                        {data?.company || "Tech Mahindra"}
                    </GlobalTextP4>
                </div>
            </div>
            <GlobalTextP4 className="margin-b0" color="#696969">
                {data?.description}
            </GlobalTextP4>
            <Space size={"large"}>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <img src={clockImage} alt="icon" className="gigInfoCard__icon" />
                    </div>
                    <Space direction="vertical" size={1}>
                        <GlobalSubText className="margin-b0" weight="bold" color="#0C0E17" style={{ frontSize: "0.5rem" }}>
                            {data?.duration}
                        </GlobalSubText>
                    </Space>
                </Space>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <img src={rupeeImg} alt="icon" className="gigInfoCard__icon" />

                    </div>

                    <Space direction="vertical" size={1}>

                        <GlobalSubText style={{ fontSize: "0.6rem" }} className="margin-b0" weight="bold" color="#0C0E17">
                            {data?.budget}
                        </GlobalSubText>
                    </Space>
                </Space>
                <Space size={"small"} align="center">
                    <div className="gigInfoCard__iconBox">
                        <img src={arrowImg} alt="icon" className="gigInfoCard__icon" />
                    </div>

                    <Space direction="vertical" size={1}>

                        <GlobalSubText style={{ fontSize: "0.6rem" }} className="margin-b0" weight="bold" color="#0C0E17">
                            {data?.bids_received}
                        </GlobalSubText>
                    </Space>
                </Space>
            </Space>


        </div>
    );
}

export default GigInfoCard;
