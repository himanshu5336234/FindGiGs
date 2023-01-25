import { Tabs } from "antd";
import React, { useState } from "react";
import { Container, CustomTabs } from "../../Enterprise/AccountSettings/Stylesheet";
import {
  UserOutlined,
  FileTextOutlined,
  SecurityScanOutlined,
  LockOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import CompanyDetails from "../../Enterprise/AccountSettings/CompanyDetails";
import TaxAndBillingDetails from "../../Enterprise/AccountSettings/TaxAndBillingDetails";
import Security from "../../Enterprise/AccountSettings/Security";
import HelpDesk from "../../Enterprise/AccountSettings/HelpDesk";
import PrivacyPolicy from "../../Enterprise/AccountSettings/PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEnterprisedata } from "../../../api/enterprise/onboardAPIs";
import Skills from "./Skill";
import Experience from "./Experience";
import Education from "./Education";

const { TabPane } = Tabs;

const tabs = [
  {
    id: 1,
    label: "Edit Profile",
    icon: <UserOutlined />,
    content: <CompanyDetails />,
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
    content: <HelpDesk />,
  },
];

function EditProfile() {
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
                {tab?.label}
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

export default EditProfile;
