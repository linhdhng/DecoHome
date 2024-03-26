import { Link } from "react-router-dom";
import DropdownMenu from "./helper/DropdownMenu"
import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="links">
        <div className="logo">
        <Link className="logo" to="/">DecoHome</Link>
        </div>

      <div className="menu">
        <DropdownMenu />
        <Link className="nav-link" to="/">
           Showcase
        </Link>
        <Link className="nav-link" to="/featured">
          Featured Products
        </Link>
        <Link className="nav-link" to="/">
          Partners
        </Link>
        </div>
        <div className="btn">
          <button>
            <Link className="nav-link"to="/login"> Login </Link>
          </button>
          <button>
            <Link className="nav-link" to="/signup"> Register </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
