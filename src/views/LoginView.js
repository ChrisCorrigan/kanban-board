import React from "react";
import LoginForm from "../components/LoginForm";

function LoginView() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginView;
