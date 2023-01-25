import React from "react";
import { GlobalSubText } from "../../../shared/GlobalComponents";
import { Container, TemplateActionButton, TemplateTitle } from "./Stylesheet";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  JavaIcon,
  JsIcon,
  MicrosoftIcon,
  PythonIcon,
  ReactIcon,
} from "../../../shared/icons";
import TemplateCard from "./TemplateCard";
import frontend from "../../../assets/images/enterprise/frontend.svg";
import backend from "../../../assets/images/enterprise/backend.svg";
import devops from "../../../assets/images/enterprise/devops.svg";
import fullStack from "../../../assets/images/enterprise/fullStack.svg";
import dataAnalyst from "../../../assets/images/enterprise/dataAnalyst.svg";
import { useNavigate } from "react-router-dom";
import { setGigDataEmpty } from "../../../redux/enterprise/createGigSlice";
import { useDispatch } from "react-redux";

const templateCardData = [
  {
    id: 1,
    icon: <JavaIcon />,
    title: "Front End Developer",
    bgImg: frontend,
  },
  {
    id: 2,
    icon: <JsIcon />,
    title: "Back End Developer",
    bgImg: backend,
  },
  {
    id: 3,
    icon: <ReactIcon />,
    title: "Full Stack Developer",
    bgImg: fullStack,
  },
  {
    id: 4,
    icon: <MicrosoftIcon />,
    title: "Dev Ops",
    bgImg: devops,
  },
  {
    id: 5,
    icon: <PythonIcon />,
    title: "Data Analyst",
    bgImg: dataAnalyst,
  },
];

function ChooseTemplate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="template__header">
        <div className="template__headerText">
          <TemplateTitle>Choose a template to start with</TemplateTitle>
          <GlobalSubText>
            You may either choose a gig template as per role or create your own
            custom gig.
          </GlobalSubText>
        </div>
        <TemplateActionButton
          icon={<PlusCircleOutlined className="template__actionIcon" />}
          onClick={() => {
            navigate("/home/create-gig");
            localStorage.setItem("gigCreated", false);
            dispatch(setGigDataEmpty());
          }}
        >
          Create your own template
        </TemplateActionButton>
      </div>
      <div className="template__cardboxes">
        {templateCardData?.map((data) => (
          <TemplateCard
            key={data?.id}
            title={data?.title}
            Icon={data?.icon}
            bgImg={data?.bgImg}
            type={data?.id}
          />
        ))}
      </div>
    </Container>
  );
}

export default ChooseTemplate;
