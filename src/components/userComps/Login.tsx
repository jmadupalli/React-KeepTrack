import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { userContextType } from "../reducer/UserContest";

const Login = ({
  setUserState,
}: {
  setUserState: React.Dispatch<React.SetStateAction<userContextType | null>>;
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showToggle, setShowToggle] = useState({
    error: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await loginUser(formData).catch((err) => {
      setShowToggle({ error: true, message: err.response.data.message });
    });
    if (response && response.status == 200) {
      const userInfo = {
        firstName: response.data.firstName,
        username: formData.username,
        password: formData.password,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setUserState(userInfo);
      window.location.replace("/");
    }
  };

  return (
    <>
      {showToggle.error && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{showToggle.message}</div>
          <Toast.Toggle
            onClick={() => setShowToggle((prev) => ({ ...prev, error: false }))}
          />
        </Toast>
      )}{" "}
      <div className="flex align-middle h-full">
        <div className="m-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm text-gray-400">
              Track your todos from anywhere!
            </p>
          </div>
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="username"
                  id="email"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="hello@jayanthm.in"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="*****"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-red-400 text-gray-900"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Don't have an account yet?
                <Link to="/register" className="hover:underline text-red-400">
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
