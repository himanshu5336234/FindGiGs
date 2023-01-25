import { Grid, Space } from "antd";
import React from "react";
import GradientSVG from "../../../shared/GradientProgress";
import { CustomDivider, GigDetailContainer, GigDetailTab } from "./Stylesheet";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GigDetailIcon from "../../../assets/images/common/GigDetailIcon.svg";
import { useSelector } from "react-redux";
import {
    GlobalSubText,
    GlobalTextP1,
    GlobalTextP2,
    GlobalTextP3,
    GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { FilePdfFilled, DownloadOutlined } from "@ant-design/icons";
import MilestoneData from "./MilestoneData";
import GigOverview from "./GigOverview";

const { useBreakpoint } = Grid;

function GigDetail({ gradientId, profileCompletePercent }) {
    const { activeGig } = useSelector((state) => state.gigs);
    const screens = useBreakpoint();

    console.log("activeGig", activeGig);
    return (
        <GigDetailContainer>
            <div className="gigDetail__left">
                <GradientSVG
                    idCSS={"gradientId56"}
                    startColor={"#13A46C"}
                    endColor={"#3ACC6C"}
                />
                <Space size={"middle"}>
                    <div className="gigDetail__progressContainer">
                        <CircularProgressbarWithChildren
                            value={80}
                            strokeWidth={3}
                            styles={{
                                path: {
                                    // Path color
                                    stroke: `url(#${"gradientId56"})`,
                                    height: "100%",
                                },
                            }}
                        >
                            <img
                                src={GigDetailIcon}
                                alt="company_logo"
                                className="progress__image"
                            />
                        </CircularProgressbarWithChildren>
                    </div>
                    <div className="gigDetail__header">
                        <GlobalSubText className="margin-b0">
                            Gig ID :
                            <span className="gigDetail__gigId">
                                {activeGig?.gigData?.id}
                            </span>
                        </GlobalSubText>
                        <GlobalTextP1 className="margin-b0">
                            {activeGig?.gigData?.title}
                        </GlobalTextP1>
                        <GlobalTextP3 color="#696969" className="margin-b0">
                            {activeGig?.gigData?.company_name}
                        </GlobalTextP3>
                        <GigDetailTab bgColor="#FFEEE8">
                            <GlobalTextP4
                                color="#FF511A"
                                weight="bold"
                                className="margin-b0"
                            >
                                {activeGig.bidsCount} Bids Recieved
                            </GlobalTextP4>
                        </GigDetailTab>
                    </div>
                </Space>
                {screens.xs && (
                    <div className="margin-t2">
                        <GigOverview gigId={activeGig?.gigData?.id} />
                    </div>
                )}
                <div className="gigdetail__scroll">
                    <div className="gigDetail__detailContainer">
                        {/* Skills Data */}

                        <GlobalTextP2 className="margin-b0">
                            Skills
                        </GlobalTextP2>
                        <CustomDivider className="gigDetail__divider" />
                        <Space size={"middle"}>
                            {activeGig?.gigData?.skills?.map((skill, i) => (
                                <GigDetailTab bgColor="#E8EDFF" key={i}>
                                    <GlobalTextP4
                                        color="#4668D6"
                                        weight="600"
                                        className="margin-b0"
                                    >
                                        {skill}
                                    </GlobalTextP4>
                                </GigDetailTab>
                            ))}
                        </Space>

                        {/* Milestones Data */}

                        <GlobalTextP2 className="margin-b0 margin-t2">
                            Milestones
                        </GlobalTextP2>
                        <CustomDivider className="gigDetail__divider" />
                        <MilestoneData data={activeGig?.milestones} />

                        {/* Gig Description Data */}

                        <GlobalTextP2 className="margin-b0 margin-t2">
                            Gig Description
                        </GlobalTextP2>
                        <CustomDivider className="gigDetail__divider" />
                        <GlobalSubText>
                            {activeGig?.gigData?.description ? (
                                activeGig?.gigData?.description
                            ) : (
                                <h2>No Description Available</h2>
                            )}
                        </GlobalSubText>
                        <div className="file-download">
                            <Space size={"middle"}>
                                <Space direction="vertical" size="small">
                                    {activeGig?.gigData?.attachments?.length ===
                                    0 ? (
                                        <h2>No Attachments Available </h2>
                                    ) : (
                                        activeGig?.gigData?.attachments?.map(
                                            (doc) => (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <FilePdfFilled
                                                        style={{
                                                            color: "#FF0000",
                                                            fontSize: "2.2rem",
                                                        }}
                                                    />
                                                    <GlobalSubText
                                                        color="#0C0E17"
                                                        weight="600"
                                                        className="margin-b0"
                                                    >
                                                        {doc.split("/").pop()}
                                                    </GlobalSubText>
                                                    <a
                                                        href="#"
                                                        download
                                                        className="download-button"
                                                        style={{
                                                            marginLeft: "18rem",
                                                        }}
                                                    >
                                                        <DownloadOutlined
                                                            style={{
                                                                fontSize:
                                                                    "2rem",
                                                            }}
                                                        />
                                                    </a>
                                                </div>
                                            )
                                        )
                                    )}
                                </Space>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
            {!screens.xs && (
                <div className="gigDetail__right">
                    <GigOverview gigId={activeGig?.gigData?.id} />
                </div>
            )}
        </GigDetailContainer>
    );
}

export default GigDetail;
