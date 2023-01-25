import { Form } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalButton, GlobalInput } from "../../../shared/GlobalComponents";
import { Title } from "./Stylesheet";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createGig, updateGig } from "../../../api/enterprise/createGigApis";

function GigTitle({ proceedToNextTab }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { gigData, gigId } = useSelector((state) => state.createGig);

  useEffect(() => {
    form.setFieldsValue({
      gigTitle: gigData?.title,
    });
  }, [gigData]);

  const onFinish = (e) => {
    const record = {
      title: e?.gigTitle,
      type: 6,
    };
    if (JSON.parse(localStorage.getItem("gigCreated"))) {
      dispatch(
        updateGig({ record: { ...record, gig_id: gigId }, proceedToNextTab })
      );
    } else {
      dispatch(createGig({ record, proceedToNextTab }));
    }
  };

  return (
    <div className="creategig__fromTabContainer">
      <Title>Give a title to your Gig</Title>
      <Form
        form={form}
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        className="margin-t2"
      >
        <Form.Item
          name="gigTitle"
          rules={[
            {
              required: true,
              message: "Please enter Gig Title",
            },
            {
              max: 50,
              message: "Title should be less than 50 words",
            },
          ]}
        >
          <GlobalInput placeholder="Type here" bordered={false} />
        </Form.Item>
        <div className="creategig__actionContainer">
          <GlobalButton onClick={() => navigate(-1)} block>
            Back
          </GlobalButton>
          <GlobalButton type="primary" htmlType="submit" block>
            Next
          </GlobalButton>
        </div>
      </Form>
    </div>
  );
}

GigTitle.propTypes = {
  proceedToNextTab: PropTypes.func,
};

export default GigTitle;
