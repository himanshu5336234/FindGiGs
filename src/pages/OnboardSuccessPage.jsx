import React from "react";
import OnboardingSuccess from "../components/OnboardingSuccess";

function OnboardSuccessPage() {
  const userType = localStorage.getItem("type");

  return <OnboardingSuccess userType={userType} />;
}

export default OnboardSuccessPage;
