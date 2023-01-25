import React, { useState } from "react";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import selectSkills from "../../../assets/images/freelancer/selectSkills.svg";
import PropTypes from "prop-types";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { Form, Space } from "antd";
import GlobalModal from "../../../shared/GlobalModal";
import {
  AddSkillsAction,
  CheckTab,
  JustifyFlexContainer,
  OnboardFormContainer,
  OnboardInput,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { addSkills } from "../../../api/freelancer/onboardAPIs";

const skillsData = [
  {
    id: 0,
    label: "C++",
  },
  {
    id: 1,
    label: "Java",
  },
  {
    id: 2,
    label: "JavaScript",
  },
  {
    id: 3,
    label: "Nodejs",
  },
  {
    id: 4,
    label: "Python",
  },
  {
    id: 5,
    label: "Ruby on Rails",
  },
  {
    id: 6,
    label: "React Native",
  },
  {
    id: 7,
    label: "Springboot",
  },
  {
    id: 8,
    label: "Flutter",
  },
  {
    id: 9,
    label: "ANGULAR",
  },
  {
    id: 10,
    label: "Kotlin",
  },
];

function SelectSkills({ proceedToPrevTab, proceedToNextTab }) {
  const dispatch = useDispatch();
  const freelancerData = useSelector((state) => state.freelancer.userData);
  const [skills, setSkills] = useState(skillsData);
  const [skillInput, setSkillInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = (e) => {
    // function for submitting skills

    let tempData = [];
    for (const [key, value] of Object.entries(e)) {
      if (value === true) {
        tempData.push(key);
      }
    }

    const record = {
      skills: tempData,
    };
    dispatch(addSkills({ record, proceedToNextTab, dispatch }));
  };

  const addExtraSkills = () => {
    setSkills([
      ...skills,
      {
        id: skills?.length,
        label: skillInput,
      },
    ]);
    setModalVisible(false);
    setSkillInput("");
  };

  const handleCancelModal = () => {
    setSkillInput("");
    setModalVisible(false);
  };

  return (
    <OnboardingContainer
      imgSrc={selectSkills}
      title={"Choose the technologies in which you excel"}
      subtext={
        "This information can be a helpful way to understand an enterprise if you are fit for the role. Tap on a minimum of 4 skills."
      }
    >
      <GlobalModal
        title="Search to add more skills"
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        maskStyle={{
          backgroundColor: "rgba(70, 104, 214, 0.3)",
        }}
        width="25rem"
      >
        <OnboardInput
          placeholder="Search here"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <JustifyFlexContainer className="margin-t3">
          <GlobalButton block type="primary" onClick={addExtraSkills}>
            Add
          </GlobalButton>
          <GlobalButton block onClick={handleCancelModal}>
            Cancel
          </GlobalButton>
        </JustifyFlexContainer>
      </GlobalModal>

      <Form
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        className="margin-t2"
      >
        <Space size={[16]} wrap>
          {skills?.map((skill) => (
            <Form.Item
              key={skill?.id}
              name={skill?.label}
              valuePropName="checked"
            >
              <CheckTab showIcon={false}>{skill?.label}</CheckTab>
            </Form.Item>
          ))}
        </Space>
        <AddSkillsAction onClick={() => setModalVisible(true)}>
          +Add More Skills
        </AddSkillsAction>
        <OnboardFormContainer>
          <JustifyFlexContainer className="margin-t2">
            <GlobalButton block onClick={proceedToPrevTab}>
              Back
            </GlobalButton>
            <GlobalButton type="primary" block htmlType="sumbit">
              Submit
            </GlobalButton>
          </JustifyFlexContainer>
        </OnboardFormContainer>
      </Form>
    </OnboardingContainer>
  );
}

SelectSkills.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};

export default SelectSkills;
