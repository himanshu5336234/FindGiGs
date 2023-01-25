import { Collapse } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.375rem;
  padding: 3rem;
  background: #fff;
  .milestoneDetails__backAction {
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  .milestoneDetails__head {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  .milestoneDetails__headContent {
    flex: 0.5;
  }
  .milestoneDetails__headImg {
    flex: 0.5;
  }
`;

export const Title = styled.p`
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.6875rem;
  letter-spacing: 0px;
  text-align: left;
`;

export const MilestoneBenefitsContainer = styled.div`
  padding: 1rem;
  background: ${(props) => props.bgColor && props.bgColor};
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  height: 100%;

  .milestoneBenefits__icon {
    width: 3.3125rem;
    height: 3.3125rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.iconColor && props.iconColor};
  }
  .milestoneDetails__benefits {
    display: flex;
    gap: 1rem;
  }
`;

export const UsingMilestoneContainer = styled.div`
  display: flex;
  gap: 1rem;
  .usingMilestone__indexBox {
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
    border: 1px dashed #4668d6;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .usingMilestone_content {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`;

export const CustomCollapse = styled(Collapse)`
  position: relative;
  border-radius: 0.625rem;
  padding: 0.7rem;
  background-color: #f6f6f6;
  color: black;
  border: none;
  width: 100%;

  &.ant-collapse > .ant-collapse-item {
    border: 1px solid #f6f6f6;
    border-radius: 10px;
  }

  &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    font-size: ${(props) => (props.isMobile ? "0.75rem" : "0.8125rem")};
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0.02em;
    text-align: left;
    color: #0c0e17;
  }
  &.ant-collapse > .ant-collapse-item > .ant-collapse-content {
    border: none;
    background: #f6f6f6;
    font-size: ${(props) => (props.isMobile ? "0.75rem" : "0.8125rem")};
    color: #696969;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
