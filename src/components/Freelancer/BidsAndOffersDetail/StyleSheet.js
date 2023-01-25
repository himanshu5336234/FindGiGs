import styled from "styled-components";

export const StatusTab = styled.div`
    border-radius: 0.25rem;
    padding: 0.3rem 0.5rem;
    width: max-content;
    background: ${(props) => props.bgColor && props.bgColor};
`;
export const GlobalTextP4 = styled.p`
    font-size: 0.75rem;
    font-weight: ${(props) => (props.weight ? props.weight : "500")};
    line-height: 1.25rem;
    letter-spacing: 0.02em;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#0C0E17")};
`;
export const Container = styled.div`
  .freelancerProfile___slider {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
  .profileDetails {
    display: flex;
    gap: 1rem;
    width: 100%;
    margin: auto;
    margin-top: 2rem;
    position: relative;
    justify-content: center;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .profileDetails__left {
    flex: 0.5;
    flex-grow: 1;
    background: #fff;
    padding:1.4rem 2rem;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .profileDetails__right {
    flex: 0.5;
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

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  gap: 1rem;
  margin-bottom:2rem;
  justify-content: center;
  max-width: 30rem;
  position: relative;
  .pillers {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .piller {
      width: 15.82px;
      height: 15.82px;
      background: #a6a6a6;
      box-shadow: 0 0 0 10px #cdcdcd;
      border-radius: 50%;
      z-index: 1;
    }
    .bar {
      width: 30%;
      margin: auto;
      height: calc(100% + 2rem);
      background: linear-gradient(to bottom, #c0ffdd 50%, #e8e8e8 50%);
      background-size: 100% 200%;
      background-position: bottom;
      transition: all 0.5s ease-out;
    }
    .bar:hover {
      background-position: top;
    }
  }
  .Content {
    display: flex;
    flex-direction: column;
    p {
      line-height: 1.3;
    }
    .gap {
      margin: 1rem 0;
    }
  }
  .notStart {
    background: #eaeaea;
    border-radius: 2px;
    color: #898989;
  }
  .edit {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
  }
  .more_details,
  .details {
    display: flex;
    align-items:center;
    gap: 2rem;
  }
  .details {
    p{
        margin:0;
    }
    gap: 0.8rem;
  }
`;