import React, { useEffect, useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Grid } from "antd";
import Introduction from "./Introduction";
import {
  CurrentStepIcon,
  CustomStep,
  CustomStepper,
  StepperContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import CompanyDetails from "./CompanyDetails";
import IndustrySector from "./IndustrySector";
import { useDispatch, useSelector } from "react-redux";
import { getEnterprisedata } from "../../../api/enterprise/onboardAPIs";

const { useBreakpoint } = Grid;

const items = [
  {
    id: 0,
    title: "Introduction",
  },
  {
    id: 1,
    title: "Company Details",
  },
  {
    id: 2,
    title: "Industry Sector",
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

function OnboardingEnterprise() {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);
  const authToken = useSelector((state) => state.auth.token);


  const proceedToNextTab = () => {
    setTabIndex((prev) => prev + 1);
  };

  const proceedToPrevTab = () => {
    setTabIndex((prev) => prev - 1);
  };

  useEffect(() => {
    dispatch(getEnterprisedata({setTabIndex}));
  }, [authToken]);

  return (
    <>
      <StepperContainer width={500}>
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
        <CompanyDetails
          proceedToNextTab={proceedToNextTab}
          proceedToPrevTab={proceedToPrevTab}
        />
      )}
      {tabIndex === 2 && <IndustrySector proceedToPrevTab={proceedToPrevTab} />}
    </>
  );
}

export default OnboardingEnterprise;
