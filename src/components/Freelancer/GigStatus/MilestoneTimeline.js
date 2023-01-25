import { Col, Grid, Row, Space, Tabs, Card, Form, Divider } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import {
    GlobalButton,
    GlobalSubText,
    GlobalTextP2,
    GlobalTextP4,
} from "../../../shared/GlobalComponents";
import { UploadIcon } from "../../../shared/icons";
import EditIcon from "../../../assets/images/freelancer/editicon.svg";
import { ClockCircleOutlined, FilePdfOutlined } from "@ant-design/icons";
import { CustomTabs } from "../../Enterprise/ExploreTalent/Stylesheet";
import { Container } from "./StyleSheet";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { OnboardUpload } from "../../../shared/Onboarding/OnboardingComponents";
import moreIcon from "../../../assets/images/freelancer/moreicon.svg";
import Milestone from "../GigDetail/MileStone";
import moment from "moment";
import { getGigDetail } from "../../../api/freelancer/gigsAPIs";
import { useDispatch } from "react-redux";
const { TabPane } = Tabs;
const { useBreakpoint } = Grid;
function MilestoneTimeline() {
    const [isModal, setIsModal] = useState(false);
    const { state } = useLocation();
    const screens = useBreakpoint();
    const [selectedTab, setSelectedTab] = useState("1");
    const { activeGig } = useSelector((state) => state.gigs);
    const [title, setTitle] = useState();
    const dispatch = useDispatch();
    //   useEffect(() => {
    //     dispatch(getGigDetail({ gigId: id }));
    // }, [id, dispatch]);
    useEffect(() => {}, [selectedTab]);
    const onChange = (key) => {
        setSelectedTab(key);
    };
    const showModal = (id) => {
        setIsModal(true);
        setTitle(id);
    };
    const closeModal = () => {
        setIsModal(false);
    };
    return (
        <Container>
            <CustomTabs
                defaultActiveKey="1"
                onChange={onChange}
                animated
                type="line"
            >
                <TabPane tab="Milestones" key="1">
                    <div className="container__card">
                        <Row gutter={[16, 16]}>
                            <Col xl={17}>
                                {activeGig?.milestones?.length > 0 ? (
                                    activeGig?.milestones.map(
                                        (milsetone, idx) => (
                                            <Card style={{ border: "none" }}>
                                                <div className="gigInfoCard__one">
                                                    <div>
                                                        <GlobalTextP2 className="margin-b0">
                                                            {milsetone?.title}{" "}
                                                            {idx + 1}
                                                        </GlobalTextP2>
                                                    </div>
                                                    <GlobalTextP4
                                                        className="margin-b0"
                                                        color="#696969"
                                                    >
                                                        {milsetone?.description}
                                                    </GlobalTextP4>
                                                    <div className="gigInfoCard__wrapper">
                                                        <Space
                                                            size={"small"}
                                                            align="center"
                                                        >
                                                            <div className="gigInfoCard__iconBox">
                                                                <ClockCircleOutlined className="gigInfoCard__icon" />
                                                            </div>
                                                            <Space
                                                                direction="vertical"
                                                                size={1}
                                                            >
                                                                <GlobalTextP4
                                                                    className="margin-b0"
                                                                    color="#909090"
                                                                >
                                                                    Duration
                                                                </GlobalTextP4>
                                                                <GlobalSubText
                                                                    style={{
                                                                        fontSize:
                                                                            "0.6rem",
                                                                    }}
                                                                    className="margin-b0"
                                                                    weight="bold"
                                                                    color="#0C0E17"
                                                                >
                                                                    {
                                                                        milsetone.estimated_duration
                                                                    }
                                                                </GlobalSubText>
                                                            </Space>
                                                        </Space>
                                                        <Space
                                                            size={"small"}
                                                            align="center"
                                                            className="gigInfoCard__wrapper__two"
                                                        >
                                                            <div className="gigInfoCard__iconBox">
                                                                <ClockCircleOutlined className="gigInfoCard__icon" />
                                                            </div>
                                                            <Space
                                                                direction="vertical"
                                                                size={1}
                                                            >
                                                                <GlobalTextP4
                                                                    className="margin-b0"
                                                                    color="#909090"
                                                                >
                                                                    Amount
                                                                </GlobalTextP4>
                                                                <GlobalSubText
                                                                    style={{
                                                                        fontSize:
                                                                            "0.6rem",
                                                                    }}
                                                                    className="margin-b0"
                                                                    weight="bold"
                                                                    color="#0C0E17"
                                                                >
                                                                    {
                                                                        milsetone.estimated_budget
                                                                    }
                                                                </GlobalSubText>
                                                            </Space>
                                                        </Space>
                                                    </div>
                                                    <div>
                                                        <GlobalTextP2 className="mile__stone__heading">
                                                            Attachments
                                                        </GlobalTextP2>
                                                    </div>
                                                    <div className="gigInfoCard__wrapper">
                                                        <Space
                                                            size={"small"}
                                                            align="center"
                                                        >
                                                            <div className="gigInfoCard__iconBox">
                                                                <FilePdfOutlined />
                                                            </div>
                                                            <Space
                                                                direction="vertical"
                                                                size={1}
                                                            >
                                                                {milsetone?.attachment.map(
                                                                    (attch) => (
                                                                        <GlobalSubText
                                                                            style={{
                                                                                fontWeight:
                                                                                    "600",
                                                                                fontSize:
                                                                                    "10px",
                                                                                lineHeight:
                                                                                    "15px",
                                                                                color: "#696969",
                                                                            }}
                                                                            className="margin-b0"
                                                                            weight="bold"
                                                                            color="#0C0E17"
                                                                        >
                                                                            {
                                                                                attch?.attachment_url
                                                                            }
                                                                            <br />
                                                                            <p>
                                                                                25
                                                                                mb
                                                                            </p>
                                                                        </GlobalSubText>
                                                                    )
                                                                )}
                                                            </Space>
                                                        </Space>
                                                    </div>
                                                </div>
                                            </Card>
                                        )
                                    )
                                ) : (
                                    <p
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "24px",
                                        }}
                                    >
                                        {" "}
                                        No Milestones
                                    </p>
                                )}
                            </Col>
                            <Col xl={7}>
                                <Card style={{ border: "none" }}>
                                    <Space
                                        size={"small"}
                                        align="center"
                                        className="gigInfoCard__wrapper__two"
                                    >
                                        <div className="gigInfoCard__iconBox">
                                            <ClockCircleOutlined className="gigInfoCard__icon" />
                                        </div>
                                        <Space direction="vertical" size={1}>
                                            <GlobalTextP4
                                                className="margin-b0"
                                                color="#909090"
                                            >
                                                What is a Milestone?{" "}
                                                <a>Learn More</a>
                                            </GlobalTextP4>
                                        </Space>
                                    </Space>
                                </Card>
                                {/* <Card
                                    style={{
                                        border: "none",
                                        marginTop: "20px",
                                    }}
                                >
                                    <div className="card__section">
                                        <div className="card__image">
                                            <img
                                                className="company__img"
                                                src="https://s3-alpha-sig.figma.com/img/ad77/16dc/06a507f4cae3836c1fbf714992163fa5?Expires=1666569600&Signature=cXsZ72UDygjw0SvryLrqs4WT6oJnKX57Z4NSm8VWVHtelIFLrgALFKCKcLJ9Ht8CNdO4yv63hnhkF3S-kNLKktfgqhjrYOj9rPLMX6mMagqAPD6kh-2A6TMTpCEi6GdSI7Q9oih6LbolO2miwpadeMiCYP1973DzClszEQLU66EkA7UHDS37ogtz0IW3s8dXoGHQtcTp9lMiN8RQe9Y1fQE6x7kE-Ty5LLhQ1o-4LQf~faJhYIMeAeMaOFeNGnuIfXdZfNn86aAxbWMTBYIb2hpyn1GPCptkua~301NXYEHo4JEf0twjo69tQrS9rxsH5lgVqWEJtgmAPwFB~BvAsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                            />
                                        </div>
                                        <div
                                            style={{
                                                marginLeft: "15px",
                                                marginTop: "40px",
                                            }}
                                        >
                                            <div
                                                className="margin-b0"
                                                color="#909090"
                                            >
                                                Gig ID{" "}
                                                <span className="span__style">
                                                    #201523
                                                </span>
                                            </div>
                                            <div className="text__style">
                                                Front End Developer
                                            </div>
                                            <div
                                                className="para__style"
                                                color="#909090"
                                            >
                                                Tech Mahindra
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: "40%",
                                            margin: "2rem auto",
                                        }}
                                    >
                                        <GlobalButton block>
                                            View Big Details
                                        </GlobalButton>
                                    </div>
                                </Card> */}
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tab="Files Archive" key="2">
                    {/* {activeGig?.milestones?.length > 0 ?  */}
                    {/* ( */}
                    <div className="fileArchive__container">
                        <Row gutter={[16, 16]}>
                            <Col xl={15}>
                                <div className="fileArchive__one">
                                    <div>
                                        <GlobalTextP2 className="margin-b0">
                                            Submitted Documents
                                        </GlobalTextP2>
                                    </div>
                                    <div>
                                        <GlobalTextP4
                                            className="margin-b0"
                                            color="#696969"
                                        >
                                            Gig ID #{activeGig?.gigData?.id}
                                        </GlobalTextP4>
                                    </div>
                                </div>
                                {activeGig?.milestones?.length > 0 ? (
                                    activeGig?.milestones?.map((item) => (
                                        <div className="fileArchive__heading">
                                            <GlobalTextP2 className="fileArchive__heading__style">
                                                {item?.title}
                                            </GlobalTextP2>
                                            {item?.attachment?.map((attch) => (
                                                <div className="fileArchive__image">
                                                    <Card
                                                        style={{
                                                            width: 250,
                                                            border: "none",
                                                            position:
                                                                "relative",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                            showModal(item?.id)
                                                        }
                                                    >
                                                        <img
                                                            src={moreIcon}
                                                            className="more__icon__style"
                                                            alt=""
                                                        />
                                                        <div className="fileArchive__image__one">
                                                            <img
                                                                src={EditIcon}
                                                                className="icon__style"
                                                                alt=""
                                                            />
                                                            <GlobalTextP4
                                                                className="fileArchive__image__one__heading"
                                                                color="#696969"
                                                            >
                                                                {
                                                                    attch?.attachment_url
                                                                }
                                                            </GlobalTextP4>
                                                            <GlobalTextP4
                                                                className="margin-b0"
                                                                color="#696969"
                                                            >
                                                                {moment
                                                                    .unix(
                                                                        item?.created_at
                                                                    )
                                                                    .format(
                                                                        "MM/DD/YYYY"
                                                                    )}
                                                                {/* 3 Feb,2020 . 5.3MB */}
                                                            </GlobalTextP4>
                                                        </div>
                                                    </Card>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    <p
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "24px",
                                        }}
                                    >
                                        {" "}
                                        No Archive
                                    </p>
                                )}
                                {/* <div className="fileArchive__heading">
                                    <GlobalTextP2 className="fileArchive__heading__style">
                                        Milestone 1
                                    </GlobalTextP2>
                                    <div className="fileArchive__image">
                                        <Card
                                            style={{
                                                width: 250,
                                                border: "none",
                                                position: "relative",
                                            }}
                                        >
                                            <img
                                                src={moreIcon}
                                                className="more__icon__style"
                                            />
                                            <div className="fileArchive__image__one">
                                                <img
                                                    src={EditIcon}
                                                    className="icon__style"
                                                />
                                                <GlobalTextP4
                                                    className="fileArchive__image__one__heading"
                                                    color="#696969"
                                                >
                                                    Project 1.excel
                                                </GlobalTextP4>
                                                <GlobalTextP4
                                                    className="margin-b0"
                                                    color="#696969"
                                                >
                                                    3 Feb,2020 . 6.3MB
                                                </GlobalTextP4>
                                            </div>
                                        </Card>
                                        <div className="upload__file__style">
                                            <Form.Item name="Cheque-Leaf/Passbook">
                                                <OnboardUpload>
                                                    <div className="upload__file__icon">
                                                        <div>
                                                            <UploadIcon className="upload__icons" />
                                                        </div>
                                                        <div className="upload__heading">
                                                            Upload your files or
                                                        </div>
                                                        <div className="upload__para">
                                                            Browse
                                                        </div>
                                                    </div>
                                                </OnboardUpload>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div> */}
                            </Col>
                            <Col xl={9}>
                                <div>
                                    {isModal &&
                                        activeGig?.milestones
                                            ?.filter(
                                                (items) => items?.id === title
                                            )
                                            ?.map((item) => (
                                                <Card
                                                    style={{
                                                        width: 450,
                                                        height: 750,
                                                        border: "none",
                                                        position: "relative",
                                                    }}
                                                >
                                                    <div className="modal__head">
                                                        <GlobalTextP2>
                                                            File Preview
                                                        </GlobalTextP2>
                                                        <div>
                                                            <img
                                                                src={moreIcon}
                                                                className="modal__icon__style"
                                                                onClick={
                                                                    closeModal
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="fileArchive__image__one">
                                                        <img
                                                            src={EditIcon}
                                                            className="icon__style"
                                                        />
                                                        {item?.attachment?.map(
                                                            (attch) => (
                                                                <GlobalTextP4
                                                                    className="fileArchive__image__one__heading"
                                                                    color="#696969"
                                                                >
                                                                    {
                                                                        attch?.attachment_url
                                                                    }
                                                                    {/* Project 1.excel */}
                                                                </GlobalTextP4>
                                                            )
                                                        )}
                                                        <GlobalTextP4
                                                            className="margin-b0"
                                                            color="#696969"
                                                        >
                                                            {moment
                                                                .unix(
                                                                    item?.created_at
                                                                )
                                                                .format(
                                                                    "MM/DD/YYYY"
                                                                )}
                                                            {/* 3 Feb,2020  */}
                                                            {/* . 6.3MB */}
                                                        </GlobalTextP4>
                                                    </div>
                                                    <Divider />
                                                    <GlobalTextP2>
                                                        File Details
                                                    </GlobalTextP2>
                                                    {item?.attachment?.map(
                                                        (attch) => (
                                                            <div className="modal__list">
                                                                <div className="modal__list__one">
                                                                    <ul className="modal_list_style">
                                                                        {/* <li>
                                                            <GlobalTextP4>
                                                                Type
                                                            </GlobalTextP4>
                                                        </li>
                                                        <li>
                                                            <GlobalTextP4>
                                                                Size
                                                            </GlobalTextP4>
                                                        </li>
                                                        <li>
                                                            <GlobalTextP4>
                                                                Storage
                                                            </GlobalTextP4>
                                                        </li> */}
                                                                        <li>
                                                                            <GlobalTextP4>
                                                                                Type
                                                                            </GlobalTextP4>
                                                                        </li>
                                                                        <li>
                                                                            <GlobalTextP4>
                                                                                Owner
                                                                            </GlobalTextP4>
                                                                        </li>
                                                                        {/* <li>
                                                            <GlobalTextP4>
                                                                Modified
                                                            </GlobalTextP4>
                                                        </li> */}
                                                                        <li>
                                                                            <GlobalTextP4>
                                                                                Created
                                                                            </GlobalTextP4>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="modal_list_style">
                                                                        {/* <li>
                                                            <GlobalTextP4>
                                                                PDF
                                                            </GlobalTextP4>
                                                        </li>
                                                        <li>
                                                            <GlobalTextP4>
                                                                45MB
                                                            </GlobalTextP4>
                                                        </li>
                                                        <li>
                                                            <GlobalTextP4>
                                                                45MB
                                                            </GlobalTextP4>
                                                        </li> */}
                                                                        <li>
                                                                            <GlobalTextP4>
                                                                                {
                                                                                    attch?.fileType
                                                                                }
                                                                            </GlobalTextP4>
                                                                        </li>
                                                                        <li>
                                                                            <GlobalTextP4>
                                                                                {
                                                                                    attch?.created_by
                                                                                }
                                                                            </GlobalTextP4>
                                                                        </li>
                                                                        {/* <li>
                                                            <GlobalTextP4>
                                                              {moment.unix(item?.updated_at).format("MM/DD/YYYY")}
                                                            </GlobalTextP4>
                                                        </li> */}
                                                                        <li>
                                                                            <GlobalTextP4>
                                                                                {moment
                                                                                    .unix(
                                                                                        attch?.created_at
                                                                                    )
                                                                                    .format(
                                                                                        "MM/DD/YYYY"
                                                                                    )}
                                                                            </GlobalTextP4>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            gap: "2rem",
                                                            margin: "2rem auto",
                                                        }}
                                                    >
                                                        <GlobalButton block>
                                                            Delete
                                                        </GlobalButton>
                                                        <GlobalButton
                                                            type="primary"
                                                            block
                                                            htmlType="submit"
                                                        >
                                                            Download
                                                        </GlobalButton>
                                                    </div>
                                                </Card>
                                            ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* ) :(<p style={{fontWeight:700,fontSize:"24px"}}> No Archive</p>)} */}
                </TabPane>
            </CustomTabs>
        </Container>
    );
}
export default MilestoneTimeline;
