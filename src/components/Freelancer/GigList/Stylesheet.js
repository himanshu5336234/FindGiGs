import { Divider, Drawer, Tabs } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    height: 100%;
`;

export const GigListContainer = styled.div`
    background: #fff;
    border-radius: 0.375rem;
    padding: 1rem;
    flex: 0.3;

    overflow-x: hidden;
    .gigList__header {
        position: relative;
    }
    .filterIcon {
        position: absolute;
        top: 1%;
        right: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1f4ff;
        border: none;
        width: 2.5625rem;
        height: 2.5625rem;
    }
`;

export const GigDetailContainer = styled.div`
    position: relative;
    overflow-x: hidden;
    background: #fff;
    border-radius: 0.375rem;
    padding: 2rem 1.5rem;
    flex: 0.7;
    display: flex;
    gap: 1rem;
    .gigDetail__left {
        flex: 0.7;
        overflow: auto;
    }

    .gigDetail__right {
        flex: 0.3;
    }
    .gigDetail__progressContainer {
        width: 8.0712rem;
        height: 8.0712rem;
        @media only screen and (max-width: 600px) {
            width: 5.3456rem;
            height: 5.3456rem;
        }
    }
    .progress__image {
        @media only screen and (max-width: 600px) {
            width: 4.305rem;
            height: 4.305rem;
        }
    }
    .gigdetail__scroll {
        padding-right: 0.6rem;
        padding-left: 0.6rem;
        height: calc(100vh - 100px);
        // overflow: auto;
        margin-top: 3rem;
    }
    .gigDetail__detailContainer {
        padding-bottom: 1rem;
    }
    .gigDetail__gigId {
        color: black;
        font-weight: bold;
        margin-left: 10px;
    }
    .gigDetail__header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .file-download {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .download-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.375rem;
        background-color: #f1f4ff;
        height: 3.125rem;
        width: 3.125rem;
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
    .gigDetail__MilestoneDetailIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e9eeff;
        border: none;
        width: 2.5625rem;
        height: 2.5625rem;
        cursor: default;
    }
    .gigOverview__container {
        height: 100%;
        // position: sticky;
        border-radius: 0.375rem;
        border: 1px solid #d7d7d7;
        padding: 0.8rem;
        margin-top: -1rem;
        height: 550px;
    }
    .gigOverview__save {
        display: flex;
        gap: 0.8rem;
    }
`;

export const CustomTabs = styled(Tabs)`
    .ant-tabs-tab {
        display: flex;
        justify-conetent: center;

        font-size: 0.9375rem;
        font-weight: 500;
        color: #6d6d6d;
    }
    .ant-tabs-tab:hover {
        font-weight: 600;
        color: #263238;
    }
    .ant-tabs-tab-active {
        font-weight: 600;
        border-bottom: 2px solid #4668d6;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #263238;
    }
    &.ant-tabs-top > .ant-tabs-nav::before,
    .ant-tabs-bottom > .ant-tabs-nav::before,
    .ant-tabs-top > div > .ant-tabs-nav::before,
    .ant-tabs-bottom > div > .ant-tabs-nav::before {
        border-bottom: none;
    }
    .ant-tabs-content-holder {
        overflow-y: auto;
        overflow-x: hidden !important;
        height: 60vh;

        padding-right: 0.5rem;
        width: 350px;
    }
`;

export const GigCardContainer = styled.div`
    background: ${(props) => (props.active ? "#f1f4ff" : "#f8f8f8")};
    border-radius: 0.375rem;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        background: #f1f4ff;
    }
    .progress__container {
        width: 4.2138rem;
        height: 4.2138rem;
    }
    .gigCard__content {
        margin-left: 1rem;
    }
    .gigCard__contentHead {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        & > p:last-child {
            font-size: 0.5rem;
            font-weight: 600;
            letter-spacing: 0.02em;
            color: #4668d6;
            margin-bottom: 0;
        }
    }
    .gigCard__contentTitle {
        & > p:first-child {
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0em;
            color: #4668d6;
            margin-bottom: 0;
        }
        & > p:last-child {
            font-size: 0.75rem;
            font-weight: 500;
            color: #6d6d6d;
            margin-bottom: 0;
        }
    }
    .gigcard__contentDetailHead {
        font-size: 0.625rem;
        font-weight: 500;
        margin-bottom: 0;
        color: #6d6d6d;
    }
    .gigCard__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e9eeff;
        border: none;
        width: 1.8125rem;
        height: 1.8125rem;
        cursor: default;
    }
`;

export const GigDetailTab = styled.span`
    flex-wrap: wrap;
    width: 700px;
    border-radius: 0.375rem;
    background: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
    padding: 0.8rem 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
`;

export const CustomDivider = styled(Divider)`
    background: #4668d6;
    height: 3px;
    border-radius: 4px;
    &.ant-divider-horizontal {
        width: 1.875rem;
        min-width: 1.875rem;
        margin: 0.5rem 0 1.5rem 0;
    }
`;

export const ShareModalIconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

export const ShareLink = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
    & > p {
        flex-grow: 1;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        background: #f5f5f5;
        font-size: 1.125rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-align: center;
        color: #a6a6a6;
        margin-bottom: 0;
    }
`;

export const CustomDrawer = styled(Drawer)`
    .ant-drawer-title {
        font-size: 1.375rem;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
    }
    .ant-drawer-header {
        border-bottom: none;
        margin-top: 1rem;
    }
    .ant-drawer-close {
        color: #0c0e17;
        padding: 0;
        margin-right: 2rem;
        margin-left: -2px;
    }
    .ant-drawer-body {
        padding-bottom: 0;
    }
    .sendBid__note {
        border-radius: 0.375rem;
        background-color: #ffe8e0;
        padding: 1rem;
        color: #ff7a1a;
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        gap: 0.6rem;
        & > p {
            font-size: 0.625rem;
            font-weight: 500;
            line-height: 0.8125rem;
            letter-spacing: 0px;
            margin-bottom: 0;
        }
    }
    .sendBid__actions {
        background: white;
        width: 100%;
        display: flex;
        padding: 1rem;
        gap: 1rem;
        position: sticky;
        bottom: 0;
    }
    .senBid__milestoneHeader {
        display: flex;
        justify-content: space-between;
    }
    .sendBid__milestoneAction {
        border-radius: 0.375rem;
        border: 1.5px dashed #e0e0e0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    .sendBid__milestoneImg {
        & > img {
            margin: auto;
        }
    }
    .sendBid__addmilestone {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: center;
        color: #4668d6;
        cursor: pointer;
        margin-bottom: 0;
        transition: transform 200ms ease-out;
        &:hover {
            transform: scale(1.03);
        }
    }
`;

export const ShareBidModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;

export const BiddSuccessContainer = styled.div`
    & > p {
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 1.125rem;
        letter-spacing: 0.02em;
        text-align: center;
        color: #6d6d6d;
    }
    .bidSuccess__action {
        width: 60%;
        margin: 1rem auto 0 auto;
        @media only screen and (max-width: 600px) {
            width: 90%;
        }
    }
`;

export const AddMilestoneActions = styled.div`
    background: white;
    width: 100%;
    display: flex;
    padding: 1rem;
    gap: 1rem;
    position: sticky;
    bottom: 0;
`;
