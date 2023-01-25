import React from "react";
import styled from "styled-components";
import {
  GlobalButton,
  GlobalContainer,
  GlobalTitle,
} from "../shared/GlobalComponents";
import welcome from "../assets/images/common/welcome.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 2rem;
  & > img {
    width: 20rem;
    object-fit: contain;
    @media only screen and (max-width: 600px) {
      width: 15rem;
    }
  }
  & > p {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0px;
    text-align: center;
    @media only screen and (max-width: 600px) {
      text-align: left;
    }
  }
`;

const CustomButton = styled(GlobalButton)`
  width: 18rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

function WelcomePage() {
  const type = localStorage.getItem("type");
  const navigate = useNavigate();

  return (
    <section className="margin-t2">
      <GlobalContainer>
        <Container>
          <img src={welcome} alt="welcome after successfull registration" />
          {type === "enterprise" && (
            <>
              <GlobalTitle>Let’s Begin!</GlobalTitle>
              <p>
                We'll collect information about your firm, such as its name,
                bio, size, industry, and so on, to assist you connect with
                freelancers and get your projects started. At each stage, your
                progress is automatically saved, allowing you to return to it at
                any time.
              </p>
            </>
          )}
          {type === "freelancer" && (
            <>
              <GlobalTitle>Are you prepared for the journey ahead?</GlobalTitle>
              <p>
                We'll gather information about your professional experience,
                such as your area of expertise, skills and preferred wage rate
                to recommend you gigs . Your progress is automatically saved at
                each step allowing you to return to it at any time.
              </p>
            </>
          )}
          <CustomButton type="primary" onClick={() => navigate("/onboarding")}>
            I’m Ready!
          </CustomButton>
        </Container>
      </GlobalContainer>
    </section>
  );
}

export default WelcomePage;
