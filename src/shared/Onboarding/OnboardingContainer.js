import React from "react";
import { CustomContainer, GlobalSubText, GlobalTitle } from "../GlobalComponents";


function OnboardingContainer({ title, subtext, imgSrc, children }) {
  return (
    <CustomContainer>
      <div className="left">
        <img src={imgSrc} alt="begig__onboarding" />
      </div>
      <div className="right">
        <GlobalTitle>{title}</GlobalTitle>
        <GlobalSubText>{subtext}</GlobalSubText>
        {children}
      </div>
    </CustomContainer>
  );
}

export default OnboardingContainer;