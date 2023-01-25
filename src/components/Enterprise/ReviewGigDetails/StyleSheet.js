import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 20rem;
  margin-top: 4rem;
`;

export const DetailCard = styled.div`
  padding: 1rem;
  position: relative;
  border-radius: 0.375rem;
  background: #fff;
  .detail__header {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.0625rem;
    letter-spacing: 0px;
    text-align: left;
    color: #ff511a;
  }
  .detail__editButton {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -3%;
    top: -5%;
  }
  .detail__editIcon {
    color: #fff;
    font-size: 1rem;
  }
  .gigReview__payment {
    display: flex;
    gap: 0.5rem;
  }
  .gigReview__paymentIcon {
    color: #4668d6;
    font-size: 2.375rem;
  }
  .gigReview__paymentText {
    & > p:first-child {
      text-transform: capitalize;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .gigReview__duration {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & > p:first-child {
      font-size: 2.75rem;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0px;
      color: #4668d6;
      margin-bottom: 0;
    }
    & > p:last-child {
      margin-bottom: 0;
    }
  }
  .gigReview__tab {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    background: #edf1ff;
  }
  .gigReview__budgetHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    & > p:first-child {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0px;
      margin-bottom: 0;
      color: #696969;
    }
    & > p:last-child {
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 0px;
      margin-bottom: 0;
      color: #4668d6;
    }
  }
  .gigReview__budgetBoxContainer {
    display: flex;
    gap: 0.5rem;
    & > div {
      flex: 0.5;
    }
  }
`;

export const SuccessModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  .successModal__actionContainer {
    width: 60%;
    @media only screen and (max-width: 600px) {
      width: 80%;
    }
  }
`;
