import { Button, Col, Row, Tabs, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getGigDetail,
    getGigListData,
    getRecommendedGigs,
} from "../../../api/freelancer/gigsAPIs";
import FilterDrawer from "../../../shared/FilterDrawer";
import { FilterIcon } from "../../../shared/icons";
import GigCard from "./GigCard";
import { CustomTabs, GigListContainer } from "./Stylesheet";
import moment from "moment";

const { TabPane } = Tabs;

function GigListSection() {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const {
        totalRecommendedGigs,
        totalGigs,
        gigList,
        recommendedGigs: recGigs,
    } = useSelector((state) => state.gigs);
    const [allPagination, setAllpagination] = useState({
        offset: 0,
        limit: 20,
    });

    const [recommendPagination, setRecommendPagination] = useState({
        offset: 0,
        limit: 20,
    });
    useEffect(() => {
        dispatch(getGigListData(allPagination));
    }, [dispatch, allPagination]);

    useEffect(() => {
        dispatch(getRecommendedGigs(recommendPagination));
    }, [dispatch, recommendPagination]);

    useEffect(() => {
        gigList?.length > 0 && dispatch(getGigDetail({ gigId: 26 }));
    }, [gigList, dispatch]);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const getDuration = (string_duration, payment_type) => {
        let tempDurationArray = string_duration?.split(" ");
        if (payment_type === 1) {
            return tempDurationArray[0] + " " + tempDurationArray[1];
        } else if (payment_type === 2) {
            return tempDurationArray[6] + " " + tempDurationArray[7];
        } else if (payment_type === 3) {
            return tempDurationArray[0] + " " + tempDurationArray[1];
        }
    };

    const handleActiveGigDetail = (id) => {
        dispatch(getGigDetail({ gigId: id }));
    };

    return (
        <GigListContainer>
            <FilterDrawer onClose={onClose} visible={visible} />
            <div className="gigList__header">
                <CustomTabs defaultActiveKey="1">
                    <TabPane tab="All" key="1" className="gigList__tabPane">
                        <Row gutter={[0, 16]} className="margin-t1">
                            {gigList?.map((data) => (
                                <Col sm={24} key={data?.id}>
                                    <GigCard
                                        id={data?.id}
                                        gradientId={"gradient1"}
                                        date={moment
                                            .unix(data?.created_at)
                                            .format("MM/DD/YYYY")}
                                        title={data?.title}
                                        companyName={data?.company_name}
                                        timeline={getDuration(
                                            data?.string_duration,
                                            data?.payment_type
                                        )}
                                        gigAmount={data?.total_budget}
                                        profileCompletePercent={80}
                                        onClick={() =>
                                            handleActiveGigDetail(data?.id)
                                        }
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Pagination
                            showLessItems={true}
                            showQuickJumper={false}
                            showSizeChanger={false}
                            defaultCurrent={1}
                            total={totalGigs - 20}
                            onChange={(page, pageSize) => {
                                if (totalGigs > allPagination.offset) {
                                    setAllpagination({
                                        offset: page * pageSize + 1,
                                        limit: pageSize,
                                    });
                                }
                            }}
                            pageSize={20}
                            style={{ marginBottom: "4rem" }}
                        />
                    </TabPane>
                    <TabPane tab="Recommended" key="2">
                        <Row gutter={[0, 16]} className="margin-t1">
                            {recGigs?.map((data) => (
                                <Col sm={24} key={data?.id}>
                                    <GigCard
                                        gradientId={"gradient2"}
                                        date={moment
                                            .unix(data?.created_at)
                                            .format("MM/DD/YYYY")}
                                        title={data?.title}
                                        companyName={data?.company_name}
                                        timeline={data?.estimated_duration}
                                        gigAmount={data?.total_budget}
                                        profileCompletePercent={
                                            data?.match_score
                                        }
                                        onClick={() =>
                                            handleActiveGigDetail(data?.id)
                                        }
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Pagination
                            showQuickJumper={false}
                            showSizeChanger={false}
                            defaultCurrent={1}
                            total={totalRecommendedGigs - 20}
                            onChange={(page, pageSize) => {
                                if (totalGigs > recommendPagination.offset) {
                                    setRecommendPagination({
                                        offset: page * pageSize + 1,
                                        limit: pageSize,
                                    });
                                }
                            }}
                            pageSize={20}
                            style={{ marginBottom: "4rem" }}
                        />
                    </TabPane>
                </CustomTabs>

                <Button
                    shape="circle"
                    icon={<FilterIcon />}
                    className="filterIcon"
                    onClick={showDrawer}
                ></Button>
            </div>
        </GigListContainer>
    );
}

export default GigListSection;
