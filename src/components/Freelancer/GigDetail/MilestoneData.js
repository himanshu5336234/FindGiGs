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
    const screens = useBreakpoint();
    return (
        <div style={{ width: "90%" }}>
            {data?.map((milestone, ind) => (
                <Space size={"middle"} align="start" className="margin-b2">
                    <div className="gigDetail__milestoneIcon">
                        <LocationPinIcon />
                    </div>
                    <Space direction="vertical" size="small">
                        <GlobalSubText className="margin-b0" color="#4668D6">
                            Milestone {ind + 1}
                        </GlobalSubText>
                        <GlobalTextP2 className="margin-b0">
                            {milestone.title
                                ? milestone.title
                                : "Please Enter Milestone Title"}
                        </GlobalTextP2>
                        <GlobalSubText className="margin-b0">
                            {milestone.description}
                        </GlobalSubText>
                        <Space
                            size={32}
                            direction={screens.xs ? "vertical" : "horizontal"}
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
                                        {milestone.estimated_duration}
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
                                        {milestone.estimated_budget}
                                    </GlobalSubText>
                                </Space>
                            </Space>
                        </Space>
                    </Space>
                </Space>
            ))}{" "}
        </div>
    );
};

export default MilestoneData;
