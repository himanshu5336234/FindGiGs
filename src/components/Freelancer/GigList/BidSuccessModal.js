import React from "react";
import GlobalModal from "../../../shared/GlobalModal";
import { BiddSuccessContainer } from "./Stylesheet";
import bidSuccess from "../../../assets/images/freelancer/bidSuccess.svg";
import { GlobalButton } from "../../../shared/GlobalComponents";

function BidSuccessModal({ modalVisible, setModalVisible }) {
    return (
        <GlobalModal
            title="Bid successfully sent!"
            centered
            visible={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
            maskStyle={{
                backgroundColor: "rgba(70, 104, 214, 0.3)",
            }}
            width="30rem"
            //   maskClosable={false}
        >
            <BiddSuccessContainer>
                <p className="margin-b2">
                    You’ll get a notification once there’s an update from the
                    client. Meanwhile, you can continue bid on more gigs.
                </p>
                <div className="bidSuccess__action">
                    <img src={bidSuccess} alt="begig__bidSuccess" />
                    <GlobalButton type="primary" block className="margin-t2">
                        Find more Gigs
                    </GlobalButton>
                </div>
            </BiddSuccessContainer>
        </GlobalModal>
    );
}

export default BidSuccessModal;
