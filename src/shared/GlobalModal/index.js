import { Modal } from "antd";
import styled from "styled-components";

const GlobalModal = styled(Modal)`
  .ant-modal {
    width: ${(props) => (props.width ? props.width : "auto")};
  }
  .ant-modal-header {
    border-radius: 0.625rem;
    text-align: center;
    border-bottom: none;
  }
  .ant-modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.1875rem;
    letter-spacing: 0px;
    @media only screen and (max-width: 600px) {
      font-size: 1.1875rem;
      font-weight: 700;
      line-height: 1.875rem;
      letter-spacing: 0px;
    }
  }
  .ant-modal-close-x {
    display: none;
  }
  .ant-modal-footer {
    display: none;
  }
  .ant-modal-content {
    border-radius: 0.625rem;
    padding: 1rem;
  }
`;

export default GlobalModal;
