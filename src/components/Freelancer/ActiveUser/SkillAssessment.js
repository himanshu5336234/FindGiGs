import React from "react";
import Trophy from "../../../assets/images/common/Trophy.png";
import { Title, SkillAssessmentCard } from "./Stylesheet";
import { GlobalSubText, GlobalButton } from "../../../shared/GlobalComponents";

const SkillAssessment = () => {
  return (
    <div
      style={{
        minWidth: "300px",
      }}
    >
      <Title>Skill assessments</Title>

      <SkillAssessmentCard>
        <div
       className="header"
        >
          <img src={Trophy} alt="trophy" />

          <div>
            <h3 >0</h3>
            <p>Badges Earned</p>
          </div>

          <div >
            <h3 >0</h3>
            <p>Retake</p>
          </div>
        </div>
     
        <p className="GlobalSubText">
          Stand out in recruiter searches! <br /> Take Skill assessments, check
          your level and earn a skill badge. Candidates who earn a skill badge
          are 20% more likely to get hired.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <GlobalButton GlobalButton type="primary">Take Test</GlobalButton>
          <a
            href="#"
            style={{
              marginLeft: "10px",
              color: "#4668D6",
              fontWeight: "700",
              textDecoration: "underline",
            }}
          >
            Learn More
          </a>
        </div>
      </SkillAssessmentCard>
    </div>
  );
};

export default SkillAssessment;
