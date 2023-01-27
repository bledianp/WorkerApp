import { Outlet, Link } from "react-router-dom";
import classes from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
