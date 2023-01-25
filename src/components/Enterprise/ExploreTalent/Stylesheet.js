import { Select, Tabs } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    .exploreTalent__title {
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.375rem;
        letter-spacing: 0em;
        color: #0c0e17;
        @media only screen and (max-width: 600px) {
            font-size: 0.9375rem;
            line-height: 1.125rem;
        }
    }
    .exploreTalent__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .exploreTalent__saveButton {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 0.375rem;
        background: #e8edff;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    .exploreTalent__filterSortContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media only screen and (max-width: 800px) {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            overflow-x: auto;
            ::-webkit-scrollbar {
                height: 0px;
                background: white;
            }
        }
    }

    .freelancerInfo__container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        @media only screen and (max-width: 600px) {
            flex-grow: 1;
        }
    }
`;

export const CustomTabs = styled(Tabs)`
    .ant-tabs-tab {
        font-size: 0.8125rem;
        font-weight: 500;
        color: #6d6d6d;
    }
    .ant-tabs-tab:hover {
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

    .ant-tabs-nav::before {
        border-bottom: 1px solid #dbe3ff !important;
    }
`;

export const CustomSelect = styled(Select)`
    .ant-select {
        border-radius: 0.25rem;
    }
    .ant-select-selection-placeholder {
        font-size: 0.6875rem;
        font-weight: 600;
        line-height: 13px;
        letter-spacing: 0em;
        color: #909090;
        margin-right: 1rem;
    }
    .ant-select-selection-item {
        font-size: 0.6875rem;
        font-weight: 600;
        line-height: 13px;
        letter-spacing: 0em;
        margin-right: 1rem;
    }
    .ant-select-arrow {
        font-size: 0.5625rem;
        color: #909090;
    }
`;

export const SortSelect = styled(CustomSelect)`
    .ant-select-selection-item {
        font-size: 0.8125rem;
        font-weight: 600;
        line-height: 1rem;
        letter-spacing: 0em;
        color: #0c0e17;
        margin-right: 0;
    }
    .ant-select-arrow {
        color: #0c0e17;
    }
`;

export const FreelancerCard = styled.div`
    border-radius: 0.375rem;
    position: relative;
    padding: 2rem 1rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 18rem;
    max-width: 18rem;
    height: 100%;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    .freelancerInfo__progressContainer {
        width: 5.895rem;
        height: 5.895rem;
    }
    .freelancerInfo__image {
        width: 5.09rem;
        height: 5.09rem;
        border-radius: 50%;
    }
    .freelancer__skillTitle {
        font-size: 0.5625rem;
        font-weight: 600;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 1rem;
        color: #909090;
        margin-right: auto;
    }
    .freelancer__rateTitle {
        font-size: 0.5rem;
        font-weight: 600;
        letter-spacing: 0em;
        margin-bottom: 0;
    }
    .freelancerInfo__actions {
        margin-top: auto;
        display: flex;
        gap: 0.4rem;
        width: 90%;
    }
    .freelancerInfo__menu {
        border: 0px;
        position: absolute;
        top: 2px !important;
        right: 10px !important;
        box-shadow: none;
    }
`;

export const SkillTab = styled.div`
    border-radius: 0.375rem;
    background-color: #f2f6ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;
