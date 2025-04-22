import React from "react";
import { LoginForm } from "../login-form";

const Loginpage = () => {
  return (
    <>
      <section className="bg-blue-900 p-10">
        {/* <h1 className="text-center">Login Page</h1> */}
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginpage;
