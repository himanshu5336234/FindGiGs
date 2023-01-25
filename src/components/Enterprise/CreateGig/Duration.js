import React, { useEffect, useState } from "react";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { DurationCard, DurationInput, SubText, Title } from "./Stylesheet";
import PropTypes from "prop-types";
import { Form } from "antd";
import { ErrorText } from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { updateGig } from "../../../api/enterprise/createGigApis";

const InputCard = ({ subText, name, setError }) => {
    return (
        <DurationCard>
            <Form.Item
                name={name}
                rules={[
                    {
                        pattern: new RegExp(/^[0-9]*$/),
                        required: true,
                        message: "Please enter valid numbers",
                    },
                ]}
            >
                <DurationInput
                    placeholder={name === "minHours" ? "4" : "0"}
                    bordered={false}
                    onChange={() => {
                        if (name === "minHours") {
                            setError(false);
                        }
                    }}
                />
            </Form.Item>
            <SubText className="margin-b0">{subText}</SubText>
        </DurationCard>
    );
};

function Duration({ proceedToPrevTab, proceedToNextTab }) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const gigData = useSelector((state) => state.createGig.gigData);

    const [paymentType, setPaymentType] = useState(1);
    const [error, setError] = useState(false);

    useEffect(() => {
        setPaymentType(gigData?.payment_type);
        const durationArray = gigData?.string_duration?.split(" ");
        gigData?.string_duration !== "" &&
            form.setFieldsValue({
                minHours: gigData?.hours_per_week / 7,
                months: Number(durationArray[0]),
                weeks: Number(durationArray[2]),
                days: Number(durationArray[4]),
                hours: Number(durationArray[6]),
            });
    }, [gigData]);

    console.log(form.getFieldValue("minHours"));

    const onFinish = (e) => {
        if (
            form.getFieldValue("minHours") &&
            form.getFieldValue("minHours") < 4
        ) {
            setError(true);
            return;
        }
        const record = {
            gig_id: gigData?.id,
            title: gigData?.title,
            description: gigData?.description,
            attachments: ["www.logo.com"],
            payment_type: gigData?.payment_type,
            hours_per_day: e?.minHours,
            estimated_duration:
                Number(e?.months === undefined ? 0 : e?.months * 30) +
                Number(e?.weeks === undefined ? 0 : e?.weeks * 7) +
                Number(e?.days === undefined ? 0 : e?.days),
            // (e?.hours === undefined ? 0 : e?.hours)
            string_duration:
                (e?.months === undefined ? 0 : e?.months) +
                " months " +
                (e?.weeks === undefined ? 0 : e?.weeks) +
                " weeks " +
                (e?.days === undefined ? 0 : e?.days) +
                " days " +
                (e?.hours === undefined ? 0 : e?.hours) +
                " hours",
        };

        console.log(">>>>>>>>>>>>>>>>>>>>>>", record);
        dispatch(updateGig({ record, proceedToNextTab }));
    };
    return (
        <div>
            <Title>Define duration of your Gig</Title>
            <Form
                autoComplete="off"
                layout="vertical"
                form={form}
                onFinish={onFinish}
                className="margin-t2"
            >
                <div className="creategig__optionsContainer">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <InputCard
                            name="minHours"
                            subText={"Minimum hours required per day"}
                            setError={setError}
                        />
                        {error && (
                            <ErrorText>Minimum hours must be 4</ErrorText>
                        )}
                    </div>
                    {paymentType === 2 && (
                        <InputCard name="hours" subText={"Number of Hours"} />
                    )}
                    {paymentType !== 2 && (
                        <InputCard name="months" subText={"Number of Months"} />
                    )}
                    {paymentType === 1 && (
                        <InputCard name="weeks" subText={"Number of Weeks"} />
                    )}
                    {paymentType === 1 && (
                        <InputCard name="days" subText={"Number of Days"} />
                    )}
                </div>
                <div className="creategig__actionContainer">
                    <GlobalButton onClick={proceedToPrevTab} block>
                        Back
                    </GlobalButton>
                    <GlobalButton type="primary" htmlType="submit" block>
                        Next
                    </GlobalButton>
                </div>
            </Form>
        </div>
    );
}

Duration.propTypes = {
    proceedToPrevTab: PropTypes.func,
    proceedToNextTab: PropTypes.func,
};

export default Duration;
