import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="nav-dropdown-toggle bg-transparent text-dark btn-outline-light">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu className="nav-dropdown-content">
        <Link className="nav-link" to="/cabinet">
          Cabinet
        </Link>
        <Link className="nav-link" to="/tablenchair">
          Table & Chair
        </Link>
        <Link className="nav-link" to="/wardrobe">
          Wardbrobe
        </Link>
        <Link className="nav-link" to="/kitnbath">
          Kitchen & Bath
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
