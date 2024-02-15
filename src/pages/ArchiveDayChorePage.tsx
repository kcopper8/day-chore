import { useParams } from "react-router-dom";
import DayChoreBoard from "../components/DayChoreBoard";
import { isChoreDate } from "../type.ts";

type ArchiveDayChorePageProps = {};

const ArchiveDayChorePage = ({}: ArchiveDayChorePageProps) => {
  const { date: choreDate } = useParams();
  if (!isChoreDate(choreDate)) {
    return <p>not found</p>;
  }

  return <DayChoreBoard date={choreDate} />;
};

export default ArchiveDayChorePage;
