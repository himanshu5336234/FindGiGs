import { Tabs } from "antd";
import React, { useState } from "react";
import { Container, CustomTabs } from "./Stylesheet";
import {
  UserOutlined,
  FileTextOutlined,
  SecurityScanOutlined,
  LockOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import CompanyDetails from "./CompanyDetails";
import TaxAndBillingDetails from "./TaxAndBillingDetails";
import Security from "./Security";
import HelpDesk from "./HelpDesk";
import PrivacyPolicy from "./PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEnterprisedata } from "../../../api/enterprise/onboardAPIs";

const { TabPane } = Tabs;

const tabs = [
  {
    id: 1,
    label: "Company Details",
    icon: <UserOutlined />,
    content: <CompanyDetails />,
  },
  {
    id: 2,
    label: "Tax & Billing Details",
    icon: <FileTextOutlined />,
    content: <TaxAndBillingDetails />,
  },
  {
    id: 3,
    label: "Security",
    icon: <SecurityScanOutlined />,
    content: <Security />,
  },
  {
    id: 4,
    label: "Privacy Policy",
    icon: <LockOutlined />,
    content: <PrivacyPolicy />,
  },
  {
    id: 5,
    label: "Help Desk",
    icon: <MessageOutlined />,
    content: <HelpDesk />,
  },
];

function AccountSettings() {
  const [selectedTab, setSelectedTab] = useState(1);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth.userData);

  useEffect(() => {
    dispatch(getEnterprisedata(userData?.id));
  }, [userData]);

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
