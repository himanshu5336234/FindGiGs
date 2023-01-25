import { Tabs } from "antd";
import React, { useState } from "react";
import { Container, CustomTabs } from "./Stylesheet";
import {
    UserOutlined,
    FileTextOutlined,
    SecurityScanOutlined,
    LockOutlined,
    MessageOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import PrivacyPolicy from "./PrivacyPolicy";
import { useEffect } from "react";
import AccountInfo from "./AccountInfo";
import HelpDesk from "./HelpDesk";
import BillilngDetails from "./BillilngDetails";
import Referrals from "./Referrals";
import Notification from "./Notifications";
import AgencyDetails from "./AgencyDetailSetting.js";

const { TabPane } = Tabs;

const tabs = [
    {
        id: 1,
        label: "Account Information",
        icon: <UserOutlined />,
        content: <AccountInfo />,
    },
    {
        id: 2,
        label: "Billing Details",
        icon: <FileTextOutlined />,
        content: <BillilngDetails />,
    },
    {
        id: 3,
        label: "Agency Details",
        icon: <TeamOutlined />,
        content: <AgencyDetails />,
    },
    {
        id: 4,
        label: "Referrals",
        icon: <SecurityScanOutlined />,
        content: <Referrals />,
    },
    {
        id: 5,
        label: "Notifications",
        icon: <LockOutlined />,
        content: <Notification />,
    },
    {
        id: 6,
        label: "Privacy Policy",
        icon: <LockOutlined />,
        content: <PrivacyPolicy />,
    },
    {
        id: 7,
        label: "Help",
        icon: <MessageOutlined />,
        content: <HelpDesk />,
    },
];

function AccountSettings() {
    const [selectedTab, setSelectedTab] = useState(1);

    useEffect(() => {}, []);

    const onChange = (key) => {
        setSelectedTab(key);
    };
    return (
        <Container>
            <CustomTabs
                tabPosition="left"
                defaultActiveKey={1}
                onChange={onChange}
                className="margin-t2"
            >
                {tabs?.map((tab) => (
                    <TabPane
                        tab={
                            <span>
                                {tab?.icon} {tab?.label}
                            </span>
                        }
                        key={tab?.id}
                    >
                        {tab?.content}
                    </TabPane>
                ))}
            </CustomTabs>
        </Container>
    );
}

export default AccountSettings;
