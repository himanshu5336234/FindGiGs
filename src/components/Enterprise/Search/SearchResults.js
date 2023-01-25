import GigCard from "../../Freelancer/GigList/GigCard";
import moment from "moment";
import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import SearchResultsImg from "../../../assets/images/enterprise/searchResults.svg";
import TemplateCard from "../ChooseTemplate/TemplateCard";
import {
  JavaIcon,
  JsIcon,
  MicrosoftIcon,
  ReactIcon,
} from "../../../shared/icons";
import frontend from "../../../assets/images/enterprise/frontend.svg";
import backend from "../../../assets/images/enterprise/backend.svg";
import devops from "../../../assets/images/enterprise/devops.svg";
import fullStack from "../../../assets/images/enterprise/fullStack.svg";
import FreelancerInfo from "../ExploreTalent/FreelancerInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
const DummyCardNumbers = [1, 2, 3, 4, 5];

const DummyFindFreelancers = [
  "AngularJS Developers",
  "AWS Developers",
  "C# Developers",
  "C++ Developers",
  "CSS Developers",
  "Data Analysts",
  "Data Visualization Consultants",
];
const DummyFindFreelancers2 = [
  "Developers",
  "DevOps Developers",
  "eCommerce Developers",
  "Front End Developers",
  "Full Stack Developers",
  "Game Developers",
  "Go Developers",
];
const DummyFindFreelancers3 = [
  "HTML5 Developers",
  "Machine Learning Developers",
  "Magneto Developers",
  "Mobile App Developers",
  "MySQL Developers",
  "Python Developers",
  "React Native Developers",
];

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

const SearchResults = () => {
  const { search } = useParams();
  const userType = localStorage.getItem("type");
  const SearchResult = useSelector((state) => state.searchGig.results);
  const freelancer_job_role = {
    1: "Frontend Developer",
    2: "Backend Developer",

    3: "Devops",

    4: "Data Engineer",

    5: "Data Scientist",

    6: "Full Stack Developer",

    7: "Data Analyst",

    8: "Quality Assurance",

    9: "UI/UX Designer",

    10: "Others",
  };

  const fillteredResult = SearchResult.filter((item) => {
    if (item.skill && item.skill === search) {
      return true;
    } else if (item.freelancer_job_role) {
      const key = Object.keys(freelancer_job_role).filter(function (key) {
        return freelancer_job_role[key] === search;
      })[0];

      return item.freelancer_job_role == key;
    } else if (item.title && item.title === search) {
      return true;
    } else {
      return;
    }
  });

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
    <SearchResultsContainer>
      <div className="searchResult_buttons">
        <GlobalButton className="explore_button">Explore Roles</GlobalButton>
        <GlobalButton>Recommendation</GlobalButton>
      </div>
      <SearchResultsDiv>
        <div className="SearchResultsHeading">
          <GlobalTitle>
            Explore all the popular freelancers at BeGig
          </GlobalTitle>
          <GlobalSubText>
            Build a successful partnership by hiring the right talent that will
            move your business ahead.
          </GlobalSubText>
          <GlobalButton>Find Talent</GlobalButton>
        </div>
        <img src={SearchResultsImg} alt="search results" />
      </SearchResultsDiv>
      <BrowseFreelancer>
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
      </BrowseFreelancer>
      {userType !== "freelancer" ? (
        <>
          <RecommendedFreelancers>
            <div className="recommendedFreelancer_heading">
              <GlobalTextP2>Browse Freelancers by role</GlobalTextP2>
              <GlobalTextP4>
                <a>View all</a>
              </GlobalTextP4>
            </div>

            <div className="recommendedFreelancer_Cards">
              {fillteredResult?.map((data) => (
                <div className="recommendedFreelancer_Card">
                  {console.log(data?.freelancer, "filtered name")}

                  <FreelancerInfo freelancerData={data?.freelancer} />
                </div>
              ))}
            </div>
          </RecommendedFreelancers>
          <FindFreelancers>
            <GlobalTextP2>Find freelancers by skill</GlobalTextP2>
            <div className="findfreelancer">
              <div>
                {DummyFindFreelancers.map((freelancer) => (
                  <GlobalSubText>{freelancer}</GlobalSubText>
                ))}
              </div>
              <div>
                {DummyFindFreelancers2.map((freelancer) => (
                  <GlobalSubText>{freelancer}</GlobalSubText>
                ))}
              </div>
              <div>
                {DummyFindFreelancers3.map((freelancer) => (
                  <GlobalSubText>{freelancer}</GlobalSubText>
                ))}
              </div>
            </div>
          </FindFreelancers>
        </>
      ) : (
        <>
          <Row gutter={16} className="margin-t1">
            {fillteredResult?.map((data) => (
              <Col
                key={data?.id}
                className="gutter-row "
                span={8}
                style={{
                  marginBottom: "1rem",
                }}
              >
                <GigCard
                  id={data?.id}
                  gradientId={"gradient1"}
                  date={moment.unix(data?.created_at).format("MM/DD/YYYY")}
                  title={data?.title}
                  companyName={data?.description}
                  timeline={getDuration(
                    data?.string_duration,
                    data?.payment_type
                  )}
                  gigAmount={data?.total_budget}
                  profileCompletePercent={80}
                  bg="#fff"
                  isBtn={true}

                  // onClick={() => handleActiveGigDetail(data?.id)}
                />
              </Col>
            ))}
          </Row>
          <FindFreelancers>
            <GlobalTextP2>Find other in-demand skills</GlobalTextP2>
            <div className="findfreelancer">
              <div>
                {DummyFindFreelancers.map((freelancer) => (
                  <GlobalSubText>{freelancer}</GlobalSubText>
                ))}
              </div>
              <div>
                {DummyFindFreelancers2.map((freelancer) => (
                  <GlobalSubText>{freelancer}</GlobalSubText>
                ))}
              </div>
              <div>
                {DummyFindFreelancers3.map((freelancer) => (
                  <GlobalSubText>{freelancer}</GlobalSubText>
                ))}
              </div>
            </div>
          </FindFreelancers>
        </>
      )}
    </SearchResultsContainer>
  );
};

