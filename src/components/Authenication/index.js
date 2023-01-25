import React from "react";
import { CustomContainer, GlobalTitle } from "../../shared/GlobalComponents";
import programmer from "../../assets/images/freelancer/programming.svg";
import bussinessman from "../../assets/images/enterprise/bussinessman.svg";
import { Grid } from "antd";
import PropTypes from "prop-types";

const { useBreakpoint } = Grid;

function Authentication({ type, children }) {
  const screens = useBreakpoint();

  return (
    <section>
      <CustomContainer>
        <div className="left">
          {type === "freelancer" && (
            <>
              {screens?.md && (
                <GlobalTitle>
                  Find gigs that excite you from our platform & boost your
                  earnings.
                </GlobalTitle>
              )}
              <img src={programmer} alt="begig__freelancer" />
            </>
          )}
          {type === "enterprise" && (
            <>
              {screens?.md && (
                <GlobalTitle>
                  Pick your ideal tech partner from our talent pool and scale
                  your business..
                </GlobalTitle>
              )}
              <img src={bussinessman} alt="begig__enterprise" />
            </>
          )}
        </div>
        <div className="right">
          {type === "freelancer" && !screens?.md ? (
            <GlobalTitle>
              Find gigs that excite you from our platform & boost your earnings.
            </GlobalTitle>
          ) : null}
          {type === "enterprise" && !screens?.md ? (
            <GlobalTitle>
              Pick your ideal tech partner from our talent pool and scale your
              business..
            </GlobalTitle>
          ) : null}
          {/* {!sendOtp ? (
            <SignUpForm type={type} setSendOtp={setSendOtp} />
          ) : (
            <EmailVerification />
          )} */}
          {children}
        </div>
      </CustomContainer>
    </section>
  );
}

Authentication.propTypes = {
  type: PropTypes.oneOf(["freelancer", "enterprise"]),
};

export default Authentication;
