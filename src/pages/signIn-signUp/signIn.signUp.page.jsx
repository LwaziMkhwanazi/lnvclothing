import React from "react";
import SignIn from "../../componets/sign-in/sign.in.component";
import SignUp from "../../componets/sign-up/sign.up.component";
import "./signIn.signUp.style.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInAndSignUp;
