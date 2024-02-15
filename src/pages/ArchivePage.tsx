import { Link, List, ListItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useChoreDates from "../hooks/main/useChoreDates.ts";

type ArchivePageProps = {};

const ArchivePage = ({}: ArchivePageProps) => {
  const { choreDateList } = useChoreDates();
  if (!choreDateList || choreDateList.length <= 0) {
    return <p>no data</p>;
  }
  return (
    <List>
      {choreDateList.map((choreDate) => (
        <ListItem key={choreDate}>
          <Link component={RouterLink} to={`/archive/${choreDate}`}>
            {choreDate}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default ArchivePage;
