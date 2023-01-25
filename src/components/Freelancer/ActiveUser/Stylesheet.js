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

  // .milestoneTracker__legend {
  //     display: flex;
  //     gap: 2rem;
  //     list-style-type: none;
  //     padding-left: 0;
  //     @media only screen and (max-width: 600px) {
  //         gap: 0.3rem;
  //         justify-content: space-between;
  //     }
  // & > li {
  //     font-size: 0.625rem;
  //     font-weight: 500;
  //     line-height: 1.3125rem;
  //     letter-spacing: 0px;
  //     color: #6e6b7b;
  //     display: flex;
  //     align-items: center;
  // }
  // }
  .milestoneTracker__milestoneTitle {
    display: inline-block;
    width: 7.5rem;
    text-align: center;
    @media only screen and (max-width: 600px) {
      width: 2.75rem;
    }
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

  gap: 10px;
  margin: 15px 0px;
  justify-content: center;

  padding: 13px;
  display: flex;
  align-items: center;

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
  width: 350px;
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

export const OngoingGigsCard = styled.div`
  padding: 20px;
  border-radius: 0.375rem;
  background: #fff;
  .description {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin: 20px 0px;
  }
  .ongoinGigsCard__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .OngoingHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      background: #e9eeff;
      border-radius: 6px;
      padding: 3px 8px;
      color: #4668d6;
      font-family: Montserrat;
      font-size: 11px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0px;
      text-align: center;
    }
    h3 {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 600;
      margin: 0px;
      letter-spacing: 0em;
      text-align: left;
    }
    p {
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 500;
      margin: 0px;
      letter-spacing: 0em;
      text-align: left;
      color: #696969;
    }
  }

  .progress-bar {
    .arrows {
      button {
        margin: 0px 5px;
        border: none;
        border-radius: 100%;
        padding: 5px 12px;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
`;

export const MilestoneTrackerCard = styled.div`
  border-radius: 6px;
  background: #fff;
  padding: 20px;

  .milestoneTracker__legend {
    display: flex;
    justify-content: flex-end;

    li {
      font-size: 10px;
      font-weight: 500;
      line-height: 1.3125rem;
      letter-spacing: 0px;
      color: #6e6b7b;
      display: flex;
      align-items: center;
    }
  }
`;

export const BidActivitie = styled.div`
  border-radius: 6px;
  color: #fff;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .circle-wrapper {
    display: flex;
    align-items: center;
    margin: 0px 5px;
    .circles {
      width: 15px;
      height: 15px;
      background-color: transparent;
      border: 3px solid #9c3ce7;
      border-radius: 50%;
      marginright: 5px;
    }

    p {
      font-family: Montserrat;
      font-size: 10px;
      color: black;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0px;
      text-align: left;
      margin: 0px 5px;
    }
  }
`;

export const RatingAndReviewsCard = styled.div`
  max-width: 270px;
  padding: 20px 30px;
  flex-direction: column;
  display: flex;
  flexdirection: column;
  justifycontent: space-evenly;
  background: #fff;
  border-radius: 6px;

  .first {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 32px;

    div {
      p {
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        letter-spacing: 0em;
        color: #696969;
      }
    }
  }
`;

export const SkillAssessmentCard = styled.div`
  padding: 20px 30px;
  flex-direction: column;
  display: flex;
  flexdirection: column;
  justifycontent: space-evenly;
  background: #fff;
  border-radius: 6px;

  .header {
    display: flex;
    border-bottom: 1px solid #e1e2e7;
    padding-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    img {
      height: 24px;
      width: 24px;
    }
    h3 {
      font-family: Montserrat;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0px;
    }
    p {
      font-family: Montserrat;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      margin: 0px;
      color: #696969;
    }
  }

  .GlobalSubText {
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: #6e6b7b;
    padding: 12px 0px;
    width: 247px;
  }
`;

export const InvoicingCard = styled.div`
  background: #fff;
  border-radius: 6px;
  .invoicing__card {
    padding: 20px;

    .invoicing__paymentDetailsContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .invoicing__paymentDetailsContainer2 {
      padding: 30px 0px;
    }
    .invoicing__paymentHistoryHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
export const PaymentCard= styled.div`

padding: 20px 30px;
background: #fff;
border-radius: 6px;

h3{
  font-family: Montserrat;
font-size: 30px;
font-weight: 700;
line-height: 37px;
letter-spacing: 0px;
text-align: left;
margin: auto;
}

p{
  font-family: Montserrat;
font-size: 10px;
font-weight: 500;
line-height: 12px;
letter-spacing: 0em;
text-align: left;

}

`