import { Space, Switch } from "antd";
import React, { useState } from "react";
import {
  GlobalTextP1,
  GlobalTextP2,
  GlobalTextP4,
} from "../../../shared/GlobalComponents";
function Notifications() {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <div>
      <Space size={25} direction="vertical">
        <GlobalTextP1 className="margin-b0">Notification</GlobalTextP1>
        <Space
          size={50}
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <GlobalTextP2 className="margin-b0">Profile Updates</GlobalTextP2>
          <Switch />
        </Space>
        <Space
          size={50}
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <GlobalTextP2 className="margin-b0">Gig Recommendations</GlobalTextP2>
          <Switch />
        </Space>
        <Space
          size={50}
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <GlobalTextP2 className="margin-b0">Referral & Rewards</GlobalTextP2>
          <Switch />
        </Space>
      </Space>
    </div>
  );
}
export default Notifications;
