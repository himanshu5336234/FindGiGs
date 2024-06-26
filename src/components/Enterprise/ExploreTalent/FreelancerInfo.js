import React from "react";
import { FreelancerCard, SkillTab } from "./Stylesheet";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import GradientSVG from "../../../shared/GradientProgress";
import {
  GlobalButton,
  GlobalSubText,
  GlobalTextP3,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { Button, Space } from "antd";
import {
  StarFilled,
  DollarCircleFilled,
  EllipsisOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { sendInvite } from "../../../api/enterprise/gigsApis";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";

function FreelancerInfo({ freelancerData }) {
  const dispatch = useDispatch();
  const { gigId, gigData } = useSelector((state) => state.createGig);
  const { invitedFreelancer_id } = useSelector((state) => state.gigsEnterprise);
  const navigate = useNavigate();

  const handleViewFreelancer = () => {
    let freelancerId = freelancerData?.freelancer_id
      ? freelancerData?.freelancer_id
      : freelancerData?.id;
    navigate(
      RouteConstant.HOME +
        "/" +
        RouteConstant.FREELANCER_PROFILE +
        "/" +
        freelancerId
    );
  };

  const handleSendInvite = () => {
    const record = {
      gigs: {
        id: gigId,
      },
      freelancer_id: freelancerData?.freelancer_id
        ? freelancerData?.freelancer_id
        : freelancerData?.id,
      message: "new message",
      estimated_duration: Number(gigData?.estimated_duration),
      estimated_budget: Number(gigData?.estimated_budget),
    };
    dispatch(sendInvite({ record }));
  };

  return (
    <FreelancerCard>
      <Button
        icon={
          <InfoCircleOutlined style={{ color: "#C9C9C9", fontSize: "21px" }} />
        }
        className="freelancerInfo__menu"
        onClick={handleViewFreelancer}
      />
      <div className="freelancerInfo__progressContainer">
        <GradientSVG
          idCSS={"gradientId" + freelancerData?.freelancer_id}
          startColor={"#13A46C"}
          endColor={"#3ACC6C"}
        />
        <CircularProgressbarWithChildren
          value={freelancerData?.profile_completion}
          strokeWidth={3}
          styles={{
            path: {
              // Path color
              stroke: `url(#${"gradientId" + freelancerData?.id})`,
              height: "100%",
            },
          }}
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="freelancer__image"
            className="freelancerInfo__image"
          />
        </CircularProgressbarWithChildren>
      </div>
      <GlobalTextP3 weight="bold" className="margin-b0 margin-t1">
        {freelancerData?.user_first_name
          ? freelancerData?.user_first_name
          : freelancerData?.user?.first_name}
        {freelancerData?.user_last_name
          ? freelancerData?.user_last_name
          : freelancerData?.user?.last_name}
      </GlobalTextP3>
      <GlobalTextP5 color="#696969" className="margin-b0">
        {freelancerData?.designation}
      </GlobalTextP5>

      {/* Skills Section */}

      <div className="freelancer__skillsContainer">
        <p className="freelancer__skillTitle">SKILLS</p>
        {freelancerData?.skills.length < 5 ? (
          <Space size={4} wrap>
            {freelancerData?.skills.map((skill, idx) => (
              <SkillTab key={idx} style={{ display: "flex", flexWrap: "wrap" }}>
                <GlobalTextP5
                  color="#4668D6"
                  weight="600"
                  className="margin-b0"
                >
                  {skill}
                </GlobalTextP5>
              </SkillTab>
            ))}
          </Space>
        ) : (
          <Space size={4} wrap>
            <SkillTab>
              <GlobalTextP5 color="#4668D6" weight="600" className="margin-b0">
                {freelancerData?.skills[0]}
              </GlobalTextP5>
            </SkillTab>
            <SkillTab>
              <GlobalTextP5 color="#4668D6" weight="600" className="margin-b0">
                {freelancerData?.skills[1]}
              </GlobalTextP5>
            </SkillTab>
            <SkillTab>
              <GlobalTextP5 color="#4668D6" weight="600" className="margin-b0">
                {freelancerData?.skills[2]}
              </GlobalTextP5>
            </SkillTab>
            <SkillTab>
              <GlobalTextP5 color="#4668D6" weight="600" className="margin-b0">
                4 more
              </GlobalTextP5>
            </SkillTab>
          </Space>
        )}
      </div>
      <Space size={"large"} className="margin-t1 margin-b2">
        <Space size={"small"}>
          <StarFilled
            style={{ color: "#F5BC17", fontSize: "28px", marginTop: "6px" }}
          />
          <Space size={0} direction="vertical">
            <p className="freelancer__rateTitle">RATING</p>
            <GlobalSubText className="margin-b0" color="#0C0E17" weight="bold">
              {freelancerData?.ratings}
            </GlobalSubText>
          </Space>
        </Space>
        <Space size={"small"}>
          <DollarCircleFilled
            style={{ color: "#0ACF83", fontSize: "28px", marginTop: "6px" }}
          />
          <Space size={0} direction="vertical">
            <p className="freelancer__rateTitle">WAGE RATE</p>
            <GlobalSubText className="margin-b0" color="#0C0E17" weight="bold">
              Rs. {freelancerData?.rate_per_hour}/Hr
            </GlobalSubText>
          </Space>
        </Space>
      </Space>
      <div className="freelancerInfo__actions">
        <GlobalButton type="primary" block onClick={handleViewFreelancer}>
          View Details
        </GlobalButton>
        <GlobalButton block onClick={handleSendInvite}>
          Invite
        </GlobalButton>
      </div>
    </FreelancerCard>
  );
}

export default FreelancerInfo;
