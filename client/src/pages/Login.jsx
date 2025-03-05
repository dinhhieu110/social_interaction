import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const initForm = {
    email: "",
    password: "",
  };
  const { login, isLoggingIn } = useAuthStore();
  const [form, setForm] = useState(initForm);
  const [showPassword, setShowPassword] = useState(false);
  const validateForm = () => {
    const { email, password } = form;
    if (!email.trim()) return toast.error("Email is required!");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid email!");
    if (!password.trim()) return toast.error("Password is required!");
    if (password.trim().length < 6)
      return toast.error("Password must be 6 characters at least!");

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) login(form);
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f2f4f7]">
      <div className="pt-18 pb-28 grid lg:grid-cols-2 max-w-[980px] gap-8 m-auto">
        {/* Left  */}
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-center lg:text-left text-5xl text-[#0866ff]">
            social interaction
          </h1>
          <h2 className="text-2xl color-[#1c1e21] mt-3 text-center lg:text-left">
            Social Interaction system helps you connect and share with the
            people in your life.
          </h2>
        </div>
        {/* Right  */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#fff] w-[400px] min-h-[350px] lg:mt-12 rounded-2xl shadow-xl flex flex-col p-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  className={
                    "input border-teal-200 border-1 p-4 rounded-md w-full outline-0 focus:border-[#0866ff]"
                  }
                  placeholder="Email address or phone number"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-control">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={
                      "input border-teal-200 border-1 p-4 rounded-md w-full outline-0 focus:border-[#0866ff]"
                    }
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-base-content/40 text-teal-400" />
                    ) : (
                      <Eye className="size-5 text-base-content/40 text-teal-400" />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full bg-[#0866ff] hover:bg-[#1877f2] p-3 rounded-md text-xl text-white font-semibold mb-2 cursor-pointer"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Logging in..." : "Log in"}
              </button>
              <div className="text-center">
                <Link className="text-[#0866ff] hover:underline text-sm">
                  Forgotten password?
                </Link>
              </div>
            </form>
            <hr className="my-5 border-[#dadde1] border-1" />
            <div className="flex justify-center">
              <button
                type="button"
                className="btn max-w-fit bg-[#42b72a] hover:bg-[#36a420] p-3 rounded-md text-xl text-white font-semibold mb-2 cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create new account
              </button>
            </div>
          </div>
          <div className="mt-7 max-w-[400px]">
            <p className="text-center">
              <Link className="font-bold hover:underline">Create a Page </Link>
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
