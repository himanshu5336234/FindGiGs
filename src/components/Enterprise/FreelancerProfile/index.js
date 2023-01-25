import { Breadcrumb } from "antd";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import SendInvite from "./SendInvite";
import SendOffer from "./SendOffer";
import { Container, CustomBreadcrumb } from "./Stylesheet";
function FreelancerProfile() {
  const [hireMe, setHireMe] = useState(false);
  const [inviteMe, setInviteMe] = useState(false);
  return (
    <Container>
      <CustomBreadcrumb separator={">"}>
        <Breadcrumb.Item>
          <Link to="/home/explore-talent">Explore</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span
            onClick={() => {
              setHireMe(false);
              setInviteMe(false);
            }}
          >
            View Profile
          </span>
        </Breadcrumb.Item>
        {hireMe && <Breadcrumb.Item>Send Offer</Breadcrumb.Item>}
        {inviteMe && <Breadcrumb.Item>Send Invite</Breadcrumb.Item>}
      </CustomBreadcrumb>
      {!hireMe && !inviteMe ? (
        <div className="freelancerProfile___slider margin-t2">
          <ProfileDetails setHireMe={setHireMe} setInviteMe={setInviteMe}/>
        </div>
      ) : hireMe ? (
        <div className="freelancerProfile___slider margin-t2">
          <SendOffer />
        </div>
      ) : (
        <SendInvite />
      )}
    </Container>
  );
}
export default FreelancerProfile;
