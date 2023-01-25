import React, { useState } from "react";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import industrySector from "../../../assets/images/enterprise/industrySector.svg";
import PropTypes from "prop-types";
import { GlobalButton, GlobalSubText } from "../../../shared/GlobalComponents";
import { Space } from "antd";
import {
  CheckTab,
  ErrorText,
  JustifyFlexContainer,
  OnboardFormContainer,
  OnboardInput,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useNavigate } from "react-router-dom";
import GlobalModal from "../../../shared/GlobalModal";
import { useDispatch } from "react-redux";
import { addIndustrySector } from "../../../api/enterprise/onboardAPIs";

const industriesData = [
  {
    id: 0,
    label: "Technology",
  },
  {
    id: 1,
    label: "Infrastructure",
  },
  {
    id: 2,
    label: "FMCG",
  },
  {
    id: 3,
    label: "FinTech",
  },
  {
    id: 4,
    label: "Education",
  },
  {
    id: 5,
    label: "Logistics",
  },
  {
    id: 6,
    label: "E-Commerce",
  },
  {
    id: 7,
    label: "Others",
  },
];

function IndustrySector({ proceedToPrevTab }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [industryInput, setIndustryInput] = useState("");
  const [selectedTab, setSelectedTab] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false);

  const handleIndustryInput = (e) => {
    setIndustryInput(e.target.value);
  };

  const addIndustry = () => {
    setModalVisible(false);
  };

  const handleOthersTab = (label) => {
    setError(false);
    setSelectedTab(label);
    if (label === "Others") {
      setModalVisible(true);
    }
  };

  const handleSubmitIndustry = () => {
    if (selectedTab === null) {
      setError(true);
      return;
    }
    const record = {
      company_type: selectedTab,
    };
    dispatch(addIndustrySector({ record, navigate, dispatch }));
  };

  const handleCancelModal = () => {
    setSelectedTab(null);
    setModalVisible(false);
  };

  return (
    <OnboardingContainer
      imgSrc={industrySector}
      title={"How do you describe your company?"}
      subtext={
        "Select the industry sector that best represents your organization so that we can match you with the relevant freelancers in search results."
      }
    >
      <GlobalModal
        title="Company type"
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        maskStyle={{
          backgroundColor: "rgba(70, 104, 214, 0.3)",
        }}
      >
        <GlobalSubText align="center">
          Type the industry type/ category that best represents your
          organization so that we can match you with the relevant freelancers in
          search results.
        </GlobalSubText>
        <OnboardInput
          placeholder="Search here"
          onChange={(e) => handleIndustryInput(e)}
        />
        <JustifyFlexContainer className="margin-t3">
          <GlobalButton block type="primary" onClick={addIndustry}>
            Save
          </GlobalButton>
          <GlobalButton block onClick={handleCancelModal}>
            Cancel
          </GlobalButton>
        </JustifyFlexContainer>
      </GlobalModal>

      <Space size={[16, 16]} wrap className="margin-t1">
        {industriesData?.map((industry) => (
          <CheckTab
            showIcon={false}
            onChange={() => handleOthersTab(industry?.label)}
            checked={selectedTab === industry?.label}
          >
            {industry?.label}
          </CheckTab>
        ))}
      </Space>
      {error && (
        <ErrorText className="margin-t1">Please select your industry</ErrorText>
      )}
      <OnboardFormContainer>
        <JustifyFlexContainer className="margin-t3">
          <GlobalButton block onClick={proceedToPrevTab}>
            Back
          </GlobalButton>
          <GlobalButton type="primary" block onClick={handleSubmitIndustry}>
            Submit
          </GlobalButton>
        </JustifyFlexContainer>
      </OnboardFormContainer>
    </OnboardingContainer>
  );
}

IndustrySector.propTypes = {
  proceedToPrevTab: PropTypes.func,
};

export default IndustrySector;
