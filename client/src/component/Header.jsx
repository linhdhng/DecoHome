import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu"
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
          DecoHome
        </Link>
        <Link className="nav-link" to="/">
          DecoHome
        </Link>
        <Link className="nav-link" to="/">
          DecoHome
        </Link>
        </div>
        <div className="btn">
          <button className="button-login">
            <Link to="/login"> Login </Link>
          </button>
          <button className="button-register">
            <Link to="/signup"> Register </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
