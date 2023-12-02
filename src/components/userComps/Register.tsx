import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex align-middle h-full">
      <div className="m-auto flex flex-col max-w-md p-10 rounded-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:dark:text-gray-400">
            Track your todos from anywhere!
          </p>
        </div>
        <form action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Jayanth"
                className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Madupalli"
                className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="hello@jayanthm.in"
                className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100"
                required
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
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:dark:bg-red-400 dark:dark:text-gray-900"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:dark:text-gray-400">
              Already have an account?
              <Link
                to="/login"
                className="hover:underline dark:dark:text-red-400"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
