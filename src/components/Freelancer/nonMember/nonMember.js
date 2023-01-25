// import React, { useEffect } from "react";
// import { Progress, Timeline } from "antd";
// import TemplateCard from "./TemplateCard";
// import {
//     JavaIcon,
//     JsIcon,
//     MicrosoftIcon,
//     PythonIcon,
//     ReactIcon,
// } from "../../../shared/icons";

// import frontend from "../../../assets/images/enterprise/frontend.svg";
// import backend from "../../../assets/images/enterprise/backend.svg";
// import devops from "../../../assets/images/enterprise/devops.svg";
// import fullStack from "../../../assets/images/enterprise/fullStack.svg";
// import dataAnalyst from "../../../assets/images/enterprise/dataAnalyst.svg";
// import Banimg from "../../../assets/images/common/lo.png";
// import notify from "../../../assets/images/common/notify.png";
// import calenderIcon from "../../../assets/images/common/calender.png";
// import clockIcon from "../../../assets/images/freelancer/clock.svg";
// import GreenDot from "../../../assets/images/common/TimelineGreenDot.png";
// import BlueDot from "../../../assets/images/common/TimelineBlueDot.png";
// import GrayDot from "../../../assets/images/common/TimelineGrayDot.png";
// import { useDispatch, useSelector } from "react-redux";
// import { getRecommendedGigs } from "../../../api/freelancer/gigsAPIs";
// import GigCard from "../GigList/GigCard";
// import moment from "moment";
// import {
//     GigRecommendationWrapper,
//     RecommendationCard,
//     GigByRole,
//     Heading,
//     CardFirst,
//     TopCardsWrapper,
//     CardThird,
//     SecondChild,
//     Notification,
//     CardSecond,
//     ProgressCircle,
// } from "./index.js";
// const NonMember = () => {
//     const templateCardData = [
//         {
//             id: 1,
//             icon: <JavaIcon />,
//             title: "Front End Developer",
//             bgImg: frontend,
//         },
//         {
//             id: 2,
//             icon: <JsIcon />,
//             title: "Back End Developer",
//             bgImg: backend,
//         },
//         {
//             id: 3,
//             icon: <ReactIcon />,
//             title: "Full Stack Developer",
//             bgImg: fullStack,
//         },
//         {
//             id: 4,
//             icon: <MicrosoftIcon />,
//             title: "Dev Ops",
//             bgImg: devops,
//         },
//         {
//             id: 5,
//             icon: <PythonIcon />,
//             title: "Data Analyst",
//             bgImg: dataAnalyst,
//         },
//     ];
//     const showGigRole = () => {
//         return templateCardData.map((item) => {
//             return (
//                 <TemplateCard
//                     width="180px"
//                     Icon={item.icon}
//                     title={item.title}
//                     bgImg={item.bgImg}
//                     gig="21 gigs"
//                 />
//             );
//         });
//     };
// const dispatch = useDispatch();
// useEffect(() => {
//     dispatch(getRecommendedGigs({ offset: 0, limit: 20 }));
// }, [dispatch]);
// const { recommendedGigs: recGigs } = useSelector((state) => state.gigs);

//     console.log("??????????????????", recGigs);
//     return (
//         <div>
//             <div style={{ padding: "20px" }}>
//                 <TopCardsWrapper>
//                     <CardFirst style={{ backgroundImage: `url(${Banimg})` }}>
//                         <h2>Explore Gigverse Features now!</h2>

//                         <button>Explore Gigverse</button>
//                     </CardFirst>

