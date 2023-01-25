import React, { useState } from "react";
import { Grid, Layout } from "antd";
import AppHeader from "../shared/AppHeader";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DashboardHeader from "../shared/DashboardHeader";
import Sidebar from "./Sidebar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const AppContainer = styled(Content)`
  /* margin-top: ${(props) => (props.isVerified ? "75px" : "70px")};
  min-height: ${(props) =>
    props.isVerified ? "calc(100vh - 75px)" : "calc(100vh - 70px)"}; */
  margin-top: ${(props) => (!props.isMobile ? "66px" : "75px")};
  margin-left: ${(props) =>
    !props.isMobile
      ? "0px"
      : props.isVerified
      ? props.collapsed
        ? "80px"
        : "200px"
      : "0px"};
  min-height: calc(100vh - 75px);
  background: ${(props) => (props.isVerified ? "#f6f8ff" : "#fff")};
  transition: margin-left 200ms ease-in-out;
`;

const ContainerLayout = styled(Layout)`
  width: ${(props) =>
    props.isVerified
      ? props.collapsed
        ? "calc(100% - 80px)"
        : "calc(100% - 200px)"
      : "100%"};

  transition: width 200ms ease-in-out;
`;

function AppLayout({ children }) {
  const isVerified = useSelector((state) => state?.auth?.isVerified);
  const [collapsed, setCollapsed] = useState(true);
  const screens = useBreakpoint();

  return (
    <Layout>
      {isVerified ? (
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      ) : null}
      <ContainerLayout isVerified={isVerified} collapsed={collapsed}>
        {isVerified ? (
          <DashboardHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        ) : (
          <AppHeader />
        )}
        <AppContainer
          isVerified={isVerified}
          collapsed={collapsed}
          isMobile={screens?.sm}
        >
          {children}
        </AppContainer>
      </ContainerLayout>
    </Layout>
  );
}

export default AppLayout;
