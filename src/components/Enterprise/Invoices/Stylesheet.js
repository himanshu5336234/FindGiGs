import styled from "styled-components";

export const StatusTab = styled.div`
  border-radius: 0.25rem;
  padding: 0.4rem 0.8rem;
  background: ${(props) =>
    props.status === "Paid" ? " rgba(40, 199, 111, 0.12);" : "#FFF4D6"};
  width: max-content;
`;
