import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-5 sm:px-20">
      <div className="navbar-start">
        <h1 className="text-[30px] font-bold">
          Keen
          <span className="text-[#244D3F] text-[30px] font-bold">Keeper</span>
        </h1>
      </div>
      <div className="navbar-end  sm:hidden ">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "btn btn-outline btn-accent" : "btn btn-ghost"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timelines"
                className={({ isActive }) =>
                  isActive ? "btn btn-outline btn-accent" : "btn btn-ghost"
                }
              >
                TimeLines
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/status"
                className={({ isActive }) =>
                  isActive ? "btn btn-outline btn-accent" : "btn btn-ghost"
                }
              >
                Status
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn btn-outline btn-accent" : "btn btn-ghost"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timelines"
              className={({ isActive }) =>
                isActive ? "btn btn-outline btn-accent" : "btn btn-ghost"
              }
            >
              TimeLines
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/status"
              className={({ isActive }) =>
                isActive ? "btn btn-outline btn-accent" : "btn btn-ghost"
              }
            >
              Status
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
