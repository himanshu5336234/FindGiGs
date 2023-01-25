import { Button, Steps } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GlobalSubText, GlobalTextP2 } from "../../../shared/GlobalComponents";

const { Step } = Steps;

const GlobalButton = styled(Button)`
  border-radius: 0.375rem;
  border-style: ${(props) => props.borderStyle && "dashed"};
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0px;
  margin-top: 1rem;

  &.ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    background: ${(props) => (props.background ? "#dbe2fc" : "#4668D6")};

    border: 1px solid #dbe2fc;
    color: white;
  }

  &.ant-btn {
    border-color: #4668d6;
    color: #4668d6;
  }

  &.ant-btn-primary {
    border-color: #4668d6;
    color: #fff;
  }

  & > img {
    margin-right: 10px;
    object-fit: contain;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    line-height: 0.9375rem;
  }
`;

const YourMilestoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  > .milestone_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const CustomSteps = styled(Steps)`
  height: 30rem;
  @media only screen and (max-width: 600px) {
    height: auto;
  }

  &.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail {
    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }
`;

export const CustomStep = styled(Step)`
  &.ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    border-top: 2px dashed #3acc6c;
  }
  &.ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-icon
    > .ant-steps-icon
    > .creategig__iconContainer {
    background-color: #3acc6c;
  }

  &.ant-steps-item-process
    > .ant-steps-item-container
    > .ant-steps-item-icon
    > .ant-steps-icon
    > .creategig__iconContainer {
    background-color: #4668d6;
  }
  &.ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-icon
    > .ant-steps-icon
    > .creategig__iconContainer {
    background-color: #dbe3fc;
  }
  .ant-steps-item-title {
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 2.1875rem;
    letter-spacing: 0px;
    color: #4b4b4b;
    margin-left: 0.7rem;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const items = [1, 2, 3, 4, 5];

const YourMilestone = () => {
  return (
    <YourMilestoneContainer>
      <div className="milestone_header">
        <div>
          <GlobalTextP2 weight="600" className="margin-b0">
            You have 2 milestones for you gig.
          </GlobalTextP2>
          <GlobalSubText className="margin-b0" margin="margin">
            What are milestones and how do they work?
            <NavLink to="/home/milestone-details"> Learn More</NavLink>
          </GlobalSubText>
        </div>
        <GlobalButton borderStyle="dashed" background>
          + Add Milestone
        </GlobalButton>
      </div>
      <div>
        <CustomSteps direction={"horizontal"} responsive={false}>
          {items?.map((item) => (
            <CustomStep title={item?.title} />
          ))}
        </CustomSteps>
      </div>
    </YourMilestoneContainer>
  );
};

export default YourMilestone;
