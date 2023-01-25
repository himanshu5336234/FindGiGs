import { Grid } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import FreelancerInfoCard from "./FreelancerInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { getFreelancerData } from "../../../api/enterprise/gigsApis";
import { useParams } from "react-router-dom";
import {
  GlobalButton,
  GlobalTextP2,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { Checkbox } from "antd";
import styled from "styled-components";
import { SkillTab } from "../ExploreTalent/Stylesheet";
import SuccessModal from "./SuccessModal";
import {
  sendInvite,
} from "../../../api/enterprise/gigsApis";

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
  border-radius: 6px;
`;

const HireFreelancerInnerContainer = styled.div`
  border: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
`;

function SendInvite() {
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
        heading="Your Invite Has Been Sent"
        subheading="We will notify you once the freelancer has accepted your invitation.You can explore more freelancer recommendations or post a new gig."
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
              <GlobalTextP4>Create a chatbot for a Saas platform</GlobalTextP4>
            </HireFreelancer>
          </HireFreelancerContainer>

          {chatbot && (
            <div className="about_freelancer">
              <GlobalTextP4>Your Message</GlobalTextP4>
              <HireFreelancerInnerContainer>
                <GlobalTextP4>
                  Hello! <br />
                  <br />I would like you to take a look at the gig i have
                  posted. Please submit a bid if you are available & interested
                  in working with me. You can check out the gig by clicking on
                  the button below.
                </GlobalTextP4>
                <SkillTab>
                  <GlobalTextP5
                    className="margin-b0"
                    color="#4668D6"
                    weight="600"
                  >
                    Gig #5692
                  </GlobalTextP5>
                </SkillTab>
              </HireFreelancerInnerContainer>
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
export default SendInvite;
