import React, { useState } from "react";
import {
    CheckTab,
    ErrorText,
} from "../../../shared/Onboarding/OnboardingComponents";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import introduction from "../../../assets/images/freelancer/introduction.svg";
import { Col, Row } from "antd";
import { GlobalButton, GlobalSubText } from "../../../shared/GlobalComponents";
import { useNavigate } from "react-router-dom";
const experienceData = [
    {
        id: 1,
        label: "I am an individual freelancer",
        value: 1,
    },
    {
        id: 2,
        label: "I am a freelancer associated with an agency",
        value: 2,
    },
];
const AgencyPage = () => {
    const [error, setError] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const handleExperienceTab = (label) => {
        setError(false);
        setSelectedTab(label);
    };
    const navigate = useNavigate();
    console.log("experienceData?.label", selectedTab);
    return (
        <OnboardingContainer
            title={"Please define yourself to us before we start."}
            subtext={
                "In order for us to comprehend and characterise your function, choose the option that most accurately describes you."
            }
            imgSrc={introduction}
        >
            <Row gutter={[16, 16]} className="margin-t3">
                {experienceData?.map((exp) => (
                    <Col span={12} xs={24} sm={12} lg={24}>
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
            {selectedTab === 1 ? (
                <GlobalButton
                    type="primary"
                    block
                    htmlType="submit"
                    className="margin-t3"
                    onClick={() => navigate("/")}
                >
                    Submit
                </GlobalButton>
            ) : (
                <GlobalButton
                    type="primary"
                    block
                    htmlType="submit"
                    className="margin-t3"
                    onClick={() => navigate("/onboarding/agency-details")}
                >
                    Submit
                </GlobalButton>
            )}
            {error && (
                <ErrorText className="margin-t1">
                    Please select one option
                </ErrorText>
            )}
        </OnboardingContainer>
    );
};
export default AgencyPage;
