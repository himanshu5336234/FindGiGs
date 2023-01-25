import React from "react";
import OnboardingEnterprise from "../components/Enterprise/Onboarding";
import OnboardingFreelancer from "../components/Freelancer/Onboarding";

function OnboardingPage() {
  const userType = localStorage.getItem("type");
  return (
    <>
      {userType === "freelancer" && <OnboardingFreelancer />}
      {userType === "enterprise" && <OnboardingEnterprise />}
    </>
  );
}

export default OnboardingPage;
