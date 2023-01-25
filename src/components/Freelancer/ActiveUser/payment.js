import { Space } from "antd";
import React from "react";

import { Title,PaymentCard } from "./Stylesheet";

import { LineChart, Line } from "recharts";
import ArrowKeyDown from "../../../assets/images/common/ArrowKeyDown.png";
import ArrowKeyUp from "../../../assets/images/common/ArrowKeyUp.png";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Tooltip } from "antd";

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
const Payment = () => {
  return (
    <div style={{margin:"15px 0px"}}>
      <Title >Payments</Title>
      <PaymentCard>
        <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
            
                justifyContent: "space-between"
        }}>
          <div>
            <div style={{ width: "100%", display: "flex" }}>
              <img
                src={ArrowKeyUp}
                style={{ width: "15px",height:"7px", cursor: "pointer" }}
                alt=""
              />
              <img
                src={ArrowKeyDown}
                style={{ width: "15px",height:"7px", cursor: "pointer" }}
                alt=""
              />
            </div>
            <div>
              <h3
                
              >
                ₹ 0
              </h3>
            </div>
            <p
       
            >
              Gigs Earnings
            </p>
          </div>
          <Dropdown menu={menuProps}>
            <Button
              style={{
                borderRadius: "5px",
                padding: "5px 10px 5px 10px",
              }}
            >
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <LineChart
          width={300}
          height={100}
          data={data2}
          style={{ position: "absolute" }}
        >
          <Line
            strokeDashArray="5 5"
            dot={false}
            type="basis"
            dataKey="pv"
            stroke="grey"
            strokeWidth={1}
          />
        </LineChart>
        <LineChart width={300} height={100} data={data}>
          <Line
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </PaymentCard>
    </div>
  );
};

export default Payment;
