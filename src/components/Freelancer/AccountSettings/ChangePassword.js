// import { Button, Card, Divider, Form, Space,Input } from "antd";
import { Button, Checkbox, Form, Input, Space, Card, Divider } from "antd";
import React, { useState } from "react";
import {
    GlobalButton,
    GlobalCard,
    GlobalPasswordInput,
    GlobalTextP1,
    GlobalTitle,
} from "../../../shared/GlobalComponents";
import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    LeftOutlined,
} from "@ant-design/icons";
import GlobalModal from "../../../shared/GlobalModal";
import PasswordChanged from "../../../assets/images/freelancer/changePassword.svg";
import styled from "styled-components";
import { resetPassword } from "../../../api/freelancer/onboardAPIs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const ActionModal = ({ modalVisible, setModalVisible }) => {
    return (
        <GlobalModal
            centered
            visible={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            width="25rem"
        >
            <ModalContainer
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src={PasswordChanged} alt="password changed" />
                <GlobalTitle>
                    Your password has been changed successfully
                </GlobalTitle>
            </ModalContainer>
        </GlobalModal>
    );
};
function ChangePassword({ onGoBack }) {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { isResetPassword } = useSelector((state) => state.freelancer);
    useEffect(() => {
        console.log("isResetPasswordisResetPassword", isResetPassword);
    }, []);
    const onFinish = (e) => {
        const payload = {
            freelancer: {
                current_password: e?.currentPassword,
                new_password: e?.password,
                confirm_password: e?.confirmPassword,
            },
        };
        console.log("recordrecord", payload);
        // resetPassword(record)
        dispatch(resetPassword({ payload }));
    };
    return (
        <GlobalCard>
            <div>
                <Space
                    size={5}
                    align="center"
                    className="cursor-pointer"
                    onClick={() => onGoBack(false)}
                >
                    <LeftOutlined
                        style={{
                            color: "#909090",
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}
                    />
                    <GlobalTextP1
                        className="margin-b0"
                        color="#909090"
                        weight="bold"
                    >
                        Change Password
                    </GlobalTextP1>
                </Space>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    className="margin-t2"
                    autoComplete="off"
                >
                    <Form.Item
                        label="Current Password"
                        name="currentPassword"
                        rules={[
                            {
                                pattern: new RegExp(/^\S*$/),
                                message: "White space not allowed",
                            },
                            {
                                required: true,
                                message: "Password is required field",
                            },
                            {
                                min: 8,
                                message:
                                    "Password must be minimum 8 characters.",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="New Password"
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
                            {
                                min: 8,
                                message:
                                    "Password must be minimum 8 characters.",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Retype Password"
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
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
                        <Input.Password />
                    </Form.Item>
                    {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox> */}
                    {/* </Form.Item> */}
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary">Cancel</Button>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {/* <Form
          form={form}
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
          className="margin-t2"
        >
          <Form.Item
            label="Current Password"
            name="currentPassword"
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
            label="New Password"
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
            label="Retype Password"
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
          <Form.Item>
            <FormButtons>
              <GlobalButton1
                type="primary"
                block
                className="margin-t2"
                onClick={onGoBack}
              >
                Cancel
              </GlobalButton1>
              <GlobalButton
                type="primary"
                block
                className="margin-t2"
                //  onClick={() => }
              >
                Reset
              </GlobalButton>
            </FormButtons>
          </Form.Item>
        </Form> */}
                <ActionModal
                    modalVisible={modalVisible}
                    setModalVisible={() => setModalVisible(true)}
                />
            </div>
        </GlobalCard>
    );
}
export default ChangePassword;
const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const FormButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;
const GlobalButton1 = styled(Button)`
    border-radius: 0.375rem;
    margin-right: 3rem;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0px;
    &.ant-btn-primary[disabled],
    .ant-btn-primary[disabled]:hover,
    .ant-btn-primary[disabled]:focus,
    .ant-btn-primary[disabled]:active {
        background-color: #dbe2fc;
        border: 1px solid #dbe2fc;
        color: white;
    }
    &.ant-btn {
        border-color: #4668d6;
        color: #4668d6;
    }
    &.ant-btn-primary {
        border-color: #4668d6;
        color: #fff;
    }
    & > img {
        margin-right: 10px;
        object-fit: contain;
    }
    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
        line-height: 0.9375rem;
    }
`;
