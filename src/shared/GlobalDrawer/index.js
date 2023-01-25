import { Drawer } from "antd";
import styled from "styled-components";

export const GlobalDrawer = styled(Drawer)`
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
`;
