import { Space } from "antd";
import React, { useState } from "react";
import { GlobalTextP1, GlobalTextP2 } from "../../../shared/GlobalComponents";
import { SelectTab } from "./Security";
import { QuestionCircleOutlined, MessageOutlined } from "@ant-design/icons";
import FAQs from "./FAQs";
import ContactUs from "./ContactUs";

function HelpDesk() {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <div>
      {selectedTab === null && (
        <>
          <Space size={5} direction="vertical">
            <GlobalTextP1 className="margin-b0">Helpdesk</GlobalTextP1>
            <GlobalTextP2 color="#696969" weight="500">
              Questions? We’ve got instant answers!
            </GlobalTextP2>
          </Space>
          <SelectTab
            selected={selectedTab === 0}
            onClick={() => setSelectedTab(0)}
            icon={<QuestionCircleOutlined />}
            title={"FAQs"}
            subText={"Find all your answers here"}
          />
          <SelectTab
            selected={selectedTab === 1}
            onClick={() => setSelectedTab(1)}
            icon={<MessageOutlined />}
            title={"Contact Us"}
            subText={"Get in touch with our support team"}
          />
        </>
      )}
      {selectedTab === 0 && <FAQs onGoBack={() => setSelectedTab(null)} />}
      {selectedTab === 1 && <ContactUs onGoBack={() => setSelectedTab(null)} />}
    </div>
  );
}

export default HelpDesk;
