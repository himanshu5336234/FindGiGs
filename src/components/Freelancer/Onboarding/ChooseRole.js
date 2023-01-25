import React, { useEffect, useState } from "react";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import chooseRole from "../../../assets/images/freelancer/chooseRole.svg";
import { GlobalButton } from "../../../shared/GlobalComponents";
import PropTypes from "prop-types";
import { Space } from "antd";
import {
  CheckTab,
  ErrorText,
  JustifyFlexContainer,
  OnboardFormContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { addRole } from "../../../api/freelancer/onboardAPIs";

const roles = [
  {
    id: 1,
    label: "Frontend Developer",
  },
  {
    id: 2,
    label: "Backend Developer",
  },
  {
    id: 3,
    label: "Dev Ops",
  },
  {
    id: 4,
    label: "Data Engineer",
  },
  {
    id: 5,
    label: "Data Scientist",
  },
  {
    id: 6,
    label: "Full Stack Developer",
  },
  {
    id: 7,
    label: "Data Analyst",
  },
  {
    id: 8,
    label: "Quality Assurance",
  },
  {
    id: 9,
    label: "UI/UX Designer",
  },
  {
    id: 10,
    label: "Others",
  },
];

function ChooseRole({ proceedToPrevTab, proceedToNextTab }) {
  const dispatch = useDispatch();
  const freelancerData = useSelector((state) => state.freelancer.userData);
  const [selectedTab, setSelectedTab] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelectedTab(freelancerData?.freelancerDetails?.freelancer_job_role);
  }, [freelancerData]);

  const handleRoleTab = (label) => {
    setError(false);
    setSelectedTab(label);
  };

  const handleSubmitRole = () => {
    if (selectedTab === null) {
      setError(true);
      return;
    }
    const record = {
      freelancer_job_role: selectedTab,
      other_job_name: "qa",
    };
    dispatch(addRole({ record, proceedToNextTab, dispatch }));
  };
  return (
    <OnboardingContainer
      imgSrc={chooseRole}
      title={"How do you describe your expertise?"}
      subtext={
        "Select the role that best represents the type of work you do so that we can match you with the right clients in search results."
      }
    >
      <Space size={[16, 16]} wrap className="margin-t1">
        {roles?.map((role) => (
          <CheckTab
            showIcon={false}
            onChange={() => handleRoleTab(role?.id)}
            checked={selectedTab === role?.id}
          >
            {role?.label}
          </CheckTab>
        ))}
      </Space>
      {error && (
        <ErrorText className="margin-t1">Please select your role</ErrorText>
      )}
      <OnboardFormContainer>
        <JustifyFlexContainer className="margin-t2">
          <GlobalButton block onClick={proceedToPrevTab}>
            Back
          </GlobalButton>
          <GlobalButton type="primary" block onClick={handleSubmitRole}>
            Submit
          </GlobalButton>
        </JustifyFlexContainer>
      </OnboardFormContainer>
    </OnboardingContainer>
  );
}

ChooseRole.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};

export default ChooseRole;
