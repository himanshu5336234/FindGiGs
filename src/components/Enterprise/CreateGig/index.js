import React, { useEffect, useState } from "react";
import { Container, CustomStep, CustomSteps, Title } from "./Stylesheet";
import {
  UserOutlined,
  FontSizeOutlined,
  FileTextOutlined,
  PrinterOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import GigTitle from "./GigTitle";
import Description from "./Description";
import PaymentMethod from "./PaymentMethod";
import Duration from "./Duration";
import Skills from "./Skills";
import FreelancerInfo from "./FreelancerInfo";
import Budget from "./Budget";
import { Grid } from "antd";
import { getCreatedGigData } from "../../../api/enterprise/createGigApis";
import { setGigDataEmpty } from "../../../redux/enterprise/createGigSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const { useBreakpoint } = Grid;

const items = [
  {
    id: 0,
    icon: <FontSizeOutlined />,
    title: "Gig Title",
  },
  {
    id: 1,
    icon: <FileTextOutlined />,
    title: "Description",
  },
  {
    id: 2,
    icon: <PrinterOutlined />,
    title: "Payment Method",
  },
  {
    id: 3,
    icon: <ClockCircleOutlined />,
    title: "Duration",
  },
  {
    id: 4,
    icon: <CrownOutlined />,
    title: "Skills",
  },
  {
    id: 5,
    icon: <UserOutlined />,
    title: "Freelancer Info",
  },
  {
    id: 6,
    icon: <DollarCircleOutlined />,
    title: "Budget",
  },
];

const IconContainer = ({ icon }) => {
  return <div className="creategig__iconContainer">{icon}</div>;
};

function CreateGig() {
  const { state: currentTab } = useLocation();

  const [tabIndex, setTabIndex] = useState(currentTab || 0);
  const dispatch = useDispatch();
  const screens = useBreakpoint();
  const { gigId } = useSelector((state) => state.createGig);
  const { state } = useLocation();

  const proceedToNextTab = () => {
    setTabIndex((prev) => prev + 1);
  };

  const proceedToPrevTab = () => {
    setTabIndex((prev) => prev - 1);
  };

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem("gigCreated", false);
  //     dispatch(setGigDataEmpty());
  //   };
  // }, []);
  useEffect(() => {
    gigId && dispatch(getCreatedGigData({ gigId }));
  }, [tabIndex, gigId]);

  useEffect(() => {
    state?.create_tab_index && setTabIndex(state?.create_tab_index);
  }, [state]);

  return (
    <Container>
      <Title>Create Gig</Title>
      <div className="creategig__box">
        <div className="creategig__stepperContainer">
          <CustomSteps
            direction={screens.xs ? "horizontal" : "vertical"}
            current={tabIndex}
            responsive={false}
          >
            {items?.map((item) => (
              <CustomStep
                title={item?.title}
                icon={<IconContainer icon={item?.icon} />}
                active={item?.id < tabIndex}
              />
            ))}
          </CustomSteps>
        </div>
        <div className="creategig__tabs">
          <p>Step {tabIndex + 1} of 7</p>
          {tabIndex === 0 && <GigTitle proceedToNextTab={proceedToNextTab} />}
          {tabIndex === 1 && (
            <Description
              proceedToNextTab={proceedToNextTab}
              proceedToPrevTab={proceedToPrevTab}
            />
          )}
          {tabIndex === 2 && (
            <PaymentMethod
              proceedToNextTab={proceedToNextTab}
              proceedToPrevTab={proceedToPrevTab}
            />
          )}
          {tabIndex === 3 && (
            <Duration
              proceedToNextTab={proceedToNextTab}
              proceedToPrevTab={proceedToPrevTab}
            />
          )}
          {tabIndex === 4 && (
            <Skills
              proceedToNextTab={proceedToNextTab}
              proceedToPrevTab={proceedToPrevTab}
            />
          )}
          {tabIndex === 5 && (
            <FreelancerInfo
              proceedToNextTab={proceedToNextTab}
              proceedToPrevTab={proceedToPrevTab}
            />
          )}
          {tabIndex === 6 && <Budget proceedToPrevTab={proceedToPrevTab} />}
          {state?.create_tab_index && (
            <div className="margin-t1 gigReviewLink">
              <Link to={"/home/review-gig-details"}>Go to Gig Review</Link>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CreateGig;
