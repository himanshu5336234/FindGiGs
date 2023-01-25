import { Col, Row, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import {
  GlobalButton,
  GlobalSubText,
  GlobalTextP2,
  GlobalTitle,
} from "../../../shared/GlobalComponents";
import { Container } from "./Stylesheet";
import createFirstGig from "../../../assets/images/enterprise/createFirstGig.svg";
import bookLiveDemo from "../../../assets/images/enterprise/bookLiveDemo.svg";
import { useNavigate } from "react-router-dom";

function IntitialUser() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  console.log(userData);

  return (
    <Container>
      <GlobalTitle>Hello, {userData?.first_name}!</GlobalTitle>
      <GlobalSubText weight="bold" color="#696969">
        Let us help you get started with the Gig posting process.
        <br />
        Choose any of the options given on the dashboard to proceed.
      </GlobalSubText>
      <Row gutter={[16, 16]} className="margin-t3">
        <Col sm={24} md={12}>
          <div className="initialUser__card">
            <img src={createFirstGig} alt="begig_createFirstGig" />
            <div className="initiaUser__content">
              <GlobalTextP2>Create your first Gig</GlobalTextP2>
              <GlobalSubText>
                You may start by watching a video guide that explains you the
                process step by step.
              </GlobalSubText>
              <Space size={"middle"} className="margin-t1">
                <GlobalButton block>Watch Video</GlobalButton>
                <GlobalButton
                  type="primary"
                  block
                  onClick={() => navigate("/home/gig-template")}
                >
                  Create a Gig
                </GlobalButton>
              </Space>
            </div>
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="initialUser__card">
            <img src={bookLiveDemo} alt="begig_bookLiveDemo" />
            <div className="initiaUser__content">
              <GlobalTextP2>Book a live demo session</GlobalTextP2>
              <GlobalSubText>
                Schedule a call with one of our employees to assist you with the
                gig posting process.
              </GlobalSubText>
              <Space size={"middle"} className="margin-t1">
                <GlobalButton type="primary" block>
                  Request Demo
                </GlobalButton>
              </Space>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default IntitialUser;
