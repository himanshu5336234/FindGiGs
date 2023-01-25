import React from "react";
import GlobalModal from "../../../shared/GlobalModal";
import congratulations from "../../../assets/images/freelancer/illustration.svg";
import {
  GlobalButton,
  GlobalSubText,
  GlobalTextP4,
  GlobalTextP2,
  GlobalTextP5,
} from "../../../shared/GlobalComponents";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";
import { SuccessModalContainer } from "../ReviewGigDetails/StyleSheet";

function SuccessModal({ modalVisible, setModalVisible, heading, subheading }) {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const hireAnotherFreelancer = () => {
    localStorage.setItem("gigCreated", false);
    navigate(RouteConstant.HOME + "/" + RouteConstant.EXPLORE_TALENT);
  };
  const handlePostNewGig = () => {
    navigate(RouteConstant.HOME + "/" + RouteConstant.GIG_TEMPLATE);
  };
  return (
    <GlobalModal
      top
      visible={modalVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      maskClosable={false}
    >
      <SuccessModalContainer>
        <img src={congratulations} alt="begig__congratulations" />
        <GlobalTextP2>{heading}</GlobalTextP2>
        <GlobalTextP4 align="center">{subheading}</GlobalTextP4>
        <Space
          size="middle"
          direction="vertical"
          className="successModal__actionContainer"
        >
          <GlobalButton type="primary" block onClick={hireAnotherFreelancer}>
            Hire another freelancer
          </GlobalButton>
          <GlobalButton type="primary" block onClick={handlePostNewGig}>
            Post a new gig
          </GlobalButton>
        </Space>
      </SuccessModalContainer>
    </GlobalModal>
  );
}
export default SuccessModal;
