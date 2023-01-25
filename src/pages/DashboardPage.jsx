import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { setIsVerified } from "../redux/auth/authSlice";

const Container = styled.div`
  padding: 20px;
  // height:87vh;
  @media only screen and (max-width: 600px) {
    padding: 20px 10px;
  }
`;

function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsVerified());
  }, []);

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default DashboardPage;
