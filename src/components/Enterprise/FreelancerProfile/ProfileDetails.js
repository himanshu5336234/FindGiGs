import { Grid, Space } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  GlobalButton,
  GlobalTextP2,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { CustomDivider } from "../../Freelancer/GigList/Stylesheet";
import { SkillTab } from "../ExploreTalent/Stylesheet";
import FreelancerInfoCard from "./FreelancerInfoCard";
import { ProfileOutlined } from "@ant-design/icons";
import { TabTitle } from "./Stylesheet";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancerData,
  sendInvite,
} from "../../../api/enterprise/gigsApis";
import { useParams } from "react-router-dom";

const { useBreakpoint } = Grid;

const dummyDataJson = {
  id: 459,
  skills: [
    "React Js",
    "Python",
    "Java",
    "HTML",
    "React Native",
    "User Research",
  ],
  about_me:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con equat.",
  experience: {
    company_name: "Uber",
    role: "Frontend Develoer",
    start_date: "May 2019",
    end_date: "June 2020",
    role_type: "Full time",
    description:
      "Uber's mission is 'To ignite opportunity by setting the world in motion'. Uber is evolving the way the world moves. By seamlessly connecting riders to drivers through our apps and self-driving cars powered by deep learning, we make cities",
  },
  rating: 4.5,
  total_experience: "Senior (3-5 Yrs.)",
  wage_rate: "1500",
  profile_completion: 70,
  first_name: "Kalyan",
  last_name: "Kuramana",
  designation: "Full Stack developer",
};

function ProfileDetails({ setHireMe, setInviteMe }) {
  const screens = useBreakpoint();
  const [selectedTab, setSelectedTab] = useState("Skills");
  const dispatch = useDispatch();
  const { id } = useParams();
  const freelancerData = useSelector(
    (state) => state.gigsEnterprise.freelancerData
  );
  const { gigId, gigData } = useSelector((state) => state.createGig);

  useEffect(() => {
    dispatch(getFreelancerData({ freelancer_id: Number(id) }));
  }, [id]);

  const handleSelectTabs = (e) => {
    if (e.target.localName !== "li") {
      return;
    }
    setSelectedTab(e.target.innerText);
  };

  const handleSendInvite = () => {
    const record = {
      gigs: {
        id: gigId,
      },
      freelancer_id: freelancerData?.freelancerDetails?.id,
      message: "new message",
      estimated_duration: Number(gigData?.estimated_duration),
      estimated_budget: Number(gigData?.estimated_budget),
    };
    dispatch(sendInvite({ record }));
  };
  return (
    <div className="profileDetails">
      {!screens?.lg && (
        <div className="profileDetails__actions">
          <GlobalButton type="primary" block onClick={() => setHireMe(true)}>
            Hire Me
          </GlobalButton>
          <GlobalButton block onClick={() => setInviteMe(true)}>
            Invite
          </GlobalButton>
        </div>
      )}
      <div className="profileDetails__left">
        <div className="profileDetails__card scroll">
          <ul className="profileDetails__tabs" onClick={handleSelectTabs}>
            <a href="#profile-Skills">
              <TabTitle color={selectedTab === "Skills"}>Skills</TabTitle>
            </a>
            <a href="#profile-About Me">
              <TabTitle color={selectedTab === "About Me"}>About Me</TabTitle>
            </a>
            <a href="#profile-Experience">
              <TabTitle color={selectedTab === "Experience"}>
                Experience
              </TabTitle>
            </a>
            <a href="#profile-Education">
              <TabTitle color={selectedTab === "Education"}>Education</TabTitle>
            </a>
            <a href="#profile-Reviews">
              <TabTitle color={selectedTab === "Reviews"}>Reviews</TabTitle>
            </a>
          </ul>
        </div>
        {!screens?.lg && (
          <div className="profileDetails__right margin-t1">
            <FreelancerInfoCard freelancerData={freelancerData} />
          </div>
        )}
        <div className="profileDetails__card margin-t1">
          {/* Skills Section */}

          <GlobalTextP2 weight="700" className="margin-t1" id="profile-Skills">
            Skills
          </GlobalTextP2>
          <CustomDivider />
          <Space size={"middle"} wrap>
            {freelancerData?.freelancerDetails?.skills?.map((skill, idx) => (
              <SkillTab key={idx}>
                <GlobalTextP5
                  className="margin-b0"
                  color="#4668D6"
                  weight="600"
                >
                  {skill}
                </GlobalTextP5>
              </SkillTab>
            ))}
          </Space>

          {/* About Me Section */}

          <GlobalTextP2
            weight="700"
            className="margin-t2"
            id="profile-About Me"
          >
            About Me
          </GlobalTextP2>
          <CustomDivider />
          <GlobalTextP4 className="margin-b0" color="#696969">
            {freelancerData?.freelancerDetails?.about_me}
          </GlobalTextP4>

          {/* Experience Section */}

          <GlobalTextP2
            weight="700"
            className="margin-t2"
            id="profile-Experience"
          >
            Experience
          </GlobalTextP2>
          <CustomDivider />
          <Space size={"middle"} align="start">
            <div className="profileDetails__expIconContainer">
              <ProfileOutlined className="profileDetails__expIcon" />
            </div>
            <div className="profileDetails__exp">
              <GlobalTextP4 className="margin-b0" color="#4668D6">
                {dummyDataJson?.experience?.start_date} -{" "}
                {dummyDataJson?.experience?.end_date}
              </GlobalTextP4>
              <GlobalTextP4 className="margin-b0" color="#909090">
                {dummyDataJson?.experience?.company_name} •{" "}
                {dummyDataJson?.experience?.role_type}
              </GlobalTextP4>
              <GlobalTextP4 className="margin-b0" color="#696969">
                {dummyDataJson?.experience?.description}
              </GlobalTextP4>
            </div>
          </Space>

          {/* Education Section */}

          <GlobalTextP2
            weight="700"
            className="margin-t2"
            id="profile-Education"
          >
            Education
          </GlobalTextP2>
          <CustomDivider />

          {/* Reviews Section */}

          <GlobalTextP2 weight="700" className="margin-t2" id="profile-Reviews">
            Reviews
          </GlobalTextP2>
          <CustomDivider />
        </div>
      </div>
      {screens?.lg && (
        <div className="profileDetails__right">
          <FreelancerInfoCard freelancerData={freelancerData} />
          <div className="profileDetails__actions">
            <GlobalButton type="primary" block onClick={() => setHireMe(true)}>
              Hire Me
            </GlobalButton>
            {/*<GlobalButton block onClick={() => setInviteMe(true)}>
              Invite
      </GlobalButton>*/}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDetails;
