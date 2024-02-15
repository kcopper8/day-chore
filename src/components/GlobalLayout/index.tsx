import { NavLink, Outlet } from "react-router-dom";

type GlobalLayoutProps = {};

const GlobalLayout = ({}: GlobalLayoutProps) => {
  return (
    <>
      <header>
        <NavLink to={"/"}>Today</NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default GlobalLayout;
