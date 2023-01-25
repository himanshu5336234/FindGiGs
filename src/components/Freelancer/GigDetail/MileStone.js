import { Avatar, Button, Progress, Rate, Space } from "antd";
import React, { useEffect, useState } from "react";
import {
    GlobalSubText,
    GlobalTextP3,
    GlobalTextP4,
    GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { TabSwitch, Title } from "../ActiveUser/Stylesheet";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import noReviews from "../../../assets/images/enterprise/noReviewsImage.svg";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";
import { StatusTab } from "../../Enterprise/BidsAndOffers/Stylesheet";
import { Header } from "./Stylesheet";
import moment from "moment";
const reviewsRatedJson = [
    {
        id: 0,
        name: "Divay Raj",
        designation: "Full Stack Developer",
        rate: 5,
    },
    {
        id: 2,
        name: "Ravi Sharma",
        designation: "Data Analyst",
        rate: 4,
    },
    {
        id: 3,
        name: "Divay Raj",
        designation: "Full Stack Developer",
        rate: 5,
    },
];
const reviewsUnratedJson = [
    {
        id: 0,
        name: "Non Divay Raj",
        designation: "Full Stack Developer",
        rate: 0,
    },
    {
        id: 2,
        name: "Non Ravi Sharma",
        designation: "Data Analyst",
        rate: 0,
    },
    {
        id: 3,
        name: "Non Divay Raj",
        designation: "Full Stack Developer",
        rate: 0,
    },
];
function Milestone() {
    const [selectedTab, setSelectedTab] = useState("rated");
    const [reviewsData, setReviewsData] = useState(reviewsRatedJson);
    const navigate = useNavigate();
    const ratingList = useSelector((state) => state.gigsEnterprise.ratingList);
    const { activeGig } = useSelector((state) => state.gigs);
    console.log("Aamir activeGig", activeGig);
    useEffect(() => {
        if (selectedTab === "rated") {
            setReviewsData(reviewsRatedJson);
        } else {
            setReviewsData(reviewsUnratedJson);
        }
    }, [selectedTab]);
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
        <div className="ratingAndReviews">
            <div className="reviewAndRatings__card">
                <Header>
                    <div className="reviewAndRatings__tabHead">
                        <p>
                            <StatusTab bgColor={getBgColor("In Progress")}>
                                <GlobalTextP4
                                    className="margin-b0"
                                    color={getTextColor("completed")}
                                >
                                    {"Completed"}
                                </GlobalTextP4>
                            </StatusTab>
                        </p>
                        <GlobalTextP4>
                            {activeGig?.gigData?.status} Milestones
                        </GlobalTextP4>
                        <GlobalSubText className="margin-b0">
                            Closed on
                        </GlobalSubText>
                        <GlobalTextP4>
                            {moment
                                .unix(activeGig?.gigData?.created_at)
                                .format("MM/DD/YYYY")}
                        </GlobalTextP4>
                    </div>
                    <Progress width={60} type="circle" percent={100} />
                </Header>
            </div>
        </div>
    );
}
export default Milestone;
