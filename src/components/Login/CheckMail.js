import { Grid } from "antd";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { BackToLogin } from ".";
import {
  GlobalButton,
  GlobalCard,
  GlobalSubText,
  GlobalTitle,
} from "../../shared/GlobalComponents";

const { useBreakpoint } = Grid;

function CheckMail({ setTabIndex }) {
  const screens = useBreakpoint();
  const [otp, setOtp] = useState("");
//   const [disableOtp, setDisableOtp] = useState(false);

  const handleChange = (e) => {
    setOtp(e);
  };
  return (
    <GlobalCard>
      <div>
        <GlobalTitle>Check your Email</GlobalTitle>
        <GlobalSubText className="margin-b0">
          We have sent a code to your Email
        </GlobalSubText>
        <GlobalSubText color="black" weight="bold">
          Bruce.wayne@gmail.com
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
        <GlobalSubText>
          Didn't receive the code?{" "}
          <span className="color-primary cursor-pointer">Resend</span>
        </GlobalSubText>
        <GlobalButton
          type="primary"
          block
          className="margin-t2"
          onClick={() => setTabIndex(3)}
        >
          Verify Email
        </GlobalButton>
        <BackToLogin onClick={() => setTabIndex(0)} />
      </div>
    </GlobalCard>
  );
}

export default CheckMail;
