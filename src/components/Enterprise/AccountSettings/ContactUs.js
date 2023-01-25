import React from "react";
import { LeftOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import {
  GlobalSubText,
  GlobalTextP2,
  GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { Space } from "antd";
import contactUs from "../../../assets/images/enterprise/contactUs.svg";

function ContactUs({ onGoBack }) {
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
      <div className="contactUs__container">
        <Space size={55}>
          <Space direction="vertical" align="center">
            <div className="contactUs__IconBox">
              <PhoneOutlined className="contactUs__icon" />
            </div>
            <GlobalSubText color="#909090" className="margin-b0">
              Call us on this number
            </GlobalSubText>
            <GlobalTextP2 className="margin-b0" weight="bold">
              +91 - 9925635461
            </GlobalTextP2>
          </Space>
          <Space direction="vertical" align="center">
            <div className="contactUs__IconBox">
              <MailOutlined className="contactUs__icon" />
            </div>
            <GlobalSubText color="#909090" className="margin-b0">
              Email us here
            </GlobalSubText>
            <GlobalTextP2 className="margin-b0" weight="bold">
              support@begig.io
            </GlobalTextP2>
          </Space>
        </Space>
        <img src={contactUs} alt="begig_contact_us" />
      </div>
    </div>
  );
}

export default ContactUs;
