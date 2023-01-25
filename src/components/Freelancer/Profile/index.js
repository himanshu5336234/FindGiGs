import { Grid, Space, Avatar } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { GlobalTextP2, GlobalTextP4 } from "../../../shared/GlobalComponents";
import { CustomDivider } from "../../Freelancer/GigList/Stylesheet";
import { ProfileOutlined } from "@ant-design/icons";
import {
    TabTitle,
    Container,
    CustomBreadcrumb,
    UserCard,
    TabBox,
    UniversityTab,
    ReviewComponent,
} from "./Stylesheet";
import { useDispatch, useSelector } from "react-redux";

import { getFreelancerProfile } from "../../../api/freelancer/gigsAPIs";
import { useNavigate } from "react-router-dom";
import FreelancerInfoCard from "../../Enterprise/FreelancerProfile/FreelancerInfoCard";
import EditIcon from "../../../assets/images/freelancer/editicon.svg";
import StarIcon from "../../../assets/images/freelancer/star.svg";
import RouteConstant from "../../../router/constants";

const { useBreakpoint } = Grid;

function MyProfile({ setHireMe, setInviteMe }) {
    const navigate = useNavigate();
    const screens = useBreakpoint();
    const [selectedTab, setSelectedTab] = useState("Skills");
    //   const [skills, setSkills] = useState(skillsData);
    const dispatch = useDispatch();

    const freelancerProfileData = useSelector(
        (state) => state.gigs.freelancerProfile
    );

    const handleNavigate = (param) =>
        navigate(
            RouteConstant.HOME +
                "/" +
                RouteConstant.EDIT_PROFILE +
                "?tab=" +
                param
        );

    useEffect(() => {
        dispatch(getFreelancerProfile());
    }, [dispatch]);

    const handleSelectTabs = (e) => {
        console.log(e.target);
        if (e.target.localName !== "li") {
            return;
        }
        setSelectedTab(e.target.innerText);
    };
    console.log("ppppppppppppppppppppp", freelancerProfileData);
    const iconHandler = () => {
        navigate("/home/edit-profile");
    };

    return (
        <Container>
            <CustomBreadcrumb separator={">"}>
                <div className="profileDetails">
                    <div className="profileDetails__left">
                        <div className="profileDetails__card scroll">
                            <ul
                                className="profileDetails__tabs"
                                onClick={handleSelectTabs}
                            >
                                <a href="#profile-Bio">
                                    <TabTitle color={selectedTab === "Bio"}>
                                        Bio
                                    </TabTitle>
                                </a>
                                <a href="#profile-Skills">
                                    <TabTitle color={selectedTab === "Skills"}>
                                        Skills
                                    </TabTitle>
                                </a>
                                <a href="#profile-Experience">
                                    <TabTitle
                                        color={selectedTab === "Experience"}
                                    >
                                        Experience
                                    </TabTitle>
                                </a>
                                <a href="#profile-Education">
                                    <TabTitle
                                        color={selectedTab === "Education"}
                                    >
                                        Education
                                    </TabTitle>
                                </a>
                                <a href="#profile-Reviews">
                                    <TabTitle color={selectedTab === "Reviews"}>
                                        Reviews
                                    </TabTitle>
                                </a>
                            </ul>
                        </div>
                        {!screens?.lg && (
                            <div className="profileDetails__right margin-t1">
                                <FreelancerInfoCard
                                    freelancerData={freelancerProfileData ?? []}
                                />
                            </div>
                        )}
                        <div className="profileDetails__card margin-t1">
                            <div className="section_edit">
                                <GlobalTextP2
                                    weight="700"
                                    className="margin-t1"
                                    id="profile-Skills"
                                >
                                    Skills
                                </GlobalTextP2>
                                <img
                                    src={EditIcon}
                                    className="icon__style"
                                    onClick={() => handleNavigate("skills")}
                                    alt="edit"
                                />
                            </div>

                            <CustomDivider />
                            <Space size={[16]} wrap>
                                {freelancerProfileData.skills?.map((skill) => (
                                    <TabBox>{skill}</TabBox>
                                ))}
                            </Space>

                            <div className="section_edit">
                                <GlobalTextP2
                                    weight="700"
                                    className="margin-t2"
                                    id="profile-Bio"
                                >
                                    About Me
                                </GlobalTextP2>
                                <img
                                    src={EditIcon}
                                    className="icon__style"
                                    alt="edit"
                                />
                            </div>
                            <CustomDivider />
                            <GlobalTextP4 className="margin-b0" color="#696969">
                                {freelancerProfileData?.about_me}
                            </GlobalTextP4>

                            <div className="section_edit">
                                <GlobalTextP2
                                    weight="700"
                                    className="margin-t2"
                                    id="profile-Experience"
                                >
                                    Experience
                                </GlobalTextP2>
                                <img
                                    src={EditIcon}
                                    className="icon__style"
                                    onClick={() => handleNavigate("experience")}
                                    alt="edit"
                                />
                            </div>

                            <CustomDivider />
                            {freelancerProfileData?.experience_details
                                ?.length === 0 ? (
                                <h2>No Experience Data Available</h2>
                            ) : (
                                freelancerProfileData?.experience_details?.map(
                                    (exp) => (
                                        <Space size={"middle"} align="start">
                                            <div className="profileDetails__expIconContainer">
                                                <ProfileOutlined className="profileDetails__expIcon" />
                                            </div>
                                            <div className="profileDetails__exp">
                                                <GlobalTextP4
                                                    className="margin-b0"
                                                    color="#4668D6"
                                                >
                                                    {exp?.start_date} -{" "}
                                                    {exp?.end_date}
                                                </GlobalTextP4>
                                                <GlobalTextP2
                                                    weight="700"
                                                    className="margin-t0 margin-b0"
                                                    id="profile-Experience"
                                                >
                                                    {exp?.designation}
                                                </GlobalTextP2>
                                                <GlobalTextP4
                                                    className="margin-b0"
                                                    color="#909090"
                                                >
                                                    {exp?.company_name} •{" "}
                                                    {exp?.job_type}
                                                </GlobalTextP4>
                                                <GlobalTextP4
                                                    className="margin-b0"
                                                    color="#696969"
                                                >
                                                    {exp?.description}
                                                </GlobalTextP4>
                                            </div>
                                        </Space>
                                    )
                                )
                            )}

                            <div className="section_edit">
                                <GlobalTextP2
                                    weight="700"
                                    className="margin-t2"
                                    id="profile-Education"
                                >
                                    Education
                                </GlobalTextP2>
                                <img
                                    src={EditIcon}
                                    className="icon__style"
                                    onClick={() => handleNavigate("education")}
                                    alt="edit"
                                />
                            </div>

                            <CustomDivider />
                            <UniversityTab>
                                {freelancerProfileData?.education_details
                                    ?.length === 0 ? (
                                    <h2>No Education Data Available</h2>
                                ) : (
                                    freelancerProfileData?.education_details?.map(
                                        (edu) => (
                                            <>
                                                <Space
                                                    size={"middle"}
                                                    align="start"
                                                >
                                                    <div className="profileDetails__expIconContainer">
                                                        <ProfileOutlined className="profileDetails__expIcon" />
                                                    </div>
                                                    <div className="profileDetails__exp">
                                                        <GlobalTextP4
                                                            className="margin-b0"
                                                            color="#4668D6"
                                                        >
                                                            {edu?.start_date} -
                                                            {edu?.end_date}
                                                        </GlobalTextP4>
                                                        <GlobalTextP4
                                                            className="margin-b0"
                                                            color="black"
                                                        >
                                                            {edu?.specializaion}
                                                        </GlobalTextP4>
                                                        <GlobalTextP4
                                                            className="margin-b0"
                                                            color="#909090"
                                                        >
                                                            {
                                                                edu?.institution_name
                                                            }
                                                        </GlobalTextP4>
                                                    </div>
                                                </Space>
                                            </>
                                        )
                                    )
                                )}
                            </UniversityTab>

                            <div className="section_edit">
                                <GlobalTextP2
                                    weight="700"
                                    className="margin-t2"
                                    id="profile-Reviews"
                                >
                                    Reviews
                                </GlobalTextP2>
                                <img
                                    src={EditIcon}
                                    className="icon__style"
                                    onClick={() => handleNavigate("reviews")}
                                    alt="edit"
                                />
                            </div>
                            <CustomDivider />
                            <ReviewComponent>
                                <h2> No Review Data Available</h2>
                            </ReviewComponent>
                        </div>
                    </div>
                    <UserCard
                        style={{ width: 350, height: 350, border: "none" }}
                    >
                        <img
                            src={EditIcon}
                            className="icon__style"
                            onClick={iconHandler}
                            alt=""
                        />
                        <div className="user__Profile">
                            <Avatar
                                size={80}
                                className="user__img"
                                src="https://s3-alpha-sig.figma.com/img/711c/b026/e632af1a458764cc973b92bd7a32296c?Expires=1665964800&Signature=Ef-UAP61z9D5d9JjGSGBlwX51~zep~utq0B4luBbzEwU6wDWIJS5vGJzhCDLmTjJNaEKAzGYr58X8gDT-74ZoENkxIgiPJLHb2jCQ5lLIPeMtLbCGKxe1D09OczugUfmWAPHhlxsK3pG2KczutvoXoXGCRbWbH2m67jKpklWleJxFB2YS4p3tbg-KUQAz6e8ZqsDpzfuGBWFNsRQQGXZ7ONuRUyChpunw3VnnX6ICCtawcz2ic3fOnMsDzz6Yi7qWRHeA72-k3HVZKJ8~ITetvO06AaUC7ttF4GqstWzAqYK-76wQbP8~nz853hnjFJ~BXVD0Z9GuYIkKwdBY4A3hA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            />
                            <h5 className="user__text">
                                {freelancerProfileData?.user?.first_name}{" "}
                                {freelancerProfileData?.user?.last_name}
                            </h5>
                            <p className="user__para">
                                {freelancerProfileData?.designation}
                            </p>
                        </div>
                        <div className="user__content">
                            <div className="user__content__one">
                                <Space size={"middle"} align="start">
                                    <div className="user__content__one__img">
                                        <img
                                            src={StarIcon}
                                            className="user__content__one__img__style"
                                            alt=""
                                        />
                                    </div>
                                    <div className="profileDetails__exp">
                                        <GlobalTextP4
                                            className="margin-b0"
                                            color="#909090"
                                        >
                                            Rating
                                        </GlobalTextP4>
                                        <GlobalTextP4
                                            weight="700"
                                            className="margin-t0 margin-b0"
                                            id="profile-Experience"
                                        >
                                            {console.log(
                                                freelancerProfileData?.ratings,
                                                "rating"
                                            )}
                                            {/* {freelancerProfileData?.ratings} */}{" "}
                                            //
                                        </GlobalTextP4>
                                    </div>
                                </Space>
                                <Space size={"middle"} align="start">
                                    <div className="user__content__two">
                                        <ProfileOutlined className="profileDetails__expIcon" />
                                    </div>
                                    <div className="profileDetails__exp">
                                        <GlobalTextP4
                                            className="margin-b0"
                                            color="#909090"
                                        >
                                            WAGE RATE
                                        </GlobalTextP4>
                                        <GlobalTextP4
                                            weight="700"
                                            className="margin-t0 margin-b0"
                                            id="profile-Experience"
                                        >
                                            RS.{" "}
                                            {
                                                freelancerProfileData?.rate_per_hour
                                            }
                                            /Hr.
                                        </GlobalTextP4>
                                    </div>
                                </Space>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <Space size={"middle"} align="start">
                                    <div className="user__content__two">
                                        <ProfileOutlined className="profileDetails__expIcon" />
                                    </div>
                                    <div className="profileDetails__exp">
                                        <GlobalTextP4
                                            className="margin-b0"
                                            color="#909090"
                                        >
                                            EXPERIENCE
                                        </GlobalTextP4>
                                        <GlobalTextP4
                                            weight="700"
                                            className="txt__style"
                                            id="profile-Experience"
                                        >
                                            Senior (
                                            {
                                                freelancerProfileData?.total_experience_in_year
                                            }{" "}
                                            yrs.)
                                        </GlobalTextP4>
                                    </div>
                                </Space>
                            </div>
                        </div>
                    </UserCard>
                </div>
            </CustomBreadcrumb>
        </Container>
    );
}

export default MyProfile;
