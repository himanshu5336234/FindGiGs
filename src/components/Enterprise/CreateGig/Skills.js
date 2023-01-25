import { Form, Space } from "antd";
import React, { useEffect, useState } from "react";
import { GlobalButton } from "../../../shared/GlobalComponents";
import GlobalModal from "../../../shared/GlobalModal";
import {
  AddSkillsAction,
  ErrorText,
  JustifyFlexContainer,
  OnboardInput,
} from "../../../shared/Onboarding/OnboardingComponents";
import { CreategIgChecktab, SubText, Title } from "./Stylesheet";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateGig } from "../../../api/enterprise/createGigApis";

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
    label: "Springbot",
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

function Skills({ proceedToPrevTab, proceedToNextTab }) {
  const [form] = Form.useForm();
  const [skills, setSkills] = useState(skillsData);
  const [skillInput, setSkillInput] = useState("");
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const gigData = useSelector((state) => state.createGig.gigData);

  useEffect(() => {
    gigData?.skills?.map((skill) => {
      form.setFieldsValue({
        [skill]: true,
      });
    });
  }, [gigData]);

  const onFinish = (e) => {
    // function for submitting skills

    let tempData = [];
    for (const [key, value] of Object.entries(e)) {
      if (value === true) {
        tempData.push(key);
      }
    }

    if (tempData.length < 4) {
      setError(true);
      return;
    }

    const record = {
      skills: tempData,
      gig_id: gigData?.id,
      title: gigData?.title,
      description: gigData?.description,
      attachments: ["www.logo.com"],
      payment_type: gigData?.payment_type,
      hours_per_day: gigData?.hours_per_week / 7,
      estimated_duration: gigData?.estimated_duration,
      string_duration: gigData?.string_duration,
    };

    dispatch(updateGig({ record, proceedToNextTab }));
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
    <div>
      <Title>Select the skills you are looking for</Title>
      <SubText align="left">
        Select a minimum of 4 skills for better matches.
      </SubText>
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
              <CreategIgChecktab
                showIcon={false}
                onChange={() => setError(false)}
              >
                {skill?.label}
              </CreategIgChecktab>
            </Form.Item>
          ))}
        </Space>
        <AddSkillsAction onClick={() => setModalVisible(true)}>
          +Add More Skills
        </AddSkillsAction>
        {error && <ErrorText>Please select atleast 4 skills</ErrorText>}
        <div className="creategig__actionContainer">
          <GlobalButton block onClick={proceedToPrevTab}>
            Back
          </GlobalButton>
          <GlobalButton type="primary" block htmlType="submit">
            Submit
          </GlobalButton>
        </div>
      </Form>
    </div>
  );
}

Skills.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};

export default Skills;
