import { Col, Row, Switch } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalButton,
  GlobalContainer,
  GlobalTitle,
} from "../../shared/GlobalComponents";
import {
  ChatIcon,
  FavouriteIcon,
  TimerIcon,
  UserIcon,
  WithdrawalIcon,
} from "../../shared/icons";
import {
  ContentBox,
  IconButton,
  SuccessAction,
  SwitchContainer,
} from "../../shared/Onboarding/OnboardingComponents";

const Content = ({ title, children, Icon, bgColor, shadow }) => {
  return (
    <ContentBox>
      <IconButton bgColor={bgColor} shadow={shadow}>
        <Icon />
      </IconButton>
      <div className="content-textContainer">
        <p>{title}</p>
        <p>{children}</p>
      </div>
    </ContentBox>
  );
};

function OnboardingSuccess() {
  const userType = localStorage.getItem("type");
  const navigate = useNavigate();
  const [tnCChecked, setTnCChecked] = useState(false);
  const onChange = () => {
    setTnCChecked(!tnCChecked);
  };
  const getStarted = () => {
    navigate("/home");
  };
  return (
    <GlobalContainer>
      <GlobalTitle align="center" className="margin-b4">
        What you can expect from us?
      </GlobalTitle>
      <Row gutter={[16, 32]}>
        <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
          <Content
            title={"We’ll connect you with the right freelancers"}
            Icon={UserIcon}
            bgColor="#FFC727"
            shadow="#FFC7274D"
          >
            We will match you to the right gigs based on your skills and goals.
          </Content>
        </Col>
        <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
          {userType === "enterprise" && (
            <Content
              title={"We’ll help you hire in 48 hours"}
              Icon={TimerIcon}
              bgColor="#3ACC6C"
              shadow="#3ACC6C4D"
            ></Content>
          )}
          {userType === "freelancer" && (
            <Content
              title={"We’ll reward you for your efforts"}
              Icon={FavouriteIcon}
              bgColor="#3ACC6C"
              shadow="#3ACC6C4D"
            >
              Never stop learning with Gigverse rewards and cash prizes.
            </Content>
          )}
        </Col>
        <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
          <Content
            title={"We provide payment security"}
            Icon={WithdrawalIcon}
            bgColor="#974BAD"
            shadow="#974BAD4D"
          >
            Get timely and encrypted payments throughout the project life cycle.
          </Content>
        </Col>
        <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
          <Content
            title={"We are here for you"}
            Icon={ChatIcon}
            bgColor="#DF7615"
            shadow="#DF76154D"
          >
            We got your back with end-to-end support with every gig.
          </Content>
        </Col>
      </Row>
      {/* <SwitchContainer>
        <Switch onChange={onChange} />
        <span>
          I understand all the terms, conditions & i wish to continue doing with
          business.
        </span>
      </SwitchContainer> */}
      <SuccessAction>
        <GlobalButton block onClick={() => navigate(-1)}>
          Back
        </GlobalButton>
        <GlobalButton
          type="primary"
          block
          // disabled={!tnCChecked}
          onClick={getStarted}
        >
          Get Started
        </GlobalButton>
      </SuccessAction>
    </GlobalContainer>
  );
}

export default OnboardingSuccess;
