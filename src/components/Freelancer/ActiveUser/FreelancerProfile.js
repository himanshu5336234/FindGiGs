import { Avatar, Button, Space } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TechMLogo from "../../../assets/images/common/TechMLogo.svg";
import { getFreelancerProfile } from "../../../api/freelancer/gigsAPIs";
import {
  GlobalSubText,
  GlobalTextP2,
  GlobalTextP5,
  GlobalTextP3,
} from "../../../shared/GlobalComponents";
import star from "../../../assets/images/freelancer/star.svg";
import EditIcon from "../../../assets/images/freelancer/editicon.svg";
import freelancerDummyImage from "../../../assets/images/freelancer/freelancerDummyImage.svg";
import { IconContainer, Title } from "./Stylesheet";
import {
  LeftOutlined,
  RightOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
const FreelancerProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getFreelancerProfile());
  }, [dispatch]);
  const { gigstatus, freelancerProfile } = useSelector((state) => state.gigs);
  console.log("get freelancer details", freelancerProfile);
  return (
    <FreelancerProfileContainer>
      <img src={TechMLogo} style={{
        height: "100px",
        width: "100px",
        marginRight:"15px"
       
        
      }} />
      <div style={{width:"100%"}}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Title className="margin-b0">
              {freelancerProfile?.user?.first_name}
            </Title>
            <GlobalTextP5 className="margin-b0" color="#696969">
              {/* {freelancerProfile.experience_details[0].designation} */}
              tester
            </GlobalTextP5>
          </div>
          <img src={EditIcon} alt="edit"/>
        </div>

        <div
          
          style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}
        >
          <ExperienceButton>
            <GlobalTextP4 className="margin-b0">Experience</GlobalTextP4>
            <GlobalTitle className="margin-b0" color="#4668D6">
              {freelancerProfile.total_experience_in_year}
            </GlobalTitle>
          </ExperienceButton>
          <RatingButton>
            <GlobalTextP4 className="margin-b0">Rating</GlobalTextP4>
            <div className="rating_div">
              <img className="star_logo" src={star} alt="edit" />
              <GlobalTitle className="margin-b0">
                {/* {freelancerProfile.ratings} */}
              </GlobalTitle>
            </div>
          </RatingButton>
        </div>
      </div>
    </FreelancerProfileContainer>
  );
};
export default FreelancerProfile;
const FreelancerProfileContainer = styled.div`
  display: flex;
  background:#fff;
  border-radius:6px;
  padding:20px 10px;
  
`;
const ExperienceButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e9eeff;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
`;
const RatingButton = styled.button`
  background: #fff5d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  min-width:100px;
  border: none;
  border-radius: 4px;
  > .rating_div {
    display: flex;
    justify-content: center;
    align-items: center;
    > .star_logo {
      margin-right: 0.5rem;
    }
  }
`;
const GlobalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.1875rem;
  letter-spacing: 0px;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#000000d9")};
  @media only screen and (max-width: 600px) {
    font-size: 1.1875rem;
    font-weight: 700;
    line-height: 1.875rem;
    letter-spacing: 0px;
  }
`;
const GlobalTextP4 = styled.p`
  font-size: 0.75rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: 0.7rem;
  letter-spacing: 0.02em;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
`;
