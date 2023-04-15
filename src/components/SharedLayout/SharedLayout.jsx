const { NavLink, Outlet } = require('react-router-dom');

export const SharedLayout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/rates">Currency Rate</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
