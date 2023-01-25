import React, { useState } from "react";
import { AddExtraAction, CustomDrawer, CustomRange } from "./Stylesheet";
import { LeftOutlined } from "@ant-design/icons";
import { Checkbox, Divider, Form, Radio } from "antd";
import { FilterJson } from "./FilterJson";
import { GlobalButton, GlobalSubText } from "../GlobalComponents";
import { useDispatch } from "react-redux";
import {
    getGigListData,
    getRecommendedGigs,
} from "../../api/freelancer/gigsAPIs";

function FilterDrawer({ onClose, visible }) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [salaryRange, setSalaryRange] = useState([0, 0]);

    const onFinish = (values) => {
        const payload = {
            ...values,
            total_budget: `${salaryRange[0]}-${salaryRange[1]}`,
        };
        console.log(payload);

        dispatch(getGigListData({ offset: 0, limit: 20, record: payload }));
        dispatch(getRecommendedGigs({ offset: 0, limit: 20, record: payload }));
    };
    return (
        <CustomDrawer
            form={form}
            placement="right"
            onClose={onClose}
            visible={visible}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            closeIcon={<LeftOutlined />}
            width={500}
        >
            <Form
                name="filterForm"
                autoComplete="off"
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
            >
                <Form.Item
                    name="date_posted"
                    label={FilterJson?.date_posted?.title}
                >
                    <Radio.Group options={FilterJson?.date_posted?.data} />
                </Form.Item>

                <Divider />
                <Form.Item label={FilterJson?.role?.title} name="role">
                    <Checkbox.Group options={FilterJson?.role?.data} />
                </Form.Item>

                <Divider />
                <Form.Item label={"Salary Range"} name="total_budget">
                    <CustomRange
                        min={5000}
                        max={15000}
                        defaultValue={salaryRange}
                        range={{
                            draggableTrack: true,
                        }}
                        onChange={(e) => setSalaryRange(e)}
                        tooltipVisible={false}
                    />
                    <div className="filter__range">
                        <GlobalSubText color="#263238" weight="bold">
                            Rs.{salaryRange[0]}
                        </GlobalSubText>
                        <GlobalSubText color="#263238" weight="bold">
                            Rs.{salaryRange[1]}
                        </GlobalSubText>
                    </div>
                </Form.Item>

                <Divider />
                <Form.Item
                    label={FilterJson?.experience?.title}
                    name="experience"
                >
                    <Checkbox.Group options={FilterJson?.experience?.data} />
                </Form.Item>
                <Divider />
                <Form.Item
                    label={FilterJson?.industry_type?.title}
                    name="industry_type"
                >
                    <Checkbox.Group options={FilterJson?.industry_type?.data} />
                </Form.Item>
                <AddExtraAction>+ Add Industry</AddExtraAction>
                <Divider />
                <Form.Item label={FilterJson?.skills?.title} name="skills">
                    <Checkbox.Group options={FilterJson?.skills?.data} />
                </Form.Item>
                <AddExtraAction>+ Add Skills</AddExtraAction>
                <div className="filter__actions">
                    <GlobalButton block onClick={() => form.resetFields()}>
                        Reset
                    </GlobalButton>
                    <GlobalButton block type="primary" htmlType="submit">
                        Apply
                    </GlobalButton>
                </div>
            </Form>
        </CustomDrawer>
    );
}

export default FilterDrawer;
