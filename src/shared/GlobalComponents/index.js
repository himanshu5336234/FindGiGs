import { Button, Card, Input } from "antd";
import styled from "styled-components";

const { Password } = Input;
const { TextArea } = Input;

export const GlobalInput = styled(Input)`
    border-radius: 6px;
    padding: 1rem;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0px;
    text-align: left;
    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
        line-height: 0.9375rem;
    }
`;

export const GlobalSearchBar = styled(GlobalInput)`
    border-radius: 3rem;
    border-color: #e8edff;
    padding: 0.7rem 1.3rem;
    background-color: #e8edff;
    &.ant-input-affix-wrapper > input.ant-input {
        background-color: #e8edff;
        &::placeholder {
            color: #263238;
        }
    }
`;

export const GlobalPasswordInput = styled(Password)`
    border-radius: 6px;
    padding: 1rem;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0px;
    text-align: left;

    .anticon svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
        line-height: 0.9375rem;
    }
`;

export const GlobalTextArea = styled(TextArea)`
    border-radius: 6px;
    padding: 1rem;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0px;
    text-align: left;

    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
        line-height: 0.9375rem;
    }
`;

export const GlobalContainer = styled.div`
    width: min(80%, 1440px);
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 0;
    @media only screen and (max-width: 600px) {
        width: min(90%, 1440px);
    }
`;

export const CustomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: min(80%, 1440px);
    margin-left: auto;
    padding: 2rem 0;
    margin-right: auto;
    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
        gap: 3rem;
    }
    @media only screen and (max-width: 600px) {
        width: min(90%, 1440px);
    }

    .left {
        margin-top: auto;
        margin-bottom: auto;
        flex: 0.42;
        & > img {
            margin-top: 4rem;
        }
    }
    .right {
        margin-top: auto;
        margin-bottom: auto;
        flex: 0.45;
    }
`;

export const GlobalCard = styled(Card)`
    box-shadow: 10px 10px 80px rgba(76, 106, 201, 0.15);
    border-radius: 1.875rem;
    padding: 1rem;
    @media only screen and (max-width: 600px) {
        padding: 0.5rem;
    }
`;

export const GlobalTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.1875rem;
    letter-spacing: 0px;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#000000d9")};
    @media only screen and (max-width: 600px) {
        font-size: 1.1875rem;
        font-weight: 700;
        line-height: 1.875rem;
        letter-spacing: 0px;
    }
`;

export const GlobalSubText = styled.p`
    font-size: 0.8125rem;
    font-weight: ${(props) => (props.weight === "bold" ? "600" : "500")};
    line-height: 1.375rem;
    letter-spacing: 0px;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#6d6d6d")};
`;

export const GlobalTextP1 = styled.p`
    font-size: 1.25rem;
    font-weight: ${(props) => (props.weight ? props.weight : "700")};
    line-height: 1.5237rem;
    letter-spacing: 0em;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#0C0E17")};
    @media only screen and (max-width: 600px) {
        font-size: 1.125rem;
    }
`;
export const GlobalTextP2 = styled.p`
    font-size: 1rem;
    font-weight: ${(props) => (props.weight ? props.weight : "700")};
    line-height: 1.25rem;
    letter-spacing: 0em;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#0C0E17")};
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

export const GlobalTextP3 = styled.p`
    font-size: 0.875rem;
    font-weight: ${(props) => (props.weight ? props.weight : "500")};
    line-height: 1.25rem;
    letter-spacing: 0em;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#0C0E17")};
    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
    }
`;

export const GlobalTextP4 = styled.p`
    flex-wrap: wrap;

    font-size: 0.75rem;
    font-weight: ${(props) => (props.weight ? props.weight : "500")};
    line-height: 1.25rem;
    letter-spacing: 0.02em;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#0C0E17")};
`;

export const GlobalTextP5 = styled.p`
    font-size: 0.625rem;
    font-weight: ${(props) => (props.weight ? props.weight : "500")};
    line-height: 0.75rem;
    letter-spacing: 0em;
    text-align: ${(props) => (props.align ? props.align : "left")};
    color: ${(props) => (props.color ? props.color : "#0C0E17")};
`;

export const GlobalButton = styled(Button)`
    border-radius: 0.375rem;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0px;

    &.ant-btn-primary[disabled],
    .ant-btn-primary[disabled]:hover,
    .ant-btn-primary[disabled]:focus,
    .ant-btn-primary[disabled]:active {
        background-color: #dbe2fc;
        border: 1px solid #dbe2fc;
        color: white;
    }

    &.ant-btn {
        border-color: #4668d6;
        color: #4668d6;
    }

    &.ant-btn-primary {
        border-color: #4668d6;
        color: #fff;
    }

    & > img {
        margin-right: 10px;
        object-fit: contain;
    }

    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
        line-height: 0.9375rem;
    }
`;
