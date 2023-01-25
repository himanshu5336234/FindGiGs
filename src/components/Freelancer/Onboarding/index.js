import React, { useEffect, useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Grid } from "antd";
import Introduction from "./Introduction";
import AddBio from "./AddBio";
import ChooseRole from "./ChooseRole";
import Experience from "./Experience";
import SelectSkills from "./SelectSkills";
import {
  CurrentStepIcon,
  CustomStep,
  CustomStepper,
  StepperContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import WageRate from "./WageRate";
import { useDispatch, useSelector } from "react-redux";
import { getFreelancerdata } from "../../../api/freelancer/onboardAPIs";

const { useBreakpoint } = Grid;

const items = [
  {
    id: 0,
    title: "Introduction",
  },
  {
    id: 1,
    title: "Add Bio",
  },
  {
    id: 2,
    title: "Choose Role",
  },
  {
    id: 3,
    title: "Experience",
  },
  {
    id: 4,
    title: "Select Skills",
  },
  {
    id: 5,
    title: "Wage Rate",
  },
];

const CurrentStep = ({ id, current }) => {
  return (
    <>
      {id < current ? (
        <CheckCircleFilled
          style={{
            fontSize: "20px",
            color: "#3ACC6C",
            margin: "8.5px 6px 0 0",
          }}
        />
      ) : (
        <CurrentStepIcon current={current} id={id}>
          <span></span>
        </CurrentStepIcon>
      )}
    </>
  );
};

function OnboardingFreelancer() {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);
  const [tabIndex, setTabIndex] = useState(0);

  const proceedToNextTab = () => {
    setTabIndex((prev) => prev + 1);
  };

  const proceedToPrevTab = () => {
    setTabIndex((prev) => prev - 1);
  };

  useEffect(() => {
    dispatch(getFreelancerdata({ setTabIndex }));
  }, [authToken]);

  return (
    <>
      <StepperContainer>
        <CustomStepper
          size="small"
          current={tabIndex}
          type={!screens?.lg ? "default" : "navigation"}
          responsive={false}
        >
          {items?.map((item) => (
            <CustomStep
              key={item?.id}
              title={item?.title}
              icon={<CurrentStep id={item?.id} current={tabIndex} />}
              active={item?.id < tabIndex}
            />
          ))}
        </CustomStepper>
      </StepperContainer>
      {tabIndex === 0 && <Introduction proceedToNextTab={proceedToNextTab} />}
      {tabIndex === 1 && (
        <AddBio
          proceedToNextTab={proceedToNextTab}
          proceedToPrevTab={proceedToPrevTab}
        />
      )}
      {tabIndex === 2 && (
        <ChooseRole
          proceedToNextTab={proceedToNextTab}
          proceedToPrevTab={proceedToPrevTab}
        />
      )}
      {tabIndex === 3 && (
        <Experience
          proceedToNextTab={proceedToNextTab}
          proceedToPrevTab={proceedToPrevTab}
        />
      )}
      {tabIndex === 4 && (
        <SelectSkills
          proceedToPrevTab={proceedToPrevTab}
          proceedToNextTab={proceedToNextTab}
        />
      )}
      {tabIndex === 5 && (
        <WageRate
          proceedToPrevTab={proceedToPrevTab}
          proceedToNextTab={proceedToNextTab}
        />
      )}
    </>
  );
}

export default OnboardingFreelancer;
