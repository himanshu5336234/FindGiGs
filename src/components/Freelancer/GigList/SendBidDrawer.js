import React, { useState } from "react";
import { CustomDrawer } from "./Stylesheet";

import {
    LeftOutlined,
    BulbFilled,
    InfoCircleFilled,
    DollarCircleOutlined,
    ClockCircleOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import { Col, Form, Row, Space, Button } from "antd";
import {
    GlobalButton,
    GlobalInput,
    GlobalSubText,
    GlobalTextArea,
    GlobalTextP2,
    GlobalTextP4,
} from "../../../shared/GlobalComponents";
import {
    AddBioLength,
    JustifyFlexContainer,
} from "../../../shared/Onboarding/OnboardingComponents";
import SendBidModal from "./SendBidModal";
import { AddMilestoneActions } from "./Stylesheet";

import addMilestone from "../../../assets/images/freelancer/addMilestone.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Flag from "../../../assets/images/common/flag.png";
import GlobalModal from "../../../shared/GlobalModal";
export const MilstoneDiv = ({ icon, data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    console.log(data, "data");
    return (
        <Space
            size={"middle"}
            align="start"
            style={{
                background: "#F1F4FF",
                padding: "1.4rem 2rem 1.4rem 2rem",
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                margin: "1rem .5rem",
                justifyContent: "space-between",
            }}
        >
            <Button
                shape="circle"
                className="gigDetail__MilestoneDetailIcon"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src={icon} alt="" style={{ marginTop: "-3px" }} />
            </Button>
            <Space direction="vertical" size={"small"}>
                <GlobalTextP2
                    className="margin-b0"
                    weight="bold"
                    style={{
                        color: "#4668D6",
                        marginLeft: "-100px",
                        fontWeight: "600",
                    }}
                >
                    {data?.title}
                </GlobalTextP2>
            </Space>
            <Space direction="horizontal" size={40}>
                <EyeOutlined
                    style={{
                        color: "#4668D6",
                        fontSize: "1.2rem",
                    }}
                    onClick={() => {
                        setModalVisible(true);
                    }}
                />
            </Space>
            <GlobalModal
                horizontal-left
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
                maskStyle={{
                    backgroundColor: "rgba(70, 104, 214, 0.3)",
                }}
                width="22rem"
            >
                <Space direction="vertical" size="small">
                    <GlobalTextP2 className="margin-b0">
                        {data?.title}
                    </GlobalTextP2>
                    <GlobalSubText className="margin-b0">
                        {data?.description}
                    </GlobalSubText>
                    <Space size={32}>
                        <Space size={"middle"}>
                            <Button
                                shape="circle"
                                icon={
                                    <ClockCircleOutlined
                                        style={{ color: "#4668D6" }}
                                    />
                                }
                                className="gigDetail__MilestoneDetailIcon"
                            ></Button>
                            <Space direction="vertical" size={6}>
                                <GlobalTextP4
                                    className="margin-b0"
                                    color="#6D6D6D"
                                >
                                    Duration
                                </GlobalTextP4>
                                <GlobalSubText
                                    className="margin-b0"
                                    weight="bold"
                                    color="#000000"
                                >
                                    {data?.estimated_duration}
                                </GlobalSubText>
                            </Space>
                        </Space>
                        <Space size={"middle"}>
                            <Button
                                shape="circle"
                                icon={
                                    <DollarCircleOutlined
                                        style={{ color: "#4668D6" }}
                                    />
                                }
                                className="gigDetail__MilestoneDetailIcon"
                            ></Button>
                            <Space direction="vertical" size={6}>
                                <GlobalTextP4
                                    className="margin-b0"
                                    color="#6D6D6D"
                                >
                                    Amount
                                </GlobalTextP4>
                                <GlobalSubText
                                    className="margin-b0"
                                    weight="bold"
                                    color="#000000"
                                >
                                    Rs {data?.estimated_budget}
                                </GlobalSubText>
                            </Space>
                        </Space>
                    </Space>
                </Space>
            </GlobalModal>
        </Space>
    );
};

function SendBidDrawer({ onClose, visible, setBidSuccessVisible, gigId }) {
    console.log("yyyyyyyyyyyyyyyyyyyyy", gigId);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [proposalData, setProposalData] = useState("");
    const [sendBidModalVsisble, setSendBidModalVisible] = useState(false);
    const [showAddMilstone, setShowAddMilestone] = useState(false);
    const [milestones, setMilestones] = useState([]);
    const { activeGig } = useSelector((state) => state.gigs);
    const [bidData, setBidData] = useState({});
    const handleProposal = (e) => {
        setProposalData(e.target.value);
    };
    const onFinish = (values) => {
        const finaldata = {
            message: values?.proposal,
            gigs: {
                id: gigId,
            },
            estimated_budget: Number(values?.estimated_budget),
            estimated_duration:
                Number(values?.months * 30) +
                Number(values?.weeks * 7) +
                Number(values?.days),
            milestone: milestones,
        };
        //TODO:resetForm data on API call
        // dispatchEvent(action({finaldata,resetAction:form.resetAction}))
        setBidData(finaldata);
        // send bid function
        setSendBidModalVisible(true);
    };
    console.log(milestones, "finalData");

    return (
        <CustomDrawer
            title="Bid on the Gig"
            placement="right"
            onClose={onClose}
            visible={visible}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            closeIcon={<LeftOutlined />}
            width={500}
            destroyOnClose
        >
            <SendBidModal
                bidData={bidData}
                modalVisible={sendBidModalVsisble}
                setModalVisible={setSendBidModalVisible}
                onCloseSendBidDrawer={onClose}
                setBidSuccessVisible={setBidSuccessVisible}
            />
            <Form
                form={form}
                autoComplete="off"
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Budget"
                    name="estimated_budget"
                    rules={[
                        {
                            required: true,
                            message: "Please enter only numbers",
                            pattern: new RegExp(/^[0-9]*$/),
                        },
                    ]}
                >
                    <GlobalInput
                        placeholder="20000"
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
                <GlobalSubText color="rgba(0, 0, 0, 0.85)" weight="bold">
                    Duration
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
                </Row>

                <div>
                    <div className="senBid__milestoneHeader">
                        <GlobalTextP2>Milestones</GlobalTextP2>
                        <GlobalTextP4
                            color="#696969"
                            className="cursor-pointer"
                            onClick={() => navigate("/home/milestone-details")}
                        >
                            <InfoCircleFilled
                                style={{ color: "#4668D6", marginRight: "4px" }}
                            />
                            What is a milestone
                        </GlobalTextP4>
                    </div>
                    {activeGig?.milestones?.length === 0 &&
                    milestones?.length === 0 ? (
                        <div className="sendBid__milestoneAction">
                            <div className="sendBid__milestoneImg">
                                <img
                                    src={addMilestone}
                                    alt="begig_addmilestone"
                                />
                            </div>
                            <GlobalTextP4 color="#696969" align="center">
                                Client has not added any milestone on this Gig.
                                If you wish you can add milestones as per your
                                suggestion
                            </GlobalTextP4>
                            <p
                                className="sendBid__addmilestone"
                                onClick={() =>
                                    setShowAddMilestone(!showAddMilstone)
                                }
                            >
                                + Add Milestone
                            </p>
                        </div>
                    ) : (
                        <>
                            {activeGig?.milestones?.length
                                ? activeGig?.milestones?.map((mile) => (
                                      <MilstoneDiv
                                          dataText={mile?.title}
                                          icon={Flag}
                                          data={mile}
                                      />
                                  ))
                                : milestones?.length &&
                                  milestones?.map((mile) => (
                                      <MilstoneDiv
                                          dataText={mile?.title}
                                          icon={Flag}
                                          data={mile}
                                      />
                                  ))}

                            {activeGig?.milestones?.length === 0 &&
                                milestones?.length < 3 && (
                                    <GlobalButton
                                        style={{
                                            margin: "1rem .5rem",
                                        }}
                                        className="sendBid__addmilestone"
                                        onClick={() =>
                                            setShowAddMilestone(
                                                !showAddMilstone
                                            )
                                        }
                                    >
                                        + Add More Milestone
                                    </GlobalButton>
                                )}
                        </>
                    )}
                </div>
                <Form.Item
                    label="Proposal"
                    name="proposal"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your proposal",
                        },
                        {
                            min: 100,
                            message: " Proposal must be minimum 100 characters",
                        },
                    ]}
                >
                    <GlobalTextArea
                        placeholder="You can write any suggestions for the gig or let the enterprise know the reason to change your bid."
                        autoSize={{
                            minRows: 6,
                            maxRows: 9,
                        }}
                        maxLength={300}
                        onChange={handleProposal}
                    />
                </Form.Item>
                <JustifyFlexContainer>
                    <AddBioLength>Minimum 100 character required</AddBioLength>
                    <AddBioLength>
                        {proposalData ? proposalData.length : 0}/100
                    </AddBioLength>
                </JustifyFlexContainer>

                <div className="sendBid__note">
                    <BulbFilled style={{ fontSize: "1.3rem" }} />
                    <p>
                        If you accept the client's offer as it is, we recommend
                        that you add a proposal before accepting the offer to
                        make your bid stand out.
                    </p>
                </div>

                <div className="sendBid__actions">
                    <GlobalButton block onClick={onClose}>
                        Cancel
                    </GlobalButton>
                    <GlobalButton block type="primary" htmlType="submit">
                        Send my Bid
                    </GlobalButton>
                </div>
            </Form>
            <AddMilestone
                setShowAddMilestone={setShowAddMilestone}
                showAddMilstone={showAddMilstone}
                setMilestones={setMilestones}
            />
        </CustomDrawer>
    );
}

