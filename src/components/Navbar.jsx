import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div className="px-1 lg:px-32 mx-auto mt-2 lg:mt-7">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-sm lg:text-3xl font-medium lg:font-bold">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {/* search input */}
          <label className="input input-bordered flex items-center gap-2 rounded-3xl bg-[#150B2B0D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="bg-green-400 p-3 rounded-full">
            <svg
              width="25.000000"
              height="25.000000"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M19.97 20.96C19.04 19.73 17.83 18.73 16.45 18.04C15.07 17.35 13.54 16.99 11.99 17C10.45 16.99 8.92 17.35 7.54 18.04C6.16 18.73 4.95 19.73 4.02 20.96M23.65 14.85C24.23 12.49 24.08 10 23.21 7.73C22.35 5.45 20.81 3.5 18.81 2.12C16.8 0.74 14.43 0 11.99 0C9.56 0 7.19 0.74 5.18 2.12C3.18 3.5 1.64 5.45 0.78 7.73C-0.09 10 -0.24 12.49 0.34 14.85C0.92 17.21 2.2 19.34 4.02 20.96C6.21 22.92 9.05 24 11.99 24C14.94 24 17.78 22.92 19.97 20.96C21.79 19.34 23.07 17.21 23.65 14.85ZM14.82 11.82C14.07 12.57 13.06 13 11.99 13C10.93 13 9.92 12.57 9.17 11.82C8.42 11.07 7.99 10.06 7.99 9C7.99 7.93 8.42 6.92 9.17 6.17C9.92 5.42 10.93 5 11.99 5C13.06 5 14.07 5.42 14.82 6.17C15.57 6.92 15.99 7.93 15.99 9C15.99 10.06 15.57 11.07 14.82 11.82Z"
                stroke="#150B2B"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
