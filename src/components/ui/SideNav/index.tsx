import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li role="group">
          <span>Overview</span>
          <ul>
            <li>
              <Link to="/">Overview</Link>
            </li>
          </ul>
        </li>
        <li role="group">
          <span>Tokens</span>
          <ul>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
            <li>
              <Link to="/colors">Colors</Link>
            </li>
            <li>
              <Link to="/iconography">Iconography</Link>
            </li>
            <li>
              <Link to="/avatars">Avatars</Link>
            </li>
            <li>
              <Link to="/effects">Effects</Link>
            </li>
          </ul>
        </li>
        <li role="group">
          <span>Components</span>
          <ul>
            <li>
              <Link to="/logo">Logo</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/control">Control</Link>
            </li>
            <li>
              <Link to="/navigation">Navigation</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/tables">Tables</Link>
            </li>
            <li>
              <Link to="/modals-popups">Modals & Popups</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
