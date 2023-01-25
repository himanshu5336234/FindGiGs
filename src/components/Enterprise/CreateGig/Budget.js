import React, { useState } from "react";
import {
  BudgetBox,
  BudgetContainer,
  CustomCheckbox,
  RateInput,
  SubText,
  Title,
} from "./Stylesheet";
import { ClockCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { InfoCircleFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import {
  getBudgetDurationText,
  getRateText,
} from "../../../utils/commonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { updateGig } from "../../../api/enterprise/createGigApis";

const FreelancerBudget = ({
  title,
  name,
  budgetText,
  autoFocus = false,
  budgetDuration,
  rateText,
  handleRate,
  isSameBudget,
  rate,
}) => {
  return (
    <BudgetContainer>
      <div className="freelancerBudget__header">
        <p>{title}</p>
        <InfoCircleFilled className="freelancerBudget__info" />
      </div>
      <div className="budgetBox__container">
        <BudgetBox bg="#EFEFEF" bordered>
          <ClockCircleOutlined className="budget__durationIcon" />
          <div className="budget__durationDetails">
            <p>{budgetText}</p>
            <p>{budgetDuration}</p>
          </div>
        </BudgetBox>
        <BudgetBox bg="#fff" bordered>
          <DollarCircleOutlined className="budget__durationIcon" />
          <div className="budget__durationDetails">
            <p>{rateText}</p>
            {isSameBudget && name !== "freelancer1" ? (
              <p>{rate?.freelancer1}</p>
            ) : (
              <RateInput
                placeholder="0"
                name={name}
                value={rate?.name}
                bordered={false}
                autoFocus={autoFocus}
                onChange={handleRate}
                prefix={<span>Rs. </span>}
              />
            )}
          </div>
        </BudgetBox>
      </div>
    </BudgetContainer>
  );
};

function Budget({ proceedToPrevTab }) {
  const navigate = useNavigate();
  const [isSameBudget, setIsSameBudget] = useState(false);
  const [rate, setRate] = useState({
    freelancer1: "",
  });
  const gigData = useSelector((state) => state.createGig.gigData);
  const dispatch = useDispatch();

  const handleRate = (e) => {
    setRate({ ...rate, [e.target.name]: e.target.value });
  };

  const getTotal = () => {
    let total = 0;
    if (isSameBudget) {
      total += Number(rate?.freelancer1 * gigData?.no_fl_required);
      return total;
    }
    for (let [key, value] of Object.entries(rate)) {
      total += Number(value);
    }
    return total;
  };

  const handleNext = () => {
    let tempBudgetArray = [];
    if (isSameBudget) {
      tempBudgetArray = [
        ...new Array(gigData?.no_fl_required).fill(Number(rate?.freelancer1)),
      ];
    } else {
      for (const [key, value] of Object.entries(rate)) {
        tempBudgetArray.push(Number(value));
      }
    }
    let total = tempBudgetArray.reduce((prev, current) => prev + current, 0);
    const record = {
      freelancer_budget: [...tempBudgetArray],
      total_budget: total,
      gig_id: gigData?.id,
      title: gigData?.title,
      description: gigData?.description,
      file: "www.logo.com",
      payment_type: gigData?.payment_type,
      hours_per_day: gigData?.hours_per_week / 7,
      estimated_duration: gigData?.estimated_duration,
      string_duration: gigData?.string_duration,
      skills: gigData?.skills,
      no_fl_required: gigData?.no_fl_required,
      required_experience: gigData?.required_experience,
    };
    dispatch(updateGig({ record, navigate }));
  };

  return (
    <div className="budget">
      <div className="budget__header">
        <div>
          <Title>Budget Overview</Title>
          <SubText align="left">
            Here is a breakdown of the no. of hours and days worked with budget
            details.
          </SubText>
        </div>
        <BudgetBox>
          <ClockCircleOutlined className="budget__durationIcon" />
          <div className="budget__durationDetails">
            <p>Gig Duration</p>
            <p>3 Months</p>
          </div>
        </BudgetBox>
      </div>
      <CustomCheckbox
        className="margin-t1"
        checked={isSameBudget}
        onChange={() => setIsSameBudget(!isSameBudget)}
      >
        Same budget for all freelancers
      </CustomCheckbox>
      <Row gutter={[16]}>
        {new Array(gigData?.no_fl_required).fill(0).map((item, idx) => (
          <Col xs={24} sm={12} key={idx}>
            <FreelancerBudget
              title={"Freelancer " + (idx + 1)}
              name={"freelancer" + (idx + 1)}
              budgetText={getBudgetDurationText(gigData?.payment_type)}
              budgetDuration={3}
              rateText={getRateText(gigData?.payment_type)}
              rate={rate}
              autoFocus={true}
              handleRate={handleRate}
              isSameBudget={isSameBudget}
            />
          </Col>
        ))}
      </Row>
      <Row gutter={[16]}>
        <Col xs={24} sm={12}>
          <div className="total__budget">
            <p>Total Budget (In INR)</p>
            <p>Rs. {getTotal()}</p>
          </div>
        </Col>
      </Row>
      <div className="creategig__actionContainer">
        <GlobalButton onClick={proceedToPrevTab} block>
          Back
        </GlobalButton>
        <GlobalButton type="primary" onClick={handleNext} block>
          Next
        </GlobalButton>
      </div>
    </div>
  );
}

export default Budget;
