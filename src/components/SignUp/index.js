import React, { useState } from "react";
import PropTypes from "prop-types";
import EmailVerification from "./EmailVerification";
import Authentication from "../Authenication";
import AuthForm from "../Authenication/AuthForm";
import { useDispatch } from "react-redux";
import { signUpEnterprise, signUpFreelancer } from "../../api/authAPIs";

function SignUp({ type }) {
  const [sendOtp, setSendOtp] = useState(false);
  const dispatch = useDispatch();

  const handleProceed = (record) => {
    // function for sign up button
    if (type === "enterprise") {
      dispatch(signUpEnterprise({ record, setSendOtp: setSendOtp }));
    } else if (type === "freelancer") {
      dispatch(signUpFreelancer({ record, setSendOtp: setSendOtp }));
    }
  };

  return (
    <Authentication type={type}>
      {!sendOtp ? (
        <AuthForm type={type} authText="Sign up" onClick={handleProceed} />
      ) : (
        <EmailVerification />
      )}
    </Authentication>
  );
}

SignUp.propTypes = {
  type: PropTypes.oneOf(["freelancer", "enterprise"]),
};

export default SignUp;
