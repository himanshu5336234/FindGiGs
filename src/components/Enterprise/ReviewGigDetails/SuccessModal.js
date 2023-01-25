import React from "react";
import GlobalModal from "../../../shared/GlobalModal";
import congratulations from "../../../assets/images/enterprise/Congratulations.svg";
import { SuccessModalContainer } from "./StyleSheet";
import { GlobalButton, GlobalSubText } from "../../../shared/GlobalComponents";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../../router/constants";
// import { setGigDataEmpty } from "../../../redux/enterprise/createGigSlice";
// import { useDispatch } from "react-redux";

function SuccessModal({ modalVisible, setModalVisible, id }) {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowMatches = () => {
    // dispatch(setGigDataEmpty());
    localStorage.setItem("gigCreated", false);
    navigate(RouteConstant.HOME + "/" + RouteConstant.EXPLORE_TALENT);
  };
  console.log(id,"id")
  return (
    <GlobalModal
      centered
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
        <GlobalSubText align="center">
          Your Gig has been posted successfully. Let us help you find the right
          talent for your Gig. We have shortlisted a few candidates on the basis
          of your requirement.
        </GlobalSubText>
        <Space
          size="middle"
          direction="vertical"
          className="successModal__actionContainer"
        >
          <GlobalButton type="primary" block onClick={handleShowMatches}>
            Show my Matches
          </GlobalButton>
          <GlobalButton
            block
            onClick={() => navigate(RouteConstant.GIG_MILESTONE + "/" + id)}
          >
            Add Milestone for Gig
          </GlobalButton>
        </Space>
      </SuccessModalContainer>
    </GlobalModal>
  );
}

export default SuccessModal;
