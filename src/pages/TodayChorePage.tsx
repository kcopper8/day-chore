import DayChoreBoard from "../components/DayChoreBoard";
import { getChoreDateOfToday } from "../helpers/choreDate.ts";

type TodayChorePageProps = {};

const TodayChorePage = ({}: TodayChorePageProps) => {
  const today = getChoreDateOfToday();

  return <DayChoreBoard date={today} />;
};

export default TodayChorePage;
