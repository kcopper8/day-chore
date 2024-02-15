import { Link } from "react-router-dom";
import useChoreDates from "../hooks/main/useChoreDates.ts";

type ArchivePageProps = {};

const ArchivePage = ({}: ArchivePageProps) => {
  const { choreDateList } = useChoreDates();
  if (!choreDateList || choreDateList.length <= 0) {
    return <p>no data</p>;
  }
  return (
    <ul>
      {choreDateList.map((choreDate) => (
        <li key={choreDate}>
          <Link to={`/archive/${choreDate}`}>{choreDate}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ArchivePage;
