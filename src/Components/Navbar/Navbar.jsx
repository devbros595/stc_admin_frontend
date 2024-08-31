import React, { useState } from "react";
import "./Navbar.css";
import adminIcon from "../../assets/admin_icon.svg";
import arrowUpIcon from "../../assets/arrow_up_icon.svg";
import arrowDownIcon from "../../assets/arrow_down_icon.svg";

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setShowLogoutMenu(!showLogoutMenu);
  };


  return (
    <div className="navbar">
      <h3>
        SupremeTotalCare<span class="material-symbols-outlined">spa</span>
      </h3>

      <div className="nav-profile">
        <img src={adminIcon} alt="" />
        <h4>Welcome Admin!</h4>
        <img className="toggle-icon"
          src={toggleIcon ? arrowUpIcon : arrowDownIcon}
          alt=""
          onClick={handleToggleIcon}
        />
        {showLogoutMenu && (
          <ul className="logout-menu">
            <button>Logout</button>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
