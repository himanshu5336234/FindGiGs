import { Avatar, Checkbox, Col, Form, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import {
  GlobalButton,
  GlobalTextArea,
  GlobalTextP2,
  GlobalTextP4,
} from "../../../shared/GlobalComponents";
import GlobalModal from "../../../shared/GlobalModal";
import {
  AddSkillsAction,
  ErrorText,
  JustifyFlexContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import {
  CreategIgChecktab,
  CustomCheckbox,
  SubText,
  Title,
} from "../../Enterprise/CreateGig/Stylesheet";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ProfileOutlined } from "@ant-design/icons";
import { CustomDivider } from "../GigList/Stylesheet";
import { AccountInput } from "../../Enterprise/AccountSettings/Stylesheet";
const dummyDataJson = {
  id: 459,
  skills: [
    "React Js",
    "Python",
    "Java",
    "HTML",
    "React Native",
    "User Research",
  ],
  about_me:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con equat.",
  experience: {
    company_name: "Uber",
    role: "Frontend Develoer",
    start_date: "May 2019",
    end_date: "June 2020",
    role_type: "Full time",
    description:
      "Uber's mission is 'To ignite opportunity by setting the world in motion'. Uber is evolving the way the world moves. By seamlessly connecting riders to drivers through our apps and self-driving cars powered by deep learning, we make cities",
  },
  rating: 4.5,
  total_experience: "Senior (3-5 Yrs.)",
  wage_rate: "1500",
  profile_completion: 70,
  first_name: "Kalyan",
  last_name: "Kuramana",
  designation: "Full Stack developer",
};

const ActionModal = ({ modalSuccessVisible, setModalSuccessVisible }) => {
  console.log("Action modal");
  return (
    <GlobalModal
      centered
      visible={modalSuccessVisible}
      onOk={() => setModalSuccessVisible(false)}
      onCancel={() => setModalSuccessVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      width="25rem"
    >
      <GlobalTextP2 weight="bold" align="center">
        Are you sure you want to deactivate your account?
      </GlobalTextP2>
      <JustifyFlexContainer className="margin-t2">
        <GlobalButton
          block
          type="primary"
          onClick={() => setModalSuccessVisible(false)}
        >
          No, I am not sure
        </GlobalButton>
        <GlobalButton block onClick={() => setModalSuccessVisible(false)}>
          Yes, I am sure
        </GlobalButton>
      </JustifyFlexContainer>
    </GlobalModal>
  );
};

function Education({}) {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);

  const dispatch = useDispatch();
  const gigData = useSelector((state) => state.createGig.gigData);
  // useEffect(() => {
  //   gigData?.skills?.map((skill) => {
  //     form.setFieldsValue({
  //       [skill]: true,
  //     });
  //   });
  // }, [gigData]);
  const onFinish = (e) => {
    // function for submitting skills
    let tempData = [];
    for (const [key, value] of Object.entries(e)) {
      if (value === true) {
        tempData.push(key);
      }
    }
    // const record = {
    //   skills: tempData,
    //   gig_id: gigData?.id,
    //   title: gigData?.title,
    //   description: gigData?.description,
    //   attachments: ["www.logo.com"],
    //   payment_type: gigData?.payment_type,
    //   hours_per_day: gigData?.hours_per_week / 7,
    //   estimated_duration: gigData?.estimated_duration,
    //   string_duration: gigData?.string_duration,
    // };
    // dispatch(updateGig({ record, proceedToNextTab }));
  };
  const addExtraSkills = () => {
    // setSkills([
    //   ...skills,
    //   {
    //     id: skills?.length,
    //     label: skillInput,
    //   },
    // ]);
    // setModalVisible(false);
    // setSkillInput("");
  };
  const handleCancelModal = () => {
    // setSkillInput("");
    // setModalVisible(false);
  };
  return (
    <div>
      <Title>Eductation.</Title>
      <SubText align="left" style={{ width: "50%" }}>
        Experience freelancers have a two-fold increase in their chances of
        landing gigs.
      </SubText>
      <GlobalModal
        title="Edit Experience"
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        maskStyle={{
          backgroundColor: "rgba(70, 104, 214, 0.3)",
        }}
        width="40rem"
      >
        <Form
          form={form}
          autoComplete="off"
          layout="vertical"
          className="margin-t2 accountSettings__detailBox"
        >
          <Row gutter={[16, 0]}>
            <Col sm={24}>
              <Form.Item label="Institution" name="institution">
                <AccountInput
                  bordered={false}
                  placeholder="Type here"
                  style={{ background: "#F8F8F8" }}
                />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item label="Degree" name="degree">
                <AccountInput
                  style={{ background: "#F8F8F8" }}
                  bordered={false}
                  placeholder="Type here"
                />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item label="Field" name="field">
                <AccountInput
                  style={{ background: "#F8F8F8" }}
                  bordered={false}
                  placeholder="Type here"
                />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item label="Start Date" name="start_date">
                <Row gutter={16}>
                  <Col sm={12}>
                    <AccountInput
                      style={{ background: "#F8F8F8" }}
                      bordered={false}
                      placeholder="Type here"
                    />
                  </Col>
                  <Col sm={12}>
                    <AccountInput
                      style={{ background: "#F8F8F8" }}
                      bordered={false}
                      placeholder="Type here"
                    />
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item label="End Date" name="end_date">
                <Row gutter={16}>
                  <Col sm={12}>
                    <AccountInput
                      style={{ background: "#F8F8F8" }}
                      bordered={false}
                      placeholder="Type here"
                    />
                  </Col>
                  <Col sm={12}>
                    <AccountInput
                      style={{ background: "#F8F8F8" }}
                      bordered={false}
                      placeholder="Type here"
                    />
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item name="end_date">
                <Checkbox>I am currently studying here.</Checkbox>
              </Form.Item>
            </Col>{" "}
            <Col sm={24}>
              <Form.Item label="Description" name="end_date">
                <GlobalTextArea
                  placeholder={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui commodo consequat."
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <JustifyFlexContainer className="margin-t1">
          <GlobalButton block type="primary" onClick={addExtraSkills}>
            Add
          </GlobalButton>
          <GlobalButton block onClick={handleCancelModal}>
            Cancel
          </GlobalButton>
        </JustifyFlexContainer>
      </GlobalModal>
      <Form
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        className="margin-t2"
      >
        <Space
          size={"large"}
          wrap
          direction="horizontal"
          style={{ marginBottom: "4rem", width: "60%" }}
        >
          <Space size={"middle"} align="start">
            <div className="profileDetails__expIconContainer">
              <Avatar
                shape="square"
                icon={<ProfileOutlined className="profileDetails__expIcon" />}
                style={{ background: "#4668D6" }}
              />
            </div>
            <div className="profileDetails__exp">
              <GlobalTextP4 className="margin-b0" color="#4668D6">
                {dummyDataJson?.experience?.start_date} -
                {dummyDataJson?.experience?.end_date}
              </GlobalTextP4>
              <GlobalTextP2
                weight="700"
                className="margin-t0 margin-b0"
                id="profile-Experience"
              >
                Front-End Deveoper
              </GlobalTextP2>
              <GlobalTextP4 className="margin-b0" color="#909090">
                {dummyDataJson?.experience?.company_name} •
                {dummyDataJson?.experience?.role_type}
              </GlobalTextP4>
              {/* <GlobalTextP4 className="margin-b0" color="#696969">
                {dummyDataJson?.experience?.description}
              </GlobalTextP4> */}
            </div>
          </Space>
          <Space size={"middle"} align="start">
            <div className="profileDetails__expIconContainer">
              <Avatar
                shape="square"
                icon={<ProfileOutlined className="profileDetails__expIcon" />}
                style={{ background: "#4668D6" }}
              />
            </div>
            <div className="profileDetails__exp">
              <GlobalTextP4 className="margin-b0" color="#4668D6">
                {dummyDataJson?.experience?.start_date} -
                {dummyDataJson?.experience?.end_date}
              </GlobalTextP4>
              <GlobalTextP2
                weight="700"
                className="margin-t0 margin-b0"
                id="profile-Experience"
              >
                Front-End Deveoper
              </GlobalTextP2>
              <GlobalTextP4 className="margin-b0" color="#909090">
                {dummyDataJson?.experience?.company_name} •
                {dummyDataJson?.experience?.role_type}
              </GlobalTextP4>
              {/* <GlobalTextP4 className="margin-b0" color="#696969">
                {dummyDataJson?.experience?.description}
              </GlobalTextP4> */}
            </div>
          </Space>
        </Space>
        <AddSkillsAction onClick={() => setModalVisible(true)}>
          +Add More Education
        </AddSkillsAction>
        <div style={{ display: "flex", gap: "2rem", width: "40%" }}>
          <GlobalButton block>Back</GlobalButton>
          <GlobalButton
            type="primary"
            block
            htmlType="submit"
            onClick={() => setModalSuccessVisible(!modalSuccessVisible)}
          >
            Submit
          </GlobalButton>
        </div>
      </Form>
      <ActionModal
        modalSuccessVisible={modalSuccessVisible}
        setModalSuccessVisible={setModalSuccessVisible}
      />
    </div>
  );
}
export default Education;
