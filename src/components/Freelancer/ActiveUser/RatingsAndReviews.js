import { Avatar, Button, Rate, Space } from "antd";
import React, { useEffect, useState } from "react";
import {
  GlobalSubText,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { TabSwitch, Title,RatingAndReviewsCard } from "./Stylesheet";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import noReviews from "../../../assets/images/enterprise/noReviewsImage.svg";
import UpperIcon from "../../../assets/images/common/UpperIcon.png";
import BottomIcon from "../../../assets/images/common/BottomIcon.png";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";
const reviewsRatedJson = [
  {
    id: 0,
    name: "Divay Raj",
    designation: "Full Stack Developer",
    rate: 5,
  },
  {
    id: 2,
    name: "Ravi Sharma",
    designation: "Data Analyst",
    rate: 4,
  },
  {
    id: 3,
    name: "Divay Raj",
    designation: "Full Stack Developer",
    rate: 5,
  },
];
const reviewsUnratedJson = [
  {
    id: 0,
    name: "Non Divay Raj",
    designation: "Full Stack Developer",
    rate: 0,
  },
  {
    id: 2,
    name: "Non Ravi Sharma",
    designation: "Data Analyst",
    rate: 0,
  },
  {
    id: 3,
    name: "Non Divay Raj",
    designation: "Full Stack Developer",
    rate: 0,
  },
];
function RatingsAndReviews() {
  const [selectedTab, setSelectedTab] = useState("rated");
  const [reviewsData, setReviewsData] = useState(reviewsRatedJson);
  const navigate = useNavigate();
  const ratingList = useSelector((state) => state.gigsEnterprise.ratingList);
  useEffect(() => {
    if (selectedTab === "rated") {
      setReviewsData(reviewsRatedJson);
    } else {
      setReviewsData(reviewsUnratedJson);
    }
  }, [selectedTab]);
  return (
    <div className="ratingAndReviews">
      <div
        className="ratingAndReviews__header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Title >Rating And Reviews</Title>
        <GlobalTextP4
         
          color="#909090"
          className="margin-b0 cursor-pointer"
          onClick={() =>
            navigate(
              RouteConstant.HOME + "/" + RouteConstant.REVIEWS_AND_RATINGS
            )
          }
        >
          View All
        </GlobalTextP4>
      </div>
      <RatingAndReviewsCard
      
      >
        <div className="first"
          
        >
          <div>
            <img src={UpperIcon} alt="" />
          </div>
          <div>
            <h3 style={{ fontSize: "24px", margin:"0px", fontWeight: "bold" }}>0</h3>
            <p style={{ fontSize: "12px", margin:"0px",  }}>Overall Ratings</p>
          </div>
        </div>
        <div  className="first"
       
        >
          <div>
            <img src={BottomIcon} />{" "}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3  style={{ fontSize: "24px", margin:"0px", fontWeight: "bold" }}>0</h3>
            <p  style={{ fontSize: "12px", margin:"0px",  }}>Total Reviews</p>
          </div>
        </div>
      </RatingAndReviewsCard>
      {/* <div className="reviewAndRatings__card">
        <div className="reviewAndRatings__tabHead">
          <Space size={"small"}>
            <TabSwitch
              onClick={() => setSelectedTab("rated")}
              bgColor={selectedTab === "rated"}
            >
              <GlobalTextP4
                color={selectedTab === "rated" ? "#4668D6" : "#9A9A9A"}
                weight="600"
                className="margin-b0"
              >
                Rated
              </GlobalTextP4>
            </TabSwitch>
            <TabSwitch
              onClick={() => setSelectedTab("unrated")}
              bgColor={selectedTab === "unrated"}
            >
              <GlobalTextP4
                color={selectedTab === "unrated" ? "#4668D6" : "#9A9A9A"}
                weight="600"
                className="margin-b0"
              >
                Unrated
              </GlobalTextP4>
            </TabSwitch>
          </Space>
          <Space size={"small"}>
            <Button
              shape="round"
              icon={
                <LeftOutlined
                  style={{
                    color: "#4668D6",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                />
              }
              className="ongoing__actionButton"
            />
            <Button
              shape="round"
              icon={
                <RightOutlined
                  style={{
                    color: "#4668D6",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                />
              }
              className="ongoing__actionButton"
            />
          </Space>
        </div>
        {ratingList?.length === 0 ? (
          <div className="invoicing__noPayments margin-t1">
            <img src={noReviews} alt="begig_no_payments" />
            <GlobalTextP4 className="margin-b0" color="#0C0E17">
              You have not rated anyone yet
            </GlobalTextP4>
          </div>
        ) : (
          <div className="invoicing__dataContainer margin-t1">
            {reviewsData?.map((data) => (
              <div key={data?.gig_id} className="invoicing__paymentData">
                <Space size={"small"} align="center">
                  <Avatar size={42} />
                  <Space direction="vertical" size={2}>
                    <GlobalSubText
                      className="margin-b0"
                      weight="bold"
                      color="#0C0E17"
                    >
                      {data?.name}
                    </GlobalSubText>
                    <GlobalTextP5 className="margin-b0" color="#696969">
                      {data?.designation}
                    </GlobalTextP5>
                  </Space>
                </Space>
                <Rate value={data?.rate} />
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
export default RatingsAndReviews;
