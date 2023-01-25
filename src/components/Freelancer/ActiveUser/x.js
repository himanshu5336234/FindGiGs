import { Col, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import BidActivities from "./BidActivities";
import FreelancerProfile from "./FreelancerProfile";
import GigStatus from "./GigStatus";
import Invoicing from "./Invoicing";
import MilestoneTracker from "./MilestoneTracker";
import OngoingGigs from "./OngoingGigs";
import RatingsAndReviews from "./RatingsAndReviews";
import SkillAssessment from "./SkillAssessment";
import { Container, Title } from "./Stylesheet";
const Grid = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1.3fr 1fr;
    gap: 1rem;
`;
const Status = styled.div`
    @media only screen and (max-width: 520px) {
        grid-column: 1 / span 3;
        grid-row: 2 / span 1;
    }
`;
const Profile = styled.div`
    @media only screen and (max-width: 520px) {
        grid-column: 1 / span 3;
        grid-row: 1 / span 1;
    }
`;
const Ongoing = styled.div`
    @media only screen and (max-width: 520px) {
        grid-column: 1 / span 3;
        grid-row: 3 / span 1;
    }
`;
const Active = styled.div`
    @media only screen and (max-width: 520px) {
        grid-column: 1 / span 3;
        grid-row: 5 / span 1;
    }
`;
const Rating = styled.div`
    display: flex;
    @media only screen and (max-width: 520px) {
        grid-column: 1 / span 3;
        grid-row: 6 / span 1;
    }
`;
const TrackMilestone = styled.div`
    grid-column: 1 / span 2;
    @media only screen and (max-width: 520px) {
        grid-column: 1 / span 3;
        grid-row: 4 / span 1;
    }
`;
const Invoice = styled.div`
    grid-row: 2 / span 2;
    grid-column: 3 / span 1;
    @media only screen and (max-width: 520px) {
        grid-column: 1 / span 3;
        grid-row: 7 / span 1;
    }
`;
// const Grid=styled.div``
function ActiveUser() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.gigsEnterprise.isLoading);

    if (isLoading) {
        return <p>Loading</p>;
    }
    return (
        <Container>
            <Grid>
                <Status>
                    <GigStatus />
                </Status>
                <Ongoing>
                    <OngoingGigs status="Not Started" />
                </Ongoing>
                <Profile>
                    <FreelancerProfile />
                </Profile>
                <TrackMilestone>
                    <MilestoneTracker />
                </TrackMilestone>
                <Invoice>
                    <Invoicing />
                </Invoice>
                <Active>
                    <BidActivities />
                </Active>
                <Rating>
                    <RatingsAndReviews />
                    <SkillAssessment />
                </Rating>
            </Grid>
        </Container>
    );
}
export default ActiveUser;
