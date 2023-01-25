import { Grid, message, Space } from "antd";
import React from "react";
import GlobalModal from "../../../shared/GlobalModal";
import {
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
  LinkedinShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";
import { ShareLink, ShareModalIconContainer } from "./Stylesheet";
import { GlobalButton } from "../../../shared/GlobalComponents";
import { CopyOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

function ShareModal({ modalVisible, setModalVisible }) {
  const screens = useBreakpoint();
  const copyToClipboard = () => {
    navigator.clipboard.writeText("www.begig.io");
    message.success("Copied");
  };
  return (
    <GlobalModal
      title="Share"
      centered
      visible={modalVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      width="30rem"
    >
      <ShareModalIconContainer>
        <LinkedinShareButton
          title="Begig"
          summary="Begig"
          url={"https://www.begig.io/"}
        >
          <LinkedinIcon size={48} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton title="kuch bhi" url={"https://www.begig.io/"}>
          <WhatsappIcon size={48} round={true} />
        </WhatsappShareButton>
        <FacebookShareButton
          url={"https://www.begig.io/"}
          quote={"CampersTribe - World is yours to explore"}
          hashtag="#camperstribe"
        >
          <FacebookIcon size={48} round={true} />
        </FacebookShareButton>
      </ShareModalIconContainer>
      <ShareLink>
        <p>www.begig.io</p>
        <GlobalButton
          type="primary"
          icon={<CopyOutlined />}
          onClick={copyToClipboard}
        >
          Copy
        </GlobalButton>
      </ShareLink>
    </GlobalModal>
  );
}

export default ShareModal;
