import { Col, Form, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GlobalTextP4 } from "../../../shared/GlobalComponents";
import { AccountInput, AccountTextArea } from "./Stylesheet";

function CompanyDetails() {
  const [form] = Form.useForm();
  const enterpriseData = useSelector((state) => state.enterprise.userData);

  useEffect(() => {
    if (enterpriseData?.length) {
      form.setFieldsValue({
        first_name: enterpriseData[0]?.user?.first_name,
        last_name: enterpriseData[0]?.user?.last_name,
        company_name: enterpriseData[0]?.company?.company_name,
        company_website: enterpriseData[0]?.company?.website,
        company_bio: enterpriseData[0]?.company?.about_company,
        company_email: enterpriseData[0]?.user?.email,
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
            <Form.Item label="First Name" name="first_name">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="Last Name" name="last_name">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="Company's Name" name="company_name">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="Company's Website" name="company_website">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Form.Item label="Company's Bio" name="company_bio">
              <AccountTextArea
                disabled
                bordered={false}
                placeholder="Type here"
                autoSize={{
                  minRows: 4,
                  maxRows: 5,
                }}
                maxLength={300}
              />
            </Form.Item>
          </Col>
          <Col sm={12}>
            <Form.Item label="Company's Email" name="company_email">
              <AccountInput disabled bordered={false} placeholder="Type here" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default CompanyDetails;
