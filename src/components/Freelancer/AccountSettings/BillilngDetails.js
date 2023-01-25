import { Checkbox, Col, Form, Row } from "antd";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
    GlobalButton,
    GlobalTextP2,
    GlobalTextP4,
    GlobalTitle,
} from "../../../shared/GlobalComponents";
import PasswordChanged from "../../../assets/images/freelancer/changePassword.svg";
import { UploadIcon } from "../../../shared/icons";
import { OnboardUpload } from "../../../shared/Onboarding/OnboardingComponents";
import { AccountInput } from "./Stylesheet";
import GlobalModal from "../../../shared/GlobalModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postBillingDetails } from "../../../api/freelancer/gigsAPIs";
const options = [
    {
        label: "Yes",
        value: "Yes",
    },
    {
        label: "No",
        value: "No",
    },
];
function BillingDetails() {
    const [form] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const { userData } = useSelector((state) => state.freelancer);
    const { billing_details } = userData;
    const dispatch = useDispatch();
    console.log("freelancerDatafreelancerData", billing_details);
    useEffect(() => {
        if (billing_details && JSON.stringify(billing_details) !== "{}") {
            form.setFieldsValue({
                ...billing_details,
                pan_card: {
                    uid: "uid", // unique identifier, negative is recommend, to prevent interference with internal generated id
                    name: "xx.png", // file name
                    status: "done", // options：uploading, done, error, removed. Intercepted file by beforeUpload don't have status field.
                    response: '{"status": "success"}', // response from server
                    linkProps: '{"download": "image"}', // additional html props of file link
                    xhr: "XMLHttpRequest{ ... }", // XMLHttpRequest Header
                },
            });
        }
    }, [billing_details, form]);
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

    //   const { isAccountInfoPost } = useSelector((state) => state.gigs);
    //   useEffect(() => {
    //     if (isAccountInfoPost) {
    //     }
    //   }, [isAccountInfoPost]);
    const onFinish = (values) => {
        //   funtion for submitting introduction form
        dispatch(postBillingDetails({ record: values, setModalVisible }));
    };
    return (
        <div>
            {/* <div className="accountSettings__suggestbox"> */}
            <GlobalTextP2 className="margin-b0">Billing Details</GlobalTextP2>
            {/* </div> */}
            <Form
                form={form}
                autoComplete="off"
                layout="vertical"
                className="margin-t2 accountSettings__detailBox"
                onFinish={onFinish}
            >
                <Row gutter={[16, 0]}>
                    <Col sm={12}>
                        <Form.Item
                            label="Account Holder Name"
                            name="bank_full_name"
                        >
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            label="Account Number"
                            name="bank_account_number"
                        >
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item label="IFSC Code" name="ifsc_code">
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                        <GlobalTextP4
                            className="margin-b0"
                            color="#909090"
                            style={{
                                fontSize: "0.5rem",
                                lineHeight: "1.2",
                            }}
                        >
                            Note: You can only provide your personal account
                            details
                        </GlobalTextP4>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            label="Cancelled Cheque-Leaf/Passbook"
                            name="cheque_passbook"
                        >
                            <OnboardUpload
                            // fileList={fileState.selectedFileList}
                            // customRequest={dummyRequest}
                            // onChange={onFileChange}
                            // {...props}
                            >
                                <span>
                                    <UploadIcon />
                                </span>
                                <span>Drag & drop your logo file here or</span>
                                <span>Browse</span>
                            </OnboardUpload>
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            label="Pan Card Number*"
                            name="pan_card_number"
                        >
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item label="PAN Document*" name="pan_card">
                            <OnboardUpload
                                // fileList={fileState.selectedFileList}
                                // customRequest={dummyRequest}
                                onChange={(e) => console.log(e.file)}
                                // {...props}
                            >
                                <span>
                                    <UploadIcon />
                                </span>
                                <span>Drag & drop your logo file here or</span>
                                <span>Browse</span>
                            </OnboardUpload>
                        </Form.Item>
                    </Col>
                    {/* <Col sm={24}>
            <Form.Item label="Do you have a GST Number?" name="gst_no">
              <Checkbox.Group
                options={options}
                // defaultValue={["Apple"]}
                // onChange={onChange}
              />
            </Form.Item>
          </Col> */}
                    <Col sm={12}>
                        <Form.Item
                            label="Do you have a GST Number?"
                            name="gst_no"
                        >
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item label="GST No." name="gst_doc">
                            <OnboardUpload
                            // fileList={fileState.selectedFileList}
                            // customRequest={dummyRequest}
                            // onChange={onFileChange}
                            // {...props}
                            >
                                <span>
                                    <UploadIcon />
                                </span>
                                <span>Drag & drop your logo file here or</span>
                                <span>Browse</span>
                            </OnboardUpload>
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            label="Do you have a MSME Registration Number?"
                            name="have_msme_number"
                        >
                            <AccountInput
                                bordered={false}
                                placeholder="Type here"
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item label="MSME  No." name="msme_form">
                            <OnboardUpload
                            // fileList={fileState.selectedFileList}
                            // customRequest={dummyRequest}
                            // onChange={onFileChange}
                            // {...props}
                            >
                                <span>
                                    <UploadIcon />
                                </span>
                                <span>Drag & drop your logo file here or</span>
                                <span>Browse</span>
                            </OnboardUpload>
                        </Form.Item>
                    </Col>
                    <Col sm={4}>
                        <GlobalButton size="md">Cancel</GlobalButton>
                    </Col>
                    <Col sm={6}>
                        <GlobalButton
                            type="primary"
                            htmlType="submit"
                            size="md"
                            //   onClick={() => setModalVisible(true)}
                        >
                            Submit
                        </GlobalButton>
                    </Col>
                </Row>
            </Form>
            <ActionModal
                modalVisible={modalVisible}
                setModalVisible={() => setModalVisible(true)}
            />
        </div>
    );
}
export default BillingDetails;
const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
