import { Button, Drawer, Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const CustomHeader = styled(Header)`
  padding: ${(props) => (props.ismobile ? "0px 1.2rem" : "0px 4.8rem")};
  background: #ffffff;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.open ? "100vh" : "auto")};
  transform: height 200ms ease-in;

  div {
    display: flex;
    padding: 24px;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem;
  color: #000000;
  align-items: center;
  margin-bottom: inherit;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
    padding-left: 0;
  }

  & > li {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;

    @media only screen and (max-width: 1000px) {
      padding: 10px 0;
      color: #ffff;
    }
  }
`;

export const RegButton = styled(Button)`
  background: linear-gradient(98.75deg, #d56af4 12.46%, #2150ea 98.34%);
  color: #ffffff;
  border: none;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  padding: 1.3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    background-color: #ffffff;
    color: #685aee;
  }
`;

export const CustomDrawer = styled(Drawer)`
  overflow-y: scroll;
  .ant-drawer-header-close-only {
    padding-bottom: 1rem;
    height: 70px;
  }

  .anticon svg {
    font-size: 1.4rem;
  }
`;
