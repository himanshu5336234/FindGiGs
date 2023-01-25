import React from "react";
import { Typography, Card, Button } from "antd";
import { ReviewContainer } from "./Stylesheet";
import {
  GlobalButton,
  GlobalTextP2,
  GlobalTextP4,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import moreicon from "../../../assets/images/freelancer/moreicon.svg"
import GlobalModal from "../../../shared/GlobalModal/index";
import { MoreOutlined } from "@ant-design/icons";
import StarIcon from "../../../assets/images/freelancer/star.svg";
import EditIcon from "../../../assets/images/freelancer/editicon.svg";
import { JustifyFlexContainer } from "../../../shared/Onboarding/OnboardingComponents";
import { useState } from "react";

const { Title, Text } = Typography;

const ActionModal = ({ modalSuccessVisible, setModalSuccessVisible }) => {
  console.log("Action modal");
  return (
    <GlobalModal
      centered
      visible={modalSuccessVisible}
      onOk={() => setModalSuccessVisible(false)}
      onCancel={() => setModalSuccessVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      width="25rem"
    >
      <GlobalTextP2 weight="bold" align="center">
        Are you sure you want to deactivate your account?
      </GlobalTextP2>
      <JustifyFlexContainer className="margin-t2">
        <GlobalButton
          block
          type="primary"
          onClick={() => setModalSuccessVisible(false)}
        >
          No, I am not sure
        </GlobalButton>
        <GlobalButton block onClick={() => setModalSuccessVisible(false)}>
          Yes, I am sure
        </GlobalButton>
      </JustifyFlexContainer>
    </GlobalModal>
  );
};

const Review = () => {
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);

  return (
    <>
      <ReviewContainer>
        <div className="review__container">
          <Title level={3}>Reviews</Title>
          <Text type="secondary">
            You may see all of the client ratings & reviews you've gotten after
            completing your gigs.
          </Text>
          <div className="review__card">
            <Card style={{ width: 300, height: 270, border: "none" }}>
              <img src={moreicon} className="user__card__icon" />
              <div className="review__component__card">
                <div className="review__box__card"></div>
                <div className="review__content__card">
                  <GlobalTextP4 className="review__title__card">
                    Swiggy
                  </GlobalTextP4>
                  <div className="review__para__card">Frontend Developer</div>
                  <div className="review__rating__card">
                    <img src={StarIcon} />
                    <span className="span__style__card">4.5</span>
                  </div>
                </div>
              </div>
              <GlobalTextP4 className="review__heading__card">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </GlobalTextP4>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              width: "40%",
              marginTop: "2rem",
            }}
          >
            <GlobalButton block>Cancel</GlobalButton>
            <GlobalButton
              type="primary"
              block
              htmlType="submit"
              onClick={() => setModalSuccessVisible(!modalSuccessVisible)}
            >
              Submit
            </GlobalButton>
          </div>
        </div>
        <ActionModal
          modalSuccessVisible={modalSuccessVisible}
          setModalSuccessVisible={setModalSuccessVisible}
        />
      </ReviewContainer>
    </>
  );
};

export default Review;
