import { Avatar, Grid, Space } from "antd";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
    GlobalButton,
    GlobalSubText,
    GlobalTextP2,
    GlobalTextP3,
    GlobalTextP4,
    GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { CustomDivider } from "../../Freelancer/GigList/Stylesheet";
import { Container, GigDetailButton } from "./Stylesheet";
import { StarFilled, FilePdfFilled, FileFilled } from "@ant-design/icons";
import { SkillTab } from "../../Enterprise/ExploreTalent/Stylesheet";
import GigOverview from "./GigOverview";
import { useDispatch, useSelector } from "react-redux";
import { closeGig, getGigDetail } from "../../../api/freelancer/gigsAPIs";
import MilestoneTracker from "../ActiveUser/MilestoneTracker";
import Milestone from "./MileStone";
import styled from "styled-components";
import RouteConstant from "../../../router/constants";
import { Title } from "../ActiveUser/Stylesheet";
import MilestoneData from "./MilestoneData";
const { useBreakpoint } = Grid;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
`;

function GigDetail() {
    const screens = useBreakpoint();
    const { id } = useParams();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const { activeGig } = useSelector((state) => state.gigs);
    const navigate = useNavigate();
    console.log("gigDetails", activeGig);
    console.log(state, "state");
    useEffect(() => {
        dispatch(getGigDetail({ gigId: id }));
    }, [id, dispatch]);
    const handleCloseGig = () => {
        dispatch(closeGig({ gigId: id, navigate }));
    };
    return (
        <Container>
            <div className="gigDetail__left gigDetail__card">
                {!screens?.md && (
                    <div className="gigDetail__showActionsMobile">
                        {state?.gigStatus === 1 && (
                            <GlobalButton
                                type="primary"
                                block
                                className="margin-t1"
                                onClick={handleCloseGig}
                            >
                                Close Gig
                            </GlobalButton>
                        )}
                        {state?.gigStatus === 2 && (
                            <div className="gigDetail__actions">
                                <GlobalButton block>Edit Gig</GlobalButton>
                                <GlobalButton
                                    type="primary"
                                    block
                                    onClick={handleCloseGig}
                                >
                                    Close Gig
                                </GlobalButton>
                            </div>
                        )}
                    </div>
                )}
                {/* Freelancers section */}
                {/* Show freelancer info only if gig status is In Progress or Closed */}
                <GigOverview data={activeGig?.gigData} />
                {/* Skills Section */}
                <GlobalTextP2 className="margin-b0">Skills</GlobalTextP2>
                <CustomDivider />
                <Space
                    size="middle"
                    style={{ display: "flex", flexWrap: "wrap" }}
                >
                    {activeGig?.gigData?.skills?.map((skill, idx) => (
                        <SkillTab key={idx}>
                            <GlobalSubText
                                className="margin-b0"
                                color="#4668D6"
                            >
                                {skill}
                            </GlobalSubText>
                        </SkillTab>
                    ))}
                </Space>
                {/* Gig Description Section */}
                <GlobalTextP2 className="margin-b0 margin-t2">
                    Gig Description
                </GlobalTextP2>
                <CustomDivider />
                <GlobalTextP4 className="margin-b0" color="#696969">
                    {activeGig?.gigData?.description}
                </GlobalTextP4>
                {activeGig?.gigData?.attachments.length > 0 &&
                    activeGig?.gigData?.attachments?.map((item) => (
                        <div className="gigDetail__freelancerBox margin-t1">
                            <Space size={"small"} align="center">
                                <FilePdfFilled
                                    style={{
                                        color: "#FF0000",
                                        fontSize: "1.6rem",
                                        marginTop: "5px",
                                    }}
                                />
                                <Space direction="vertical" size={0}>
                                    <GlobalSubText
                                        className="margin-b0"
                                        weight="bold"
                                    >
                                        {item.split("/").pop()}
                                        <br />
                                    </GlobalSubText>
                                </Space>
                            </Space>
                            {/* <GigDetailButton>View File</GigDetailButton> */}
                        </div>
                    ))}
                {/* Milestones Section */}
                <div className="gigDetail__freelancerBox margin-t2">
                    <div>
                        <GlobalTextP2 className="margin-b0">
                            Milestones
                        </GlobalTextP2>
                        <MilestoneData data={activeGig?.milestones} />
                        {/* <CustomDivider style={{ marginBottom: 0 }} /> */}
                    </div>
                    {/* <GigDetailButton>View Timeline</GigDetailButton> */}
                </div>
            </div>
            {/* gig Overview section */}
            <div className="gigDetail__right ">
                <Header>
                    <Title className="margin-b0">MileStone</Title>
                    <GlobalTextP4
                        color="#4668D6"
                        className="margin-b0 cursor-pointer"
                        onClick={() =>
                            navigate(
                                RouteConstant.HOME +
                                    "/" +
                                    RouteConstant.MILESTONE_TIMELINE,
                                { state: activeGig?.milestones }
                            )
                        }
                    >
                        View Timeline
                    </GlobalTextP4>
                </Header>
                <div className="gigDetail__card">
                    <Milestone />
                </div>
                <Header>
                    <Title className="margin-b0">Files Archive</Title>
                    <GlobalTextP4
                        color="#4668D6"
                        className="margin-b0 cursor-pointer"
                        onClick={() =>
                            navigate(
                                RouteConstant.HOME +
                                    "/" +
                                    RouteConstant.MILESTONE_TIMELINE,
                                { state: activeGig?.milestones }
                            )
                        }
                    >
                        View Files
                    </GlobalTextP4>
                </Header>
                <div className="gigDetail__card">
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <div>
                            <img
                                src=""
                                alt="dp"
                                width={50}
                                height={50}
                                style={{
                                    background: "gray",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                        <div>
                            <GlobalSubText className="margin-b0">
                                {activeGig?.gigData?.status}
                            </GlobalSubText>
                            <GlobalTextP3 className="margin-b0">
                                {activeGig?.gigData?.attachments?.length} files
                                uploaded
                            </GlobalTextP3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default GigDetail;
