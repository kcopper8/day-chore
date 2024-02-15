import { PropsWithChildren } from "react";
import { NavLink, Outlet } from "react-router-dom";

type GlobalLayoutProps = {};

const HeaderLink = ({ to, children }: { to: string } & PropsWithChildren) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
      })}
    >
      {children}
    </NavLink>
  );
};

const GlobalLayout = ({}: GlobalLayoutProps) => {
  return (
    <>
      <header>
        <HeaderLink to={"/"}>Toay</HeaderLink> |{" "}
        <HeaderLink to={"/archive"}>Archive</HeaderLink>
      </header>
      <Outlet />
    </>
  );
};

export default GlobalLayout;
