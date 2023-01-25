import React from "react";
import styled from "styled-components";
import FreelancerProfile from "../ActiveUser/FreelancerProfile";
import {
  JavaIcon,
  JsIcon,
  MicrosoftIcon,
  ReactIcon,
} from "../../../shared/icons";
import homeHeader from "../../../assets/images/freelancer/homeHeading.svg";
import frontend from "../../../assets/images/enterprise/frontend.svg";
import tips from "../../../assets/images/freelancer/tips.svg";
import backend from "../../../assets/images/enterprise/backend.svg";
import devops from "../../../assets/images/enterprise/devops.svg";
import fullStack from "../../../assets/images/enterprise/fullStack.svg";
import TemplateCard from "../../Enterprise/ChooseTemplate/TemplateCard";
import GigCard from "../GigList/GigCard";
import moment from "moment";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { Button, Progress } from "antd";

const Data = [
  {
    id: 1,
    created_at: "1664616929",
    title: "Back End Developer",
    companyName: "Hitesh Corp",
    string_duration: "2 Months",
    payment_type: "Monthly",
    total_budget: 10000,
  },
  {
    id: 2,
    created_at: "1664616929",
    title: "Back End Developer",
    companyName: "Hitesh Corp",
    string_duration: "2 Months",
    payment_type: "Monthly",
    total_budget: 10000,
  },
  {
    id: 3,
    created_at: "1664616929",
    title: "Back End Developer",
    companyName: "Hitesh Corp",
    string_duration: "2 Months",
    payment_type: "Monthly",
    total_budget: 10000,
  },
];

const templateCardData = [
  {
    id: 1,
    icon: <JavaIcon />,
    title: "Front End Developer",
    bgImg: frontend,
  },
  {
    id: 2,
    icon: <JsIcon />,
    title: "Back End Developer",
    bgImg: backend,
  },
  {
    id: 3,
    icon: <ReactIcon />,
    title: "Full Stack Developer",
    bgImg: fullStack,
  },
  {
    id: 4,
    icon: <MicrosoftIcon />,
    title: "Dev Ops",
    bgImg: devops,
  },
];

