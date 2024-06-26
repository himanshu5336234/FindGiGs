import { Avatar, Grid, Space } from "antd";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
    GlobalButton,
    GlobalSubText,
    GlobalTextP2,
    GlobalTextP4,
    GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { CustomDivider } from "../../Freelancer/GigList/Stylesheet";
import { StatusTab } from "../BidsAndOffers/Stylesheet";
import { Container, GigDetailButton } from "./Stylesheet";
import { StarFilled, FilePdfFilled, FileFilled } from "@ant-design/icons";
import { SkillTab } from "../ExploreTalent/Stylesheet";
import GigOverview from "./GigOverview";
import { useDispatch, useSelector } from "react-redux";
import { closeGig, getGigDetails } from "../../../api/enterprise/gigsApis";

const { useBreakpoint } = Grid;

const dummyData = {
    freelancers: [
        {
            id: 1,
            name: "Kalyan Kuramana",
            designation: "Full Stack Developer",
            rating: 4.5,
        },
    ],
    status: "In Progress",
    skills: ["React Js", "Python", "Java"],
    milestones: "",
    file_archive: {
        name: "Project Instructions",
        size: 25,
    },
    gigId: 2345,
    title: "Create a Chatbot",
    company: "Tech Mahindra",
    required_experience: 3,
    no_fl_required: 2,
    total_budget: 200000,
    string_duration: "2 Months 3 weeks",
    payment_type: 1,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con equat.",
};

