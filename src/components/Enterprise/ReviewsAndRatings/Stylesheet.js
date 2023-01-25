import { Rate, Table } from "antd";
import styled from "styled-components";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { CustomSelect } from "../AccountSettings/Stylesheet";

export const Container = styled.div``;

export const CustomTable = styled(Table)`
  .ant-table-thead > tr > th {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0px;
    color: #696969;
    background: #f3f2f7;
  }
  .ant-table-tbody > tr > td {
    font-size: 0.875rem;
    font-weight: 500;
    color: #696969;
  }
  .ant-table-row {
    margin-top: 10px;
  }
  .ant-pagination-disabled > .ant-pagination-item-link {
    color: black;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 4px solid #f2f2f2;
  }
  .ant-pagination-item-link {
    border-radius: 50%;
    color: #7367f0;
    background: #f3f2f7;
    border-color: #f3f2f7;
  }

  .ant-pagination-item {
    border-radius: 50%;
    background: #f3f2f7;
    border-color: #f3f2f7;
    & > a {
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0px;
    }
  }

  .ant-pagination-item-active {
    background: #7367f0;
    border-color: #7367f0;
    & > a {
      color: #fff;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0px;
    }
  }
  .ant-pagination-options {
    display: none;
  }
`;

export const ActionButton = styled(GlobalButton)`
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.7rem 1rem;

  &.ant-btn-primary {
    border-color: #e9eeff;
    background: #e9eeff;
    color: #4668d6;
  }
  &.ant-btn-danger {
    border-color: #ffe5e5;
    background: #ffe5e5;
    color: #ff0000;
  }
`;

export const InfoCard = styled.div`
  border-radius: 0.375rem;
  padding: 1rem;
  background: #fff;
  width: 14rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  .ratingInfo__iconBox {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) => props.bgColor && props.bgColor};
  }
  .ratingInfo__icon {
    font-size: 1.25rem;
    color: #fff;
  }
`;

export const CustomRate = styled(Rate)`
  margin-top: 10px;
  .anticon-star > svg {
    font-size: 2.5rem;
  }
`;

export const ReasonSelect = styled(CustomSelect)`
  .ant-select-selector {
    background: #f5f5f5 !important;
  }
`;
