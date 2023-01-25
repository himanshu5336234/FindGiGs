import { Layout, Menu } from "antd";
import styled from "styled-components";
import { GlobalButton } from "../GlobalComponents";

const { Header } = Layout;

export const CustomHeader = styled(Header)`
  padding: ${(props) => (props.ismobile ? "0px 1.2rem" : "0px 4.8rem")};
  background: #f6f8ff;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  /* width: ${(props) =>
    props.collapsed ? "calc(100% - 80px)" : "calc(100% - 200px)"}; */
  /* margin-left: ${(props) => (props.collapsed ? "0" : "200px")}; */
  display: flex;
  justify-content: flex-end;
  height: ${(props) => (props.open ? "100vh" : "auto")};
  transition: margin-left 200ms ease-in-out;
  transition: width 200ms ease-in-out;

  .dashboardHeader__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 1;
  }
  .dashboardHeader__hamburger {
    color: #4668d6;
    font-size: 1rem;
  }

  .container {
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: flex-end;
    gap: 1.4rem;
    flex-shrink: 0;
    margin-left: auto;
    flex-grow: 0.55;
  }
  .profile {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-shrink: 0;
  }

  .profile__details {
    flex-shrink: 0;

    & > p:first-child {
      font-size: 0.6875rem;
      font-weight: bold;
      line-height: 0.75rem;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 8px;
    }
    & > p:last-child {
      font-size: 0.625rem;
      font-weight: 600;
      line-height: 0.75rem;
      letter-spacing: 0em;
      text-align: left;
      color: #a3a3a3;
      margin-bottom: 0;
    }
  }
  .ant-avatar {
    flex-shrink: 0;
  }
`;

export const IconButton = styled(GlobalButton)`
  border-color: #e8edff;
  border-radius: 50%;
  padding: 0;
  height: 3rem;
  width: 3rem;
  background-color: #e8edff;
  flex-shrink: 0;

  @media only screen and (max-width: 600px) {
    height: 2.125rem;
    width: 2.125rem;
  }
  &.ant-btn {
    border-color: #e8edff;
    color: #4668d6;
  }
`;

export const CustomMenu = styled(Menu)`
  border-radius: 0.375rem;
  width: 13rem;
  padding: 0.5rem 0;
  &.ant-dropdown-menu-item {
    padding: 1rem;
  }
`;

export const RecentButtons = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.7rem;
  margin-bottom: 0.8rem;
`;

export const RecentButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

export const RecentButtonsImg = styled.img`
  margin-right: 0.5rem;
`;

export const TrySearching = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;

export const TryingSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
