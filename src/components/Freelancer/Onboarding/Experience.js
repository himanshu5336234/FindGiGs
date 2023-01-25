import React, { useEffect, useState } from "react";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import experience from "../../../assets/images/freelancer/experience.svg";
import { Col, Row } from "antd";
import PropTypes from "prop-types";
import { GlobalButton } from "../../../shared/GlobalComponents";
import {
  CheckTab,
  ErrorText,
  JustifyFlexContainer,
  OnboardFormContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../../../api/freelancer/onboardAPIs";
import { apiGet, DEV_URL } from "../../../api";

const experienceData = [
  {
    id: 1,
    label: "Junior (2-3 years)",
    value: 1,
  },
  {
    id: 2,
    label: "Senior (5-8 years)",
    value: 2,
  },
  {
    id: 3,
    label: "Mid Level (3-5 years)",
    value: 3,
  },
  {
    id: 4,
    label: "Expert (9+ years)",
    value: 4,
  },
];

function Experience({ proceedToPrevTab, proceedToNextTab }) {
  const dispatch = useDispatch();
  const freelancerData = useSelector((state) => state.freelancer.userData);
  console.log(freelancerData, "freelancerData");
  const [selectedTab, setSelectedTab] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelectedTab(freelancerData?.experience);
  }, [freelancerData]);

  const handleExperienceTab = (label) => {
    setError(false);
    setSelectedTab(label);
  };

  const handleSubmitExperience = () => {
    if (selectedTab === null) {
      setError(true);
      return;
    }
    const record = {
      total_experience_in_year: selectedTab,
    };
    dispatch(addExperience({ record, proceedToNextTab, dispatch }));
  };
  return (
    <OnboardingContainer
      imgSrc={experience}
      title={"What would you say is your level of experience?"}
      subtext={
        "Experienced freelancers have a two-fold increase in their chances of landing gigs."
      }
    >
      <Row gutter={[16, 16]} className="margin-t3">
        {experienceData?.map((exp) => (
          <Col xs={24} sm={12}>
            <CheckTab
              showIcon
              block
              onChange={() => handleExperienceTab(exp.value)}
              checked={selectedTab === exp.value}
            >
              {exp?.label}
            </CheckTab>
          </Col>
        ))}
      </Row>
      {error && (
        <ErrorText className="margin-t1">
          Please select your experience level
        </ErrorText>
      )}
      <OnboardFormContainer>
        <JustifyFlexContainer className="margin-t3">
          <GlobalButton block onClick={proceedToPrevTab}>
            Back
          </GlobalButton>
          <GlobalButton type="primary" block onClick={handleSubmitExperience}>
            Submit
          </GlobalButton>
        </JustifyFlexContainer>
      </OnboardFormContainer>
    </OnboardingContainer>
  );
}

Experience.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};

export default Experience;
