import { Col, Form, Row } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { GlobalTextP4 } from "../../../shared/GlobalComponents";
import { AccountInput } from "./Stylesheet";

function TaxAndBillingDetails() {
  const [form] = Form.useForm();

  const enterpriseData = useSelector((state) => state.enterprise.userData);

  useEffect(() => {
    if (enterpriseData?.length) {
      form.setFieldsValue({
        account_holder_name:
          enterpriseData[0]?.company?.razorpay_bank_account_name,
        ifsc_code: enterpriseData[0]?.company?.razorpay_ifsc_code,
        bank_account: enterpriseData[0]?.company?.razorpay_bank_account_number,
        phone_number: enterpriseData[0]?.company?.mobile_no,
        address: enterpriseData[0]?.company?.complete_address,
        gst_no: enterpriseData[0]?.company?.gst_tin,
        msme_no: enterpriseData[0]?.company?.msme_number,
      });
    }
  }, [enterpriseData]);

  return (
    <div>
      <div className="accountSettings__suggestbox">
        <GlobalTextP4 className="margin-b0" color="#696969">
          Please reach out to{" "}
          <span className="supportMail">support@begig.io</span> in case you want
          to change your details .
        </GlobalTextP4>
      </div>
      <Form
        form={form}
        autoComplete="off"
        layout="vertical"
        className="margin-t2 accountSettings__detailBox"
      >
        <Row gutter={[16, 0]}>
          <Col sm={12}>
            <Form.Item label="Account Holder Name" name="account_holder_name">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="IFSC Code" name="ifsc_code">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="Bank Account Number" name="bank_account">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="Phone Number" name="phone_number">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Form.Item label="Address" name="address">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="GST No." name="gst_no">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="MSME No." name="msme_no">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="PAN Card" name="pan_card">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="MSME Declaration Form" name="msme_form">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default TaxAndBillingDetails;
