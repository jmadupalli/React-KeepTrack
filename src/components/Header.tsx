const Header = () => {
  return (
    <header className="p-4 dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-lg font-bold hover:text-gray-300"
        >
          Keep Track
        </a>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 font-semibold rounded dark:dark:bg-red-400 dark:dark:text-gray-900">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
