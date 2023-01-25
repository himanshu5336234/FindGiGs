import styled from "styled-components";

export const Container = styled.div`
  .detailCard__container {
    padding: 1rem;
    border-radius: 0.375rem;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .detailcard__icon {
    font-size: 1.6rem;
    margin-top: 5px;
  }
  .detailCard__iconTitle {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0em;
    margin-bottom: 0;
    color: #909090;
  }
`;

export const StatusTab = styled.div`
  border-radius: 0.25rem;
  padding: 0.3rem 0.5rem;
  width: max-content;
  background: ${(props) => props.bgColor && props.bgColor};
`;

export const IconBox = styled.div`
  width: 1.4219rem;
  height: 1.4219rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => props.bgColor && props.bgColor};
`;