function GigDetail() {
    const screens = useBreakpoint();
    const { id } = useParams();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const gigDetails = useSelector((state) => state.gigsEnterprise.gigDetails);
    const navigate = useNavigate();

    console.log(gigDetails, "gigDetails");
    console.log(state, "state");

    useEffect(() => {
        dispatch(getGigDetails({ gigId: id }));
    }, [id]);

    const handleCloseGig = () => {
        dispatch(closeGig({ gigId: id, navigate }));
    };

    return (
        <Container>
            <div className="gigDetail__left gigDetail__card">
                {!screens?.md && (
                    <div className="gigDetail__showActionsMobile">
                        {state?.gigStatus === 1 && (
                            <GlobalButton
                                type="primary"
                                block
                                className="margin-t1"
                                onClick={handleCloseGig}
                            >
                                Close Gig
                            </GlobalButton>
                        )}
                        {state?.gigStatus === 2 && (
                            <div className="gigDetail__actions">
                                <GlobalButton block>Edit Gig</GlobalButton>
                                <GlobalButton
                                    type="primary"
                                    block
                                    onClick={handleCloseGig}
                                >
                                    Close Gig
                                </GlobalButton>
                            </div>
                        )}
                    </div>
                )}

                {/* Freelancers section */}

                {/* Show freelancer info only if gig status is In Progress or Closed */}

                {(state?.gigStatus === 1 || state?.gigStatus === 4) &&
                    dummyData?.freelancers?.map((freelancer) => (
                        <>
                            <GlobalTextP2 className="margin-b0">
                                Freelancers
                            </GlobalTextP2>
                            <CustomDivider />
                            <div
                                className="gigDetail__freelancerBox margin-b2"
                                key={freelancer?.id}
                            >
                                <Space size={"middle"}>
                                    <Avatar
                                        size={64}
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgUFRUYFRIaHR0YGhgaGBgYHhgYHBkaGhkVGhghIS4lHB8uHxodJjooKzAxODU1GiQ7QDszPy40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABCEAACAQMABwYDBQYEBQUAAAABAgADBBEFBhIhMUFRBxMiYXGBMpGhFEJSYoIjcpKiscEzNFOyJEPR8PFEY5PC4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCmYiICIiAiIgIiSns+1YN/drTIPcJ46p37kB+HPJmO4e55QMrQmriqKT3KH9sNqkp3KVILKx67QUkDykUvcd4+yAF2mwBwAycATqXWfVynd0O6PgdADSqLuNNx8JHkCBkdJy/pawqUKz0Ko2aqMVYefUdQRvB5giBhREQEREBERAREQEREDfav2lF6dfvVJKhNgg4YMxZQF5HJK7jNfpXRz0KhpuN43g4IDKeDDqD/AFBHKWD2S6lm5c3VbaFshwq8BWqDr1Vc8Rz4HcZMe1/VMV7YXFFf21uN4Ub2ofeUD8vxDy2usDn+IiAiIgIiICIiAiIgIiICIiB7Wtu1R1poC7sQqqOLMTgAeeTOndQdVlsLUUtxrvhqzDfl8fCD+FRuHuecrzsL0HRc1bxiGrU22EXHwBlyanqRlR02W6y7ICV12o6i/bU+0UABdoMY4d6g37B/MOXylixA43q0mVirAhgcEHcQehE850J2i9nS3YavbgJdAZIxhanr+bz/AOzQd9ZvSdqdRSlRTgqRgiBjxEQEREBERASVajan1dIVgoylupBq1McF/CvVjy6cTPfUbUWtfOGwadsD4qhHH8q9TOitC6JpWtJaNFQtNfmTzLHmYHtYWKUaa0aQ2aaAKqjkB/fzmSwzun1EDm/tS1P+xXHeUlxaVSSmBupvxal6c18t3IyBzrbWDQ9K7oPb1h4GHxbsow3q6nkQd/8A+Tk+5UBmAYMoJAYDAYA4DAcs8YHjERAREQEREBERAREQERECyew/Svd3zUCcLXpkAdXTxr/Lt/OdBzkjVfSH2e7t6+cCnURm/c2gHHupI951sDA/YiICRLXLUihfp4lCVwPDUG4+h6/98ZLYgcp6yaqXFnUZKikqODAbscienrw85H8TrnTWi6dxTKVAOBw27w9T6dRKF0/qrQyzU3SkQTxOEbGd4z8OfL5QIBEyK9qyts7m80YOD5hlyJs9D6D70jbq06a9C6liPJM7vf5QNRRpMzBVBZjuAAyT6CWnqH2XNV2a934aXEJzb1PMfT15SPs91UtgzNgEpjwnezfmY818huz9bRAgeFpapTRURQqKMBQMACZERAREQIv2i6V+zaOuagOHKd2vXaqEICPQMW9py3Lw7e9IYo21uD8btUPoi7Iz7uflKPgIiICIiAiIgIiICIiAiIgJ1N2f6cF5Y0aufGo7uoOjpuPzGG9GE5ZlrdiWmTSrtbsf2dxnY8q1MAke6H+UQL2iIgJ5V6yopdiFUDJJ5CesqTXvWJ7qsbK3cikmDWqKeA6A/iPAe56YDV6/dor1Wa3tTs0wcM/HJ6eZ8uA55PCvlvagO1tePm5VGY/rYFvYHE8hR8bUkUs4dkVVBZmwxAAUb2PpJVYdnGk6gB+z92p51HRD/CCWHuIEbbSVx/r1B+r+wng+nLgeFn2h0dEcEfqUyf0+yPSB41LZB+/UY/IU9/zn1fdjVyKbOlxTqVhvFPZKhvIOTuPTIx5iBCdFa2XFvUFSkQuOKrkKeuBkhd3Td1BnQGpWuNK+pgghawHiXz5kf9JzJdW703am6lHUlWUjBVhuIIkm1Rp1kVrm3YiqjDC5wHUDLJ5NvBB/6wOoImh1S1gS9t1rIRtYAdfwtz3cufyM30BETU6zaXW0tqtw2/u1JUfic7kX3Yge8Ciu2fSgraQKKcrQQUz028lnx/EFPmplfT3uq7O7O5JqMWZieJYklifcmeEBERAREQEREBERAREQEREBJJq077FRqZxWoMlzTP5kJ2hjmCMbvSRuSfs+rKt6iv8AA/gYeWQx+imB0noPSSXNClcJ8NRQ4HHZJG9T5g5B8xNjK97PWa1uLrRVQ/4bG4t/zUXPiC+QJHuzdJYDHG87h1gR7WXSWy9C2DbLXDOpIKq2yqMdlGYEBmIAGeI2sYOJqrTUG3G1srWpBmLsRXDMzHiT4T/WQ6rtaU0k7Y2qNNu6pA7wCN71P0j6mT59TsY7u9u6agY2TUFQeuXUt/NiBl6J1fsrEM6ItNmyWqu2XYk5OXY59hunrV1otV3d5tfuqx+uMSqO1O1uLE0WS4d6dQMCzKm0HXG7axuBDfQyBaJo311U7u3NarUO/Cu24dWYkBR5kiB0Rca50QPCjufQKPnnP0nloXWwVamxUCorbkIJPi/CxPXru37pR+k9VNL0V2qlG4Kc9h+9HuEZsD1nvqdpkAfZqm4gnYJ+qHoc8Pl0gWb2oahfbENzbri8Qb1G7v0H3T+cDgefDpjy7NtXqb6JVTgVXqVHJ5pUDbAVunhRcqeskWqusG2BQqn9oBhWP3x0P5h9Y0rZta1mvbdS1J/83QUZ21A/zNMf6ijiB8S55gQIBo68bRl9tMCtvVfu6yclqHg48jjPqPOXOjggEHIIyCOYPAyD696Gp3Vv39MhkdBtMu8MhGUqg88HB9PSffZbppq1saFU/wDEW7d23mB8Lef/AIgTiVV2s6U26tKzB8FJTdV/RAe7Q+pyceYMs67uVpo1R2C00UszHkqglj8hKK0+rGxr6RqjFe+qZRTxW3GERf4T8gIFZFsnJ48Z8xEBERAREQEREBERAREQEREBM/QtfYr0n4YdfkTg/QzAgGB0hriCi2ulqYJqW+y1QDi9tUAFRcc8bW0Om8zZa+aaFDR9SsjZLqEpkb9ov8OOuRPTVGqtzo6ltgMj0yjKeBUggqf0mV+tCpVq2uhXLFrWu7O34rdFVrep0+F8Y6rAl/ZpoD7PbqzD9owxnyzlm/U2fYCTafFOmFAUDCgAADkAMATE0vfihQqVyCwpoz7I4sQMhR5k4HvAjHaNohL2mlmDiqGWsXPw0aa7StUc9CCyqvFm8lZl/NAXOjbCmKFuSR95wpZnb8bPgbXtuHKaWgtzfO9Ci4SmrBrq5K526pAIp0057K7IVScKoUnaYzbDs6Qf+tus+fcEfLu4EqstM0Ku6nUUt+E5Vv4WwZr9PaoWV3vr0FNTlUXwOMcPGuCePA5EjdzqFcrvpXaVB+GrRIP8aNj+Se1mul7fcaS1k6LVWoMeW3sMPQZgeFzqNc099vcJWUcFrAo4I596gIJ/QPWbvRumbmmuze2tZdnhWpqLhW9Vpkvnz2B7TKsdO1X3PZ10YccLkfNtn6EzdUKpYZKMnk2zn6EwIdo/SVtQrNSSqjWVZiDTLYa1rOfgam2GSk7E4yBsuccGGzoLSidH6ZRd4o3Q7vPVuNMnz+76rLH0pomhcLsV6KVV6OobHmDxU+Ylf662DChURXapXse7vKLudpjQ2myjNxcqab+I79krnJJJDea/1Grdxo2mSHun/aEZ8NtTw9Vs8s7lGeOSJCe3K4VFtrdAFVVyFHAKMgKB5YWTLUw/a7i50oR4H/4a2yN/cUyduoPJqmenwmVX2zXu3pBl5U1VfcgZH0+sCv4iICIiAiIgIiICIiAiIgIiICIiB0L2JX23YFCcmnUZfZgGEmy6KpC4a6C/tmpikW/IGLfPJ+glQdgd/itc25PxItQDzVtk/wC8fKXfASPa+NjR9y34aZbpnZIbH0khkZ19P/Dop+B69ur/ALgrI7D3C494Gr1L1aoLb7FVmqXBJeqveOBSeoS5RVVgARnBYbyQd+4AbltX6if5a8r0scEqMLlD6ipmpj0cSuxpurb1RXDYVj425KxOT3g5oc8funB8xYmidaKNUBXIpVOjHwn91uHsfrA8m0lfUP8AHtluaY/5lqTtY5s1u/i9lZpstE6ct7jPdOC6/HTYFHQ9HpthlPqJsxMDSOh6FchqiAuvw1FJR0/dqKQy+xgbCJhWlConhNQ1V5MwAcepUBW+QPXMzYCRfTgC39mSMpWS4tnHI5RKqg//ABMP1SUSL66+E2VX8F5RB/dqbdI/7xA3eidHpb0adCmMJTQIueOAMZPmeJ8zOWtbr7vr24q8Q1RsegOB9BOn9Y77uLW4r/gpu482CnZHucCcjmAiIgIiICIiAiIgIiICIiAiIgIiIEu7MNJdxpK3YnCOxpN5ioCo/m2T7Tp2ccUKrKyupwykMp6EHIPzE670VeivQpV1+GoiuPRlDY+sDMka7QaJawrMONPZr+1J1qOPdVYe8ks+KiBgVIyCCCDwIO4gwKbDBhncVIz5EH+2JCbHWRqbMNkNblzsLnBppteHZO/w45cuWJJ9bbGro5alFgxotlbWqASNltwoseTKCePxBcjpK9VcDHtAuLV27u2ZUoMUJGQC6suOOcEFcY6Sx9HUK6j9tVDt0VQoHvxP0nPWpOstW3rImy1RUO0uN7KoHiXHFlwTuG8cs8J0NorSdO4pirSYMh6HeDzUjkRAzoiICRrtBQ/YKrr8VIpXGP8A2aiVD9FMksx7+1WrTekwylRWRh1VgVP0MCve2jTYSwWkhybll3g/8tcOT6EhR7mc/SS626Rd1tqDnLW9Puj5MrMhU+mx9ZGoCIiAiIgIiICIiAiIgIiICIiAiIgJ0f2OaS77RqITlqLNSPpnbX22XA9pzhLa7BtKha1e2Y/4irUUfmQkMB5kOD+iBeURECne3PSeWtrQHhtV2HzRP/vKpkg190n9o0hc1Acord0n7tMbBx5Fgx95H4GRoWrsXdJuROz/ABAr/cS0LS6ek23Tco3PBxnyPI+8qB6uy6MOKkN8mz/aWwDneOEC3LGrt01cMWVlDAnZzvGeQAmXI3qRc7VvsnijMvscMP8AcflJJAREQOYO0+w7nSdyoGFdhVHn3ih2P8RaRKWt292Ozc29f/Upsh9abZz8qg+UqmAiIgIiICIiAiIgIiICIiAiIgIiICbzU7SZtr2hWH3XAI6q3hIPsZo5+g43jjA7HpVAwDA5BAIPUEZBms1n0oLa0r3G7NNGZc83xhF92Kj3mr7PNL/aLRMnxKF/hYZX67Q/TI5236T2LWlbA76z5YdUp4Y/zFflApNAcbzkneTxyTvJn1EQMK7Pi9paWhq23QpPzKLn1AwfqJVNVskmWBqRdBrfYz4kYjH5W8QPzLD2gWz2f/BV6bS/0MmEh2oDDZqrzyp9iCP7SYwERECr+3ay2rKlVA306oBPRXVgfqqyg5012r2pqaLuABkqEf2SorMf4czmWAiIgIiICIiAiIgIiICIiAiIgIiICIiBcPY5pbZ2UY+HaNI/qwyH+I495pu1vSffaRamD4KCLTHTbbxufXxBf0zQajX4pvUBOBsbeehTfn5E/Ka64umqu9Zzl6jM7HzYkwPOfFdsKT7T7mLeNvA94GLNxq1pTuKwY/4beFvTkfY/TM08QL+1W0kKNdST+zcbLHlg71b0z9CZZs5q1O05kC3qHf8AcY8x/pn+3y6S5NV9Y12RQrNhhuRzwI5Kx5HkDz9eITKJ+Twu7pKal3IVV3kn+g6nygavWq9SnbuHAYOrU9k8GDKQ2R0AJzOUXxk44Z3enKWx2kazsyseBfKIv4U+83qRz6kdJUsBERAREQEREBERAREQEREBERAREQERED0pOQdxxkEH0IwR8jNgBNXNlTbIBgfRM1rtkk9ZmXTYX13TBgIiIH2jEHI3Ebweh6ywtWNPiuvd1CBWUcfxgfeH5uo9/Sup6UqjKQykqwOQRuII5wL0sdO3FIbKVDsD7rAMB5DO8D0mNpbTD1AXr1MogLcgqjmQo/8AMjOren1uF2HwtYDeOAcfiXz6iaPXPTW232dD4FPjI+84+76D+vpA0em9JNXqtUO5eCr+FRwHrzPmZroiAiIgIiICIiAiIgIiICIiAiIgIiICIiAmbaHK46GYUyLNvFjrAXbb8dJjz7qtlifOfEBERAREQPunUKkMpII3gg4IPUGfBMRAREQEREBERAREQEREBERAREQEREBERAREQE+kOCDPmICIiAiIgIiICIiAiIgIiICIiAiIgIiIH//Z"
                                    />
                                    <Space direction="vertical" size={3}>
                                        <GlobalSubText
                                            className="margin-b0"
                                            weight="bold"
                                            color="#0C0E17"
                                        >
                                            {freelancer?.name}
                                        </GlobalSubText>
                                        <GlobalTextP5
                                            className="margin-b0"
                                            color="#696969"
                                        >
                                            {freelancer?.designation}
                                        </GlobalTextP5>
                                        <div className="ratingTab">
                                            <Space size={5} align="center">
                                                <StarFilled
                                                    style={{
                                                        color: "#FFC727",
                                                        fontSize: "12px",
                                                    }}
                                                />
                                                <GlobalTextP4
                                                    color="#FFC727"
                                                    className="margin-b0"
                                                >
                                                    {freelancer?.rating}
                                                </GlobalTextP4>
                                            </Space>
                                        </div>
                                    </Space>
                                </Space>
                                <GigDetailButton>View Profile</GigDetailButton>
                            </div>
                        </>
                    ))}

                {/* Skills Section */}

                <GlobalTextP2 className="margin-b0">Skills</GlobalTextP2>
                <CustomDivider />
                <Space size="middle">
                    {gigDetails?.gigData?.skills?.map((skill, idx) => (
                        <SkillTab key={idx}>
                            <GlobalSubText
                                className="margin-b0"
                                color="#4668D6"
                            >
                                {skill}
                            </GlobalSubText>
                        </SkillTab>
                    ))}
                </Space>

                {/* Gig Description Section */}

                <GlobalTextP2 className="margin-b0 margin-t2">
                    Gig Description
                </GlobalTextP2>
                <CustomDivider />
                <GlobalTextP4 className="margin-b0" color="#696969">
                    {gigDetails?.gigData?.description}
                </GlobalTextP4>
                {gigDetails?.gigData?.attachments.length > 0 && (
                    <div className="gigDetail__freelancerBox margin-t1">
                        <Space size={"small"} align="center">
                            <FilePdfFilled
                                style={{
                                    color: "#FF0000",
                                    fontSize: "1.6rem",
                                    marginTop: "5px",
                                }}
                            />
                            <Space direction="vertical" size={0}>
                                <GlobalSubText
                                    className="margin-b0"
                                    weight="bold"
                                >
                                    {dummyData?.file_archive?.name}.pdf
                                </GlobalSubText>
                                <GlobalTextP5
                                    className="margin-b0"
                                    color="#696969"
                                >
                                    {dummyData?.file_archive?.size} Mb
                                </GlobalTextP5>
                            </Space>
                        </Space>
                        <GigDetailButton>View File</GigDetailButton>
                    </div>
                )}

                {/* Milestones Section */}
                <div className="gigDetail__freelancerBox margin-t2">
                    <div>
                        <GlobalTextP2 className="margin-b0">
                            Milestones
                        </GlobalTextP2>
                        <CustomDivider style={{ marginBottom: 0 }} />
                    </div>
                    <GigDetailButton>View Timeline</GigDetailButton>
                </div>

                {/* Files Archive Section */}

                <div className="gigDetail__freelancerBox margin-t2">
                    <div>
                        <GlobalTextP2 className="margin-b0">
                            Files Archive
                        </GlobalTextP2>
                        <CustomDivider style={{ marginBottom: 0 }} />
                    </div>
                    <GigDetailButton>View All Files</GigDetailButton>
                </div>
                {gigDetails?.gigData?.attachments?.map((attachment, idx) => (
                    <Space
                        size={"small"}
                        className="margin-t1"
                        align="center"
                        key={idx}
                    >
                        <div className="gigDetail__filesArchiveIcon">
                            <FileFilled
                                style={{ color: "#4668D6", fontSize: "1rem" }}
                            />
                        </div>
                        <Space direction="vertical" size={1}>
                            <GlobalTextP5 className="margin-b0" color="#696969">
                                Milestone 1
                            </GlobalTextP5>
                            <GlobalSubText
                                className="margin-b0"
                                color="#0C0E17"
                                weight="bold"
                            >
                                12 files uploaded
                            </GlobalSubText>
                        </Space>
                    </Space>
                ))}
            </div>

            {/* gig Overview section */}
            <div className="gigDetail__right ">
                <div className="gigDetail__card">
                    <GigOverview data={gigDetails?.gigData} />
                </div>
                {screens?.md && (
                    <>
                        {state?.gigStatus === 1 && (
                            <GlobalButton
                                type="primary"
                                block
                                className="margin-t1"
                                onClick={handleCloseGig}
                            >
                                Close Gig
                            </GlobalButton>
                        )}
                        {state?.gigStatus === 2 && (
                            <div className="gigDetail__actions">
                                <GlobalButton block className="margin-t1">
                                    <Link
                                        to={`/home/review-gig-details?id=${id}`}
                                    >
                                        Edit Gig
                                    </Link>
                                </GlobalButton>
                                <GlobalButton
                                    type="primary"
                                    block
                                    className="margin-t1"
                                    onClick={handleCloseGig}
                                >
                                    Close Gig
                                </GlobalButton>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Container>
    );
}

export default GigDetail;
