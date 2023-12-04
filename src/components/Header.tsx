import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./reducer/UserContest";

const Header = () => {
  const userContext = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <header className="p-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-lg font-bold hover:text-gray-300"
        >
          Keep Track
        </Link>

        <div className="items-center flex-shrink-0 lg:flex my-auto">
          {userContext ? (
            <>
              Hello, {userContext.firstName}!
              <button
                onClick={handleLogout}
                className="ml-2 self-center lg:px-8 lg:py-3 px-5 py-2 text-xs font-semibold rounded bg-blue-400 text-gray-900"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="self-center text-xs lg:px-8 lg:py-3 px-5 py-2 mr-1 font-semibold rounded bg-blue-400 text-gray-900">
                  Sign up
                </button>
              </Link>
              <Link to="/login">
                <button className="self-center lg:px-8 lg:py-3 px-5 py-2 text-xs font-semibold rounded bg-blue-400 text-gray-900">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
