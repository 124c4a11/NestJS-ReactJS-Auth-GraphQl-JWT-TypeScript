import { Link } from 'react-router-dom';
import { LoginModal } from '../LoginModal/LoginModal';
import { Logout } from '../Logout/Logout';
import { SignUpModal } from '../SignUpModal/SignUpModal';

export function Navbar(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <SignUpModal />
            <LoginModal />
            <Logout />
          </div>
        </div>
      </div>
    </nav>
  );
}
