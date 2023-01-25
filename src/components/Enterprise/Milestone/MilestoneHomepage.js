import React, { useState } from "react";
import styled from "styled-components";
import illustration from "../../../assets/images/freelancer/milestoneHomepage.svg";
import { Button, Input, Modal, Progress } from "antd";
import {
  GlobalInput,
  GlobalTextArea,
  GlobalTextP5,
  GlobalTitle,
} from "../../../shared/GlobalComponents";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { CustomBreadcrumb } from "../FreelancerProfile/Stylesheet";
import { Breadcrumb } from "antd";
import { DummyData } from "../FreelancerProfile/SendOffer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  creatMilestone,
  getMilestoneList,
} from "../../../api/enterprise/gigsApis";
import useSelection from "antd/lib/table/hooks/useSelection";
import { Form } from "antd";
const GlobalModal = styled(Modal)`
  .ant-modal {
    width: ${(props) => (props.width ? props.width : "auto")};
  }
  .ant-modal-header {
    border-radius: 0.625rem;
    text-align: center;
    border-bottom: none;
  }
  .ant-modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.1875rem;
    letter-spacing: 0px;
    @media only screen and (max-width: 600px) {
      font-size: 1.1875rem;
      font-weight: 700;
      line-height: 1.875rem;
      letter-spacing: 0px;
    }
  }
  .ant-modal-close-x {
    display: none;
  }
  .ant-modal-footer {
    display: none;
  }
  .ant-modal-content {
    border-radius: 0.625rem;
    padding: 1rem;
  }
`;
const MilestoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const Title = styled.div`
  margin-left: 2rem;
`;
const GlobalSubText = styled.p`
  font-size: 0.625rem;
  font-weight: ${(props) => (props.weight === "bold" ? "600" : "500")};
  line-height: 1.375rem;
  letter-spacing: 0px;
  margin-bottom: ${(props) => (props.margin ? "3rem" : "0")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#6d6d6d")};
`;
const GlobalTextP2 = styled.p`
  font-size: 1rem;
  font-weight: ${(props) => (props.weight ? props.weight : "700")};
  line-height: 1.25rem;
  letter-spacing: 0em;
  text-align: "center";
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
const MilestoneInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .ant-row.ant-form-item {
    width: 48% !important;
  }
`;
const MilestoneInput = styled(Input)`
  border-radius: 6px;
`;
const GlobalButton = styled(Button)`
  border-radius: 0.375rem;
  border-style: ${(props) => props.borderStyle && "dashed"};
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0px;
  margin-top: 1rem;
  &.ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    background: ${(props) => (props.background ? "#dbe2fc" : "#4668D6")};
    border: 1px solid #dbe2fc;
    color: white;
  }
  &.ant-btn {
    border-color: #4668d6;
    color: #4668d6;
  }
  &.ant-btn-primary {
    border-color: #4668d6;
    color: #fff;
  }
  & > img {
    margin-right: 10px;
    object-fit: contain;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    line-height: 0.9375rem;
  }
`;
const AllMilestone = styled.div`
  margin: 2rem;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p,
    button {
      margin: 0;
    }
  }
  .more_details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    .details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .image_icon {
        width: 25px;
        height: 25px;
      }
      .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.3rem;
        p {
          margin: 0;
        }
        .title {
          font-size: 0.75rem;
          color: #696969;
        }
        .des {
          font-size: 0.85rem;
        }
      }
    }
  }
  .cards {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    margin-top: 3rem;
    margin-left: 3rem;
  }
`;
const MileStoneCard = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  max-width: 30rem;
  position: relative;
  .pillers {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .piller {
      width: 15.82px;
      height: 15.82px;
      background: #a6a6a6;
      box-shadow: 0 0 0 10px #cdcdcd;
      border-radius: 50%;
      z-index: 1;
    }
    .bar {
      width: 30%;
      margin: auto;
      height: calc(100% + 2rem);
      background: linear-gradient(to bottom, #c0ffdd 50%, #e8e8e8 50%);
      background-size: 100% 200%;
      background-position: bottom;
      transition: all 0.5s ease-out;
    }
    .bar:hover {
      background-position: top;
    }
  }
  .Content {
    display: flex;
    flex-direction: column;
    p {
      line-height: 1.3;
    }
    .gap {
      margin: 1rem 0;
    }
  }
  .notStart {
    background: #eaeaea;
    border-radius: 2px;
    color: #898989;
  }
  .edit {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
  }
`;
const MilestoneHomepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gigId } = useParams();
  const [form] = Form.useForm();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const milestoneList = useSelector(
    (state) => state.gigsEnterprise.milestoneList
  );
  const success = useSelector(
    (state) => state.gigsEnterprise.creatMilestoneSuccess
  );
  console.log(milestoneList, success, "milestoneList");
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    dispatch(getMilestoneList({ gigId }));
  }, [success]);
  const onFinish = (e) => {
    const gigs = {
      id: gigId,
    };
    console.log({ gigs, ...e }, "form");
    dispatch(creatMilestone({ gigs, ...e }));
    setIsModalOpen(false);
  };
  return (
    <>
      <Title>
        <GlobalTitle weight="600" className="margin-b0">
          Your milestones
        </GlobalTitle>
        <CustomBreadcrumb separator={">"}>
          <Breadcrumb.Item>
            <Link to="/home/explore-talent">Explore</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>View Gig</Breadcrumb.Item>
          <Breadcrumb.Item>Milestone timeline</Breadcrumb.Item>
        </CustomBreadcrumb>
      </Title>
      {milestoneList ? (
        <AllMilestone>
          <div className="wrapper">
            <div>
              <GlobalTitle weight="600" className="margin-b0">
                You don’t have any milestones for you gig
              </GlobalTitle>
              <GlobalSubText className="margin-b0" margin="margin">
                What are milestones and how do they work?
                <a onClick={() => navigate("/home/milestone-details")}>
                  Learn More
                </a>
              </GlobalSubText>
            </div>
            <GlobalButton onClick={showModal} borderStyle="dashed" background>
              + Add Milestone
            </GlobalButton>
          </div>
          <div className="cards">
          
            <MileStoneCard>
              <div className="pillers">
                <span className="piller"></span>
                <div className="bar"></div>
              </div>
              <Link to="/home/explore-talent">
                <img
                  className="edit"
                  src={DummyData[0].icon}
                  alt="edit milestone"
                />
              </Link>
              <div className="Content">
                <div>
                  <Button className="notStart" size="small">
                    Not started
                  </Button>
                </div>
                <div className="gap">
                  <GlobalTextP2 weight="700" className="margin-b0">
                    Milestone 1
                  </GlobalTextP2>
                  <GlobalSubText>{milestoneList.description}</GlobalSubText>
                </div>
                <div class="more_details">
                  <div class="details">
                    <div className="image_icon">
                      <img src={""} alt="" width="100%" height="100%" />
                    </div>
                    <div className="content">
                      <GlobalTextP5 className="title">Duration</GlobalTextP5>
                      <GlobalTextP2 className="des">
                        {milestoneList.estimated_duration} Months
                      </GlobalTextP2>
                    </div>
                  </div>{" "}
                  <div class="details">
                    <div className="image_icon">
                      <img src={""} alt="" width="100%" height="100%" />
                    </div>
                    <div className="content">
                      <GlobalTextP5 className="title">Budget</GlobalTextP5>
                      <GlobalTextP2 className="des">
                        {" "}
                        Rs {milestoneList.estimated_budget}
                      </GlobalTextP2>
                    </div>
                  </div>
                </div>
              </div>
            </MileStoneCard>
          </div>
        </AllMilestone>
      ) : (
        <MilestoneContainer>
          <Modal
            visible={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskStyle={{
              backgroundColor: "rgba(70, 104, 214, 0.3)",
              width: "100%",
            }}
            footer={null}
            maskClosable={false}
          >
            <Form
              form={form}
              autoComplete="off"
              layout="vertical"
              onFinish={onFinish}
              className="margin-t2"
            >
              <GlobalTextP2 weight="700" style={{ textAlign: "center" }}>
                Milestone Details
              </GlobalTextP2>
              <div>
                <GlobalSubText>MileStone Description</GlobalSubText>
                <Form.Item
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please enter description.",
                    },
                    {
                      max: 50,
                      message: "",
                    },
                  ]}
                >
                  <GlobalInput placeholder="Type here" />
                </Form.Item>
                {/* <GlobalTextArea /> */}
                <GlobalSubText>Gig Delivery Time</GlobalSubText>
                <MilestoneInputContainer>
                  <Form.Item
                    name="estimated_duration"
                    rules={[
                      {
                        required: true,
                        message: "Please enter delivery time.",
                      },
                      {
                        max: 50,
                        message: "",
                      },
                    ]}
                  >
                    <GlobalInput placeholder="0" />
                  </Form.Item>
                  <Form.Item
                    rules={[
                      {
                        required: false,
                        message: "Please enter amount.",
                      },
                      {
                        max: 50,
                        message: "",
                      },
                    ]}
                  >
                    <GlobalInput placeholder="Months" disabled />
                  </Form.Item>
                </MilestoneInputContainer>
                <GlobalSubText>Amount</GlobalSubText>
                <Form.Item
                  name="estimated_budget"
                  rules={[
                    {
                      required: true,
                      message: "Please enter amount.",
                    },
                    {
                      max: 50,
                      message: "",
                    },
                  ]}
                >
                  <GlobalInput placeholder="Rs 0" />
                </Form.Item>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <GlobalButton type="primary" htmlType="submit" size="md">
                  Add Milestone
                </GlobalButton>
              </div>
            </Form>
          </Modal>
          <div>
            <GlobalTitle weight="600" className="margin-b0">
              You don’t have any milestones for you gig
            </GlobalTitle>
            <GlobalSubText className="margin-b0" margin="margin">
              What are milestones and how do they work?
              <a onClick={() => navigate("/home/milestone-details")}>
                Learn More
              </a>
            </GlobalSubText>
          </div>
          <img src={illustration} alt="illustration" />
          <GlobalButton onClick={showModal} borderStyle="dashed" background>
            + Add Milestone
          </GlobalButton>
        </MilestoneContainer>
      )}
    </>
  );
};
export default MilestoneHomepage;
