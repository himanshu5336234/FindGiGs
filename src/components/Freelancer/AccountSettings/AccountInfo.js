import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { AccountInput, AccountTextArea } from "./Stylesheet";
import Editicon from "../../../assets/images/freelancer/editicon.svg";
import {
    GlobalButton,
    GlobalSubText,
    GlobalTextP2,
    GlobalTextP3,
    GlobalTextP4,
    GlobalTextP5,
    GlobalTitle,
    GlobalInput,
} from "../../../shared/GlobalComponents";
import styled from "styled-components";
import GlobalModal from "../../../shared/GlobalModal";
import { JustifyFlexContainer } from "../../../shared/Onboarding/OnboardingComponents";
import ChangePassword from "../../Freelancer/AccountSettings/ChangePassword";
import OtpInput from "react-otp-input";
import Security from "./Security";
// import {getAccountSetting} from "../../../api/freelancer/onboardAPIs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    getAccountSetting,
    postchangemail,
    emailvarifyOtp,
} from "../../../api/freelancer/onboardAPIs";
import { postAccountInfo } from "../../../api/freelancer/gigsAPIs";
const ActionModal = ({ modalVisible, setModalVisible }) => {
    const [otp, setOtp] = useState("");
    console.log("OTP", otp);
    const [newEmail, setNewEmail] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    // const [verifyOTP, setVarifyOTP] = useState();
    const handleChange = (e) => {
        setOtp(e);
    };
    const dispatch = useDispatch();
    const handleSendOTP = () => {
        if (newEmail && newEmail.includes("@")) {
            dispatch(postchangemail({ email: newEmail }));
        }
    };
    const handleVerifyEmail = () => {
        if (otp) dispatch(emailvarifyOtp({ email_otp: otp }));
        setShowOTP(false);
        setModalVisible(false);
    };
    const { isOtpVerify } = useSelector((state) => state.freelancer);
    useEffect(() => {
        console.log("isOtpVerify", isOtpVerify);
    }, []);
    const { isOtpSend } = useSelector((state) => state.freelancer);
    useEffect(() => {
        if (isOtpSend) {
            setShowOTP(true);
        }
    }, [isOtpSend]);
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
            <div>
                {!showOTP ? (
                    <div>
                        <GlobalTextP2 weight="bold" align="center">
                            Change Email Address
                        </GlobalTextP2>
                        <GlobalTextP4 align="center">
                            Don’t worry it happens. Please enter the email
                            address associated with your account.
                        </GlobalTextP4>
                        <CustomInput
                            placeholder="Your email address"
                            name="email"
                            onChange={(e) => setNewEmail(e.target.value)}
                        ></CustomInput>
                        <GlobalButton
                            size="xs"
                            block
                            type="primary"
                            onClick={handleSendOTP}
                        >
                            Send OTP
                        </GlobalButton>
                    </div>
                ) : (
                    <div>
                        <GlobalTitle align="center">
                            Check your Email
                        </GlobalTitle>
                        <GlobalSubText className="margin-b0" align="center">
                            We have sent a code to your Email
                        </GlobalSubText>
                        <GlobalSubText
                            color="black"
                            weight="bold"
                            align="center"
                        >
                            {newEmail}
                        </GlobalSubText>
                        <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={4}
                            isInputNum={true}
                            inputStyle={{
                                border: "1px solid #C9C9C9",
                                outline: "none",
                                height: 60,
                                width: 60,
                                borderRadius: "0.375rem",
                                padding: "0.625rem 1.25rem",
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                lineHeight: "1.8125rem",
                                letterSpacing: "0px",
                            }}
                            containerStyle={{
                                height: 80,
                                justifyContent: "space-between",
                                marginTop: "2rem",
                            }}
                            focusStyle={{
                                borderColor: "#4668d6",
                            }}
                            shouldAutoFocus
                            separator={<span> </span>}
                        />
                        <GlobalButton
                            type="primary"
                            block
                            className="margin-t2"
                            onClick={handleVerifyEmail}
                        >
                            Verify Email
                        </GlobalButton>
                        <GlobalSubText align="center">
                            Didn't receive the code?
                            <span
                                className="color-primary cursor-pointer"
                                onClick={handleSendOTP}
                            >
                                Resend
                            </span>
                        </GlobalSubText>
                    </div>
                )}
            </div>
        </GlobalModal>
    );
};
const ActionMobileModal = ({ mobileModalVisible, setMobileModalVisible }) => {
    const [Mobileotp, setMobileOtp] = useState("");
    const [showMobileOTP, setShowMoblieOTP] = useState(false);
    const handleChangeMob = (e) => {
        setMobileOtp(e);
    };
    console.log("Action mobile modal");
    const handleVerifyMobile = () => {
        setShowMoblieOTP(false);
        setMobileModalVisible(false);
    };
    return (
        <GlobalModal
            centered
            visible={mobileModalVisible}
            onOk={() => setMobileModalVisible(false)}
            onCancel={() => setMobileModalVisible(false)}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            width="25rem"
        >
            <div>
                {!showMobileOTP ? (
                    <div>
                        <GlobalTextP2 weight="bold" align="center">
                            Change Mobile Number
                        </GlobalTextP2>
                        <GlobalTextP4 align="center">
                            Don’t worry it happens. Please enter the mobile
                            number associated with your account.
                        </GlobalTextP4>
                        <CustomInput placeholder="Your mobile number"></CustomInput>
                        <GlobalButton
                            size="xs"
                            block
                            type="primary"
                            onClick={() => setShowMoblieOTP(!showMobileOTP)}
                        >
                            Send OTP
                        </GlobalButton>
                    </div>
                ) : (
                    <div>
                        <GlobalTitle align="center">Verify Mobile</GlobalTitle>
                        <GlobalSubText className="margin-b0" align="center">
                            We have sent a code to your Mobile
                        </GlobalSubText>
                        <GlobalSubText
                            color="black"
                            weight="bold"
                            align="center"
                        >
                            +91 9876579009
                        </GlobalSubText>
                        <OtpInput
                            value={Mobileotp}
                            onChange={handleChangeMob}
                            numInputs={4}
                            isInputNum={true}
                            inputStyle={{
                                border: "1px solid #C9C9C9",
                                outline: "none",
                                height: 60,
                                width: 60,
                                borderRadius: "0.375rem",
                                padding: "0.625rem 1.25rem",
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                lineHeight: "1.8125rem",
                                letterSpacing: "0px",
                            }}
                            containerStyle={{
                                height: 80,
                                justifyContent: "space-between",
                                marginTop: "2rem",
                            }}
                            focusStyle={{
                                borderColor: "#4668d6",
                            }}
                            shouldAutoFocus
                            separator={<span> </span>}
                        />
                        <GlobalButton
                            type="primary"
                            block
                            className="margin-t2"
                            onClick={handleVerifyMobile}
                        >
                            Verify Mobile
                        </GlobalButton>
                        <GlobalSubText align="center">
                            Didn't receive the code?
                            <span className="color-primary cursor-pointer">
                                Resend
                            </span>
                        </GlobalSubText>
                    </div>
                )}
            </div>
        </GlobalModal>
    );
};
const AccountInfo = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [mobileModalVisible, setMobileModalVisible] = useState(false);
    const [showChangePass, setShowChangePass] = useState(false);
    const [showCloseAccount, setShowCloseAccount] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAccountSetting());
    }, [dispatch]);
    const { userData } = useSelector((state) => state.freelancer);
    const { user_details } = userData;
    console.log("userData", user_details);
    useEffect(() => {
        if (user_details && JSON.stringify(user_details) !== "{}") {
            form.setFieldsValue(user_details);
        }
    }, [user_details, form]);

    const { isBillingDetailsPost } = useSelector((state) => state.gigs);
    useEffect(() => {
        if (isBillingDetailsPost) {
        }
    }, [isBillingDetailsPost]);
    const onFinish = (values) => {
        //   funtion for submitting introduction form
        dispatch(postAccountInfo({ record: values }));
    };
    return (
        <div>
            {!showChangePass && !showCloseAccount && (
                <Form
                    form={form}
                    autoComplete="off"
                    layout="vertical"
                    className="margin-t2 accountSettings__detailBox"
                    onFinish={onFinish}
                >
                    <Row gutter={[16, 0]}>
                        <Col sm={9}>
                            <Form.Item label="First Name" name="first_name">
                                <AccountInput
                                    bordered={false}
                                    placeholder="Type here"
                                />
                            </Form.Item>
                        </Col>
                        <Col sm={9}>
                            <Form.Item label="Surname" name="last_name">
                                <AccountInput
                                    bordered={false}
                                    placeholder="Type here"
                                />
                            </Form.Item>
                        </Col>
                        <Col sm={9}>
                            <img
                                src={Editicon}
                                alt="edit icon"
                                width="20px"
                                onClick={() => setModalVisible(true)}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    right: 15,
                                    zIndex: 9,
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                }}
                            />
                            <Form.Item label="Email Address" name="email">
                                <GlobalInput
                                    disabled
                                    bordered={false}
                                    placeholder="Type here"
                                />
                            </Form.Item>
                        </Col>
                        <Col sm={9} style={{ position: "relative" }}>
                            <img
                                src={Editicon}
                                alt="edit icon"
                                onClick={() => setMobileModalVisible(true)}
                                width="20px"
                                style={{
                                    position: "absolute",
                                    top: "53%",
                                    right: 15,
                                    zIndex: 9,
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                }}
                            />
                            <Form.Item label="Phone Number" name="mobile_no">
                                <GlobalInput
                                    disabled
                                    bordered={false}
                                    placeholder="Type here"
                                ></GlobalInput>
                            </Form.Item>
                        </Col>
                        <Col sm={9}>
                            <CustomButton
                                width="15rem"
                                size="md"
                                borderColor="#c7c7c7"
                                onClick={() =>
                                    setShowChangePass(!showChangePass)
                                }
                            >
                                Change Password
                            </CustomButton>
                        </Col>
                        <Col sm={9}>
                            <CustomButton
                                width="15rem"
                                size="md"
                                borderColor="#c7c7c7"
                                onClick={() =>
                                    setShowCloseAccount(!showCloseAccount)
                                }
                            >
                                Close Account
                            </CustomButton>
                        </Col>
                        <Col sm={7}>
                            <CustomButton size="md" borderColor="#c7c7c7">
                                Cancel
                            </CustomButton>
                        </Col>
                        <Col sm={5}>
                            <GlobalButton
                                type="primary"
                                htmlType="submit"
                                size="md"
                                // onClick={() => setModalVisible(true)}
                            >
                                Submit
                            </GlobalButton>
                        </Col>
                    </Row>
                </Form>
            )}
            {showChangePass && <ChangePassword onGoBack={setShowChangePass} />}
            {showCloseAccount && <Security onGoBack={setShowCloseAccount} />}
            <ActionModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <ActionMobileModal
                mobileModalVisible={mobileModalVisible}
                setMobileModalVisible={setMobileModalVisible}
            />
        </div>
    );
};
export default AccountInfo;

const CustomButton = styled(Button)`
    border-radius: 0.375rem;
    padding: 1.3rem;
    width: ${(props) => props.width && props.width};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0px;
    margin-bottom: 2rem;
    &.ant-btn-primary[disabled],
    .ant-btn-primary[disabled]:hover,
    .ant-btn-primary[disabled]:focus,
    .ant-btn-primary[disabled]:active {
        background-color: ${(props) =>
            props.background ? props.background : "#dbe2fc"};
        border: 1px solid #c7c7c7;
        color: ${(props) => (props.color ? props.color : "#dbe2fc")};
    }
    &.ant-btn {
        border-color: ${(props) => props.borderColor && props.borderColor};
        color: #393939;
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

const CustomInput = styled(Input)`
    border-radius: 6px;
    padding: 1rem;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0px;
    margin-bottom: 1rem;
    text-align: left;
    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
        line-height: 0.9375rem;
    }
`;
