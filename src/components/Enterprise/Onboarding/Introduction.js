import React, { useEffect } from "react";
import { GlobalButton } from "../../../shared/GlobalComponents";
import introduction from "../../../assets/images/enterprise/introduction.svg";
import { Form } from "antd";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import PropTypes from "prop-types";
import {
  OnboardFormContainer,
  OnboardInput,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { addIntroduction } from "../../../api/enterprise/onboardAPIs";

function Introduction({ proceedToNextTab }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const enterpriseData = useSelector((state) => state.enterprise.userData);
  console.log(enterpriseData, "enterpriseData");
  const onFinish = (e) => {
    //   funtion for submitting introduction form
    const record = {
      first_name: e?.first_name,
      last_name: e?.last_name,
    };

    dispatch(addIntroduction({ record, proceedToNextTab, dispatch }));
  };

  useEffect(() => {
    form.setFieldsValue({
      first_name: enterpriseData[0]?.user?.first_name,
      last_name: enterpriseData[0]?.user?.last_name,
    });
  }, [enterpriseData]);

  return (
    <OnboardingContainer
      imgSrc={introduction}
      title={"Let’s start with an introduction first"}
      subtext={
        "This is to establish that you are a legitimate organization and that we can link you with prospects."
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
                message: "Please enter Name",
              },
              {
                message: "Please enter only alphabets",
                pattern: new RegExp(/^[A-z]+$/),
              },
              {
                min: 2,
                message: "Please enter more than two alphabets",
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
                message: "Please enter Name",
              },
              {
                message: "Please enter only alphabets",
                pattern: new RegExp(/^[A-z]+$/),
              },
              {
                min: 2,
                message: "Please enter more than two alphabets",
              },
            ]}
          >
            <OnboardInput placeholder="Type here" />
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
