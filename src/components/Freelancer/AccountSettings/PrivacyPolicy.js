import React from "react";
import {
  GlobalSubText,
  GlobalTextP2,
  GlobalTextP3,
} from "../../../shared/GlobalComponents";

function PrivacyPolicy() {
  return (
    <div className="privacyPolicy__container">
      <GlobalTextP2 weight="bold" color="#0C0E17">
        PRIVACY POLICY
      </GlobalTextP2>
      <GlobalSubText>
        BeGig Pvt. Ltd. (“BeGig”) provides this Privacy Policy to let you know
        our policies and procedures regarding the collection, use and disclosure
        of information through www.begig.io (the “Site”), and any other
        websites, features, applications, widgets or online services that are
        owned or controlled by BeGig and that post a link to this Privacy Policy
        (together with the Site, the “Service”), as well as any information
        BeGig collects offline in connection with the Service. It also describes
        the choices available to you regarding the use of, your access to, and
        how to update and correct your personal information. Note that we
        combine the information we collect from you from the Site, through the
        Service generally, or offline. Please note that certain features or
        services referenced in this Privacy Policy may not be offered on the
        Service at all times. Please also review our Terms of Service , which
        governs your use of the Service.
      </GlobalSubText>
      <GlobalTextP2 weight="bold" color="#0C0E17">
        1. INFORMATION COLLECTION
      </GlobalTextP2>
      <GlobalSubText>
        Users of the Service may be an Enterprise or Freelancer (as each is
        defined in the User Agreement).
      </GlobalSubText>
      <GlobalTextP3 weight="bold" color="#0C0E17">
        Information You Provide to Us
      </GlobalTextP3>
      <GlobalSubText>
        <span className="privacyPolicy__subHead">Personal Information:</span> In
        the course of using the Service (whether as an Enterprise or
        Freelancer), we may require or otherwise collect information that
        identifies you as a specific individual and can be used to contact or
        identify you (“Personal Information”). Examples of Personal Information
        include your name, email address, company address, billing address, and
        phone number.
      </GlobalSubText>
      <GlobalSubText>
        <span className="privacyPolicy__subHead">Payment Information:</span> If
        you use the Service to make or receive payments, we will also collect
        certain payment information, such as billing address, Permanent Account
        Number (PAN), bank account details, GST registration details and other
        financial account information.
      </GlobalSubText>
      <GlobalSubText>
        <span className="privacyPolicy__subHead">Identity Verification:</span>{" "}
        If We may collect Personal Information, such as details of your
        Passport, Electors Photo Identity, Driving License, Aadhaar or other
        identification information to validate your identity as may be required
        by law. We may request documents to verify this information, such as a
        copy of your Government Issued Aadhaar Card, Electors Photo Identity
        Card, Passport or Driving License (“Government Issued Documents”).
      </GlobalSubText>
      <GlobalSubText>
        <span className="privacyPolicy__subHead">
          Biometric Identifiers or Service Interaction Information:
        </span>{" "}
        We may collect Personal Information such as a photograph of your face, a
        selfie, or data about your interactions with the Service to verify your
        identity and to detect fraud, identity theft, or other misuse of your
        account through the use of facial recognition and other technologies. We
        may request Government Issued Documents to verify this information. From
        time to time, BeGig may require you to take and submit an additional or
        updated image of your face for comparison to your Government Issued
        Documents. The biometric identifiers or information collected are used
        only for identity verification and platform security and use integrity
        purposes
      </GlobalSubText>
      <GlobalSubText>
        <span className="privacyPolicy__subHead">Audience:</span> The Service is
        for all audiences and intended for Users who are 18 and older. We do not
        knowingly collect Personal Information from anyone younger than age 18.
        If we become aware that a child younger than 18 has provided us with
        Personal Information, we will use commercially reasonable efforts to
        delete such information from our files. If you are the parent or legal
        guardian of a child younger than age 18 and believe that BeGig has
        collected Personal Information from your child, please contact us at:
        legal.begig.io.
      </GlobalSubText>
      <GlobalSubText>
        <span className="privacyPolicy__subHead">
          Non-Identifying Information/Usernames:
        </span>{" "}
        We also may collect other information, such as zip codes, demographic
        data, information regarding your use of the Service, and general
        Gig-related data (“Non-Identifying Information”). We may aggregate
        information collected from BeGig registered and non-registered users
        (“BeGig Users”). In some cases, we may render Personal Information
        (generally, email address) into a form of Non-Identifying Information
        referred to in this Privacy Policy as “Hashed Information.” This is
        typically accomplished using a mathematical process (commonly known as a
        hash function) to convert information into a code. The code does not
        identify you directly, but it may be used to connect your activity and
        interests.
      </GlobalSubText>
      <GlobalSubText>
        <span className="privacyPolicy__subHead">
          Combination of Personal and Non-Identifying Information:
        </span>{" "}
        Certain Non-Identifying Information would be considered a part of your
        Personal Information if it were combined with other identifiers in a way
        that enables you to be identified (for example, combining information
        with your name). But the same pieces of information are considered
        Non-Identifying Information when they are taken alone or combined only
        with other non-identifying information (for example, your viewing
        preferences). We may combine your Personal Information with
        Non-Identifying Information, but BeGig will treat the combined
        information as Personal Information.
        <br />
        <br />
        You do not have a statutory obligation to provide us with any
        information, but you may have a contractual obligation to do so, and if
        we do not receive certain information from you, then we will not be able
        to provide our Service to you. If you have any questions regarding
        whether provision of information is mandatory and the consequences for
        withholding such information, please contact us using the contact
        information below.
      </GlobalSubText>
    </div>
  );
}

export default PrivacyPolicy;
