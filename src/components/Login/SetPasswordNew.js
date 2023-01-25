import { Form } from "antd";
import React from "react";
import {
  GlobalButton,
  GlobalCard,
  GlobalPasswordInput,
  GlobalSubText,
  GlobalTitle,
} from "../../shared/GlobalComponents";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function SetNewPassword() {
  const onFinish = (e) => {
    // let record = {
    //   password: e?.password,
    //   confirmPassword: e?.confirmPassword,
    // };
  };
  return (
    <GlobalCard>
      <div>
        <GlobalTitle>Set New password</GlobalTitle>
        <GlobalSubText>
          <GlobalSubText>
            Your password must be different to your previously used password.
          </GlobalSubText>
        </GlobalSubText>
        <Form
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
          className="margin-t2"
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                pattern: new RegExp(/^\S*$/),
                message: "White space not allowed",
              },
              { required: true, message: "Password is required field" },
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
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <GlobalPasswordInput
              placeholder="Type your password here"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <GlobalButton type="primary" block className="margin-t2">
            Reset Password
          </GlobalButton>
        </Form>
      </div>
    </GlobalCard>
  );
}

export default SetNewPassword;
