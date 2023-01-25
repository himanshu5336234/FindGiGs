import React from "react";
import { GlobalButton, GlobalTextP1 } from "../../../shared/GlobalComponents";
import GlobalModal from "../../../shared/GlobalModal";
import { ShareBidModalContainer } from "./Stylesheet";
import { createBid } from "../../../api/freelancer/gigsAPIs";
import { useDispatch } from "react-redux";
function SendBidModal({
    bidData,
    modalVisible,
    setModalVisible,
    onCloseSendBidDrawer,
    setBidSuccessVisible,
}) {
    const dispatch = useDispatch();
    const sendBid = () => {
        setModalVisible(false);
        onCloseSendBidDrawer();
        dispatch(createBid({ record: bidData }));
        setBidSuccessVisible(true);
    };

    // console.log("bidDatabidData", bidData);
    return (
        <GlobalModal
            centered
            visible={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            width="30rem"
            maskClosable={false}
        >
            <GlobalTextP1 align="center" className="margin-b2">
                Are you sure you want to send your bid without making any
                changes?
            </GlobalTextP1>
            <ShareBidModalContainer>
                <GlobalButton type="primary" block onClick={sendBid}>
                    Yes, I am sure
                </GlobalButton>
                <GlobalButton block onClick={() => setModalVisible(false)}>
                    Not sure
                </GlobalButton>
            </ShareBidModalContainer>
        </GlobalModal>
    );
}

export default SendBidModal;
