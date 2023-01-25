import { Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { ErrorText } from "../../../shared/Onboarding/OnboardingComponents";
import { CreategIgChecktab, NoteText, SubText, Title } from "./Stylesheet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateGig } from "../../../api/enterprise/createGigApis";

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

const numberOfFreelancers = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

function FreelancerInfo({ proceedToPrevTab, proceedToNextTab }) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedTabFreelancer, setSelectedTabFreelancer] = useState(1);
  const [error, setError] = useState({
    exp: false,
    freelancer: false,
  });
  const gigData = useSelector((state) => state.createGig.gigData);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedTab(gigData?.required_experience);
    setSelectedTabFreelancer(gigData?.no_fl_required);
  }, [gigData]);

  const handleExperienceTab = (label) => {
    setError({ ...error, exp: false });
    setSelectedTab(label);
  };

  const handleSubmit = () => {
    if (selectedTab === null) {
      setError({ ...error, exp: true });
      return;
    }
    if (selectedTabFreelancer === null) {
      setError({ ...error, freelancer: true });
      return;
    }

    const record = {
      required_experience: selectedTab,
      no_fl_required: selectedTabFreelancer,
      gig_id: gigData?.id,
      title: gigData?.title,
      description: gigData?.description,
      attachments: ["www.logo.com"],
      payment_type: gigData?.payment_type,
      hours_per_day: gigData?.hours_per_week / 7,
      estimated_duration: gigData?.estimated_duration,
      string_duration: gigData?.string_duration,
      skills: gigData?.skills,
    };

    dispatch(updateGig({ record, proceedToNextTab }));
  };

  const handleFreelancerTab = (label) => {
    setError({ exp: false, freelancer: false });
    setSelectedTabFreelancer(label);
  };
  return (
    <div>
      <Title>Set your freelancer preferences</Title>
      <SubText align="left" className="margin-b3">
        Select the experience level you are looking for and number of
        freelancers you would like to hire.
      </SubText>
      <p className="creategig__label">Experience</p>
      <Row gutter={[16, 16]} className="margin-b2">
        {experienceData?.map((exp) => (
          <Col xs={24} sm={6}>
            <CreategIgChecktab
              showIcon
              block
              onChange={() => handleExperienceTab(exp.value)}
              checked={selectedTab === exp.value}
            >
              {exp?.label}
            </CreategIgChecktab>
          </Col>
        ))}
      </Row>
      {error?.exp && (
        <ErrorText className="margin-t1">
          Please select your experience level
        </ErrorText>
      )}
      <p className="creategig__label">Freelancers Required</p>
      <Space>
        {numberOfFreelancers?.map((freelancer) => (
          <CreategIgChecktab
            onChange={() => handleFreelancerTab(freelancer.label)}
            checked={selectedTabFreelancer === freelancer.label}
          >
            {freelancer?.label}
          </CreategIgChecktab>
        ))}
      </Space>
      {error?.freelancer && (
        <ErrorText className="margin-t1">
          Please select number of freelancers
        </ErrorText>
      )}
      <NoteText>
        Please Note: If you wish to hire more than 5 freelancers please contact
        <br />
        our team to help you with your gig requirement at{" "}
        <Link to="#" className="text-underline">
          support@begig.io
        </Link>
      </NoteText>
      <div className="creategig__actionContainer">
        <GlobalButton onClick={proceedToPrevTab} block>
          Back
        </GlobalButton>
        <GlobalButton type="primary" onClick={handleSubmit} block>
          Next
        </GlobalButton>
      </div>
    </div>
  );
}

FreelancerInfo.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};

export default FreelancerInfo;
