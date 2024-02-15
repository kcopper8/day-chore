import ChoreCreation from "../components/ChoreCreation";
import DayChoreBoard from "../components/DayChoreBoard";
import { getChoreDateOfToday } from "../helpers/choreDate.ts";

type TodayChorePageProps = {};

const TodayChorePage = ({}: TodayChorePageProps) => {
  const today = getChoreDateOfToday();

  return (
    <>
      <ChoreCreation />
      <DayChoreBoard date={today} />
    </>
  );
};

export default TodayChorePage;
