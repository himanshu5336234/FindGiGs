import { Breadcrumb, Card } from "antd";
import styled from "styled-components";
import { CheckTab } from "../../../shared/Onboarding/OnboardingComponents";

export const Container = styled.div`
  .freelancerProfile___slider {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
  .profileDetails {
    display: flex;
    gap: 1rem;
    width: 90%;
    margin: auto;
    position: relative;
    justify-content: center;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .profileDetails__left {
    flex: 0.6;
    flex-grow: 1;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .profileDetails__right {
    flex: 0.4;
  }
  .profileDetails__card {
    padding: 1rem 2rem;
    background: #fff;
    border-radius: 0.375rem;
  }
  .section_edit{
    display: flex;
    justify-content: space-between;
  } 
  .profileDetails__tabs {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;
    cursor: pointer;
  }
  .profileDetails__expIconContainer {
    background: #4668d6;
    border-radius: 0.25rem;
    width: 3.0625rem;
    height: 3.0625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px) {
      width: 2.5625rem;
      height: 2.5625rem;
    }
  }
  .profileDetails__expIcon {
    font-size: 1.2rem;
    color: #fff;
  }
  .scroll {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 0px;
      background: white;
    }
  }
  .justify-center {
    justify-content: center;
  }
  .profileDetails__actions {
    display: flex;
    gap: 0.6rem;
    padding: 2rem 0;
    @media only screen and (max-width: 1000px) {
      position: fixed;
      bottom: 0;
      padding: 1rem;
      background: #fff;
      width: 85%;
    }
  }
  .profileDetails__freelancerCard {
    min-width: 18rem;
    height: auto;
    @media only screen and (max-width: 1000px) {
      width: 100%;
      max-width: inherit;
    }
  }
  .about_freelancer {
    .freelancer_skills {
      display: flex;

      padding: 0;

      gap: 0.8rem;

      flex-wrap: wrap;

      li {
        border-radius: 0.3rem;

        background: #ffeee1;

        color: #ff862d;

        padding: 0.5rem 1rem;

        list-style: none;

        font-weight: 600;
      }
    }

    .more_details {
      margin: 1.5rem 0;

      display: grid;

      grid-template-columns: repeat(2, 1fr);

      gap: 1rem;

      .details {
        display: flex;

        align-items: center;

        gap: 1rem;

        .image_icon {
          width: 50px;

          height: 50px;
        }

        .content {
          display: flex;

          justify-content: center;

          flex-direction: column;

          gap: 0.3rem;

          p {
            margin: 0;
          }

          .title {
            font-size: 0.75rem;

            color: #696969;
          }

          .des {
            font-size: 0.85rem;
          }
        }
      }
    }
  }

  .remove_extra_spacing {
    padding: 0;

    margin-bottom: 1rem;
  }
`;

export const TabBox = styled.p`
  background: #e8edff;
  border-radius: 5px;
  padding: 5px;
  color: #4668d6;
`;

export const UniversityTab = styled.div`
  display: flex;
  // justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap;
`;

export const ReviewComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .review__container {
    width: 40%;
  }
  .review__component {
    display: flex;
  }
  .review__box {
    width: 60px;
    height: 60px;
    background: #dbdbdb;
    border-radius: 100%;
  }
  .review__content {
    margin-left: 10px;
  }
  .review__title {
    color: black;
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 0;
  }
  .review__para {
    color: #696969;
    font-size: 11px;
  }
  .review__img {
    margin-bottom: 0;
    font-size: 10px;
  }
  .rating__style {
    display: flex;
  }
  .review__heading {
    color: #696969;
    text-align: left;
  }
`;

export const CustomBreadcrumb = styled(Breadcrumb)`
  .ant-breadcrumb-link {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
  }
`;

export const TabTitle = styled.li`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0em;
  color: ${(props) => (props.color ? "#4668D6" : "#909090")};
  width: max-content;
`;

export const UserCard = styled(Card)`
  .icon__style {
    margin-left: auto;
    cursor: pointer;
  }
  .user__Profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .user__img {
    margin-bottom: 10px;
    border-radius: 100%;
    &:hover {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
      border-radius: 100%;
    }
  }
  .user__text {
    font-weight: bold;
  }
  .user__para {
    font-size: 10px;
  }
`;

/***** Review Style *****/
export const ReviewContainer = styled.div`
  .review__container {
    padding: 0 30px;
  }
  .review__card {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .user__card__icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .review__component__card {
    display: flex;
  }
  .review__box__card {
    width: 70px;
    height: 70px;
    background: #dbdbdb;
    border-radius: 100%;
  }
  .review__content__card {
    margin-left: 10px;
  }
  .review__title__card {
    color: black;
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 0;
  }
  .review__para__card {
    color: #696969;
    font-size: 11px;
  }
  .review__rating__card {
    display: flex;
  }
  .span__style__card {
    margin-left: 5px;
  }
  .review__heading__card {
    color: #696969;
    text-align: left;
    margin-top: 10px;
  }
  .review__button {
    margin-top: 30px;
  }
  .btn__two {
    margin-left: 10px;
  }
`;

/*** Edit Profile Style ***/
export const EditProfileContainer = styled.div`
  display: flex;
  .edit__profile__component {
    display: flex;
    width: 90%;
    margin: auto;
    position: relative;
    justify-content: space-between;
  }
  .edit__button {
    display: flex;
  }

  .edit__profile__img {
    position: relative;
  }
  .user__img {
    width: 150px;
    height: 120px;
    border-radius: 100%;
    object-fit: cover;
    margin-top: 22px;
  }
  .edit__profile__form {
    margin-left: 50px;
  }
  .btn__two {
    margin-left: 10px;
  }
  .avatarInput {
    display: none;
  }
  .avatarLabel {
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 20%;
  }
`;
