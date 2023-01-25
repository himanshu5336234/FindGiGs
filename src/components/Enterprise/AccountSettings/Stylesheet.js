import { Select, Tabs } from "antd";
import styled from "styled-components";
import {
  GlobalInput,
  GlobalPasswordInput,
  GlobalTextArea,
} from "../../../shared/GlobalComponents";
import { CustomCollapse } from "../../Freelancer/MilestoneDetails/Stylesheet";

export const Container = styled.div`
  .accountSettings__suggestbox {
    padding: 0.4rem 1rem;
    border-radius: 0.375rem;
    background: #ffeae4;
    width: max-content;
  }
  .supportMail {
    color: #ff511a;
    font-weight: 600;
  }
  .accountSettings__detailBox {
    width: 80%;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .securityActions {
    display: flex;
    gap: 3rem;
  }
  .securityActions__left {
    flex: 0.6;
    flex-shrink: 0;
  }
  .securityActions__right {
    flex: 0.4;
    flex-shrink: 0;
  }
  .securtiyActions__list {
    & > li {
      font-size: 0.8125rem;
      font-weight: 500;
      line-height: 1.25rem;
      letter-spacing: 0em;
      text-align: left;
      color: #696969;
      padding-left: 17px;
      margin-top: 8px;
    }
  }
  .contactUs__container {
    display: flex;
    gap: 8rem;
  }
  .contactUs__IconBox {
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #4668d6;
  }
  .contactUs__icon {
    color: #fff;
    font-size: 1.3rem;
  }
  .faq__tabContainer {
    display: flex;
    gap: 1rem;
    padding-left: 0;
    list-style-type: none;
    margin-top: 1rem;
  }
  .privacyPolicy__container {
    overflow-y: auto;
    padding: 0 1rem;
    height: 80vh;
  }
  .privacyPolicy__subHead {
    font-weight: bold;
    color: #0c0e17;
  }
`;

export const SelectBox = styled.div`
  padding: 1.3rem 1rem;
  width: 30rem;
  background: ${(props) => props.selected && "#EBEBFF"};
  position: relative;
  border-radius: 0.375rem;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? "1.5px solid #4668D6" : "1px solid #DADADA"};

  .selectBox__checkIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #4668d6;
    font-size: 1.125rem;
  }
`;

export const CustomTabs = styled(Tabs)`
  .ant-tabs-nav-list {
    padding: 0 2rem 0 0;
  }
  .ant-tabs-tab {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #6d6d6d;
    border-radius: 0.25rem;
  }
  .ant-tabs-tab:hover {
    color: #4668d6;
  }
  .ant-tabs-tab-active {
    background: #e9eeff;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #4668d6;
  }
  &.ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: none;
  }

  .ant-tabs-nav::before {
    border-bottom: 1px solid #dbe3ff !important;
  }
`;

export const AccountInput = styled(GlobalInput)`
  &.ant-input[disabled] {
    color: black;
  }
`;

export const AccountTextArea = styled(GlobalTextArea)`
  &.ant-input[disabled] {
    color: black;
  }
`;

export const CustomSelect = styled(Select)`
  .ant-select-selector {
    background: #fff !important;
    border-radius: 0.375rem !important;
    height: 2.7rem !important;
    display: flex;
    align-items: center;
  }
`;

export const PassInput = styled(GlobalPasswordInput)`
  border: none;
  padding: 0.7rem 1rem;
`;

export const FAQTab = styled.li`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0em;
  color: ${(props) => (props.selected ? "#fff" : "#909090")};
  padding: 0.5rem 1rem;
  background: ${(props) => props.selected && "#4668D6"};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const FAQCollapse = styled(CustomCollapse)`
  background-color: #fff;
  &.ant-collapse > .ant-collapse-item {
    border: none;
  }
  &.ant-collapse > .ant-collapse-item > .ant-collapse-content {
    background: #fff;
  }
`;
