import { Checkbox, Drawer, Slider } from "antd";
import styled from "styled-components";
import { GlobalSubText } from "../GlobalComponents";

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-title {
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
  }
  .ant-drawer-header {
    border-bottom: none;
    margin-top: 1rem;
  }
  .ant-drawer-close {
    color: #0c0e17;
    padding: 0;
    margin-right: 2rem;
    margin-left: -2px;
  }
  .ant-drawer-body {
    padding-bottom: 0;
  }
  .filter__actions {
    background: white;
    width: 100%;
    display: flex;
    padding: 1rem;
    gap: 1rem;
    position: sticky;
    bottom: 0;
  }
  .filter__range {
    display: flex;
    justify-content: space-between;
  }
`;

export const FilterTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.375rem;
  letter-spacing: 0px;
  color: #0c0e17;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const FilterCheckBox = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    color: #0c0e17;
  }
`;

export const AddExtraAction = styled(GlobalSubText)`
  cursor: pointer;
  color: #4768d6;
  font-weight: 600;
  margin-top: 1rem;
`;

export const CustomRange = styled(Slider)`
  margin-top: 1rem;

  &.ant-slider {
    margin-left: 0;
    margin-right: 0;
  }
  .ant-slider-rail {
    background-color: #dadada;
  }
  .ant-slider-track {
    background-color: #4768d6;
  }
  .ant-slider-handle {
    background-color: #4768d6;
    border-color: #4768d6;
  }
`;
