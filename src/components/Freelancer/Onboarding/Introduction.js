import React, { useEffect } from "react";
import { GlobalButton, GlobalSubText } from "../../../shared/GlobalComponents";
import introduction from "../../../assets/images/freelancer/introduction.svg";
import { Form } from "antd";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import PropTypes from "prop-types";
import {
  OnboardFormContainer,
  OnboardInput,
  OnboardPhoneInput,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { addIntroduction } from "../../../api/freelancer/onboardAPIs";

function Introduction({ proceedToNextTab }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const freelancerData = useSelector((state) => state.freelancer.userData);

  useEffect(() => {
    form.setFieldsValue({
      first_name: freelancerData?.freelancerDetails?.user?.first_name,
      last_name: freelancerData?.freelancerDetails?.user?.last_name,
      phone_number: freelancerData?.freelancerDetails?.user?.mobile_no,
    });
  }, [freelancerData]);

  const onFinish = (e) => {
    //   funtion for submitting introduction form
    const record = {
      freelancer: {
        first_name: e?.first_name,
        last_name: e?.last_name,
        mobile_no: e?.phone_number,
      },
      whatsapp_opt_in: true,
    };
    dispatch(addIntroduction({ record, proceedToNextTab, dispatch }));
  };
  return (
    <OnboardingContainer
      imgSrc={introduction}
      title={"Let’s start with your introduction first"}
      subtext={
        "This is to ensure that you are a genuine human being and that we can properly pay you if your application is successful."
      }
    >
      <OnboardFormContainer>
        <Form
          form={form}
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          className="margin-t2"
        >
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please enter only alphabets",
                pattern: new RegExp(/^[A-z]+$/),
              },

              {
                min: 2,
                message: "Please enter minimum two alphabets",
              },
            ]}
          >
            <OnboardInput placeholder="Type here" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please enter only alphabets",
                pattern: new RegExp(/^[A-z]+$/),
              },

              {
                min: 2,
                message: "Please enter minimum two alphabets",
              },
            ]}
          >
            <OnboardInput placeholder="Type here" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone_number"
            rules={[
              {
                pattern: new RegExp(/^[0-9]{10}$/),
                message: "Please provide a valid phone number",
              },
              {
                required: true,
                message: "Please provide a valid phone number",
              },
            ]}
          >
            <OnboardPhoneInput
              placeholder="Type here"
              prefix={
                <GlobalSubText className="margin-b0 phone-prefix">
                  +91
                </GlobalSubText>
              }
            />
          </Form.Item>
          <GlobalButton
            type="primary"
            block
            htmlType="submit"
            className="margin-t3"
          >
            Submit
          </GlobalButton>
        </Form>
      </OnboardFormContainer>
    </OnboardingContainer>
  );
}

Introduction.propTypes = {
  proceedToNextTab: PropTypes.func,
};

export default Introduction;
