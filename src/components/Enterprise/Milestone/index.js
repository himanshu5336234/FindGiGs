import React from "react";
import { GlobalSubText, GlobalTextP2 } from "../../../shared/GlobalComponents";
import {
  Container,
  CustomCollapse,
  MilestoneBenefitsContainer,
  Title,
  UsingMilestoneContainer,
} from "./Stylesheet";
import {
  LeftOutlined,
  EyeOutlined,
  CrownOutlined,
  FileSyncOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import milestoneImg from "../../../assets/images/freelancer/milestoneImg.svg";
import { Col, Collapse, Grid, Row } from "antd";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const faqsJSON = [
  {
    id: 0,
    label: "When should I use Milestones?",
    ans: " We recommend using Milestones for bigger projects to allow for more flexibility in the smaller steps. Milestones offer you a reduced risk, and these per-task payments also give clients the advantage of tracking the progress of the projects.",
  },
  {
    id: 1,
    label: "When will I get paid?",
  },
  {
    id: 2,
    label: "How do revisions work with Milestones?",
  },
  {
    id: 3,
    label: "What is the maximum number of milestones allowd in a Gig?",
  },
  {
    id: 4,
    label: "Is the email verifivation necessary?",
  },
  {
    id: 5,
    label: "Can a Milestone order be canceled?",
  },
];

const MilestoneBenefits = ({ title, icon, children, bgColor, iconColor }) => {
  return (
    <MilestoneBenefitsContainer bgColor={bgColor} iconColor={iconColor}>
      <div className="milestoneBenefits__icon">{icon}</div>
      <GlobalTextP2 weight="600" className="margin-b0">
        {title}
      </GlobalTextP2>
      <GlobalSubText className="margin-b0">{children}</GlobalSubText>
    </MilestoneBenefitsContainer>
  );
};

const UsingMilestone = ({ index, title, children }) => {
  return (
    <UsingMilestoneContainer>
      <div className="usingMilestone__indexBox">
        <GlobalTextP2 color="#4668D6" className="margin-b0">
          {index}
        </GlobalTextP2>
      </div>
      <div className="usingMilestone_content">
        <GlobalTextP2 weight="600" className="margin-b0">
          {title}
        </GlobalTextP2>
        <GlobalSubText className="margin-b0">{children}</GlobalSubText>
      </div>
    </UsingMilestoneContainer>
  );
};

function Milestone() {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  return (
    <Container>
      <GlobalSubText
        weight="bold"
        className="milestoneDetails__backAction"
        onClick={() => navigate("/home")}
      >
        <LeftOutlined style={{ marginRight: "1rem", color: "#0C0E17" }} />
        Back
      </GlobalSubText>
      <div className="milestoneDetails__head">
        <div className="milestoneDetails__headContent">
          <Title>What is a Milestone?</Title>
          <GlobalSubText>
            Now, you can add milestones directly to your Gig. Before hiring,
            clients will be able to examine your workflow and budget. This can
            assist clients in understanding your work approach, and you may be
            able to acquire clients with larger projects as a result. Show
            clients what they can anticipate and when they can expect it.
          </GlobalSubText>
        </div>
        <img
          src={milestoneImg}
          alt="begig__milestoneImg"
          className="milestoneDetails__headImg"
        />
      </div>
      <Title className="margin-t3">Milestone Benefits</Title>
      <Row gutter={[16, 16]}>
        <Col md={24} lg={8}>
          <MilestoneBenefits
            title={"Transparency"}
            bgColor="#E8FFEA"
            iconColor="#2DCB3D"
            icon={<EyeOutlined style={{ color: "#fff", fontSize: "28px" }} />}
          >
            Examine your clients projects and suggest milestones to manage their
            project and help them organize payments depending on your workflow.
          </MilestoneBenefits>
        </Col>
        <Col md={24} lg={8}>
          <MilestoneBenefits
            title={"Manage expectations"}
            bgColor="#F5EEFF"
            iconColor="#5F27BD"
            icon={<CrownOutlined style={{ color: "#fff", fontSize: "28px" }} />}
          >
            As you can split your project up into milestones your clients will
            know your deliveries with the structured updates through out the
            process. Any potential confusion or delays can be prevented using
            Milestone.
          </MilestoneBenefits>
        </Col>
        <Col md={24} lg={8}>
          <MilestoneBenefits
            title={"Clear objectives"}
            bgColor="#FFF2F7"
            iconColor="#FF5696"
            icon={
              <FileSyncOutlined style={{ color: "#fff", fontSize: "28px" }} />
            }
          >
            Each milestone will have a purpose, completion date, and set payment
            installment amount. These should be discussed and agreed upon by all
            the cleints you work with for your gig.
          </MilestoneBenefits>
        </Col>
      </Row>
      <Title className="margin-t3">Using Milestone</Title>
      <Row gutter={[16, 16]}>
        <Col md={24} lg={8}>
          <UsingMilestone index={1} title="Bid">
            To add your first milestone, Bid on your preferred project and
            suggest your milestones. Note: You can add up to 5 milestones.
          </UsingMilestone>
        </Col>
        <Col md={24} lg={8}>
          <UsingMilestone index={2} title="Set your Milestones">
            To add your first Milestone, we suggest you be as specific as
            possible in the milestone description and include details about your
            deliverables including duration & payment of each milestone.
          </UsingMilestone>
        </Col>
        <Col md={24} lg={8}>
          <UsingMilestone index={3} title="Get started">
            Once everyone has agreed to the Terms of the gig & milestones you
            can start your work.
          </UsingMilestone>
        </Col>
      </Row>
      <GlobalSubText className="margin-t3" color="#696969">
        <span style={{ fontWeight: "bold", color: "#E70000" }}>
          One important note:
        </span>{" "}
        An active milestone can't be edited, you'll need to discuss and agree to
        any changes amongst yourselves or you can contact our team for help at{" "}
        <span className="color-primary" style={{ fontWeight: "bold" }}>
          support@begig.io
        </span>
      </GlobalSubText>
      <Title className="margin-t3">FAQ</Title>
      <Row gutter={[16, 16]}>
        {faqsJSON?.map((item) => (
          <Col md={24} lg={12} key={item?.id}>
            <CustomCollapse
              isMobile={screens?.xs}
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  rotate={isActive ? 90 : 0}
                  style={{ color: "#4668D6", fontSize: "17px" }}
                />
              )}
              expandIconPosition="right"
            >
              <Panel header={item?.label} key={item?.id}>
                <p>{item?.ans}</p>
              </Panel>
            </CustomCollapse>
          </Col>
        ))}
      </Row>
      <Title className="margin-t3">Need a little more help?</Title>
      <GlobalSubText color="#696969">
        Contact the Customer Success Team! We're here to guide your project to
        success, starting with the perfect project partner! Contact us at{" "}
        <span className="color-primary" style={{ fontWeight: "bold" }}>
          support&begig.io
        </span>
        to get started!
      </GlobalSubText>
    </Container>
  );
}

export default Milestone;
