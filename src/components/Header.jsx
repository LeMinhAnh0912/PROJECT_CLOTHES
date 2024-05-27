import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Header() {
  return (
    <div>
      <div className="container">
        <div>
          <img className="vps" src="src\img.project\Sansa.png" alt="" />
        </div>
        <div className="menu">
          <div>Home</div>
          <div>Product</div>
          <div>Contact us</div>
        </div>
        <div className="header-icon">
          <div>
            <SearchIcon />
          </div>
          <div>
            <FavoriteBorderIcon />
          </div>

          <div>
            <AddShoppingCartIcon />
          </div>
          <div>
            <AccountCircleIcon />
          </div>
          <div id="current-email"></div>
        </div>
      </div>
    </div>
  );
}
