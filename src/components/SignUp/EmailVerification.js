import { Grid } from "antd";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
    resendOtpEnterprise,
    resendOtpFreelancer,
    verifyOtpEnterprise,
    verifyOtpFreelancer,
} from "../../api/authAPIs";
import {
    addAgencyDetails,
    emailvarifyOtp,
} from "../../api/freelancer/onboardAPIs";
import {
    GlobalButton,
    GlobalCard,
    GlobalSubText,
    GlobalTitle,
} from "../../shared/GlobalComponents";

const { useBreakpoint } = Grid;

const TimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 2rem 0;
`;

function EmailVerification({ fromAgency, recordFromAgency }) {
    const screens = useBreakpoint();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const [timer, setTimer] = useState(30);
    const [otp, setOtp] = useState("");

    // Timer settings below ----->
    useEffect(() => {
        const countdownTimer = setInterval(() => {
            if (timer === 0) {
                return;
            }
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => {
            clearInterval(countdownTimer);
        };
    }, [timer]);

    const handleChange = (e) => {
        setOtp(e);
    };

    // Function for resending otp
    const handleResendOtp = () => {
        const userType = localStorage.getItem("type");

        if (userType === "enterprise") {
            dispatch(resendOtpEnterprise({ setTimer }));
        } else if (userType === "freelancer") {
            if (!fromAgency) {
                dispatch(resendOtpFreelancer({ setTimer }));
            } else {
                dispatch(
                    addAgencyDetails({
                        recordFromAgency,
                    })
                );
                setTimer(30);
            }
        }
    };

    const handleVerifyEmail = () => {
        const record = {
            otp: otp,
        };
        const userType = localStorage.getItem("type");

        if (userType === "enterprise") {
            dispatch(verifyOtpEnterprise({ record, navigate: navigate }));
        } else if (userType === "freelancer") {
            if (!fromAgency) {
                dispatch(verifyOtpFreelancer({ record, navigate: navigate }));
            } else {
                dispatch(emailvarifyOtp({ record, navigate, url: "/welcome" }));
            }
        }
    };

    return (
        <GlobalCard>
            <div>
                <GlobalTitle>Email Verification</GlobalTitle>
                <GlobalSubText className="margin-b0">
                    We have sent a code to your Email
                </GlobalSubText>
                <GlobalSubText color="black" weight="bold">
                    {userData?.email}
                </GlobalSubText>
                <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={4}
                    isInputNum={true}
                    inputStyle={{
                        border: "1px solid #C9C9C9",
                        outline: "none",
                        height: screens?.xs ? 50 : 60,
                        width: screens?.xs ? 50 : 60,
                        borderRadius: "0.375rem",
                        padding: "0.625rem 1.25rem",
                        fontSize: screens?.xs ? "0.75rem" : "1.5rem",
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
                <TimeContainer>
                    <GlobalSubText>Time Remaining {timer}s</GlobalSubText>
                    {/* <GlobalSubText color="#FF3131">Incorrect OTP</GlobalSubText> */}
                </TimeContainer>
                <GlobalButton type="primary" block onClick={handleVerifyEmail}>
                    Verify Email
                </GlobalButton>
                {timer === 0 ? (
                    <GlobalSubText className="margin-t1">
                        Didn't receive the code?{" "}
                        <span
                            className="color-primary cursor-pointer"
                            onClick={handleResendOtp}
                        >
                            Resend
                        </span>
                    </GlobalSubText>
                ) : null}
            </div>
        </GlobalCard>
    );
}

export default EmailVerification;
