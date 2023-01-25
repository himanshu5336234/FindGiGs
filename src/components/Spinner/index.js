import { Spin } from "antd";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import fallbackLogo from "../../assets/images/common/begigLoader.svg";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 42,
      color: "#4668D6",
    }}
    spin
  />
);

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#F6F8FF",
      }}
    >
      <img src={fallbackLogo} alt="begig_fallback_logo" />
      <Spin indicator={antIcon} />
    </div>
  );
}

export default Spinner;
