import { Avatar, Space } from "antd";
import React from "react";
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";
import { GlobalTextP3, GlobalTextP4 } from "../../../shared/GlobalComponents";
import { ActionButton, CustomTable } from "../ReviewsAndRatings/Stylesheet";
import { StatusTab } from "./Stylesheet";

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    invoice_no: `#214${i}`,
    name: { name: `Edward King ${i}`, email: `edwardking${i}@gmail.com` },
    amount: "₹20000",
    status: "Paid",
    date: "10th June 2022",
  });
}

function DataTable() {
  const columns = [
    {
      title: "INVOICE NO",
      dataIndex: "invoice_no",
      sorter: true,
      width: 140,
      render: (gig_id) => (
        <GlobalTextP3 className="margin-b0" color="#7367F0" weight="600">
          {gig_id}
        </GlobalTextP3>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      width: 260,
      render: (name) => (
        <Space>
          <Avatar />
          <Space direction="vertical" size={0}>
            <GlobalTextP3 className="margin-b0" color="#696969" weight="600">
              {name?.name}
            </GlobalTextP3>
            <GlobalTextP4 className="margin-b0" color="#A6A6A6">
              {name?.email}
            </GlobalTextP4>
          </Space>
        </Space>
      ),
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      width: 140,
      sorter: true,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      width: 140,
      render: (status) => (
        <StatusTab status={status}>
          <GlobalTextP4
            className="margin-b0"
            color={status === "Paid" ? "#4CCB86" : "#FFC727"}
          >
            {status}
          </GlobalTextP4>
        </StatusTab>
      ),
    },
    {
      title: "ISSUED DATE",
      dataIndex: "date",
      sorter: true,
      width: 180,
    },
    {
      title: "ACTIONS",
      width: 220,
      render: () => (
        <Space>
          <ActionButton type="primary" icon={<DownloadOutlined />}>
            Download
          </ActionButton>
          <ActionButton type="danger" icon={<DeleteOutlined />}>
            Delete
          </ActionButton>
        </Space>
      ),
    },
  ];

  return (
    <>
      <CustomTable
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 6,
        }}
        scroll={{
          y: 530,
        }}
      />
    </>
  );
}

export default DataTable;
