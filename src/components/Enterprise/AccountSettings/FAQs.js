import { Col, Collapse, Grid, Row, Space } from "antd";
import React from "react";
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { GlobalTextP4 } from "../../../shared/GlobalComponents";
import { useState } from "react";
import { FAQCollapse, FAQTab } from "./Stylesheet";
import { useEffect } from "react";
import { faqsData } from "../../../utils/faqsData";
import parse from "html-react-parser";

const { Panel } = Collapse;
const { useBreakpoint } = Grid;

function FAQs({ onGoBack }) {
  const screens = useBreakpoint();
  const [selectedTab, setSelectedTab] = useState("Registration & Profile");
  const [faqList, setFaqList] = useState(faqsData.registrationAndProfile);

  const handleSelectedTab = (e) => {
    console.log(e.target);
    if (e.target.localName === "li") {
      setSelectedTab(e.target.innerText);
    }
  };
  console.log(selectedTab);

  useEffect(() => {
    if (selectedTab === "Registration & Profile") {
      setFaqList(faqsData.registrationAndProfile);
    } else if (selectedTab === "Gig posting") {
      setFaqList(faqsData.registrationAndProfile);
    } else if (selectedTab === "Freelancer Hiring") {
      setFaqList(faqsData.registrationAndProfile);
    } else if (selectedTab === "Payments and Billing") {
      setFaqList(faqsData.registrationAndProfile);
    }
  }, [selectedTab]);

  return (
    <div>
      <Space
        size={5}
        align="center"
        className="cursor-pointer"
        onClick={onGoBack}
      >
        <LeftOutlined
          style={{ color: "#909090", fontSize: "12px", fontWeight: "bold" }}
        />
        <GlobalTextP4 className="margin-b0" color="#909090" weight="bold">
          Go Back
        </GlobalTextP4>
      </Space>
      <ul className="faq__tabContainer" onClick={handleSelectedTab}>
        <FAQTab selected={selectedTab === "Registration & Profile"}>
          Registration & Profile
        </FAQTab>
        <FAQTab selected={selectedTab === "Gig posting"}>Gig posting</FAQTab>
        <FAQTab selected={selectedTab === "Freelancer Hiring"}>
          Freelancer Hiring
        </FAQTab>
        <FAQTab selected={selectedTab === "Payments and Billing"}>
          Payments and Billing
        </FAQTab>
      </ul>
      <Row gutter={[16, 16]} className="margin-t2">
        {faqList?.map((faq) => (
          <Col span={24}>
            <FAQCollapse
              isMobile={screens?.xs}
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  rotate={isActive ? 90 : 0}
                  style={{ color: "#4668D6", fontSize: "17px" }}
                />
              )}
              expandIconPosition="right"
            >
              <Panel header={faq?.question} key={faq.id}>
                {parse(faq?.answer)}
              </Panel>
            </FAQCollapse>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FAQs;
