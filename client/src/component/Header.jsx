import { Link } from "react-router-dom";
import DropdownMenu from "./helper/DropdownMenu";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/fetch";

function Header() {
  // const [cookies] = useCookies(['token'])
  const { cookies } = useAuth();
  const { logout } = useAuth();
  const handleCLick = () => {
    logout();
  };

  return (
    <header className="header">
      <nav className="links">
        <div className="logo">
          <Link className="logo" to="/">
            DecoHome
          </Link>
        </div>

        <div className="menu">
          <DropdownMenu />
          <Link className="nav-link" to="/showcase">
            Showcase
          </Link>
          <Link className="nav-link" to="/featured">
            Featured Products
          </Link>
          <Link className="nav-link" to="/">
            Partners
          </Link>
        </div>
          {cookies.token ? (
            <button>
            <Link className="shopper" to="/card">
              <FaShoppingCart />
            </Link></button>
          ) : (
            <button className="shopper">
              <Link to="/signup">
                Register
              </Link>
            </button>
          )}
          {cookies.token ? (
            <button className="shopper" onClick={handleCLick}>Log Out</button>
          ) : (
            <button className="shopper">
              <Link  to="/login">
                Login
              </Link>
            </button>
          )}

      </nav>
    </header>
  );
}

export default Header;
