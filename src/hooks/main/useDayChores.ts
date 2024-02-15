import { useMutation, useQuery } from "@tanstack/react-query";
import { createChore, deleteChore } from "../../apis/choreApis.ts";
import { getDayChores, setDayChoreCompleted } from "../../apis/dayChoreApi.ts";
import { queryClient } from "../../query.ts";
import { ChoreDate, DayChore } from "../../type.ts";
import useSimpleMutate from "../util/useSimpleMutate.ts";
import { QueryPrefix } from "./queries.ts";

/**
 * 이날 할 일 관련 데이터 훅
 */
const useDayChores = (date: ChoreDate) => {
  const { data } = useQuery({
    queryKey: [QueryPrefix.DAY_CHORES, date],
    queryFn: () => getDayChores(date),
    throwOnError: true,
  });

  const addChore = useSimpleMutate(createChore, [QueryPrefix.DAY_CHORES]);
  const handleSetChoreCompleted = useSimpleMutate(
    (props: Pick<DayChore, "id" | "completed">) =>
      setDayChoreCompleted({
        ...props,
        date,
      }),
    [QueryPrefix.DAY_CHORES],
  );
  const handleDeleteChore = useSimpleMutate(deleteChore, [
    QueryPrefix.DAY_CHORES,
  ]);

  useMutation({
    mutationFn: setDayChoreCompleted,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dayChores"] }).catch();
    },
  });
  return {
    addChore,
    setChoreCompleted: handleSetChoreCompleted,
    deleteChore: handleDeleteChore,
    dayChores: data,
  };
};

export default useDayChores;
