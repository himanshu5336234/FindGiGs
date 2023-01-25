import React, { useEffect, useState } from "react";
import { Menu, Grid, Dropdown, Avatar } from "antd";
import { BegigLogo, Hamburger } from "../icons";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../utils/isLogin";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { CustomMenu } from "../DashboardHeader/StyleSheet";
import { GlobalSubText } from "../GlobalComponents";
import { useDispatch } from "react-redux";
import { setLogout } from "../../redux/auth/authSlice";
import {
  CustomDrawer,
  CustomHeader,
  HeaderMenu,
  RegButton,
} from "./StyleSheet";

const { useBreakpoint } = Grid;

const iconStyle = {
  color: "#4668D6",
  marginRight: "10px",
  fontSize: "1rem",
};

function AppHeader() {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const logout = () => {
    localStorage.clear();
    dispatch(setLogout());
    navigate("/login/enterprise");
  };

  const menu = (
    <CustomMenu
      items={[
        {
          key: "1",
          label: (
            <GlobalSubText onClick={logout} className="margin-b0">
              <LogoutOutlined style={iconStyle} />
              <span>Logout</span>
            </GlobalSubText>
          ),
        },
      ]}
    />
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [drawerOpen, setDraweropen] = useState(false);

  const onClose = () => {
    setDraweropen(false);
  };

  const onOpen = () => {
    setDraweropen(!drawerOpen);
  };

  return (
    <CustomHeader
      ismobile={screens?.xs?.toString()}
      scrollposition={scrollPosition}
    >
      <div style={{ gap: "2rem" }}>
        <BegigLogo />
        {screens?.lg ? (
          !isLogin() ? (
            <HeaderMenu>
              <li onClick={() => navigate("/about-us")}>About Us</li>
              <li onClick={() => window.open("https://community.begig.io/")}>
                Community
              </li>
              <li onClick={() => navigate("/contact-us")}>Contact Us</li>
            </HeaderMenu>
          ) : null
        ) : null}
      </div>

      <CustomDrawer
        placement="right"
        closable={true}
        drawerStyle={{ backgroundColor: "#0C0E17" }}
        onClose={onClose}
        visible={drawerOpen}
        width="90%"
      >
        <HeaderMenu>
          <li onClick={() => navigate("/about-us")}>About Us</li>
          <li onClick={() => window.open("https://community.begig.io/")}>
            Community
          </li>
          <li onClick={() => navigate("/contact-us")}>Contact Us</li>

          <li onClick={() => navigate("/signup/freelancer")}>Freelancers</li>
          <li onClick={() => navigate("/signup/freelancer")}>Enterpirse</li>
          <li onClick={() => navigate("/login/freelancer")}>Login</li>
          <li></li>
          <li>
            <RegButton onClick={() => navigate("/signup/freelancer")}>
              Register
            </RegButton>
          </li>
        </HeaderMenu>
      </CustomDrawer>
      {!screens?.lg ? (
        <>
          <Menu
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "60px",
            }}
            theme="light"
            mode="horizontal"
          >
            <div onClick={onOpen}>
              <Hamburger />
            </div>
          </Menu>
        </>
      ) : (
        <>
          {!isLogin() ? (
            <HeaderMenu>
              <li onClick={() => navigate("/signup/freelancer")}>
                Freelancers
              </li>
              <li onClick={() => navigate("/signup/enterprise")}>Enterprise</li>
              <li onClick={() => navigate("/login/freelancer")}>Login</li>
              <li></li>
              <li>
                <RegButton onClick={() => navigate("/signup/freelancer")}>
                  Register
                </RegButton>
              </li>
            </HeaderMenu>
          ) : (
            <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
              <Avatar
                size={screens?.sm ? 45 : 34}
                icon={<UserOutlined />}
                style={{ cursor: "pointer", marginRight: "24px" }}
              />
            </Dropdown>
          )}
        </>
      )}
    </CustomHeader>
  );
}

export default AppHeader;
