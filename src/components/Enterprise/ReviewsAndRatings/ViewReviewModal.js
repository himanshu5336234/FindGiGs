import { Avatar, Form, Select, Space } from "antd";
import React from "react";
import { useState } from "react";
import { GlobalButton, GlobalTextArea } from "../../../shared/GlobalComponents";
import GlobalModal from "../../../shared/GlobalModal";
import {
  AddBioLength,
  JustifyFlexContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import { CustomRate, ReasonSelect } from "./Stylesheet";

const { Option } = Select;

const reasonsData = [
  "Highly experienced in the field",
  "Has the ability to work without supervision and possess leadership qualities",
  "Highly impressed with the knowledge and professionalism",
  "Overall, the individual has excellent work ethics and has a wealth of expertise.",
  "Others, write a review",
];

function ViewReviewModal({ modalVisible, setModalVisible }) {
  const [bio, setBio] = useState("");

  const [form] = Form.useForm();
  const onChangeSelect = () => {};

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <GlobalModal
      centered
      visible={modalVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      maskClosable={false}
      width={"auto"}
      style={{ minWidth: "640px" }}
    >
      <Space size={"middle"} align="start">
        <Avatar size={120} />
        <Space direction="vertical" size={"middle"}>
          <Form form={form} autoComplete="off" layout="vertical">
            <Form.Item
              label="How would you rate your  experience working with Nitin Malik?"
              name="rate"
            >
              <CustomRate />
            </Form.Item>
            <Form.Item
              label="What went wrong?"
              name="reason"
              rules={[
                {
                  required: true,
                  message: "Please select an option",
                },
              ]}
            >
              <ReasonSelect
                onChange={onChangeSelect}
                bordered={false}
                placeholder="Select your reason"
              >
                {reasonsData?.map((reason, idx) => (
                  <Option value={idx} key={idx}>
                    {reason}
                  </Option>
                ))}
              </ReasonSelect>
            </Form.Item>
            <Form.Item
              label="Tell us more about your experience"
              name="experience"
              rules={[
                {
                  min: 100,
                  message: "your experience must be minimum 100 characters",
                },
              ]}
            >
              <GlobalTextArea
                placeholder="Type here"
                autoSize={{
                  minRows: 4,
                  maxRows: 9,
                }}
                maxLength={300}
                onChange={handleChangeBio}
              />
            </Form.Item>
            <JustifyFlexContainer className="margin-t1">
              <AddBioLength>Minimum 100 character required</AddBioLength>
              <AddBioLength>{bio ? bio.length : 0}/100</AddBioLength>
            </JustifyFlexContainer>
            <JustifyFlexContainer className="margin-t1">
              <GlobalButton block onClick={() => setModalVisible(false)}>
                Cancel
              </GlobalButton>
              <GlobalButton type="primary" block>
                Submit Feedback
              </GlobalButton>
            </JustifyFlexContainer>
          </Form>
        </Space>
      </Space>
    </GlobalModal>
  );
}

export default ViewReviewModal;
