import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/banner-main.png";
const Navbar = ({ balance }) => {
  return (
    <>
      <div className="container mx-auto navbar bg-base-100 font-ubuntu">
        <div className="navbar-start">
          <a>
            <img className="w-12" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams </a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <p>
            <FontAwesomeIcon icon={faCoins} /> {balance} coins
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
