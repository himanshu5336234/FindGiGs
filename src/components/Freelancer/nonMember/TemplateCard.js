import React from "react";
import { TemplateCardContainer } from "./index.js";
import { useNavigate } from "react-router-dom";

export default function TemplateCard({ Icon, title, bgImg, type }) {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/home/explore-gigs");
    };

    return (
        <TemplateCardContainer bgImg={bgImg} onClick={handleOnClick}>
            <div className="card__icon">{Icon}</div>
            <p>{title}</p>
        </TemplateCardContainer>
    );
}
