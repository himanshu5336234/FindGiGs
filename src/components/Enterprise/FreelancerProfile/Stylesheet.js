import { Breadcrumb } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  .freelancerProfile___slider {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .profileDetails {
    display: flex;
    gap: 1rem;
    width: 70%;
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
