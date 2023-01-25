import { Col, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBidGraphData,
  getInprogressGigs,
  getMilestoneData,
  getPostedGigs,
  getRatingList,
} from "../../../api/enterprise/gigsApis";
import BidActivities from "./BidActivities";
import GigStatus from "./GigStatus";
import Invoicing from "./Invoicing";
import MilestoneTracker from "./MilestoneTracker";
import OngoingGigs from "./OngoingGigs";
import RatingsAndReviews from "./RatingsAndReviews";
import { Container, Title } from "./StyleSheet";

function ActiveUser() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.gigsEnterprise.isLoading);

  useEffect(() => {
    dispatch(getBidGraphData());
    dispatch(getMilestoneData());
    dispatch(getRatingList());
    dispatch(getPostedGigs());
    dispatch(getInprogressGigs());
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row gutter={[22, 32]}>
        <Col md={24} lg={17}>
          <GigStatus />
          <Row gutter={[16, 22]} align="middle">
            <Col md={24} lg={12}>
              <OngoingGigs status="Not Started" />
            </Col>
            <Col md={24} lg={12}>
              <BidActivities />
            </Col>
            <Col md={24}>
              <MilestoneTracker />
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={7}>
          <Row gutter={[16, 22]}>
            <Col md={24}>
              <Invoicing />
            </Col>
            <Col md={24}>
              <RatingsAndReviews />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ActiveUser;
