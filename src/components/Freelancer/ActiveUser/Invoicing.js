import { Avatar, Space } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  GlobalSubText,
  GlobalTextP1,
  GlobalTextP4,
  GlobalTextP5,
  GlobalTitle,
} from "../../../shared/GlobalComponents";
import { InvoiceProgress, TabSwitch, Title, InvoicingCard } from "./Stylesheet";
import noPayments from "../../../assets/images/enterprise/noPaymentsImage.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";
import { LineChart, Line } from "recharts";
import ArrowKeyDown from "../../../assets/images/common/ArrowKeyDown.png";
import ArrowKeyUp from "../../../assets/images/common/ArrowKeyUp.png";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Tooltip } from "antd";
// import { Button, Dropdown, message, Tooltip } from 'antd';
// import { DownOutlined, UserOutlined } from '@ant-design/icons';
// const handleButtonClick = (e) => {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// };
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const paymentPaidHistoryJson = [
  {
    gig_id: 2354,
    first_name: "Karan",
    last_name: "Sharma",
    payment: 20000,
  },
  {
    gig_id: 1234,
    first_name: "Anisha",
    last_name: "Sharma",
    payment: 20000,
  },
  {
    gig_id: 3456,
    first_name: "Anisha",
    last_name: "Sharma",
    payment: 20000,
  },
];
const paymentDueHistoryJson = [
  {
    gig_id: 7899,
    first_name: "Leela",
    last_name: "Sharma",
    payment: 20000,
  },
  {
    gig_id: 4568,
    first_name: "NonLeela",
    last_name: "Sharma",
    payment: 20000,
  },
  {
    gig_id: 9876,
    first_name: "WhyLeela",
    last_name: "Sharma",
    payment: 20000,
  },
];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page J",
    uv: 5000,
    pv: 1200,
    amt: 2500,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
function Invoicing() {
  const [selectedTab, setSelectedTab] = useState("paid");
  const navigate = useNavigate();
  const [paymentHistoryData, setPaymentHistoryData] = useState(
    paymentPaidHistoryJson
  );
  const paymentsHistory = useSelector(
    (state) => state.gigsEnterprise.paymentsHistory
  );
  useEffect(() => {
    if (selectedTab === "paid") {
      setPaymentHistoryData(paymentPaidHistoryJson);
    } else {
      setPaymentHistoryData(paymentDueHistoryJson);
    }
  }, [selectedTab]);
  return (
    <InvoicingCard
      style={{ margin: "10px 0px", padding: "10px" }}
      className="invoicing"
    >
    
      <div className="invoicing__card">
        <div className="invoicing__paymentDetailsContainer">
          <div>
            <GlobalTextP4 className="margin-b0" color="#696969">
              Total Invoices
            </GlobalTextP4>
            <GlobalTitle className="margin-b1" color="#0C0E17">
              ₹ {0}
            </GlobalTitle>
            <GlobalTextP4 className="margin-b0" color="#696969">
              Paid
            </GlobalTextP4>
            <GlobalTitle className="margin-b1" color="#3ED672">
              ₹ {0}
            </GlobalTitle>
            <GlobalTextP4 className="margin-b0" color="#696969">
              Pending
            </GlobalTextP4>
            <GlobalTitle className="margin-b0" color="#FFC727">
              {0}
            </GlobalTitle>
          </div>
          <InvoiceProgress
            type="circle"
            percent={0}
            format={(percent) => (
              <div className="invoicing__paymentPercentText">
                <GlobalTextP1 className="margin-b0">{percent}%</GlobalTextP1>
                <GlobalTextP5 className="margin-b0" color="#696969">
                  Payments paid off
                </GlobalTextP5>
              </div>
            )}
            strokeColor="#4CCB86"
            width={147}
          />
        </div>

        <div className="invoicing__paymentDetailsContainer2">
          <div className="invoicing__paymentHistoryHeader">
            <div>
              <Title className="margin-b0">Payment History</Title>
              <Space size={"small"} className="margin-t1">
                <TabSwitch
                  onClick={() => setSelectedTab("paid")}
                  bgColor={selectedTab === "paid"}
                >
                  <GlobalTextP4
                    color={selectedTab === "paid" ? "#4668D6" : "#9A9A9A"}
                    weight="600"
                    className="margin-b0"
                  >
                    Paid
                  </GlobalTextP4>
                </TabSwitch>
                <TabSwitch
                  onClick={() => setSelectedTab("due")}
                  bgColor={selectedTab === "due"}
                >
                  <GlobalTextP4
                    color={selectedTab === "due" ? "#4668D6" : "#9A9A9A"}
                    weight="600"
                    className="margin-b0"
                  >
                    Due
                  </GlobalTextP4>
                </TabSwitch>
              </Space>
            </div>
            <GlobalTextP4
              color="#909090"
              className="margin-b0 cursor-pointer"
              onClick={() =>
                navigate(RouteConstant.HOME + "/" + RouteConstant.INVOICES)
              }
            >
              View All
            </GlobalTextP4>
          </div>

          {paymentsHistory === null ? (
            <div className="invoicing__noPayments margin-t1">
              {/* <img src={noPayments} alt="begig_no_payments" /> */}
              <GlobalTextP4 className="margin-b0" color="#0C0E17">
                No Payments yet
              </GlobalTextP4>
            </div>
          ) : (
            <div className="invoicing__dataContainer margin-t1">
              {paymentHistoryData?.map((data) => (
                <div key={data?.gig_id} className="invoicing__paymentData">
                  <Space size={"small"} align="center">
                    <Avatar size={42} />
                    <Space direction="vertical" size={2}>
                      <GlobalTextP5 className="margin-b0" color="#4668D6">
                        Gig ID #{data?.gig_id}
                      </GlobalTextP5>
                      <GlobalSubText
                        className="margin-b0"
                        weight="bold"
                        color="#0C0E17"
                      >
                        {data?.first_name} {data?.last_name}
                      </GlobalSubText>
                    </Space>
                  </Space>
                  <GlobalSubText
                    className="margin-b0"
                    weight="bold"
                    color="#0C0E17"
                  >
                    Rs.{data?.payment}
                  </GlobalSubText>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </InvoicingCard>
  );
}
export default Invoicing;
