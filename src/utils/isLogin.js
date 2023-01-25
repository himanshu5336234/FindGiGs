/**
 *
 * @returns check its login or not with boolean status
 */
export const isLogin = () => {
  const token = localStorage.getItem("authToken");
  const otpVerified = JSON.parse(localStorage.getItem("otpVerified"));

  //   const isVerified = localStorage.getItem("isVerified");
  if (token && otpVerified) {
    return true;
  } else {
    return false;
  }
};
