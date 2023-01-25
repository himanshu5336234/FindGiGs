import React from "react";
import { Col, Form, Row } from "antd";
import { useState } from "react";
import styled from "styled-components";
import {
    GlobalButton,
    GlobalTextP2,
    GlobalTitle,
} from "../../../shared/GlobalComponents";
import PasswordChanged from "../../../assets/images/freelancer/changePassword.svg";

import { AccountInput } from "./Stylesheet";
import GlobalModal from "../../../shared/GlobalModal";

function AgencyDetails() {
    const [form] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);

    const ActionModal = ({ modalVisible, setModalVisible }) => {
        return (
            <GlobalModal
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
                maskStyle={{
                    backgroundColor: "rgba(70, 104, 214, 0.3)",
                }}
                width="25rem"
            >
                <ModalContainer
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={PasswordChanged} alt="password changed" />
                    <GlobalTitle>
                        Your details have been saved successfully!
                    </GlobalTitle>
                </ModalContainer>
            </GlobalModal>
        );
    };

    return (
        <div>
            <GlobalTextP2 className="margin-b0">Agency Details</GlobalTextP2>
            <Form
                form={form}
                autoComplete="off"
                layout="vertical"
                className="margin-t2 accountSettings__detailBox"
            >
                <Row gutter={[16, 0]}>
                    <Col sm={12}>
                        <Form.Item label="Name" name="agency_name">
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item label="Email" name="agency_email">
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item label="Phone Number" name="agency_mobile_no">
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item label="Website" name="agency_website">
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            label="Specialization"
                            name="agency_specialization"
                        >
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>

                    <Col sm={24}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                        >
                            <GlobalButton size="md">Cancel</GlobalButton>
                            <GlobalButton
                                type="primary"
                                htmlType="submit"
                                size="md"
                                onClick={() => setModalVisible(true)}
                                style={{ margin: "0 60px" }}
                            >
                                Submit
                            </GlobalButton>
                        </div>
                    </Col>
                    <Col sm={12}></Col>
                </Row>
            </Form>
            <ActionModal
                modalVisible={modalVisible}
                setModalVisible={() => setModalVisible(true)}
            />
        </div>
    );
}
export default AgencyDetails;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
