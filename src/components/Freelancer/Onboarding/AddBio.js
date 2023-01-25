import { Form } from "antd";
import React, { useEffect, useState } from "react";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import PropTypes from "prop-types";
import { GlobalButton } from "../../../shared/GlobalComponents";
import addBioImage from "../../../assets/images/freelancer/addBio.svg";
import {
  AddBioLength,
  JustifyFlexContainer,
  OnboardFormContainer,
  OnboardTextArea,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { addBio } from "../../../api/freelancer/onboardAPIs";

function AddBio({ proceedToPrevTab, proceedToNextTab }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const freelancerData = useSelector((state) => state.freelancer.userData);
  const [bio, setBio] = useState("");

  useEffect(() => {
    form.setFieldsValue({
      bio: freelancerData?.freelancerDetails?.about_me,
    });
    setBio(freelancerData?.freelancerDetails?.about_me);
  }, [freelancerData]);

  const onFinish = (e) => {
    // function after submit of add bio form
    const record = {
      about_me: e?.bio,
    };
    dispatch(addBio({ record, proceedToNextTab, dispatch }));
  };

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };
  return (
    <OnboardingContainer
      title={"Write your Bio"}
      subtext={
        "Assist our team in gaining a better understanding of who you are as a freelancer."
      }
      imgSrc={addBioImage}
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
            label="Your Bio"
            name="bio"
            rules={[
              {
                required: true,
                message: "Please enter your bio",
              },
              {
                min: 100,
                message: "Bio must be minimum 100 characters",
              },
            ]}
          >
            <OnboardTextArea
              placeholder="Type here"
              autoSize={{
                minRows: 6,
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
          <JustifyFlexContainer className="margin-t3">
            <GlobalButton block onClick={proceedToPrevTab}>
              Back
            </GlobalButton>
            <GlobalButton type="primary" block htmlType="submit">
              Submit
            </GlobalButton>
          </JustifyFlexContainer>
        </Form>
      </OnboardFormContainer>
    </OnboardingContainer>
  );
}

AddBio.propTypes = {
  proceedToNextTab: PropTypes.func,
  proceedToPrevTab: PropTypes.func,
};

export default AddBio;
