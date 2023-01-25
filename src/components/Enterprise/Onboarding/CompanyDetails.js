import React, { useEffect, useState } from "react";
import { GlobalButton } from "../../../shared/GlobalComponents";
import companyDetails from "../../../assets/images/enterprise/companyDetails.svg";
import { Button, Form, message, Upload } from "antd";
import OnboardingContainer from "../../../shared/Onboarding/OnboardingContainer";
import PropTypes from "prop-types";
import {
  AddBioLength,
  EditRemoveUpload,
  ErrorText,
  JustifyFlexContainer,
  OnboardFormContainer,
  OnboardInput,
  OnboardTextArea,
  OnboardUpload,
} from "../../../shared/Onboarding/OnboardingComponents";
import {
  DeleteIcon,
  EditIcon,
  ImageIcon,
  UploadIcon,
} from "../../../shared/icons";
import { useDispatch, useSelector } from "react-redux";
import { addCompanyDetails } from "../../../api/enterprise/onboardAPIs";

function CompanyDetails({ proceedToNextTab, proceedToPrevTab }) {
  const dispatch = useDispatch();
  const enterpriseData = useSelector((state) => state.enterprise.userData);
  const [form] = Form.useForm();
  const [bio, setBio] = useState("");
  const [fileState, setFileState] = useState({
    selectedFile: null,
    selectedFileList: [],
  });
  const [error, setError] = useState(false);

  useEffect(() => {
   { form.setFieldsValue({
      company_name: enterpriseData[0]?.company?.company_name,
      company_website: enterpriseData[0]?.company?.website,
      company_bio: enterpriseData[0]?.company?.about_company,
    });}
  }, [form, enterpriseData]);

  const onFinish = (e) => {
    //   funtion for submitting companyDetails form
    if (fileState?.selectedFile === null) {
      setError(true);
      return;
    }

    const record = {
      company: {
        company_name: e?.company_name,
        website: e?.company_website,
        about_company: e?.company_bio,
      },
      logo: "https://fwfw.com",
    };
    dispatch(addCompanyDetails({ record, proceedToNextTab, dispatch }));
  };

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  //   Props for Upload component
  const props = {
    beforeUpload: (file) => {
      const isImage = file.type === "image/png" || file.type === "image/jpeg";

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
        message.success(`File uploaded successfully`);
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
    <OnboardingContainer
      imgSrc={companyDetails}
      title={"Add your company details"}
      subtext={
        "We require your organization's logo and website information in order to maximise your visibility to prospects."
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
            label="Company's Name"
            name="company_name"
            rules={[
              {
                required: true,
                message: "Please enter company’s name",
                pattern: new RegExp(/^[a-zA-Z0-9_ ]*$/),
              },

              {
                min: 2,
                message: "",
              },
            ]}
          >
            <OnboardInput placeholder="Type here" />
          </Form.Item>
          <Form.Item label="Company's Logo" name="company_logo">
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
                <span>Drag & drop your logo file here or</span>
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
                <Button
                  icon={<DeleteIcon />}
                  className="upload_action_button upload_delete"
                  onClick={handleDeleteFile}
                ></Button>
              </EditRemoveUpload>
            )}
            {error && <ErrorText>Please submit your company's logo</ErrorText>}
          </Form.Item>
          <Form.Item
            label="Company's Website"
            name="company_website"
            rules={[
              {
                required: true,
                pattern: new RegExp(
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
                ),
                message: "Please enter a valid website",
              },
            ]}
          >
            <OnboardInput placeholder="Type here" />
          </Form.Item>

          <Form.Item
            label="Your Company Bio"
            name="company_bio"
            rules={[
              {
                required: true,
                message: "Please enter your bio",
              },
              {
                min: 100,
                message: "Min 100 character required",
              },
            ]}
          >
            <OnboardTextArea
              placeholder="Type here"
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
            <AddBioLength>{bio.length}/100</AddBioLength>
          </JustifyFlexContainer>
          <JustifyFlexContainer className="margin-t3">
            <GlobalButton block onClick={proceedToPrevTab}>
              Back
            </GlobalButton>
            <GlobalButton type="primary" block htmlType="submit">
              Submit
            </GlobalButton>
          </JustifyFlexContainer>
        </Form>
      </OnboardFormContainer>
    </OnboardingContainer>
  );
}

CompanyDetails.propTypes = {
  proceedToNextTab: PropTypes.func,
  proceedToPrevTab: PropTypes.func,
};

export default CompanyDetails;
