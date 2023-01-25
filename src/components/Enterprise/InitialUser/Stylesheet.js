import styled from "styled-components";

export const Container = styled.div`
  .initialUser__card {
    border-radius: 0.375rem;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    & > img {
      margin-right: auto;
    }
    
    @media only screen and (max-width: 1200px) {
      flex-direction: column-reverse;
    }
  }
`;
