import React, { useEffect, useState } from "react";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import wageRate from "../../../assets/images/freelancer/wageRate.svg";
import {
  JustifyFlexContainer,
  OnboardFormContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import { GlobalButton } from "../../../shared/GlobalComponents";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CircularSlider from "@fseehawer/react-circular-slider";
import { KnobIcon } from "../../../shared/icons";
import { addWageRate } from "../../../api/freelancer/onboardAPIs";
import { useDispatch, useSelector } from "react-redux";

function WageRate({ proceedToPrevTab }) {
  const dispatch = useDispatch();
  const freelancerData = useSelector((state) => state.freelancer.userData);
  console.log(freelancerData, "freelancerData");
  const navigate = useNavigate();
  const [wageValue, setWageValue] = useState(100);

  useEffect(() => {
    setWageValue(freelancerData?.freelancerDetails?.rate_per_hour);
  }, [freelancerData]);

  const handleSubmitWage = () => {
    const record = {
      rate_per_hour: wageValue,
    };
    dispatch(addWageRate({ record, navigate }));
  };
  return (
    <OnboardingContainer
      imgSrc={wageRate}
      title={"How would you like to charge for your services?"}
      subtext={"Set your desired minimum and maximum hourly rate"}
    >
      <OnboardFormContainer className="margin-t3">
        <CircularSlider
          progressColorFrom="#4668D6"
          progressColorTo="#4668D6"
          progressSize={16}
          knobSize={54}
          trackSize={16}
          label="Max"
          width={226}
          labelFontSize="14px"
          labelColor="#7B7B7B"
          valueFontSize="20px"
          min={0}
          dataIndex={wageValue}
          max={3000}
          onChange={(value) => {
            setWageValue(value);
          }}
        >
          <KnobIcon x="10" y="10" />
        </CircularSlider>
        <JustifyFlexContainer className="margin-t3">
          <GlobalButton block onClick={proceedToPrevTab}>
            Back
          </GlobalButton>
          <GlobalButton
            type="primary"
            block
            htmlType="sumbit"
            onClick={handleSubmitWage}
          >
            Submit
          </GlobalButton>
        </JustifyFlexContainer>
      </OnboardFormContainer>
    </OnboardingContainer>
  );
}

WageRate.propTypes = {
  proceedToPrevTab: PropTypes.func,
};

export default WageRate;
