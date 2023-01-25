import { Checkbox, Input, Steps } from "antd";
import styled from "styled-components";
import { GlobalInput, GlobalTitle } from "../../../shared/GlobalComponents";
import { CheckTab } from "../../../shared/Onboarding/OnboardingComponents";

const { Step } = Steps;

export const Container = styled.div`
  .creategig__box {
    display: flex;
    gap: 6rem;
    margin-top: 2rem;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      gap: 3rem;
    }
  }
  .creategig__stepperContainer {
    flex-shrink: 0;
  }
  .creategig__iconContainer {
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.25rem;
    height: 2.25rem;
    color: #fff;
    @media only screen and (max-width: 600px) {
      width: 1.8125rem;
      height: 1.8125rem;
    }
  }
  .creategig__tabs {
    flex-grow: 1;
    & > p:first-child {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0em;
      text-align: left;
      color: #ff511a;
      margin-bottom: 0;
    }
  }
  .creategig__fromTabContainer {
    width: 50%;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .creategig__actionContainer {
    display: flex;
    gap: 1rem;
    width: 20rem;
    margin-top: 4rem;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .creategig__label {
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.125rem;
    letter-spacing: 0px;
    color: #696969;
    margin: 1rem 0;
  }
  .creategig__optionsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 3rem;
  }
  .budget {
    width: 90%;
  }
  .budget__header {
    display: flex;
    justify-content: space-between;
  }
  .total__budget {
    border-radius: 0.375rem;
    background-color: #4668d6;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 1rem;
    & > p:first-child {
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0px;
      margin-bottom: 0;
    }
    & > p:last-child {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0;
      letter-spacing: 0px;
    }
  }
  .gigReviewLink {
    text-decoration: underline;
    font-weight: bold;
    @media only screen and (max-width: 600px) {
      text-align: center;
    }
  }
`;

export const Title = styled(GlobalTitle)`
  font-size: 1.25rem;
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

export const OptionCardStyle = styled.div`
  position: relative;
  cursor: pointer;
  width: 16.3125rem;
  height: 12.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 2rem 1rem;
  border-radius: 0.375rem;
  background: ${(props) => (props.active ? "#ebf0ff" : "#fff")};
  border: ${(props) => (props.active ? "1px solid #4668d6" : "1px solid #fff")};
  &:hover {
    background: #ebf0ff;
    border-color: #4668d6;
  }
  & > p:nth-child(3) {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 0;
  }
  .iconStyle {
    color: #4668d6;
    font-size: 2.5625rem;
  }
  .activeIcon {
    position: absolute;
    display: ${(props) => (props.active ? "block" : "none")};
    color: #4668d6;
    top: 10%;
    left: 7%;
    font-size: 1.125rem;
  }
`;

export const DurationCard = styled.div`
  width: 15.3125rem;
  height: 10.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 0.375rem;
  background: #fff;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const DurationInput = styled(Input)`
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0px;
  text-align: center;
  color: #4668d6;
`;

export const SubText = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0px;
  text-align: ${(props) => (props.align === "left" ? "left" : "center")};
  color: #696969;
  margin-top: -0.5rem;
`;

export const CreategIgChecktab = styled(CheckTab)`
  &.ant-checkbox-wrapper {
    background: #fff;
    color: #0c0e17;
  }

  &.ant-checkbox-wrapper-checked {
    background: #edf1ff;
  }
`;

export const NoteText = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: 0em;
  text-align: left;
  color: #a6a6a6;
  margin-top: 1rem;
`;

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox + span {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0px;
    text-align: left;
    color: #232323;
  }
  .ant-checkbox-inner {
    width: 16px;
    height: 16px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #4ccb86;
    border-color: #4ccb86;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #4ccb86;
  }
`;

export const BudgetContainer = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 0.375rem;
  margin-top: 1rem;
  .freelancerBudget__header {
    display: flex;
    justify-content: space-between;
    & > p {
      font-size: 0.9375rem;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
  .budgetBox__container {
    display: flex;
    gap: 0.5rem;
    & > div {
      flex: 0.5;
    }
  }
  .freelancerBudget__info {
    color: #4668d6;
    width: 0.9375rem;
    height: 0.9375rem;
  }
`;

export const BudgetBox = styled.div`
  border-radius: 0.375rem;
  background: ${(props) => (props.bg ? props.bg : "#e6ecff")};
  border: ${(props) => (props.bordered ? "1px solid #EFEFEF" : "none")};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0 1rem;
  height: 3.9375rem;

  .budget__durationDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p:first-child {
      font-size: 0.625rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #696969;
      margin-bottom: 0;
    }
    & > p:last-child {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0px;
      color: #0c0e17;
      margin-bottom: 0;
    }
  }
  .budget__durationIcon {
    font-size: 1.875rem;
    color: #4668d6;
  }
`;

export const RateInput = styled(GlobalInput)`
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0px;
  color: #0c0e17;
  margin-bottom: 0;
  &.ant-input-affix-wrapper > input.ant-input {
    padding: 0;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0px;
    color: #0c0e17;
    margin-bottom: 0;
    max-width: 4rem;
  }
`;
