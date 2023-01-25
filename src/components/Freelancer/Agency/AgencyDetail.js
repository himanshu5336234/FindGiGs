import React, { useState, useEffect } from "react";
import { GlobalButton, GlobalSubText } from "../../../shared/GlobalComponents";
import agencydetails from "../../../assets/images/freelancer/agencydetails.svg";
import { Form, Select } from "antd";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import { addAgencyDetails } from "../../../api/freelancer/onboardAPIs";
import PropTypes from "prop-types";
import {
    OnboardFormContainer,
    OnboardInput,
    OnboardPhoneInput,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmailVerification from "../../SignUp/EmailVerification";
function AgencyDetails({ proceedToNextTab }) {
    // const menu = (
    //     <Menu
    //         items={[
    //             {
    //                 key: "1",
    //                 label: "UI/UX Design",
    //             },
    //             {
    //                 key: "2",
    //                 label: "Cybersecurity",
    //             },
    //             {
    //                 key: "3",
    //                 label: "Cybersecurity",
    //             },
    //             {
    //                 key: "4",
    //                 label: "Cybersecurity",
    //             },
    //             {
    //                 key: "5",
    //                 label: "Cybersecurity",
    //             },
    //         ]}
    //     />
    // );
    const OPTIONS = [
        "UI/UX Design",
        "Cybersecurity",
        "Mobile Apps",
        "Web Apps",
        "Game Development",
        "AR/VR",
        "Testing/ QA",
        "Others",
    ];
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const [form] = Form.useForm();
    const freelancerData = useSelector((state) => state.freelancer.userData);
    const [showEmail, setShowEmail] = useState(false);
    const [values, setValues] = useState({});
    useEffect(() => {
        form.setFieldsValue({
            first_name: freelancerData?.freelancerDetails?.user?.first_name,
            last_name: freelancerData?.freelancerDetails?.user?.last_name,
            phone_number: freelancerData?.freelancerDetails?.user?.mobile_no,
        });
    }, [freelancerData, form]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(
        "selectedItemsselectedItemsselectedItems",
        selectedItems,
        freelancerData
    );
    const onFinish = (e, values) => {
        //   funtion for submitting introduction form
        const record = {
            // freelancer: {
            name: e?.name,
            email: e?.email,
            mobile_no: e?.phone_number,
            website: e?.website,
            specialization: e?.specialization,
            // },
        };
        setValues(record);
        console.log(record);
        dispatch(
            addAgencyDetails({
                record,
                proceedToNextTab,
                dispatch,
                setShowEmail,
            })
        );
    };
    return (
        <>
            {showEmail ? (
                <EmailVerification fromAgency recordFromAgency={values} />
            ) : (
                <OnboardingContainer
                    imgSrc={agencydetails}
                    title={"Add agency details"}
                    subtext={
                        "We require the agency's information in order to define the billing information for your Gig payments."
                    }
                >
                    <OnboardFormContainer>
                        <Form
                            form={form}
                            autoComplete="off"
                            layout="vertical"
                            onFinish={onFinish}
                            className="margin-t2"
                        >
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        message: "Please enter only alphabets",
                                        pattern: new RegExp(/^[A-z]+$/),
                                    },
                                    {
                                        min: 2,
                                        message:
                                            "Please enter minimum two alphabets",
                                    },
                                ]}
                            >
                                <OnboardInput placeholder="Type here" />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        message: "Please enter a valid email",
                                        pattern: new RegExp(
                                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        ),
                                    },
                                    {
                                        min: 5,
                                        message:
                                            "Please enter minimum five alphabets",
                                    },
                                ]}
                            >
                                <OnboardInput placeholder="Type here" />
                            </Form.Item>
                            <Form.Item
                                label="Phone Number"
                                name="phone_number"
                                rules={[
                                    {
                                        pattern: new RegExp(/^[0-9]{10}$/),
                                        message:
                                            "Please provide a valid phone number",
                                    },
                                    {
                                        min: 9,
                                        message:
                                            "Please provide a valid phone number",
                                    },
                                ]}
                            >
                                <OnboardPhoneInput
                                    placeholder="Type here"
                                    prefix={
                                        <GlobalSubText className="margin-b0 phone-prefix">
                                            +91
                                        </GlobalSubText>
                                    }
                                />
                            </Form.Item>
                            <Form.Item
                                label="Website"
                                name="website"
                                rules={[
                                    {
                                        message: "Please enter a valid website",
                                        // pattern: new RegExp(/^[A-z]+$/),
                                    },
                                    {
                                        min: 7,
                                        message:
                                            "Please enter minimum seven alphabets",
                                    },
                                ]}
                            >
                                <OnboardInput placeholder="Type here" />
                            </Form.Item>
                            <Form.Item
                                label="Specialization"
                                name="specialization"
                            >
                                <Select
                                    mode="multiple"
                                    placeholder="Inserted are removed"
                                    value={selectedItems}
                                    onChange={setSelectedItems}
                                    style={{
                                        width: "100%",
                                    }}
                                    options={filteredOptions.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />
                            </Form.Item>
                            <GlobalButton
                                type="primary"
                                block
                                htmlType="submit"
                                className="margin-t3"
                                // onClick={()=>navigate("/")}
                            >
                                Submit
                            </GlobalButton>
                        </Form>
                    </OnboardFormContainer>
                </OnboardingContainer>
            )}
        </>
    );
}
AgencyDetails.propTypes = {
    proceedToNextTab: PropTypes.func,
};
export default AgencyDetails;
