import styled from "styled-components";
import { GlobalButton } from "../../../shared/GlobalComponents";

export const Container = styled.div`
    .gigInfoCard {
        position: relative;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 0.375rem;
        background: #fff;
        cursor: pointer;
    }
    .gigInfoCard__iconBox {
        border-radius: 50%;
        background: #e9eeff;
        width: 2.1875rem;
        height: 2.1875rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .gigInfoCard__icon {
        font-size: 1.1rem;
        color: #4668d6;
    }
    .gigInfocard__draftData {
        padding: 0.7rem;
        border: 1px solid #e3e3e3;
        border-radius: 3.125rem;
        margin-top: 1rem;
    }
`;

export const SortButton = styled(GlobalButton)`
    padding: 0;
    &.ant-btn-primary[disabled],
    .ant-btn-primary[disabled]:hover,
    .ant-btn-primary[disabled]:focus,
    .ant-btn-primary[disabled]:active {
        border: 1px solid #d3d3d3;
    }

    &.ant-btn {
        border-color: #d3d3d3;
        color: black;
    }
`;