export default SendBidDrawer;

const AddMilestone = ({
    setShowAddMilestone,
    showAddMilstone,
    setMilestones,
}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        setMilestones((prev) => [
            ...prev,
            {
                title: values?.milestone_title,
                description: values?.milstone_description,
                estimated_budget: Number(values?.milestone_budget),
                estimated_duration:
                    Number(values?.milestone_months * 30) +
                    Number(values?.milestone_weeks * 7) +
                    Number(values?.milestone_days),
            },
        ]);
        setShowAddMilestone(false);
        form.resetFields();
    };

    return (
        <GlobalModal
            centered
            visible={showAddMilstone}
            onOk={() => setShowAddMilestone(false)}
            onCancel={() => setShowAddMilestone(false)}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            width="40rem"
        >
            <Form
                form={form}
                autoComplete="off"
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
            >
                <Form.Item
                    name="milestone_title"
                    label="Milestone Title"
                    rules={[
                        {
                            required: true,
                            message: "Please milestone title here.",
                        },
                    ]}
                >
                    <GlobalInput placeholder="Milestone title." />
                </Form.Item>
                <Form.Item
                    label="Your Suggestion"
                    name="milstone_description"
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
                            name="milestone_months"
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
                            name="milestone_weeks"
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
                            name="milestone_days"
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
                            name="milestone_budget"
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
                    <GlobalButton
                        block
                        onClick={() => setShowAddMilestone(!showAddMilstone)}
                    >
                        Cancel
                    </GlobalButton>
                    <GlobalButton block type="primary" htmlType="submit">
                        Add Milestone
                    </GlobalButton>
                </AddMilestoneActions>
            </Form>
        </GlobalModal>
    );
};
