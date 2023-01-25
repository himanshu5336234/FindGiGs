import React, { useEffect, useState } from "react";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { OptionCardStyle, SubText, Title } from "./Stylesheet";
import PropTypes from "prop-types";
import {
  PrinterOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { ErrorText } from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { updateGig } from "../../../api/enterprise/createGigApis";

const OptionCard = ({ icon, title, subText, onClick, active }) => {
  return (
    <OptionCardStyle active={active} onClick={onClick}>
      <CheckCircleFilled className="activeIcon" />
      {icon}
      <p>{title}</p>
      <SubText>{subText}</SubText>
    </OptionCardStyle>
  );
};

function PaymentMethod({ proceedToPrevTab, proceedToNextTab }) {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const { gigData } = useSelector((state) => state.createGig);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelected(gigData?.payment_type);
  }, [gigData]);

  const handleNext = () => {
    if (selected === null || selected === 0) {
      setError(true);
      return;
    }
    const record = {
      gig_id: gigData?.id,
      title: gigData?.title,
      description: gigData?.description,
      attachments: ["www.logo.com"],
      payment_type: selected,
    };
    dispatch(updateGig({ record, proceedToNextTab }));
  };

  const handleSelectPayment = (num) => {
    setError(false);
    setSelected(num);
  };

  return (
    <div>
      <Title>Select your preferred payment method</Title>
      <div className="creategig__optionsContainer">
        <OptionCard
          icon={<PrinterOutlined className="iconStyle" />}
          title="Fixed Rate"
          subText={"Pay the freelancer a fixed amount on completion of gig."}
          onClick={() => handleSelectPayment(1)}
          active={selected === 1}
        />
        <OptionCard
          icon={<ClockCircleOutlined className="iconStyle" />}
          title="Hourly"
          subText={"Pay the freelancer according to number of hours he worked."}
          onClick={() => handleSelectPayment(2)}
          active={selected === 2}
        />
        <OptionCard
          icon={<CalendarOutlined className="iconStyle" />}
          title="Monthly"
          subText={"Pay the freelancer at the end of each month."}
          onClick={() => handleSelectPayment(3)}
          active={selected === 3}
        />
      </div>
      {error && <ErrorText>Please select a payment method</ErrorText>}

      <div className="creategig__actionContainer">
        <GlobalButton onClick={proceedToPrevTab} block>
          Back
        </GlobalButton>
        <GlobalButton type="primary" onClick={handleNext} block>
          Next
        </GlobalButton>
      </div>
    </div>
  );
}

PaymentMethod.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};

export default PaymentMethod;
