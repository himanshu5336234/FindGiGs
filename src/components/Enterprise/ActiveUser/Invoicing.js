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
import { InvoiceProgress, TabSwitch, Title } from "./StyleSheet";
import noPayments from "../../../assets/images/enterprise/noPaymentsImage.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";

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
    <div className="invoicing">
      <Title className="margin-b0">Invoicing</Title>
      <div className="invoicing__card">
        <div className="invoicing__paymentDetailsContainer">
          <div>
            <GlobalTextP4 className="margin-b0" color="#696969">
              Payments Made
            </GlobalTextP4>
            <GlobalTitle className="margin-b1" color="#FF511A">
              ₹ {0}
            </GlobalTitle>
            <GlobalTextP4 className="margin-b0" color="#696969">
              Payments Due
            </GlobalTextP4>
            <GlobalTitle className="margin-b1" color="#FF511A">
              ₹ {0}
            </GlobalTitle>
            <GlobalTextP4 className="margin-b0" color="#696969">
              Invoices Generated
            </GlobalTextP4>
            <GlobalTitle className="margin-b0" color="#FF511A">
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
        <div className="invoicing__paymentHistoryHeader">
          <Title className="margin-b0">Payment History</Title>
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

        {paymentsHistory === null ? (
          <div className="invoicing__noPayments margin-t1">
            <img src={noPayments} alt="begig_no_payments" />
            <GlobalTextP4 className="margin-b0" color="#0C0E17">
              No invoices generated yet
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
  );
}

export default Invoicing;
