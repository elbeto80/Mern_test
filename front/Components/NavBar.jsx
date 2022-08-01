import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h2>MERN (MySQL - Express - React - Node)</h2>

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/new"}>Create Task</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
