import { Grid, Space } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { CustomDivider } from "../../Freelancer/GigList/Stylesheet";
import FreelancerInfoCard from "./FreelancerInfoCard";
import { ProfileOutlined } from "@ant-design/icons";
import { TabTitle } from "./Stylesheet";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancerData,
  sendInvite,
} from "../../../api/enterprise/gigsApis";
import { useParams } from "react-router-dom";
import {
  GlobalButton,
  GlobalTextP2,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { Checkbox } from "antd";
import styled from "styled-components";
import attachments from "../../../assets/images/freelancer/attachments.svg";
import budget from "../../../assets/images/freelancer/budget.svg";
import gigduration from "../../../assets/images/freelancer/gigduration.svg";
import paymentmethod from "../../../assets/images/freelancer/paymentmethod.svg";
import { SkillTab } from "../ExploreTalent/Stylesheet";
import SuccessModal from "./SuccessModal";

export const DummyData = [
  { icon: attachments, heading: "Attachments", value: "Full JD.pdf" },
  { icon: budget, heading: "Budget", value: "Rs. 1,00,000" },
  { icon: gigduration, heading: "Gig Duration", value: "5 Months 2 Weeks" },
  { icon: paymentmethod, heading: "Payment Method", value: "Fixed Rate" },
];

const { useBreakpoint } = Grid;
const HireFreelancer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .hirefreelancerHeading {
    color: #4668d6;
  }
  .title {
    margin: 0;
    color: #0c0e17;
    font-weight: 600;
    font-size: 1rem;
  }
`;
const HireFreelancerContainer = styled.div`
  border: 1px solid #dadada;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;
function SendOffer() {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [chatbot, setChatbot] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const freelancerData = useSelector(
    (state) => state.gigsEnterprise.freelancerData
  );
  const { gigId, gigData } = useSelector((state) => state.createGig);
  useEffect(() => {
    dispatch(getFreelancerData({ freelancer_id: Number(id) }));
  }, [id]);

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
    setModalVisible(true);
  };
  const handleChatbotClick = () => {
    setChatbot((prev) => !prev);
  };

  return (
    <div className="profileDetails">
      <SuccessModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        heading="Your Offer Has Been Sent"
        subheading="We will notify you when the freelancer has responded to your offer.You can explore more freelancer recommendations or post a new gig."
      />
      {!screens?.lg && (
        <div className="profileDetails__actions remove_extra_spacing">
          <GlobalButton
            type="primary"
            block
            onClick={handleSendInvite}
            disabled={!chatbot}
          >
            Send Offer
          </GlobalButton>
        </div>
      )}
      <div className="profileDetails__left">
        {!screens?.lg && (
          <div className="profileDetails__right margin-t1">
            <FreelancerInfoCard freelancerData={freelancerData} />
          </div>
        )}
        <div className="profileDetails__card margin-t1">
          <GlobalTextP4>
            Choose the gig you want to hire the freelancer for
          </GlobalTextP4>
          <HireFreelancerContainer>
            <Checkbox onChange={handleChatbotClick} />
            <HireFreelancer>
              <div className="hirefreelancerHeading">Gig ID #5692</div>
              <GlobalTextP4 className="title">
                Create a chatbot for a Saas platform
              </GlobalTextP4>
            </HireFreelancer>
          </HireFreelancerContainer>

          {chatbot && (
            <div className="about_freelancer">
              <GlobalTextP2>Create a chatbot for a Saas platform</GlobalTextP2>
              <GlobalTextP4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quisquam veniam quod corrupti fuga consequuntur facilis
                voluptatem excepturi delectus ipsam cum officiis quaerat
                repudiandae optio error, debitis perspiciatis quis corporis.
              </GlobalTextP4>
              <GlobalTextP2>Skills</GlobalTextP2>
              <ul className="freelancer_skills">
                <li>Skill</li>
                <li>Skill</li>
                <li>Skill</li>
                <li>Skill</li>
                <li>Skill</li>
              </ul>
              <div class="more_details">
                {DummyData?.map((item) => (
                  <div class="details">
                    <div className="image_icon">
                      <img src={item.icon} alt="" width="100%" height="100%" />
                    </div>
                    <div className="content">
                      <GlobalTextP5 className="title">
                        {item.heading}
                      </GlobalTextP5>
                      <GlobalTextP2 className="des"> {item.value}</GlobalTextP2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {screens?.lg && (
        <div className="profileDetails__right">
          <FreelancerInfoCard freelancerData={freelancerData} />
          <div className="profileDetails__actions">
            <GlobalButton
              type="primary"
              block
              onClick={handleSendInvite}
              disabled={!chatbot}
            >
              Send Invite
            </GlobalButton>
          </div>
        </div>
      )}
    </div>
  );
}
export default SendOffer;