// <CardSecond>
//     <h2>Your Gigverse Journey</h2>
//     <p>
//         Now's the time to build your profile before
//         connecting with enterprises.
//     </p>
//     <div
//         style={{
//             display: "flex",
//             justifyContent: "space-around",
//         }}
//     >
//         <Timeline>
//             <Timeline.Item
//                 dot={<img src={GreenDot} alt="" />}
//             >
//                 Profile Setup
//             </Timeline.Item>
//             <Timeline.Item
//                 dot={<img src={GreenDot} alt="" />}
//             >
//                 Based
//             </Timeline.Item>
//             <Timeline.Item
//                 dot={<img src={BlueDot} alt="" />}
//             >
//                 Interview
//             </Timeline.Item>
//             <Timeline.Item
//                 dot={<img src={GrayDot} alt="" />}
//             >
//                 Gigverse Member
//             </Timeline.Item>
//         </Timeline>
//         <ProgressCircle>
//             <Progress
//                 type="circle"
//                 percent={60}
//                 strokeColor="#28C78E"
//                 format={(percent) => (
//                     <>
//                         <h4> {percent}% </h4>
//                         <p>completed</p>
//                     </>
//                 )}
//             />
//             {/* <img src={ProgressiIcon} /> */}
//         </ProgressCircle>
//     </div>
// </CardSecond>
//                     <CardThird>
//                         <div
//                             style={{
//                                 width: "100%",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                             }}
//                         >
//                             <div>
//                                 <h3>Interview</h3>
//                                 <p>Web developer role</p>
//                             </div>
//                             <Notification>
//                                 <img src={notify} alt="" />
//                                 <h5>2 Days to go</h5>
//                             </Notification>
//                         </div>

//                         <SecondChild>
//                             <div style={{ display: "flex" }}>
//                                 <img src={calenderIcon} alt="" />
//                                 <div>
//                                     <h2>Sat, May 25, 2020</h2>
//                                     <p>2 Days to go</p>
//                                 </div>
//                             </div>
//                             <div style={{ display: "flex" }}>
//                                 <img src={clockIcon} alt="" />
//                                 <div>
//                                     <h2>Sat, May 25, 2020</h2>
//                                     <p>2 Days to go</p>
//                                 </div>
//                             </div>
//                         </SecondChild>

//                         <button>Join</button>
//                     </CardThird>
//                 </TopCardsWrapper>
//             </div>

//             <div style={{ padding: "20px" }}>
//                 <Heading style={{ marginBottom: "1rem" }}>
//                     Browse Gigs by role
//                 </Heading>
//                 <GigByRole>{showGigRole()}</GigByRole>
//             </div>

// <div style={{ padding: "20px" }}>
//     <Heading>Gigs Recommendation</Heading>
//     <GigRecommendationWrapper>
//         {recGigs?.map((gig) => (
//             <RecommendationCard>
//                 <GigCard
//                     date={moment
//                         .unix(gig?.created_at)
//                         .format("MM/DD/YYYY")}
//                     timeline="2 month"
//                     gigAmount={`Rs ${gig?.total_budget}`}
//                     title={gig?.title}
//                     companyName={gig?.company_name}
//                     // discription="Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor ut labore et dolore magna magna...."
//                 />
//             </RecommendationCard>
//         ))}

//         {/* <RecommendationCard>
//             <GigCard
//                 date="2 June"
//                 timeline="2 month"
//                 gigAmount="2,00,000"
//                 title="Front End Developer"
//                 companyName="Tech Mahindra"
//                 discription="Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor ut labore et dolore magna magna...."
//             />
//         </RecommendationCard> */}
//         {/* <RecommendationCard>
//             <GigCard
//                 date="2 June"
//                 timeline="2 month"
//                 gigAmount="2,00,000"
//                 title="Front End Developer"
//                 companyName="Tech Mahindra"
//                 discription="Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor ut labore et dolore magna magna...."
//             />
//         </RecommendationCard> */}
//     </GigRecommendationWrapper>
// </div>
//         </div>
//     );
// };

// export default NonMember;
import React, { useEffect } from "react";
import { Progress, Timeline } from "antd";
import TemplateCard from "./TemplateCard";
import {
  JavaIcon,
  JsIcon,
  MicrosoftIcon,
  PythonIcon,
  ReactIcon,
} from "../../../shared/icons";

