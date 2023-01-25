import { Avatar, Rate, Space } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { GlobalTextP3, GlobalTextP4 } from "../../../shared/GlobalComponents";
import { ActionButton, CustomTable } from "./Stylesheet";
import { useState } from "react";
import ViewReviewModal from "./ViewReviewModal";

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    gig_id: `#214${i}`,
    name: { name: `Edward King ${i}`, email: `edwardking${i}@gmail.com` },
    role: "Software Developer",
    date: "10th June 2022",
    rating: 5,
  });
}

function DataTable() {
  const [modalVisible, setModalVisible] = useState();

  const columns = [
    {
      title: "GIG ID",
      dataIndex: "gig_id",
      sorter: true,
      width: 120,
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
      title: "ROLE",
      dataIndex: "role",
      width: 200,
      sorter: true,
    },
    {
      title: "DATE",
      dataIndex: "date",
      sorter: true,
      width: 200,
    },
    {
      title: "RATING",
      dataIndex: "rating",
      sorter: true,
      render: (rating) => <Rate value={rating} />,
      width: 180,
    },
    {
      title: "ACTIONS",
      dataIndex: "rating",
      width: 220,
      render: (rating) => (
        <Space>
          <ActionButton type="primary" onClick={() => setModalVisible(true)}>
            {rating === 0 ? "Write review" : "View Review"}
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
      <ViewReviewModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}

export default DataTable;
