import React, { useState } from "react";
import { Grid, Layout } from "antd";
import {
    CloseOutlined,
    CommentOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

import map from "../assets/images/freelancer/New folder/map.png";
import mapBlue from "../assets/images/freelancer/New folder/mapBlue.png";
import Home from "../assets/images/freelancer/New folder/Home.png";
import HomeBlue from "../assets/images/freelancer/New folder/HomeBlue.png";
import msg from "../assets/images/freelancer/New folder/msg.png";
import msgBlue from "../assets/images/freelancer/New folder/msgBlue.png";
import User from "../assets/images/freelancer/New folder/user.png";
import File from "../assets/images/freelancer/New folder/file.png";
import FileBlue from "../assets/images/freelancer/New folder/fileBlue.png";
import Profile from "../assets/images/freelancer/New folder/profile.png";
import Wave from "../assets/images/freelancer/New folder/wave.png";
import WaveBlue from "../assets/images/freelancer/New folder/waveBlue.png";
import Dashboard from "../assets/images/freelancer/dashboard.png";
import DashboardBlue from "../assets/images/freelancer/New folder/dashboardBlue.png";
import GigStatus from "../assets/images/freelancer/New folder/gigStatus.png";
import GigStatusBlue from "../assets/images/freelancer/New folder/gigStatusblue.png";
import Payments from "../assets/images/freelancer/New folder/Payments.png";
import BidsBlue from "../assets/images/freelancer/New folder/BidBlue.png";
import Comments from "../assets/images/freelancer/New folder/Comments.svg";
import { Menu } from "antd";
import styled from "styled-components";
import begigLogo from "../assets/images/common/begigDashboardLogo.svg";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const CustomSider = styled(Sider)`
    width: 20%;
    background-color: #4668d6;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    .sidebar__head {
        margin: 1rem auto 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${(props) => (props.collapsed ? "0 0" : "0 2.5rem")};
        @media only screen and (max-width: 600px) {
            justify-content: space-between;
        }
    }
    .close__icon {
        display: none;
        color: white;
        font-size: 1rem;
        @media only screen and (max-width: 600px) {
            display: block;
        }
    }
    .begig_dashboard_logo {
        width: 2.35rem;
        object-fit: contain;
    }
`;

const CustomMenu = styled(Menu)`
    background: #4668d6;
    color: white;
    margin-top: 4rem;

    &.ant-menu {
        padding: 0 1.2rem;
    }
    &.ant-menu.ant-menu-inline-collapsed > .ant-menu-item,
    .ant-menu.ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-item,
    .ant-menu.ant-menu-inline-collapsed
        > .ant-menu-item-group
        > .ant-menu-item-group-list
        > .ant-menu-submenu
        > .ant-menu-submenu-title,
    .ant-menu.ant-menu-inline-collapsed
        > .ant-menu-submenu
        > .ant-menu-submenu-title {
        border-radius: 8px;
    }

    &.ant-menu-vertical > .ant-menu-item,
    .ant-menu-vertical-left > .ant-menu-item,
    .ant-menu-vertical-right > .ant-menu-item,
    .ant-menu-inline > .ant-menu-item,
    .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,
    .ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,
    .ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,
    .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
        height: 38px;
    }

    &.ant-menu-inline.ant-menu-root .ant-menu-item,
    .ant-menu-inline.ant-menu-root .ant-menu-submenu-title {
        border-radius: 8px;
    }

    &.ant-menu-vertical {
        border-right: none;
    }

    &.ant-menu-inline,
    .ant-menu-vertical,
    .ant-menu-vertical-left {
        border-right: none;
    }

    &.ant-menu-inline .ant-menu-item-selected::after {
        opacity: 0;
    }
`;

function Sidebar({ collapsed, setCollapsed }) {
    const [imgChange, setimgChange] = useState();
    const navigate = useNavigate();
    const screens = useBreakpoint();
    const imgclickHandler = (key) => {
        setimgChange(key);
    };
    const enterpriseItems = [
        {
            key: "/dashboard",
            icon: (
                <img
                    src={imgChange === "Dashboard" ? DashboardBlue : Dashboard}
                    alt="icon"
                />
            ),
            label: "Dashboard",
            onClick: () => {
                imgclickHandler("Dashboard");
                navigate("/home/dashboard");
            },
        },
        {
            key: "/home/explore-talent",
            icon: <img src={imgChange === "map" ? mapBlue : map} alt="icon" />,
            label: "Explore",
            onClick: () => {
                imgclickHandler("map");
                navigate("/home/explore-talent");
            },
        },
        {
            key: "/home/gig-template",
            icon: <PlusCircleOutlined />,
            label: "Create a Gig",
            onClick: () => {
                imgclickHandler("PlusCircleOutlined");
                navigate("/home/gig-template");
            },
        },
        {
            key: "/home/chats",
            icon: (
                <img src={imgChange === "msg" ? msgBlue : msg} alt="icon" />
                //   <FileDoneOutlined       onClick={() => navigate("/home/bids-and-offers")}   />
            ),
            label: "Chats",
            onClick: () => {
                imgclickHandler("msg");
                navigate("/chats");
            },
        },
        {
            key: "/home/gig-status",
            icon: (
                <img
                    src={imgChange === "GigStatus" ? GigStatusBlue : GigStatus}
                    alt="icon"
                />
            ),
            label: "Gigs",
            onClick: () => {
                imgclickHandler("GigStatus");
                navigate("/home/gig-status");
            },
        },
        {
            key: "/home/bids-and-offers",
            icon: (
                <img src={imgChange === "User" ? BidsBlue : User} alt="icon" />
            ),
            label: "Bids",
            onClick: () => {
                imgclickHandler("User");
                navigate("/home/bids-and-offers");
            },
        },

        {
            key: "/home/invoices",
            icon: (
                <img
                    src={imgChange === "Payments" ? WaveBlue : Payments}
                    alt="icon"
                />
            ),
            label: "Invoices",
            onClick: () => {
                setimgChange("Payments");
                navigate("/home/invoices");
            },
        },
        {
            key: "/home/reviews-and-ratings",
            icon: <CommentOutlined />,
            label: "Review and Ratings",
            onClick: () => {
                setimgChange("Comments");
                navigate("/home/reviews-and-ratings");
            },
        },
    ];

    const freelancerItems = [
        {
            key: "/home",
            icon: (
                <img src={imgChange === "Home" ? HomeBlue : Home} alt="icon" />
                // <AppstoreFilled onClick={() => navigate("/home/dashboard")} />
            ),
            label: "Home",
            onClick: () => {
                imgclickHandler("Home");
                navigate("/home");
            },
        },
        {
            key: "/dashboard",
            icon: (
                <img
                    src={imgChange === "Dashboard" ? DashboardBlue : Dashboard}
                    alt="icon"
                />
            ),
            label: "Dashboard",
            onClick: () => {
                imgclickHandler("Dashboard");
                navigate("/home/dashboard");
            },
        },
        {
            key: "/home/explore-gigs",
            icon: (
                <img src={imgChange === "map" ? mapBlue : map} alt="icon" />
                // <CompassOutlined onClick={() => navigate("/home/explore-gigs")}
                // />
            ),
            label: "Explore",
            onClick: () => {
                imgclickHandler("map");
                navigate("/home/explore-gigs");
            },
        },
        {
            key: "/home/gig-status",
            icon: (
                <img
                    src={imgChange === "GigStatus" ? GigStatusBlue : GigStatus}
                    alt="icon"
                />
                //  <MessageOutlined onClick={() => navigate("/home/gig-status")} />
            ),
            label: "Gig Status",
            onClick: () => {
                imgclickHandler("GigStatus");
                navigate("/home/gig-status");
            },
        },
        {
            key: "/home/chats",
            icon: (
                <img src={imgChange === "msg" ? msgBlue : msg} alt="icon" />
                //   <FileDoneOutlined       onClick={() => navigate("/home/bids-and-offers")}   />
            ),
            label: "Chats",
            onClick: () => {
                imgclickHandler("msg");
                navigate("/chats");
            },
        },
        {
            key: "/home/bids-and-offers",
            icon: (
                <img src={imgChange === "User" ? BidsBlue : User} alt="icon" />
                //   <FileDoneOutlined       onClick={() => navigate("/home/bids-and-offers")}   />
            ),
            label: "Bids & Offers",
            onClick: () => {
                imgclickHandler("User");
                navigate("/home/bids-and-offers");
            },
        },
        {
            key: "6",
            icon: (
                <img
                    src={imgChange === "Payments" ? WaveBlue : Payments}
                    alt="icon"
                />
            ),
            //<FileTextOutlined />,
            label: "Invoices",
            onClick: () => {
                imgclickHandler("Payments");
                navigate("/home/payments");
            },
        },
    ];
    return (
        <CustomSider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                zIndex: "1000",
            }}
            collapsedWidth={screens.sm ? "80px" : "0"}
            trigger={!screens.sm && null}
            width={!screens.sm ? "100%" : 200}
        >
            <div className="sidebar__head">
                <img
                    src={begigLogo}
                    alt="begig_dashboard_logo"
                    className="begig_dashboard_logo"
                />
                <CloseOutlined
                    className="close__icon"
                    onClick={() => setCollapsed(true)}
                />
            </div>
            <CustomMenu mode="inline" defaultSelectedKeys={["/home"]}>
                {localStorage.getItem("type") === "enterprise" &&
                    enterpriseItems?.map((item) => (
                        <Menu.Item onClick={item?.onClick}>
                            {item?.icon}
                            <span>{item?.label}</span>
                        </Menu.Item>
                    ))}
                {localStorage.getItem("type") === "freelancer" &&
                    freelancerItems?.map((item) => (
                        <Menu.Item onClick={item?.onClick}>
                            {item?.icon}
                            <span>{item?.label}</span>
                        </Menu.Item>
                    ))}
            </CustomMenu>
        </CustomSider>
    );
}

export default Sidebar;
