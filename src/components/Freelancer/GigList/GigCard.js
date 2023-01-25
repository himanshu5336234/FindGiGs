import React from "react";
import { GigCardContainer } from "./Stylesheet";
import TechMLogo from "../../../assets/images/common/TechMLogo.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "../../../shared/GradientProgress";
import { Button, Col, Row, Space } from "antd";
import { ClockCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { GlobalButton, GlobalSubText } from "../../../shared/GlobalComponents";
import { useSelector } from "react-redux";
function GigCard({
    id,
    gradientId,
    date,
    title,
    companyName,
    timeline,
    gigAmount,
    profileCompletePercent,
    onClick,
    bg,
    isBtn,
}) {
    const { activeGig } = useSelector((state) => state.gigs);

    return (
        <GigCardContainer
            onClick={onClick}
            active={activeGig?.gigData?.id === id}
            style={{ backgroundColor: bg }}
        >
            <GradientSVG
                idCSS={gradientId}
                startColor={"#13A46C"}
                endColor={"#3ACC6C"}
            />
            <Row>
                <Col sm={5}>
                    <div className="progress__container">
                        <CircularProgressbarWithChildren
                            value={profileCompletePercent}
                            strokeWidth={4}
                            styles={{
                                path: {
                                    // Path color
                                    stroke: `url(#${gradientId})`,
                                    height: "100%",
                                },
                            }}
                        >
                            <img
                                src={TechMLogo}
                                alt="company_logo"
                                className="progress__image"
                            />
                        </CircularProgressbarWithChildren>
                    </div>
                </Col>
                <Col sm={19}>
                    <div className="gigCard__content">
                        <div className="gigCard__contentHead">
                            <div className="gigCard__contentTitle">
                                <p>{title}</p>
                                <p style={{ wordWrap: "break-word" }}>
                                    {companyName}
                                </p>
                            </div>
                            <p>{date}</p>
                        </div>
                        <Space size={"middle"} className="margin-t1">
                            <Space size={"small"}>
                                <Button
                                    shape="circle"
                                    icon={
                                        <ClockCircleOutlined
                                            style={{ color: "#4668D6" }}
                                        />
                                    }
                                    className="gigCard__icon"
                                ></Button>
                                <Space direction="vertical" size={0}>
                                    <p className="gigcard__contentDetailHead">
                                        Timeline
                                    </p>
                                    <GlobalSubText
                                        className="margin-b0"
                                        color="#000000"
                                        weight="bold"
                                    >
                                        {timeline}
                                    </GlobalSubText>
                                </Space>
                            </Space>
                            <Space size={"small"}>
                                <Button
                                    shape="circle"
                                    icon={
                                        <DollarCircleOutlined
                                            style={{ color: "#4668D6" }}
                                        />
                                    }
                                    className="gigCard__icon"
                                ></Button>
                                <Space direction="vertical" size={0}>
                                    <p className="gigcard__contentDetailHead">
                                        Gig Amount
                                    </p>
                                    <GlobalSubText
                                        className="margin-b0"
                                        color="#000000"
                                        weight="bold"
                                    >
                                        {gigAmount}
                                    </GlobalSubText>
                                </Space>
                            </Space>
                        </Space>
                        {isBtn && (
                            <div
                                style={{
                                    marginTop: "1rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <GlobalButton>View Gig</GlobalButton>{" "}
                                <GlobalButton type="primary">
                                    Send Bid
                                </GlobalButton>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </GigCardContainer>
    );
}
export default GigCard;
