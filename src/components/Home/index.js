import React from "react";
import DashboardEnterprise from "../Enterprise/Dashboard";
import DashboardFreelancer from "../Freelancer/Dashboard";
import GigList from "../Freelancer/GigList";

function Home() {
  const userType = localStorage.getItem("type");
  return (
    <>
      {userType === "freelancer" ? (
        <DashboardFreelancer />
      ) : (
        <DashboardEnterprise />
      )}
    </>
  );
}

export default Home;
