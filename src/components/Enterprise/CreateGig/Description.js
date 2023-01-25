import { Button, Form, message, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { GlobalButton, GlobalTextArea } from "../../../shared/GlobalComponents";
import { Title } from "./Stylesheet";
import PropTypes from "prop-types";
import {
  DeleteIcon,
  EditIcon,
  ImageIcon,
  UploadIcon,
} from "../../../shared/icons";
import {
  AddBioLength,
  EditRemoveUpload,
  ErrorText,
  JustifyFlexContainer,
  OnboardUpload,
} from "../../../shared/Onboarding/OnboardingComponents";
import { useDispatch, useSelector } from "react-redux";
import { updateGig, uploadFile } from "../../../api/enterprise/createGigApis";

function Description({ proceedToPrevTab, proceedToNextTab }) {
  const [fileState, setFileState] = useState({
    selectedFile: null,
    selectedFileList: [],
  });
  const [error, setError] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { gigData } = useSelector((state) => state.createGig);
  const [bio, setBio] = useState("");

  useEffect(() => {
    form.setFieldsValue({
      gigDescription: gigData?.description,
    });
    // setBio(gigData?.description);
  }, [gigData]);

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };

  const onFinish = (e) => {
    //   funtion for submitting gig Description form
    if (fileState?.selectedFile === null) {
      setError(true);
      return;
    }
    const record = {
      title: gigData?.title,
      description: e?.gigDescription,
      attachments: ["www.logo.com"],
    };

    dispatch(
      updateGig({
        record: { ...record, gig_id: gigData?.id },
        proceedToNextTab,
      })
    );
  };

  const dummyRequest = ({ file, onSuccess }) => {
    // dispatch(uploadFile({ file, onSuccess }));

    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  //   Props for Upload component
  const props = {
    beforeUpload: (file) => {
      const isImage =
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type == "application/pdf";
      if (!isImage) {
        message.error(`${file.name} is not a png/jpeg file`);
      }

      return isImage || Upload.LIST_IGNORE;
    },
  };

  //   Onchange function for Upload component
  const onFileChange = (info) => {
    setError(false);
    const nextState = {};
    switch (info.file.status) {
      case "uploading":
        nextState.selectedFileList = [info.file];
        break;
      case "done":
        nextState.selectedFile = info.file;
        nextState.selectedFileList = [info.file];
        message.success(`Image uploaded successfully`);
        break;

      default:
        // error or removed
        nextState.selectedFile = null;
        nextState.selectedFileList = [];
    }
    setFileState(nextState);
  };

  //   Delete selected file for Upload component
  const handleDeleteFile = () => {
    const nextState = {
      selectedFile: null,
      selectedFileList: [],
    };
    setFileState(nextState);
  };
  return (
    <div className="creategig__fromTabContainer">
      <Title>Write a brief about your Gig</Title>
      <Form
        autoComplete="off"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="margin-t2"
      >
        <Form.Item
          name="gigDescription"
          rules={[
            {
              required: true,
              message: "Please enter Gig Description",
            },
            {
              min: 100,
              message: "Bio must be minimum 100 characters",
            },
          ]}
        >
          <GlobalTextArea
            placeholder="Type here"
            bordered={false}
            autoSize={{
              minRows: 4,
              maxRows: 5,
            }}
            maxLength={300}
            onChange={handleChangeBio}
          />
        </Form.Item>
        <JustifyFlexContainer className="margin-t1">
          <AddBioLength>Minimum 100 character required</AddBioLength>
          <AddBioLength>{bio ? bio.length : 0}/100</AddBioLength>
        </JustifyFlexContainer>
        <Form.Item name="attachments">
          <p className="creategig__label">Attachments</p>
          {!fileState.selectedFile ? (
            <OnboardUpload
              fileList={fileState.selectedFileList}
              customRequest={dummyRequest}
              onChange={onFileChange}
              {...props}
            >
              <span>
                <UploadIcon />
              </span>
              <span>Attach your file here</span>
              <span>Browse</span>
            </OnboardUpload>
          ) : (
            <EditRemoveUpload>
              <div className="fileName">
                <ImageIcon />
                <span>{fileState.selectedFile.name}</span>
              </div>
              <Button
                icon={<EditIcon />}
                onClick={handleDeleteFile}
                className="upload_action_button upload_edit"
              ></Button>
              {/* <Button
                icon={<DeleteIcon />}
                className="upload_action_button upload_delete"
                onClick={handleDeleteFile}
          ></Button>*/}
            </EditRemoveUpload>
          )}
          {error && <ErrorText>Please submit your company's logo</ErrorText>}
        </Form.Item>
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

Description.propTypes = {
  proceedToPrevTab: PropTypes.func,
  proceedToNextTab: PropTypes.func,
};

export default Description;
