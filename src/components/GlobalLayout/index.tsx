import { Container, Tab, Tabs } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

type GlobalLayoutProps = {};

const GlobalLayout = ({}: GlobalLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Tabs value={pathname}>
        <Tab label={"Today"} value="/" to={"/"} component={Link} />
        <Tab
          label={"Archive"}
          value="/archive"
          to={"/archive"}
          component={Link}
        />
        <Tab label={"Chore"} value="/chore" to={"/chore"} component={Link} />
      </Tabs>
      <Outlet />
    </Container>
  );
};

export default GlobalLayout;