import frontend from "../../../assets/images/enterprise/frontend.svg";
import backend from "../../../assets/images/enterprise/backend.svg";
import devops from "../../../assets/images/enterprise/devops.svg";
import fullStack from "../../../assets/images/enterprise/fullStack.svg";
import dataAnalyst from "../../../assets/images/enterprise/dataAnalyst.svg";
import Banimg from "../../../assets/images/common/lo2.png";
import notify from "../../../assets/images/common/notify.png";
import calenderIcon from "../../../assets/images/common/calender.png";
import clockIcon from "../../../assets/images/freelancer/clock.svg";
import GreenDot from "../../../assets/images/common/TimelineGreenDot.png";
import BlueDot from "../../../assets/images/common/TimelineBlueDot.png";
import GrayDot from "../../../assets/images/common/TimelineGrayDot.png";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedGigs } from "../../../api/freelancer/gigsAPIs";
import GigCard from "../GigList/GigCard";
import moment from "moment";
import {
  GigRecommendationWrapper,
  RecommendationCard,
  GigByRole,
  Heading,
  CardFirst,
  TopCardsWrapper,
  CardThird,
  SecondChild,
  Notification,
  CardSecond,
  ProgressCircle,
} from "./index.js";
const nonMember = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendedGigs({ offset: 0, limit: 20 }));
  }, [dispatch]);
  const { recommendedGigs: recGigs } = useSelector((state) => state.gigs);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ maxWidth: "750px" }}>
          <CardFirst>
            <img src={Banimg} />

            <div>
              <h2>Explore Gigverse Features now!</h2>

              <button>Explore Gigverse</button>
            </div>
          </CardFirst>

          <div style={{ display: "flex" }}>
            <div style={{ padding: "10px 0px", minWidth: "400px" }}>
              <CardThird>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3>Interview</h3>
                    <p>Web developer role</p>
                  </div>
                  <Notification>
                    <img src={notify} alt="" />
                    <h5>2 Days to go</h5>
                  </Notification>
                </div>

                <SecondChild>
                  <div style={{ display: "flex" }}>
                    <img src={calenderIcon} alt="" />
                    <div>
                      <h2>Sat, May 25, 2020</h2>
                      <p>2 Days to go</p>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <img src={clockIcon} alt="" />
                    <div>
                      <h2>Sat, May 25, 2020</h2>
                      <p>2 Days to go</p>
                    </div>
                  </div>
                </SecondChild>

                <button>Join</button>
              </CardThird>
              <CardSecond>
                <h2>Your Gigverse Journey</h2>
                <p>
                  Now's the time to build your profile before connecting with
                  enterprises.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Timeline>
                    <Timeline.Item dot={<img src={GreenDot} alt="" />}>
                      Profile Setup
                    </Timeline.Item>
                    <Timeline.Item dot={<img src={GreenDot} alt="" />}>
                      Based
                    </Timeline.Item>
                    <Timeline.Item dot={<img src={BlueDot} alt="" />}>
                      Interview
                    </Timeline.Item>
                    <Timeline.Item dot={<img src={GrayDot} alt="" />}>
                      Gigverse Member
                    </Timeline.Item>
                  </Timeline>
                  <ProgressCircle>
                    <Progress
                      type="circle"
                      percent={60}
                      strokeColor="#28C78E"
                      format={(percent) => (
                        <>
                          <h4> {percent}% </h4>
                          <p>completed</p>
                        </>
                      )}
                    />
                    {/* <img src={ProgressiIcon} /> */}
                  </ProgressCircle>
                </div>
              </CardSecond>
            </div>
            <div>
              <div style={{ padding: "20px" }}>
                <Heading>Gigs Recommendation</Heading>
                <GigRecommendationWrapper>
                  {recGigs?.map((gig) => (
                    <RecommendationCard>
                      <GigCard
                        date={moment.unix(gig?.created_at).format("MM/DD/YYYY")}
                        timeline="2 month"
                        gigAmount={`Rs ${gig?.total_budget}`}
                        title={gig?.title}
                        companyName={gig?.company_name}
                        // discription="Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor ut labore et dolore magna magna...."
                      />
                    </RecommendationCard>
                  ))}

                  <RecommendationCard>
                    <GigCard
                      date="2 June"
                      timeline="2 month"
                      gigAmount="2,00,000"
                      title="Front End Developer"
                      companyName="Tech Mahindra"
                      discription="Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor ut labore et dolore magna magna...."
                    />
                  </RecommendationCard>
                </GigRecommendationWrapper>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "550px" }}>
          <div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Kalyan Kuramana</h3>
                <p>Front End developer</p>
              </div>
              <Notification>
                <img src={notify} alt="" />
                <h5>2 Days to go</h5>
              </Notification>
            </div>

            <div>
              <p>
                Add your work experience and education details to help
                enterprises get to know you better.
              </p>
            </div>

            <button>Completed Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default nonMember;
