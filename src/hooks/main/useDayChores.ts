import { useQuery } from "@tanstack/react-query";
import { getDayChores, setDayChoreCompleted } from "../../apis/dayChoreApi.ts";
import { ChoreDate, DayChore } from "../../type.ts";
import useSimpleMutate from "../util/useSimpleMutate.ts";
import { QueryPrefix } from "./queries.ts";

/**
 * 이날 할 일 관련 데이터 훅
 */
const useDayChores = (date: ChoreDate) => {
  const { data } = useQuery({
    queryKey: QueryPrefix.DAY_CHORES(date),
    queryFn: () => getDayChores(date),
    throwOnError: true,
  });

  const handleSetChoreCompleted = useSimpleMutate(
    (props: Pick<DayChore, "id" | "completed">) =>
      setDayChoreCompleted({
        ...props,
        date,
      }),
    QueryPrefix.DAY_CHORES(date),
  );

  return {
    setChoreCompleted: handleSetChoreCompleted,
    dayChores: data,
  };
};

export default useDayChores;
