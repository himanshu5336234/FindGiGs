import styled from "styled-components";
import { GlobalButton } from "../../../shared/GlobalComponents";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
        width: 100%;
    }
    .gigOveriew {
        display: flex;
        // justify-content: space-between;
        // align-items: flex-start;
        position: relative;
    }
    .gigDetail__card {
        padding: 2rem;
        background: #fff;
        border-radius: 0.375rem;
        @media only screen and (max-width: 900px) {
            padding: 1rem;
        }
    }
    .gigDetail__left {
        flex: 0.7;
    }
    .gigDetail__right {
        flex: 0.3;
        height: 100%;
    }

    .gigDetail__freelancerBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .gigDetail__filesArchiveIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #e8edff;
        width: 2.625rem;
        height: 2.625rem;
    }
    .ratingTab {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff8e3;
        padding: 0.1rem 0.6rem;
        width: max-content;
        margin-top: 5px;
    }
    .gigOverview__MilestoneDetailIcon {
        border: none;
        background: #e9eeff;
        width: 2.1875rem;
        height: 2.1875rem;
    }
    .gigOverview__box {
        border: 1px solid #d7d7d7;
        border-radius: 0.375rem;
        padding: 1rem;
        flex: 0.3;
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        @media only screen and (max-width: 900px) {
            padding: 0.4rem;
        }
    }
    .gigDetail__actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    .gigDetail__showActionsMobile {
        position: fixed;
        bottom: 0;
        background: #fff;
        padding: 1rem;
        left: 0;
        width: 100%;
        z-index: 3;
    }
    .gigDetail__milestoneIcon {
        background: #4668d6;
        border-radius: 0.375rem;
        width: 3.6875rem;
        height: 3.6875rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .margin-b0 {
        margin-bottom: 10px;
    }
`;

export const GigDetailButton = styled(GlobalButton)`
    font-size: 0.6875rem;
    padding: 1rem;

    @media only screen and (max-width: 600px) {
        font-size: 0.6875rem;
    }
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;
