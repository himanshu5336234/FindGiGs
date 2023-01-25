import { Progress } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  .activeUser__gigStatus {
    margin-bottom: 1rem;
  }

  .ongoing__actionButton {
    border: none;
    background: #e9eeff;
    border-radius: 50%;
    display: flex;
    height: 1.375rem;
    width: 1.375rem;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .ongoinGigs__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .bidActivities__graph {
    border-radius: 0.375rem;
    background: #fff;
    /* padding: 1rem; */
    width: 100%;
    margin-top: 1rem;
    height: 15rem;
  }
  .bidActivities__legend {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    margin-left: auto;
  }
  .recharts-legend-wrapper {
    display: flex;
  }
  .milestoneTracker__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }
  .milestoneTracker__card {
    border-radius: 0.375rem;
    background: #fff;
    padding: 1rem;
    margin-top: 1rem;
  }
  .milestoneTracker__legend {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    padding-left: 0;
    @media only screen and (max-width: 600px) {
      gap: 0.3rem;
      justify-content: space-between;
    }
    & > li {
      font-size: 0.625rem;
      font-weight: 500;
      line-height: 1.3125rem;
      letter-spacing: 0px;
      color: #6e6b7b;
      display: flex;
      align-items: center;
    }
  }
  .milestoneTracker__milestoneTitle {
    display: inline-block;
    width: 7.5rem;
    text-align: center;
    @media only screen and (max-width: 600px) {
      width: 2.75rem;
    }
  }
  .invoicing__card {
    border-radius: 0.375rem;
    padding: 1rem;
    background: #fff;
    margin-top: 1rem;
  }
  .invoicing__paymentDetailsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .invoicing__paymentHistoryHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ratingAndReviews__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .reviewAndRatings__card {
    border-radius: 0.375rem;
    padding: 1rem;
    background: #fff;
    margin-top: 1rem;
  }
  .invoicing__paymentData {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
  .invoicing__noPayments {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .reviewAndRatings__tabHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LegendText = styled.li`
  color: #6e6b7b;
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 1.3125rem;
  letter-spacing: 0px;
  display: flex;
  align-items: center;

  .legend__bullet {
    width: 10px;
    height: 10px;
    margin-right: 10px;
    display: inline-block;
    border-radius: 50%;
    background-color: ${(props) => props.color && props.color};
  }
`;

export const Title = styled.p`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: 0em;
`;

export const GigStatusContainer = styled.div`
  border-radius: 0.375rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${(props) => props.bgColor && props.bgColor};
  .gigStatus__icon {
    border-radius: 50%;
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.iconColor && props.iconColor};
  }
  .gigStatus__content {
    & > p:first-child {
      font-size: 1.875rem;
      font-weight: 600;
      line-height: 2.3125rem;
      letter-spacing: 0px;
      color: #0c0e17;
      margin-bottom: 0;
    }
  }
`;

export const OngoingGigsCard = styled.div`
  border-radius: 0.375rem;
  background: #fff;
  padding: 1rem;
  height: 15rem;
  .ongoinGigsCard__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ongoinGigsCard__status {
    padding: 0.3rem 1rem;
    font-size: 0.6875rem;
    font-weight: 600;
    line-height: 1.125rem;
    letter-spacing: 0px;
    border-radius: 0.25rem;
    text-align: center;
    color: #4668d6;
    margin-bottom: 0;
    background-color: ${(props) =>
      props.status === "In Progress" ? "#EBF0FF" : "#EBEBEB"};
    color: ${(props) =>
      props.status === "In Progress" ? "#4668D6" : "#0C0E17"};
    & > p {
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1.125rem;
      letter-spacing: 0px;
      margin-bottom: 0;
    }
  }
`;

export const LegendDot = styled.span`
  width: 0.5625rem;
  height: 0.5625rem;
  background: ${(props) => props.bgColor && props.bgColor};
  margin-right: 10px;
  display: inline-block;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    margin-right: 4px;
  }
`;

export const CustomProgress = styled(Progress)`
  .ant-progress-steps-outer {
    gap: 0.2rem;
  }

  .ant-progress-steps-item {
    width: 7.5rem !important;
    height: 1.25rem !important;
    border-radius: 0.125rem;
    @media only screen and (max-width: 600px) {
      width: 2.75rem !important;
    }
  }
  .ant-progress-text {
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.4375rem;
    letter-spacing: 0px;
    text-align: left;
    color: #696969;
  }
`;

export const InvoiceProgress = styled(Progress)`
  .invoicing__paymentPercentText {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TabSwitch = styled.div`
  border-radius: 6px;
  background-color: ${(props) => (props.bgColor ? "#E9EEFF" : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const OngoingGigsProgress = styled(Progress)`
  .ant-progress-bg {
    height: 24px !important;
  }
  .ant-progress-text {
    position: absolute;
    left: 10px;
    top: 4px;
    font-size: 0.625rem;
    font-weight: 600;
    line-height: 1.125rem;
    letter-spacing: 0px;
    color: #fff;
  }

  &.ant-progress-show-info .ant-progress-outer {
    margin-right: 0;
    padding-right: 0;
  }
`;

export const IconContainer = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8edff;
  border-radius: 50%;
  .notStarted__icon {
    color: #4668d6;
    font-size: 1rem;
  }
`;
