import { Form, Space } from "antd";
import React, { useEffect, useState } from "react";
import { GlobalButton, GlobalTextP2 } from "../../../shared/GlobalComponents";
import GlobalModal from "../../../shared/GlobalModal";
import {
  AddSkillsAction,
  ErrorText,
  JustifyFlexContainer,
  OnboardInput,
} from "../../../shared/Onboarding/OnboardingComponents";
import {
  CreategIgChecktab,
  SubText,
  Title,
} from "../../Enterprise/CreateGig/Stylesheet";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
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

const ActionModal = ({ modalSuccessVisible, setModalSuccessVisible }) => {
  console.log("Action modal");
  return (
    <GlobalModal
      centered
      visible={modalSuccessVisible}
      onOk={() => setModalSuccessVisible(false)}
      onCancel={() => setModalSuccessVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      width="25rem"
    >
      <GlobalTextP2 weight="bold" align="center">
        Are you sure you want to deactivate your account?
      </GlobalTextP2>
      <JustifyFlexContainer className="margin-t2">
        <GlobalButton
          block
          type="primary"
          onClick={() => setModalSuccessVisible(false)}
        >
          No, I am not sure
        </GlobalButton>
        <GlobalButton block onClick={() => setModalSuccessVisible(false)}>
          Yes, I am sure
        </GlobalButton>
      </JustifyFlexContainer>
    </GlobalModal>
  );
};

function Skills({}) {
  const [form] = Form.useForm();
  const [skills, setSkills] = useState(skillsData);
  const [skillInput, setSkillInput] = useState("");
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const dispatch = useDispatch();
  const gigData = useSelector((state) => state.createGig.gigData);
  // useEffect(() => {
  //   gigData?.skills?.map((skill) => {
  //     form.setFieldsValue({
  //       [skill]: true,
  //     });
  //   });
  // }, [gigData]);
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
    // const record = {
    //   skills: tempData,
    //   gig_id: gigData?.id,
    //   title: gigData?.title,
    //   description: gigData?.description,
    //   attachments: ["www.logo.com"],
    //   payment_type: gigData?.payment_type,
    //   hours_per_day: gigData?.hours_per_week / 7,
    //   estimated_duration: gigData?.estimated_duration,
    //   string_duration: gigData?.string_duration,
    // };
    // dispatch(updateGig({ record, proceedToNextTab }));
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
      <Title>Skill.</Title>
      <SubText align="left" style={{ width: "50%" }}>
        This information can be a helpful way to understand an enterprise if you
        are fit for the role. Tap on a minimum of 4 skills.
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
        <div style={{ display: "flex", gap: "2rem", width: "40%" }}>
          <GlobalButton block>Back</GlobalButton>
          <GlobalButton
            type="primary"
            block
            htmlType="submit"
            onClick={
              !error && (() => setModalSuccessVisible(!modalSuccessVisible))
            }
          >
            Submit
          </GlobalButton>
        </div>
      </Form>
      <ActionModal
        modalSuccessVisible={modalSuccessVisible}
        setModalSuccessVisible={setModalSuccessVisible}
      />
    </div>
  );
}
Skills.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};
export default Skills;
