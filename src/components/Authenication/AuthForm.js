import { Checkbox, Form, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  GlobalButton,
  GlobalCard,
  GlobalInput,
  GlobalPasswordInput,
  GlobalSubText,
  GlobalTitle,
} from "../../shared/GlobalComponents";
import Google from "../../assets/images/common/GoogleLogo.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";

const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox + span {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.875rem;
    letter-spacing: 0px;
    text-align: left;
    color: #6d6d6d;
  }
  .ant-checkbox-inner {
    width: 12px;
    height: 12px;
  }
`;

const CustomSpan = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.875rem;
  letter-spacing: 0px;
  text-align: left;
  color: #4668d6;
  margin-bottom: 24px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function AuthForm({ type, authText, onClick, setTabIndex }) {
  const onFinish = (e) => {
    const record = {
      email: e?.email,
      password: e?.password,
    };
    onClick(record);
  };

  const googleHandler = async () => {
    provider.setCustomParameters({ prompt: "select_account" });

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, "user");
        // redux action? --> dispatch({ type: SET_USER, user });
        const record = {
          email: user?.email,
          password: user?.providerData[0].uid.toString(),
        };
        onClick(record);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleGoogleSignUp = () => {
    googleHandler();
  };
  return (
    <GlobalCard>
      <div>
        {type === "freelancer" && (
          <>
            <GlobalTitle>{authText} as a Freelancer</GlobalTitle>
            <GlobalSubText>
              Want to hire tech talent?{" "}
              <Link
                to={
                  authText === "Log in"
                    ? "/login/enterprise"
                    : "/signup/enterprise"
                }
              >
                {authText} as an Enterprise
              </Link>
            </GlobalSubText>
          </>
        )}
        {type === "enterprise" && (
          <>
            <GlobalTitle>{authText} as a Enterprise</GlobalTitle>
            <GlobalSubText>
              Are you looking for a Gig?{" "}
              <Link
                to={
                  authText === "Log in"
                    ? "/login/freelancer"
                    : "/signup/freelancer"
                }
              >
                {authText} as a Freelancer
              </Link>
            </GlobalSubText>
          </>
        )}
        <Form
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
          className="margin-t2"
        >
          {type === "enterprise" && (
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  pattern: new RegExp(
                    /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/
                  ),
                  message: "Please enter bussiness mail address",
                },
              ]}
            >
              <GlobalInput placeholder="Your email address" />
            </Form.Item>
          )}
          {type === "freelancer" && (
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Enter valid email address",
                },
              ]}
            >
              <GlobalInput placeholder="Your email address" />
            </Form.Item>
          )}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                pattern: new RegExp(/^\S*$/),
                message: "White space not allowed",
              },
              {
                required: true,
                message: "Password is required field",
              },
              { min: 8, message: "Password must be minimum 8 characters." },
            ]}
          >
            <GlobalPasswordInput
              placeholder="Type your password here"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          {authText === "Sign up" ? (
            <>
              <Form.Item
                className="margin-b0"
                valuePropName="checked"
                name="agree__policy"
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value) {
                        return Promise.reject(
                          new Error("This Field is required")
                        );
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
              >
                <CustomCheckbox>
                  By signing up you agree to our{" "}
                  <Link to={"#"}>Terms of service</Link>,{" "}
                  <Link to={"#"}>Terms of use</Link> and{" "}
                  <Link to={"#"}>Privacy policy</Link>
                </CustomCheckbox>
              </Form.Item>
              <Form.Item
                valuePropName="checked"
                name="wahtaspp_updates"
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value) {
                        return Promise.reject(
                          new Error("This Field is required")
                        );
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
              >
                <CustomCheckbox>
                  I agree to receive updates on Whatsapp
                </CustomCheckbox>
              </Form.Item>
            </>
          ) : (
            <Box>
              <Form.Item>
                <CustomCheckbox>Remember Me</CustomCheckbox>
              </Form.Item>
              <CustomSpan onClick={() => setTabIndex(1)}>
                Forgot Password?
              </CustomSpan>
            </Box>
          )}

          <Space direction="vertical" size={"small"} className="w-100">
            <GlobalButton type="primary" block htmlType="submit">
              {authText === "Sign up" ? "Create account" : "Log In"}
            </GlobalButton>
            <GlobalButton block onClick={handleGoogleSignUp}>
              <img src={Google} alt="goolgleLogo" /> {authText} with Google
            </GlobalButton>
          </Space>
        </Form>
        {authText === "Sign up" && (
          <GlobalSubText className="margin-t1">
            Already have an account?{" "}
            <Link
              to={
                type === "freelancer"
                  ? "/login/freelancer"
                  : "/login/enterprise"
              }
            >
              Log In Now
            </Link>
          </GlobalSubText>
        )}
        {authText === "Log in" && (
          <GlobalSubText className="margin-t1">
            Don't have an account?{" "}
            <Link
              to={
                type === "freelancer"
                  ? "/signup/freelancer"
                  : "/signup/enterprise"
              }
            >
              Register
            </Link>
          </GlobalSubText>
        )}
      </div>
    </GlobalCard>
  );
}

AuthForm.propTypes = {
  type: PropTypes.oneOf(["freelancer", "enterprise"]),
  authText: PropTypes.oneOf(["Log in", "Sign up"]),
  setSendOtp: PropTypes.func,
  setTabIndex: PropTypes.func,
};

export default AuthForm;
