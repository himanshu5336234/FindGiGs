import { Button, Grid, Space } from "antd";
import {
    GlobalSubText,
    GlobalTextP2,
    GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { ClockCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { LocationPinIcon } from "../../../shared/icons";

const { useBreakpoint } = Grid;

const MilestoneData = ({ data }) => {
    console.log("milestones", data);
    const screens = useBreakpoint();
    return (
        <>
            {data?.length === 0 ? (
                <h2>No Milestone Available </h2>
            ) : (
                data?.map((milestone, idx) => (
                    <Space size={"middle"} align="start" className="margin-b2">
                        <div className="gigDetail__milestoneIcon">
                            <LocationPinIcon />
                        </div>
                        <Space direction="vertical" size="small">
                            <GlobalSubText
                                className="margin-b0"
                                color="#4668D6"
                            >
                                MileStone {idx + 1}
                            </GlobalSubText>
                            <GlobalTextP2 className="margin-b0">
                                {milestone?.title}
                            </GlobalTextP2>
                            <GlobalSubText className="margin-b0">
                                {milestone?.description
                                    ? milestone?.description
                                    : "No Discription"}
                            </GlobalSubText>
                            <Space
                                size={32}
                                direction={
                                    screens.xs ? "vertical" : "horizontal"
                                }
                            >
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
                                            {milestone?.estimated_duration}
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
                                            Rs {milestone?.estimated_budget}
                                        </GlobalSubText>
                                    </Space>
                                </Space>
                            </Space>
                        </Space>
                    </Space>
                ))
            )}
        </>
    );
};

export default MilestoneData;
