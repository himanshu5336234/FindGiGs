import { Space } from "antd";
import React from "react";
import {
  GlobalSubText,
  GlobalTextP1,
  GlobalTextP2,
} from "../../../shared/GlobalComponents";
import {
  MinusCircleOutlined,
  DeleteOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { SelectBox } from "./Stylesheet";
import { useState } from "react";
import SecurityActions from "./SecurityActions";
import {
  LeftOutlined,
} from "@ant-design/icons";

export const SelectTab = ({ selected, onClick, icon, title, subText }) => {
  return (
    <SelectBox selected={selected} onClick={onClick} className="margin-t1">
      {selected && <CheckCircleFilled className="selectBox__checkIcon" />}
      <Space size={"middle"} align="center">
        {icon}
        <Space size={0} direction="vertical">
          <GlobalTextP2 className="margin-b0">{title}</GlobalTextP2>
          <GlobalSubText className="margin-b0" color="#696969">
            {subText}
          </GlobalSubText>
        </Space>
      </Space>
    </SelectBox>
  );
};

function Security({onGoBack}) {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <div>
      {selectedTab !== null ? (
        <SecurityActions
          selectedTab={selectedTab}
          onGoBack={() => setSelectedTab(null)}
        />
      ) : (
        <>
          <Space size={5} direction="vertical">
            <GlobalTextP1
              className="margin-b0"
              style={{ cursor: "pointer" }}
              onClick={() => onGoBack(false)}
            >
              <LeftOutlined
                style={{
                  fontSize: "inherit",
                  fontWeight: "bold",
                  marginRight: "0.2rem",
                }}
              />
              Deactivate or Delete
            </GlobalTextP1>
            <GlobalTextP2 color="#696969" weight="500">
              You can choose to either disable or delete your account.
            </GlobalTextP2>
          </Space>
          <SelectTab
            selected={selectedTab === 0}
            onClick={() => setSelectedTab(0)}
            icon={<MinusCircleOutlined />}
            title={"Deactivate account"}
            subText={"You can temporarily disable your account."}
          />
          <SelectTab
            selected={selectedTab === 1}
            onClick={() => setSelectedTab(1)}
            icon={<DeleteOutlined />}
            title={"Delete account"}
            subText={"You can permanently delete your account."}
          />
        </>
      )}
    </div>
  );
}

export default Security;
