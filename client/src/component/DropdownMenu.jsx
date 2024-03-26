
import { Link } from 'react-router-dom';

function DropdownMenu() {

  return (
    <>
      <div className="nav-dropdown-toggle" >
        DecoHome
      </div>
      
        <div className="nav-dropdown-content">
          <Link className="nav-link" to="/">
            Link 1
          </Link>
          <Link className="nav-link" to="/">
            Link 2
          </Link>
          <Link className="nav-link" to="/">
            Link 3
          </Link>
        </div>

    </>

  );
}

export default DropdownMenu;