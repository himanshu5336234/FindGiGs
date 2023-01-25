import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGigListCount } from "../../../api/enterprise/gigsApis";
import ActiveUser from "../ActiveUser";
// import ChooseTemplate from "../ChooseTemplate";
import IntitialUser from "../InitialUser";

function DashboardEnterprise() {
  const gigsCount = useSelector((state) => state.gigsEnterprise.gigCountData);
  const dispatch = useDispatch();
  console.log(gigsCount);

  useEffect(() => {
    dispatch(getGigListCount());
  }, []);

  console.log(gigsCount, " gig count");
  if (gigsCount === null) {
    return <p>Loading</p>;
  }

  return (
    <>
      {Object.values(gigsCount).reduce((prev, next) => prev + next, 0) > 0 ? (
        <ActiveUser />
      ) : (
        <IntitialUser />
      )}
    </>
  );
}

export default DashboardEnterprise;
