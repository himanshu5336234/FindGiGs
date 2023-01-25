import { Button, Col, message, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { GlobalButton, GlobalSubText } from "../../../shared/GlobalComponents";
import { BudgetBox, Title } from "../CreateGig/Stylesheet";
import { ActionContainer, DetailCard } from "./StyleSheet";
import {
  PrinterOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  EditOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import {
  getBudgetDurationText,
  getRateText,
} from "../../../utils/commonFunctions";
import SuccessModal from "./SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getCreatedGigData,
  postGig,
} from "../../../api/enterprise/createGigApis";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setGigDataEmpty } from "../../../redux/enterprise/createGigSlice";

const gigDetailJson = {
  desc: "Take a lead in product and design ideation, planning & prioritisation. Also be responsible for the creative direction the product should take. Drive user research, create detailed user journeys and take appropriate design decisions backed by user-behaviour and data.",
  payment_method: "monthly",
  skills: ["Javascript", "JSON-RPC", "React Native", "Ruby on Rails"],
  freelancer_requirements: {
    exp_level: "Middle (2-3 Yrs.)",
    freelancer_reqd: 2,
  },
  total_budget: "20000",
  freelancer_budget: [
    {
      id: 1,
      months: 3,
      rate: 10000,
    },
    {
      id: 2,
      months: 3,
      rate: 10000,
    },
  ],
};

const DetailContainer = ({ title, children, create_tab_index }) => {
  const navigate = useNavigate();
  return (
    <DetailCard>
      <Button
        type="primary"
        className="detail__editButton"
        shape="circle"
        icon={<EditOutlined className="detail__editIcon" />}
        onClick={() =>
          navigate("/home/create-gig", { state: { create_tab_index } })
        }
      ></Button>
      <p className="detail__header">{title}</p>
      {children}
    </DetailCard>
  );
};

function ReviewGigDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { gigData, gigFreelancersData } = useSelector(
    (state) => state.createGig
  );

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");

    console.log(id, gigData?.id, "checking");

    if (id || gigData?.id) {
      dispatch(getCreatedGigData({ gigId: id || gigData?.id }));
    }
  }, []);
  console.log(gigData, gigFreelancersData);

  const getPaymentText = (value) => {
    if (value === 1) {
      return "Fixed";
    } else if (value === 2) {
      return "Hourly";
    } else if (value === 3) {
      return "Monthly";
    }
  };

  const getDuration = () => {
    let tempDurationArray = gigData?.string_duration.split(" ");
    if (gigData?.payment_type === 1) {
      return Number(tempDurationArray[0]);
    } else if (gigData?.payment_type === 2) {
      return Number(tempDurationArray[6]);
    } else if (gigData?.payment_type === 3) {
      return Number(tempDurationArray[0]);
    }
  };

  const handlePostGig = () => {
    dispatch(postGig({ gigId: gigData?.id, setModalVisible }));
    localStorage.setItem("gigCreated", false);
    dispatch(setGigDataEmpty());
  };

  const handleDraftGig = () => {
    message.success("Gig Drafted successfully");
  };

  return (
    <div>
      <SuccessModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={gigData.id}
      />
      <Title className="margin-b2">Review your gig details</Title>
      <Row gutter={[28, 28]}>
        {/* First Column */}

        <Col xs={24} sm={24} lg={8}>
          <Space direction="vertical" size={"large"}>
            {/* Description Card */}

            <DetailContainer title="Description" create_tab_index={1}>
              <GlobalSubText color="#0C0E17">
                {gigData.description}
              </GlobalSubText>
            </DetailContainer>

            {/* Payment Method Card */}

            <DetailContainer title="Payment Method" create_tab_index={2}>
              <div className="gigReview__payment">
                {gigData?.payment_type === 3 && (
                  <CalendarOutlined className="gigReview__paymentIcon" />
                )}
                {gigData?.payment_type === 2 && (
                  <ClockCircleOutlined className="gigReview__paymentIcon" />
                )}
                {gigData?.payment_type === 1 && (
                  <PrinterOutlined className="gigReview__paymentIcon" />
                )}
                <div className="gigReview__paymentText">
                  <p>{getPaymentText(gigData?.payment_type)}</p>
                  <GlobalSubText>
                    {gigData?.payment_type === 3 &&
                      "Pay the freelancer at the end of each month"}
                    {gigData?.payment_type === 2 &&
                      "Pay the freelancer according to number of hours he worked."}
                    {gigData?.payment_type === 1 &&
                      "Pay the freelancer a fixed amount on completion of gig."}
                  </GlobalSubText>
                </div>
              </div>
            </DetailContainer>

            {/* Duration Card */}

            <DetailContainer title="Duration" create_tab_index={3}>
              <Space size={32} className="margin-t1">
                <div className="gigReview__duration">
                  <p>{gigData?.hours_per_week / 7}</p>
                  <GlobalSubText color="#0C0E17">
                    Minimum hours per day
                  </GlobalSubText>
                </div>
                <div className="gigReview__duration">
                  <p>3</p>
                  <GlobalSubText color="#0C0E17">
                    Number of months
                  </GlobalSubText>
                </div>
              </Space>
            </DetailContainer>
          </Space>
        </Col>

        {/* Second Column */}

        <Col xs={24} sm={24} lg={8}>
          <Space direction="vertical" size={"large"}>
            {/* Skills Section Card */}

            <DetailContainer title="Skills" create_tab_index={4}>
              <Space wrap>
                {gigData?.skills?.map((skill, idx) => (
                  <div className="gigReview__tab">
                    <GlobalSubText
                      key={idx}
                      className="margin-b0"
                      color="#0C0E17"
                    >
                      {skill}
                    </GlobalSubText>
                  </div>
                ))}
              </Space>
            </DetailContainer>

            {/* Freelancer Requirements Card */}

            <DetailContainer
              title="Freelancer Requirements"
              create_tab_index={5}
            >
              <Space size="large">
                <div className="">
                  <GlobalSubText color="#696969">
                    Experience Level
                  </GlobalSubText>
                  <div className="gigReview__tab">
                    <GlobalSubText className="margin-b0" color="#0C0E17">
                      {gigDetailJson?.freelancer_requirements?.exp_level}
                    </GlobalSubText>
                  </div>
                </div>
                <div>
                  <GlobalSubText color="#696969">
                    Freelancers Required
                  </GlobalSubText>
                  <div className="gigReview__tab">
                    <GlobalSubText className="margin-b0" color="#0C0E17">
                      {gigData?.no_fl_required}
                    </GlobalSubText>
                  </div>
                </div>
              </Space>
            </DetailContainer>
          </Space>
        </Col>

        {/* Third Column */}

        <Col xs={24} sm={24} lg={8}>
          {/* budget Breakdown Card */}

          <DetailContainer title="Budget Breakdown" create_tab_index={6}>
            <div className="gigReview__budgetHeader">
              <p>Total Budget</p>
              <p>Rs. {gigData?.total_budget}</p>
            </div>
            <Row gutter={[16, 16]}>
              {gigFreelancersData?.map((budget, idx) => (
                <Col span={24} key={budget.id}>
                  <GlobalSubText>Freelancer {idx + 1}</GlobalSubText>
                  <div className="gigReview__budgetBoxContainer">
                    <BudgetBox bg="#EFEFEF" bordered>
                      <ClockCircleOutlined className="budget__durationIcon" />
                      <div className="budget__durationDetails">
                        <p>{getBudgetDurationText(gigData?.payment_type)}</p>
                        <p>{getDuration()}</p>
                      </div>
                    </BudgetBox>
                    <BudgetBox bg="#fff" bordered>
                      <DollarCircleOutlined className="budget__durationIcon" />
                      <div className="budget__durationDetails">
                        <p>{getRateText(gigData?.payment_type)}</p>
                        <p>Rs. {budget?.budget}</p>
                      </div>
                    </BudgetBox>
                  </div>
                </Col>
              ))}
            </Row>
          </DetailContainer>
        </Col>
      </Row>
      <ActionContainer>
        <GlobalButton block onClick={handleDraftGig}>
          Save to Drafts
        </GlobalButton>
        <GlobalButton type="primary" block onClick={handlePostGig}>
          Post Gig
        </GlobalButton>
      </ActionContainer>
    </div>
  );
}

export default ReviewGigDetails;
