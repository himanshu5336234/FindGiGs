import { Col, Collapse, Grid, Row, Space } from "antd";
import styled from "styled-components";
import React from "react";
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import {
  GlobalTextP1,
  GlobalTextP4,
  GlobalTitle,
} from "../../../shared/GlobalComponents";
import { useState } from "react";
import { FAQCollapse, FAQTab } from "./Stylesheet";
import { useEffect } from "react";
import { faqsData } from "../../../utils/faqsData";
import parse from "html-react-parser";

const { Panel } = Collapse;
const { useBreakpoint } = Grid;

function FAQs({ onGoBack }) {
  const screens = useBreakpoint();
  const [selectedTab, setSelectedTab] = useState("General");
  const [faqList, setFaqList] = useState(faqsData.General);

  const handleSelectedTab = (e) => {
    console.log(e.target);
    if (e.target.localName === "li") {
      setSelectedTab(e.target.innerText);
    }
  };
  console.log(selectedTab);

  useEffect(() => {
    if (selectedTab === "General") {
      setFaqList(faqsData.registrationAndProfile);
    } else if (selectedTab === "Account") {
      setFaqList(faqsData.registrationAndProfile);
    } else if (selectedTab === "Payments") {
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
        <GlobalTextP1>Frequently Asked Questions (FAQs)</GlobalTextP1>
      </Space>
      <ul className="faq__tabContainer" onClick={handleSelectedTab}>
        <FAQTab selected={selectedTab === "General"}>General</FAQTab>
        <FAQTab selected={selectedTab === "Account"}>Account</FAQTab>
        <FAQTab selected={selectedTab === "Payments"}>Payments</FAQTab>
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

const FAQContainer = styled.div`
  display: "flex";
`;
