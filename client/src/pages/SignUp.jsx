import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
  const initForm = {
    fullName: '',
    email: '',
    password: '',
  };
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initForm);
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    const { fullName, email, password } = form;
    if (!fullName.trim()) return toast.error('Full name is required!');
    if (!email.trim()) return toast.error('Email is required!');
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error('Invalid email!');
    if (!password.trim()) return toast.error('Password is required!');
    if (password.trim().length < 6)
      return toast.error('Password must be 6 characters at least!');

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) signup(form);
  };

  return (
    <div className="min-h-screen bg-[#f2f4f7] flex justify-center">
      <div className="">
        <h1 className="font-bold text-5xl text-[#0866ff] my-6 text-center">
          social interaction
        </h1>
        <div className="bg-[#fff] max-w-[430px] min-h-[350px] lg:mt-12 rounded-xl shadow-xl">
          {/* Form */}
          <div className="px-4 py-2">
            <h2 className="text-center text-2xl font-bold">
              Create a new account
            </h2>
            <p className="text-center text-sm text-[#606770]">
              It's quick and easy.
            </p>
          </div>
          <div className="p-4 border-t-[#dadde1] border-t-[0.5px]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  className={
                    'input border-teal-200 border-1 p-4 rounded-md w-full outline-0 focus:border-[#0866ff]'
                  }
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  className={
                    'input border-teal-200 border-1 p-4 rounded-md w-full outline-0 focus:border-[#0866ff]'
                  }
                  placeholder="Email address or phone number"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-control">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={
                      'input border-teal-200 border-1 p-4 rounded-md w-full outline-0 focus:border-[#0866ff]'
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
              <p className="text-[11px] text-[#777777] mb-2">
                People who use our service may have uploaded your contact
                information to Facebook.
                <Link className="text-[#385898] hover:underline">
                  {' '}
                  Learn more.
                </Link>
              </p>
              <p className="text-[11px] text-[#777777]">
                By clicking Sign Up, you agree to our{' '}
                <Link className="text-[#385898] hover:underline ">Terms</Link>,{' '}
                <Link className="text-[#385898] hover:underline ">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link className="text-[#385898] hover:underline ">
                  Cookies Policy
                </Link>
                . You may receive SMS notifications from us and can opt out at
                any time. Sign Up
              </p>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn w-50 bg-[#42b72a] hover:bg-[#36a420] p-2 rounded-md text-xl text-white font-semibold mb-2 cursor-pointer"
                  disabled={isSigningUp}
                >
                  {isSigningUp ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </form>
            <div className="text-center">
              <Link to="/login" className="text-[#0866ff] hover:underline">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
