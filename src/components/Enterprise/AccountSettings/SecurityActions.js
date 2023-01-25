import { Form, Select, Space } from "antd";
import React from "react";
import {
  GlobalButton,
  GlobalTextP2,
  GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { CustomSelect, PassInput } from "./Stylesheet";
import profileSettings from "../../../assets/images/enterprise/profileSettings.svg";
import {
  LeftOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { JustifyFlexContainer } from "../../../shared/Onboarding/OnboardingComponents";
import GlobalModal from "../../../shared/GlobalModal";
import { useState } from "react";

const { Option } = Select;

const reasonsData = [
  "This is temporary, I will be back",
  "I don't understand how to use this platform",
  "I get too many emails & spam messages",
  "I have privacy concerns",
  "I can't find relevant gigs",
  "I don't need this app anymore",
  "I made a second account",
  "My account is hacked",
  "Others, please explain further",
];

const ActionModal = ({ modalVisible, setModalVisible }) => {
  return (
    <GlobalModal
      centered
      visible={modalVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      width="25rem"
    >
      <GlobalTextP2 weight="bold" align="center">
        Are you sure you want to deactivate your account?
      </GlobalTextP2>
      <JustifyFlexContainer className="margin-t2">
        <GlobalButton block type="primary" onClick={() => setModalVisible(false)}>
          No, I am not sure
        </GlobalButton>
        <GlobalButton block>Yes, I am sure</GlobalButton>
      </JustifyFlexContainer>
    </GlobalModal>
  );
};

function SecurityActions({ selectedTab, onGoBack }) {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeSelect = () => {};

  const onFinish = (e) => {
    console.log(e);
    setModalVisible(true)
  };

  return (
    <>
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
      <div className="securityActions margin-t2">
        <div className="securityActions__left">
          <GlobalTextP2>
            Here are a few things you should keep in mind before moving ahead
          </GlobalTextP2>
          <ul className="securtiyActions__list">
            <li>
              You can regain access to your account just by logging in with your
              same ID & password after the deactivation.
            </li>
            <li>
              Your Profile & Gigs will be hidden till the time your account is
              activated again.
            </li>
            <li>You can't sign up again with the same username.</li>
            <li>
              You don't need to deactivate/delete your account to change your
              username, or email address' you can change it at any time from
              your account settings
            </li>
          </ul>
          <Form
            form={form}
            autoComplete="off"
            layout="vertical"
            className="margin-t2"
            onFinish={onFinish}
          >
            <Form.Item
              label={
                selectedTab === 0
                  ? "Why are you disabling your account?"
                  : "Why are you deleting your account?"
              }
              name="reason"
              rules={[
                {
                  required: true,
                  message: "Please select an option",
                },
              ]}
            >
              <CustomSelect
                onChange={onChangeSelect}
                bordered={false}
                placeholder="Select your reason"
              >
                {reasonsData?.map((reason, idx) => (
                  <Option value={idx} key={idx}>
                    {reason}
                  </Option>
                ))}
              </CustomSelect>
            </Form.Item>
            <Form.Item
              label="Type your password here"
              name="password"
              rules={[
                {
                  pattern: new RegExp(/^\S*$/),
                  message: "White space not allowed",
                },
                {
                  required: true,
                  message: "Password is required field",
                },
                { min: 8, message: "Password must be minimum 8 characters." },
              ]}
            >
              <PassInput
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Space className="margin-t2">
              <GlobalButton>Cancel</GlobalButton>
              <GlobalButton type="primary" htmlType="submit">
                Deactivate
              </GlobalButton>
            </Space>
            <ActionModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Form>
        </div>
        <div className="securityActions__right">
          <img src={profileSettings} alt="begig__security" />
        </div>
      </div>
    </>
  );
}

export default SecurityActions;
