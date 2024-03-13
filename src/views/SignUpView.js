import React from "react";
import SignUpForm from "../components/SignUpForm";

function SignUpView() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-xs">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpView;
