import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>layout</h1>
      <ul>
        <li>
          <Link to="/">welcome</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Layout;
