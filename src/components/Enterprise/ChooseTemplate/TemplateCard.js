import React from "react";
import PropTypes from "prop-types";
import { TemplateCardContainer } from "./Stylesheet";
import { createGig, updateGig } from "../../../api/enterprise/createGigApis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TemplateCard({ Icon, title, bgImg, type }) {
  const { gigId } = useSelector((state) => state.createGig);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const proceedToNextTab = () => {
    navigate("/home/create-gig", { state: 1 });
  };

  const onFinish = () => {
    const record = {
      title,

      type,
    };

    if (JSON.parse(localStorage.getItem("gigCreated"))) {
      dispatch(
        updateGig({ record: { ...record, gig_id: gigId }, proceedToNextTab })
      );
    } else {
      dispatch(createGig({ record, proceedToNextTab }));
    }
  };
  return (
    <TemplateCardContainer bgImg={bgImg} onClick={onFinish}>
      <div className="card__icon">{Icon}</div>
      <p>{title}</p>
    </TemplateCardContainer>
  );
}

TemplateCard.propTypes = {
  Icon: PropTypes.node,
  bgColor: PropTypes.node,
  title: PropTypes.string,
};

export default TemplateCard;
