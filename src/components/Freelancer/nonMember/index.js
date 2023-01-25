import styled from "styled-components";

export const CardFirst = styled.div`display: flex;
position:relative;
div{
    position:absolute;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    h2{
        color:#fff;
        font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    
    
    }
    button{
        color: #4668D6;
    border:none;
    font-weight:600;
     padding: 10px 20px;
    border-radius: 6px;
    
    }

}

}`;

export const GigRecommendationWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2%;
    row-gap: 1rem;
`;
export const GigByRole = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

export const RecommendationCard = styled.div`
    // max-width: 375px;
    // width: 33%;
`;
export const Heading = styled.h2`
    font-family: Montserrat;
    margin:0px  10px 10px 10px;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`;
export const TopCardsWrapper = styled.div`

display:flex;
`;

export const CardThird = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 10px;
    min-width: 370px;
    border-radius: 6px;
    padding: 10px;
    background: #fff;

    button {
        height: 40px;
        width: 115px;
        left: 1019px;
        top: 303px;
        border-radius: 6px;
        border: none;
        background: #4668d6;
        color: #fff;
    }
`;
export const SecondChild = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    alignitems: center;
    img {
        margin-right: 10px;
        width: 44px;
        height: 42px;
    }
    h2 {
        margin: 0;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
    }
    p {
        font-size: 11px;
        color: #6d6d6d;
    }
`;
export const Notification = styled.div`
    display: flex;
    align-item: center;
    padding: 5px;
    border-radius: 6px;
    background: #fff3cf;

    align-items: center;

    img {
        margin: 0px 5px;
    }
    h5 {
        color: #ffc727;
        margin: 0px;
    }
`;

export const CardSecond = styled.div`
    display: flex;
    margin: 10px;
    min-width: 370px;
    border-radius: 6px;
    padding: 10px;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    h2 {
        margin: 0;
        font-family: Montserrat;
        font-size: 15px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
    }
    p {
        font-size: 12px;
        color: #6d6d6d;
    }
`;

export const TimeLine = styled.div``;

export const ProgressCircle = styled.div`
    h4 {
        margin: 0px;
        color: #28c78e;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;

        p {
            font-family: Montserrat;
            font-size: 10px;
            font-weight: 500;
            line-height: 12px;
            letter-spacing: 0px;
            text-align: center;
        }
    }
`;

export const TemplateCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    gap: 1.3rem;
    width: 20%;
    height: 13rem;
    padding: 1rem;
    background-image: ${(props) => props.bgImg && `url(${props.bgImg})`};
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (max-width: 900px) {
        min-width: 12rem;
    }
    & > p {
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: 0em;
        color: #fff;
        margin-bottom: 0;
        text-align: center;
    }
    .card__icon {
        padding: 0.8rem;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #fff;
    }
`;
