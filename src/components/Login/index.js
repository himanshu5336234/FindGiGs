import React, { useState } from "react";
import styled from "styled-components";
import Authentication from "../Authenication";
import AuthForm from "../Authenication/AuthForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { LeftOutlined } from "@ant-design/icons";
import CheckMail from "./CheckMail";
import SetNewPassword from "./SetPasswordNew";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginEnterprise, loginFreelancer } from "../../api/authAPIs";

const ActionText = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: 0px;
  text-align: left;
  color: #4668d6;
  margin-bottom: 24px;
  cursor: pointer;
  margin-top: 1rem;
`;

function Login({ type }) {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();

  const handleProceed = (record) => {
    // function for login button
    if (type === "enterprise") {
      dispatch(loginEnterprise({ record, navigate }));
    } else if (type === "freelancer") {
      dispatch(loginFreelancer({ record, navigate }));
    }
  };

  return (
    <Authentication type={type}>
      {tabIndex === 0 && (
        <AuthForm
          type={type}
          authText="Log in"
          onClick={handleProceed}
          setTabIndex={setTabIndex}
        />
      )}
      {tabIndex === 1 && (
        <ForgotPasswordForm setTabIndex={setTabIndex} type={type} />
      )}
      {tabIndex === 2 && <CheckMail setTabIndex={setTabIndex} />}
      {tabIndex === 3 && <SetNewPassword />}
    </Authentication>
  );
}

export default Login;

export const BackToLogin = ({ onClick }) => {
  return (
    <ActionText onClick={onClick}>
      <LeftOutlined />
      <span>Back to Login</span>
    </ActionText>
  );
};
