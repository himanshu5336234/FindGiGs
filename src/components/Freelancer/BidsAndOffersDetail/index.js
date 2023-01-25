import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    StatusTab,
    GlobalTextP4,
    Container,
    MileStoneCard,
    Card,
} from "./StyleSheet";
import { useDispatch, useSelector } from "react-redux";
import infoIcon from "../../../assets/images/freelancer/infoIcon.svg";
import {
    GlobalSubText,
    GlobalTextP1,
    GlobalTextP2,
    GlobalTextP3,
    GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { Avatar, Button, Divider, Space } from "antd";
import { Link } from "react-router-dom";
import { getBidDetail } from "../../../api/freelancer/gigsAPIs";
const BidsAndOfferDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getBidDetail({ bid_id: id }));
    }, [dispatch, id]);

    const bidDetail = useSelector((state) => state.gigs.bidDetail);

    const getBgColor = (status) => {
        if (status === "Client's response to your bid is pending") {
            return "#FFF6DE";
        } else if (status === "Bid Accepted") {
            return "#D4FFE8";
        } else if (status === "Bid Rejected") {
            return "#FFE9E3";
        }
    };
    const getTextColor = (status) => {
        if (status === `Client's response to your bid is pending`) {
            return "#FFC727";
        } else if (status === "Bid Accepted") {
            return "#4CCB86";
        } else if (status === "Bid Rejected") {
            return "#FF511A";
        }
    };
    return (
        <div>
            <StatusTab
                bgColor={getBgColor(`Client's response to your bid is pending`)}
            >
                <GlobalTextP4
                    className="margin-b0"
                    color={getTextColor(
                        `Client's response to your bid is pending`
                    )}
                >
                    <div style={{ display: "flex" }}>
                        <img
                            src={infoIcon}
                            alt="info"
                            style={{ marginLeft: "7px", marginRight: "10px" }}
                        />
                        Client's response to your bid is pending
                    </div>
                </GlobalTextP4>
            </StatusTab>

            <Container>
                <div class="profileDetails">
                    <div class="profileDetails__left">
                        <GlobalTextP1 className="margin-b0">
                            Your proposal
                        </GlobalTextP1>
                        <Divider />
                        <Card>
                            <div className="Content">
                                <div>
                                    <GlobalTextP2
                                        weight="700"
                                        className="margin-b0"
                                    >
                                        Create a chatbot for a Saas Platform
                                    </GlobalTextP2>
                                    <GlobalSubText>
                                        In this role, you are required to solve
                                        routine problems, largely through
                                        precedent and referral to general
                                        guidelines. Your expected interactions
                                        are within your team and direct
                                        supervisor. In this role, you are
                                        required to solve routine problems,
                                        largely through precedent.
                                    </GlobalSubText>
                                </div>
                                <div class="more_details">
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Duration
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                3 Months
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Budget
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                Rs 1000
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        {/* ///////// ============================= MileStones Cards Data ========================= /////////// */}
                        <GlobalTextP1 weight="700" className="">
                            Milestones
                        </GlobalTextP1>
                        <Card>
                            <Link to="/home/explore-talent">
                                <img src={""} alt="edit milestone" />
                            </Link>
                            <div className="Content">
                                <div>
                                    <GlobalTextP2
                                        weight="700"
                                        className="margin-b0"
                                    >
                                        Milestone 1
                                    </GlobalTextP2>
                                    <GlobalSubText>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci quo dicta, id
                                        veritatis voluptatibus impedit!
                                    </GlobalSubText>
                                </div>
                                <div class="more_details">
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Duration
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                3 Months
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Budget
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                Rs 1000
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>{" "}
                        <Card>
                            <Link to="/home/explore-talent">
                                <img src={""} alt="edit milestone" />
                            </Link>
                            <div className="Content">
                                <div>
                                    <GlobalTextP2
                                        weight="700"
                                        className="margin-b0"
                                    >
                                        Milestone 1
                                    </GlobalTextP2>
                                    <GlobalSubText>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci quo dicta, id
                                        veritatis voluptatibus impedit!
                                    </GlobalSubText>
                                </div>
                                <div class="more_details">
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Duration
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                3 Months
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Budget
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                Rs 1000
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>{" "}
                        <Card>
                            <Link to="/home/explore-talent">
                                <img src={""} alt="edit milestone" />
                            </Link>
                            <div className="Content">
                                <div>
                                    <GlobalTextP2
                                        weight="700"
                                        className="margin-b0"
                                    >
                                        Milestone 1
                                    </GlobalTextP2>
                                    <GlobalSubText>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci quo dicta, id
                                        veritatis voluptatibus impedit!
                                    </GlobalSubText>
                                </div>
                                <div class="more_details">
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Duration
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                3 Months
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Budget
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                Rs 1000
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>{" "}
                        <Card>
                            <Link to="/home/explore-talent">
                                <img src={""} alt="edit milestone" />
                            </Link>
                            <div className="Content">
                                <div>
                                    <GlobalTextP2
                                        weight="700"
                                        className="margin-b0"
                                    >
                                        Milestone 1
                                    </GlobalTextP2>
                                    <GlobalSubText>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci quo dicta, id
                                        veritatis voluptatibus impedit!
                                    </GlobalSubText>
                                </div>
                                <div class="more_details">
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Duration
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                3 Months
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div className="image_icon">
                                            <img
                                                src={""}
                                                alt=""
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <div className="content">
                                            <GlobalTextP5 className="title">
                                                Budget
                                            </GlobalTextP5>
                                            <GlobalTextP4
                                                weight="700"
                                                className="des"
                                            >
                                                Rs 1000
                                            </GlobalTextP4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div class="profileDetails__right">
                        <div class="profileDetails__card">
                            <Space size={10}>
                                <Avatar size={60} />
                                <div>
                                    <Space size={10}>
                                        <GlobalSubText className="margin-b0">
                                            Gig ID
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                #201523
                                            </span>
                                        </GlobalSubText>
                                        <img src="" alt="more" />
                                    </Space>
                                    <GlobalTextP2 className="margin-b0">
                                        FrontEnd Developer
                                    </GlobalTextP2>
                                    <GlobalSubText className="margin-b0">
                                        Antino Labs PVT.
                                    </GlobalSubText>
                                </div>
                            </Space>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BidsAndOfferDetail;
