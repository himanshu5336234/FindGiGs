import { Tabs } from "antd";
import React, { useState } from "react";
import {
    Container,
    CustomTabs,
} from "../../Enterprise/AccountSettings/Stylesheet";
import {
    UserOutlined,
    FileTextOutlined,
    SecurityScanOutlined,
    LockOutlined,
    MessageOutlined,
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEnterprisedata } from "../../../api/enterprise/onboardAPIs";
import Skills from "./Skill";
import Experience from "./Experience";
import Education from "./Education";
import Review from "./Review";
import Profile from "./Profile";
import { useParams, useSearchParams } from "react-router-dom";

const { TabPane } = Tabs;

const tabs = [
    {
        id: 1,
        label: "Edit Profile",
        icon: <UserOutlined />,
        content: <Profile />,
    },
    {
        id: 2,
        label: "Skills",
        icon: <FileTextOutlined />,
        content: <Skills />,
    },
    {
        id: 3,
        label: "Experience",
        icon: <SecurityScanOutlined />,
        content: <Experience />,
    },
    {
        id: 4,
        label: "Education",
        icon: <LockOutlined />,
        content: <Education />,
    },
    {
        id: 5,
        label: "Reviews",
        icon: <MessageOutlined />,
        content: <Review />,
    },
];

function EditProfile() {
    const [selectedTab, setSelectedTab] = useState(1);
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth.userData);
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab");
    useEffect(() => {
        dispatch(getEnterprisedata(userData?.id));
    }, [userData]);

    const onChange = (key) => {
        setSelectedTab(key);
    };
    console.log(searchParams.get("tab"), "tab");
    return (
        <Container>
            <CustomTabs
                tabPosition="left"
                defaultActiveKey={
                    tab && tab === "skills"
                        ? "2"
                        : tab === "experience"
                        ? "3"
                        : tab === "education"
                        ? "4"
                        : tab === "reviews"
                        ? "5"
                        : "1"
                }
                onChange={onChange}
                className="margin-t2"
            >
                {tabs?.map((tab) => (
                    <TabPane tab={<span>{tab?.label}</span>} key={tab?.id}>
                        {tab?.content}
                    </TabPane>
                ))}
            </CustomTabs>
        </Container>
    );
}

export default EditProfile;
