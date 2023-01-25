import React from "react";
import { GlobalDrawer } from "../../../shared/GlobalDrawer";
import { LeftOutlined } from "@ant-design/icons";
import { Col, Form, Row } from "antd";
import {
    GlobalButton,
    GlobalInput,
    GlobalSubText,
    GlobalTextArea,
} from "../../../shared/GlobalComponents";
import { AddMilestoneActions } from "./Stylesheet";

function AddMilestoneDrawer({ onClose, visible }) {
    const onFinish = (values) => {
        console.log("milestoneDATATATA", values);
    };
    return (
        <GlobalDrawer
            title="Add Milestone"
            width={450}
            placement="right"
            onClose={onClose}
            visible={visible}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            destroyOnClose
            closeIcon={<LeftOutlined />}
        >
            <Form
                autoComplete="off"
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Your Suggestion"
                    name="suggestion"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your suggestion",
                        },
                    ]}
                >
                    <GlobalTextArea
                        placeholder="Enter your reason for changing/suggesting the milestone.."
                        autoSize={{
                            minRows: 6,
                            maxRows: 9,
                        }}
                        maxLength={300}
                        // onChange={handleSuggestion}
                    />
                </Form.Item>
                <GlobalSubText color="rgba(0, 0, 0, 0.85)" weight="bold">
                    Gig Delivery Time
                </GlobalSubText>
                <Row gutter={[16, 0]}>
                    <Col span={12}>
                        <Form.Item
                            name="months"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter only numbers",
                                    pattern: new RegExp(/^[0-9]*$/),
                                },
                            ]}
                        >
                            <GlobalInput placeholder="2" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <GlobalInput placeholder="Months" disabled />
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="weeks"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter only numbers",
                                    pattern: new RegExp(/^[0-9]*$/),
                                },
                            ]}
                        >
                            <GlobalInput placeholder="2" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <GlobalInput placeholder="Weeks" disabled />
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="days"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter only numbers",
                                    pattern: new RegExp(/^[0-9]*$/),
                                },
                            ]}
                        >
                            <GlobalInput placeholder="0" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <GlobalInput placeholder="Days" disabled />
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Amount"
                            name="amount"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter only numbers",
                                    pattern: new RegExp(/^[0-9]*$/),
                                },
                            ]}
                        >
                            <GlobalInput
                                placeholder="0"
                                prefix={
                                    <GlobalSubText
                                        color="#4668D6"
                                        weight="bold"
                                        className="margin-b0"
                                    >
                                        ₹
                                    </GlobalSubText>
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <AddMilestoneActions>
                    <GlobalButton block onClick={onClose}>
                        Cancel
                    </GlobalButton>
                    <GlobalButton block type="primary" htmlType="submit">
                        Add Milestone
                    </GlobalButton>
                </AddMilestoneActions>
            </Form>
        </GlobalDrawer>
    );
}

export default AddMilestoneDrawer;