export default SearchResults;

const SearchResultsContainer = styled.div`
  max-width: 1050px;
  margin-left: 2rem;

  > .searchResult_buttons {
    display: flex;

    > .explore_button {
      margin-right: 1rem;
    }
  }
`;

export const GlobalTitle = styled.h3`
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

export const GlobalSubText = styled.p`
  font-size: 0.8125rem;
  font-weight: ${(props) => (props.weight === "bold" ? "600" : "500")};
  line-height: 1.375rem;
  letter-spacing: 0px;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#6d6d6d")};
`;

export const GlobalTextP1 = styled.p`
  font-size: 1.25rem;
  font-weight: ${(props) => (props.weight ? props.weight : "700")};
  line-height: 1.5237rem;
  letter-spacing: 0em;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
  @media only screen and (max-width: 600px) {
    font-size: 1.125rem;
  }
`;
export const GlobalTextP2 = styled.p`
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

export const GlobalTextP3 = styled.p`
  font-size: 0.875rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: 1.25rem;
  letter-spacing: 0em;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const GlobalTextP4 = styled.p`
  font-size: 0.75rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: 1.25rem;
  letter-spacing: 0.02em;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
`;

export const GlobalTextP5 = styled.p`
  font-size: 0.625rem;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: 0.75rem;
  letter-spacing: 0em;
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#0C0E17")};
`;

export const GlobalButton = styled(Button)`
  border-radius: 0.375rem;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0px;

  &.ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    background-color: #dbe2fc;
    border: 1px solid #dbe2fc;
    color: white;
  }

  &.ant-btn {
    border-color: #4668d6;
    color: #4668d6;
  }

  &.ant-btn-primary {
    border-color: #4668d6;
    color: #fff;
  }

  & > img {
    margin-right: 10px;
    object-fit: contain;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    line-height: 0.9375rem;
  }
`;

const SearchResultsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 6px;
  margin-top: 2rem;

  > .SearchResultsHeading {
    margin-right: 1rem;
  }
`;

const BrowseFreelancer = styled.div`
  margin-top: 2rem;

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

const RecommendedFreelancers = styled.div`
  margin-top: 2rem;
  > .recommendedFreelancer_heading {
    display: flex;
    justify-content: space-between;
  }

  > .recommendedFreelancer_Cards {
    display: flex;
    flex-wrap: wrap;

    > .recommendedFreelancer_Card {
      padding: 0.5rem;
    }
  }
`;

const FindFreelancers = styled.div`
  margin: 1rem 0;

  > .findfreelancer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 1rem;
  }
`;
