import styled from "styled-components";
import { GlobalButton, GlobalTitle } from "../../../shared/GlobalComponents";
import backend from "../../../assets/images/enterprise/backend.svg";

export const Container = styled.div`
  .template__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .template__ActionIcon {
    font-size: 1.5rem;
  }

  .template__cardboxes {
    margin-top: 3rem;
    display: flex;
    gap: 1.2rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 900px) {
      flex-wrap: wrap;
    }
  }
`;

export const TemplateActionButton = styled(GlobalButton)`
  border: 1px dashed #393939;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.0625rem;
  letter-spacing: 0px;

  background-color: transparent;
  &.ant-btn {
    border-color: #c7c7c7;
    color: #393939;
  }
  &.ant-btn > .anticon {
    color: #4668d6;
    font-size: 1.2rem;
    margin-top: 2px;
  }
`;

export const TemplateTitle = styled(GlobalTitle)`
  font-size: 1.25rem;
  margin-bottom: 0;
`;

export const TemplateCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  gap: 1.3rem;
  width: 20%;
  height: 13rem;
  padding: 1rem;
  background-image: ${(props) =>
    props.bgImg ? `url(${props.bgImg})` : `url(${backend})`};
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 900px) {
    min-width: 12rem;
  }
  & > p {
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0em;
    color: #fff;
    margin-bottom: 0;
    text-align: center;
  }
  .card__icon {
    padding: 0.8rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
  }
`;
