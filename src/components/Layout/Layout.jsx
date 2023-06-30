import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, NavLinks } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Link to="/">MovieLogo</Link>
        <nav>
          <NavLinks to="/" end>
            Home
          </NavLinks>
          <NavLinks to="/movies">Movies</NavLinks>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