const Home = () => {
  const handleActiveGigDetail = (id) => {
    // dispatch(getGigDetail({ gigId: id }));
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
  return (
    <HomeContainer>
      <div className="div_1">
        <img src={homeHeader} alt="Heading" className="div1_image" />
        <WorkTimeline>
          <GlobalTextP2>Bid on Tech Gigs Now</GlobalTextP2>
          <GlobalTextP4>
            Find the gigs that you love and start bidding to increase your
            chances of getting hired. Not sure how? Watch the tutorial for help.
          </GlobalTextP4>
          <div className="worktimeline_buttons">
            <GlobalButtonblue>Browse Gigs</GlobalButtonblue>
            <GlobalButton>Watch Video</GlobalButton>
          </div>
        </WorkTimeline>
        <BrowseGig>
          <div className="BrowseFreelancer_heading">
            <GlobalTextP2>Browse Freelancers by role</GlobalTextP2>
            <GlobalTextP4>
              <a>View all</a>
            </GlobalTextP4>
          </div>
          <div className="BrowseFreelancer_cards">
            {templateCardData?.map((data) => (
              <TemplateCard
                key={data?.id}
                title={data?.title}
                Icon={data?.icon}
                bgImg={data?.bgImg}
                type={data?.id}
              />
            ))}
          </div>
        </BrowseGig>
      </div>
      <GigsRecommendation>
        <div className="recommendation_heading">
          <GlobalTextP2 className="heading_main">Recommendation</GlobalTextP2>
          <GlobalTextP4>
            <a>View all</a>
          </GlobalTextP4>
        </div>
        <div className="recommendation_cards">
          {Data?.map((data) => (
            <GigCard
              id={data?.id}
              gradientId={"gradient1"}
              date={moment.unix(data?.created_at).format("MM/DD/YYYY")}
              title={data?.title}
              companyName={data?.description}
              timeline={getDuration(data?.string_duration, data?.payment_type)}
              gigAmount={data?.total_budget}
              profileCompletePercent={80}
              bg="#fff"
              isBtn={true}
            />
          ))}
        </div>
      </GigsRecommendation>
      <div className="div_3">
        <FreelancerProfile />
        <InviteFriend>
          <GlobalTextP2>Invite a Friend</GlobalTextP2>
          <GlobalTextP4> Refer a friend to Gigverse</GlobalTextP4>
          <GlobalTextP4> Friend gets a Gig</GlobalTextP4>
          <GlobalTextP4> You get $1000. They get $500</GlobalTextP4>
          <InviteButton>
            <GlobalTextP4 style={{ marginRight: "2rem" }}>
              THYU89JI
            </GlobalTextP4>
            <GlobalTextP4> Tap to copy</GlobalTextP4>
          </InviteButton>
        </InviteFriend>

        <TipsForYou>
          <div className="tips_heading">
            <GlobalTextP2>Tips for You</GlobalTextP2>
            <GlobalTextP4>
              <a>View all</a>
            </GlobalTextP4>
          </div>
          <TipsTextContainer>
            <img src={tips} alt="tips" className="tips_image" />
            <div>
              <GlobalTextP4>
                <a>Daily Tips</a>
              </GlobalTextP4>
              <GlobalTextP2>Top 5 Benefits of Hiring Freelancing</GlobalTextP2>
              <GlobalTextP4>06 July, 2022</GlobalTextP4>
              <GlobalTextP4>
                Lorem ipsum dolor sit amet, iscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </GlobalTextP4>
            </div>
          </TipsTextContainer>
          <TipsTextContainer>
            <img src={tips} alt="tips" className="tips_image" />
            <div>
              <GlobalTextP4>
                <a>Daily Tips</a>
              </GlobalTextP4>
              <GlobalTextP2>Top 5 Benefits of Hiring Freelancing</GlobalTextP2>
              <GlobalTextP4>06 July, 2022</GlobalTextP4>
              <GlobalTextP4>
                Lorem ipsum dolor sit amet, iscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </GlobalTextP4>
            </div>
          </TipsTextContainer>
        </TipsForYou>
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;

  > .div_1 {
    margin-right: 1rem;
    margin-bottom: 1rem;
    width: 30%;
    > .div1_image {
      margin-bottom: 1rem;
    }
  }
  > .div_2 {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  > .div_3 {
    margin-bottom: 1rem;
    width: 40%;
  }
`;

const GlobalTextP2 = styled.p`
  font-size: 1rem;
  font-weight: ${(props) => (props.weight ? props.weight : "700")};
  line-height: 1.25rem;
  letter-spacing: 0em;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const GlobalTextP4 = styled.p`
  font-size: 0.75rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: 1.25rem;
  letter-spacing: 0.02em;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
`;

const BrowseGig = styled.div`
  margin-top: 2rem;
  background-color: white;
  padding: 2rem;
  border-radius: 6px;

  > .BrowseFreelancer_heading {
    display: flex;
    justify-content: space-between;
  }

  > .BrowseFreelancer_cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const GlobalButtonblue = styled(Button)`
  border-radius: 0.375rem;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0px;
  background-color: #4668d6;
  color: white;
  margin-right: 1rem;
`;

const WorkTimeline = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 6px;
  > .worktimeline_buttons {
    display: flex;
    justify-content: space-between;
  }
`;

const InviteFriend = styled.div`
  margin: 1rem 0;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
`;
const GigsRecommendation = styled.div`
  width: 30%;
  margin: 0 1rem;
  > .recommendation_cards {
    margin-bottom: 2rem;
    background-color: white;
  }
  > .recommendation_heading {
    display: flex;
    justify-content: space-between;

    > .heading_main {
      margin-right: 1rem;
    }
  }
`;

const TipsForYou = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  

  > .tips_heading {
    display: flex;
    justify-content: space-between;
  }
`;

const TipsTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  background-color: white;
  padding: 0.5rem;
  margin-top: 0.2rem;
  border-radius: 6px;
  > .tips_image {
    margin-right: 1rem;
  }
`;

const InviteButton = styled(Button)`
  border-radius: 0.375rem;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0px;
  background-color: linear-gradient(90deg, #4668d6 -2.13%, #5f27bd 100%);
  color: white;
  margin-right: 1rem;
`;
