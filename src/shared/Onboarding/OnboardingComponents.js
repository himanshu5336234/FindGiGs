import { Checkbox, Steps, Upload } from "antd";
import styled from "styled-components";
import {
  GlobalContainer,
  GlobalInput,
  GlobalSubText,
  GlobalTextArea,
} from "../GlobalComponents";

const { Step } = Steps;
const { Dragger } = Upload;

export const OnboardInput = styled(GlobalInput)`
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  &::placeholder {
    color: #6d6d6d;
  }
`;

export const OnboardPhoneInput = styled(OnboardInput)`
  .phone-prefix {
    border-right: 1px solid #0c0e17;
    padding-right: 10px;
    color: #0c0e17;
  }

  .ant-input {
    margin-left: 10px;
    background-color: #f5f5f5;
  }
`;

export const OnboardTextArea = styled(GlobalTextArea)`
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  &::placeholder {
    color: #6d6d6d;
  }
`;

export const StepperContainer = styled(GlobalContainer)`
  width: ${(props) =>
    props.width ? `min(80%, ${props.width}px)` : "min(80%, 940px)"};
  padding: 1rem 0;
`;

export const CustomStepper = styled(Steps)`
  .ant-steps-item.ant-steps-item-active::before {
    left: 17%;
    width: 30%;
    height: 2px;
  }

  .ant-steps-item::after {
    display: none;
  }

  .ant-steps-item {
    @media only screen and (max-width: 1000px) {
      padding-left: 0px !important;
    }
  }

  &.ant-steps-small .ant-steps-item-tail {
    @media only screen and (max-width: 1000px) {
      top: 62%;
      display: inline;
      left: 7%;
      width: 100%;
    }
    @media only screen and (max-width: 700px) {
      left: 20%;
    }
  }
`;

export const CustomStep = styled(Step)`
  .ant-steps-item-container {
    outline: none;
    display: flex;
    align-items: center;
  }

  .ant-steps-item-title::after {
    display: none;
    @media only screen and (max-width: 1000px) {
      display: inline-block;
    }
  }
  .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
    display: none;
  }

  .ant-steps-item-tail::after {
    height: 1px;
    background-color: transparent !important;
    border-top: 2px dashed #b7b7b7;
  }

  &.ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    border-top: 2px dashed #3acc6c;
  }

  &.ant-steps-item-process
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    border-top: 2px dashed #b7b7b7;
  }

  .ant-steps-item-title {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 2.1875rem;
    letter-spacing: 0px;
    text-align: left;
    color: #4b4b4b;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

export const CurrentStepIcon = styled.span`
  width: 20px;
  height: 20px;
  margin: 8.5px 6px 0 0;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.current === props.id ? "2px solid #4668d6" : "2px solid #B7B7B7"};
  & > span {
    display: ${(props) => (props.current === props.id ? "inline" : "none")};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #4668d6;
  }
`;

export const OnboardFormContainer = styled.div`
  width: 70%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const JustifyFlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const AddBioLength = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  line-height: 0.8125rem;
  letter-spacing: 0px;
  color: #6d6d6d;
`;

export const CheckTab = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    border-radius: 0.375rem;
    padding: 1rem;
    background: #f5f5f5;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.0625rem;
    letter-spacing: 0em;
    text-align: center;
    color: #6d6d6d;
    border: 1px solid #f5f5f5;
    width: ${(props) => (props.block ? "100%" : "auto")};

    @media only screen and (max-width: 600px) {
      font-size: 0.75rem;
      line-height: 0.9375rem;
    }
  }

  &.ant-checkbox-wrapper-checked {
    color: #4668d6;
    background: #f1f4ff;
    border-color: #4668d6;
  }

  .ant-checkbox {
    border-radius: 50%;
    margin-right: 10px;
    display: ${(props) => (props.showIcon ? "inline" : "none")};
  }
  .ant-checkbox-inner {
    border-radius: 50%;
    border-color: #6d6d6d;
  }

  &.ant-checkbox-wrapper.ant-checkbox-wrapper-in-form-item
    input[type="checkbox"] {
    border-radius: 50%;
  }
`;

export const AddSkillsAction = styled(GlobalSubText)`
  text-decoration: underline;
  cursor: pointer;
  color: #4768d6;
  font-weight: 600;
`;

export const OnboardUpload = styled(Dragger)`
  &.ant-upload.ant-upload-drag {
    border-radius: 0.375rem;
    border-color: #4668d6;
  }
  &.ant-upload.ant-upload-drag .ant-upload-drag-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0px;
    color: #a6a6a6;
    & > span:last-child {
      color: #4668d6;
      font-weight: 600;
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 1.2rem;
  .content-textContainer {
    flex: 0.95;
    & > p:first-child {
      font-size: 1rem;
      font-weight: 700;
      line-height: 2.1875rem;
      letter-spacing: 0px;
      text-align: left;
      color: #0c0e17;
    }
    & > p:last-child {
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.25rem;
      letter-spacing: 0px;
      text-align: left;
      color: #222222;
    }
  }
`;
export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.375rem;
  height: 3.375rem;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor && props.bgColor};
  box-shadow: ${(props) => props.shadow && `2px 6px 15px 3px ${props.shadow}`};
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  .ant-switch-checked {
    background: #4ccb86;
  }
  & > span {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0px;
    text-align: left;
    color: #6d6d6d;
    margin-left: 1rem;
  }
`;

export const SuccessAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
`;

export const EditRemoveUpload = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  .fileName {
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #f6f6f6;
    padding: 0.7rem 1rem;
    border-radius: 0.375rem;
    flex-grow: 1;
  }

  .upload_action_button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    height: 2.8rem;
    width: 2.8rem;
  }
  .upload_edit {
    background-color: #f1f4ff;
    border-color: #f1f4ff;
  }
  .upload_delete {
    background-color: #ffeded;
    border-color: #ffeded;
  }
`;

export const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-bottom: 0;
`;
