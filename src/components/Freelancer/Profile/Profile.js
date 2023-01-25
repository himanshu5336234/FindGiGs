import React from "react";
import { EditProfileContainer } from "./Stylesheet";
import { Col, Form, Row, Button, Avatar } from "antd";
import {
  AccountInput,
  AccountTextArea,
} from "../../Enterprise/AccountSettings/Stylesheet";
import EditIcon from "../../../assets/images/freelancer/editicon.svg";
import { GlobalButton, GlobalTextP2 } from "../../../shared/GlobalComponents";
import { useState } from "react";
import { JustifyFlexContainer } from "../../../shared/Onboarding/OnboardingComponents";
import GlobalModal from "../../../shared/GlobalModal";

const ActionModal = ({ modalSuccessVisible, setModalSuccessVisible }) => {
  console.log("Action modal");
  return (
    <GlobalModal
      centered
      visible={modalSuccessVisible}
      onOk={() => setModalSuccessVisible(false)}
      onCancel={() => setModalSuccessVisible(false)}
      maskStyle={{
        backgroundColor: "rgba(70, 104, 214, 0.3)",
      }}
      width="25rem"
    >
      <GlobalTextP2 weight="bold" align="center">
        Are you sure you want to deactivate your account?
      </GlobalTextP2>
      <JustifyFlexContainer className="margin-t2">
        <GlobalButton
          block
          type="primary"
          onClick={() => setModalSuccessVisible(false)}
        >
          No, I am not sure
        </GlobalButton>
        <GlobalButton block onClick={() => setModalSuccessVisible(false)}>
          Yes, I am sure
        </GlobalButton>
      </JustifyFlexContainer>
    </GlobalModal>
  );
};

const Profile = () => {
  const [form] = Form.useForm();
    const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
    
  return (
    <>
      <EditProfileContainer>
        <div className="edit__profile__component">
          <div className="edit__profile__img">
            <Avatar
              size={120}
              className="user__img"
              src="https://s3-alpha-sig.figma.com/img/711c/b026/e632af1a458764cc973b92bd7a32296c?Expires=1665964800&Signature=Ef-UAP61z9D5d9JjGSGBlwX51~zep~utq0B4luBbzEwU6wDWIJS5vGJzhCDLmTjJNaEKAzGYr58X8gDT-74ZoENkxIgiPJLHb2jCQ5lLIPeMtLbCGKxe1D09OczugUfmWAPHhlxsK3pG2KczutvoXoXGCRbWbH2m67jKpklWleJxFB2YS4p3tbg-KUQAz6e8ZqsDpzfuGBWFNsRQQGXZ7ONuRUyChpunw3VnnX6ICCtawcz2ic3fOnMsDzz6Yi7qWRHeA72-k3HVZKJ8~ITetvO06AaUC7ttF4GqstWzAqYK-76wQbP8~nz853hnjFJ~BXVD0Z9GuYIkKwdBY4A3hA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />
            <div>
              <input id="avatarInput" type="file" className="avatarInput" />
              <label className="avatarLabel" htmlFor="avatarInput">
                <img src={EditIcon} />
              </label>
            </div>
          </div>
          <div className="edit__profile__form">
            <Form
              form={form}
              autoComplete="off"
              layout="vertical"
              className="margin-t2 accountSettings__detailBox"
            >
              <Row gutter={[16, 0]}>
                <Col sm={12}>
                  <Form.Item label="First Name" name="first_name">
                    <AccountInput bordered={false} placeholder="Type here" />
                  </Form.Item>
                </Col>
                <Col sm={12}>
                  <Form.Item label="Surname" name="sur_name">
                    <AccountInput bordered={false} placeholder="Type here" />
                  </Form.Item>
                </Col>
                <Col sm={12}>
                  <Form.Item label="Job Role" name="job_role">
                    <AccountInput bordered={false} placeholder="Type here" />
                  </Form.Item>
                </Col>
                <Col sm={12}>
                  <Form.Item label="Experience" name="experience">
                    <AccountInput bordered={false} placeholder="Type here" />
                  </Form.Item>
                </Col>
                <Col sm={24}>
                  <Form.Item label="Wage Rate" name="wage_rate">
                    <AccountInput bordered={false} placeholder="Type here" />
                  </Form.Item>
                </Col>
                <Col sm={24}>
                  <Form.Item label="About Me" name="about_me">
                    <AccountTextArea
                      bordered={false}
                      placeholder="Type here"
                      autoSize={{
                        minRows: 4,
                        maxRows: 5,
                      }}
                      maxLength={300}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div className="edit__button">
                <GlobalButton>Cancel</GlobalButton>
                <GlobalButton
                  type="primary"
                  className="btn__two"
                  onClick={() => setModalSuccessVisible(!modalSuccessVisible)}
                >
                  Save
                </GlobalButton>
              </div>
            </Form>
            <ActionModal
              modalSuccessVisible={modalSuccessVisible}
              setModalSuccessVisible={setModalSuccessVisible}
            />
          </div>
        </div>
      </EditProfileContainer>
    </>
  );
};

export default Profile;
