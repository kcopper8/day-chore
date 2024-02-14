import { useMutation, useQuery } from "@tanstack/react-query";
import { createChore, deleteChore } from "../../apis/choreApis.ts";
import { getDayChores, setDayChoreCompleted } from "../../apis/dayChoreApi.ts";
import { queryClient } from "../../query.ts";
import { DayChore } from "../../type.ts";

const useSimpleMutateForDayChore = <T>(
  mutationFn: (prop: T) => Promise<void>,
) => {
  const { mutate } = useMutation({
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dayChores"] }).catch();
    },
  });

  return mutate;
};

/**
 * 이날 할 일 관련 데이터 훅
 */
const useDayChores = () => {
  const date = "2024-02-14";
  const { data } = useQuery({
    queryKey: ["dayChores"],
    queryFn: () => getDayChores(date),
  });

  const addChore = useSimpleMutateForDayChore(createChore);
  const handleSetChoreCompleted = useSimpleMutateForDayChore(
    (props: Pick<DayChore, "id" | "completed">) =>
      setDayChoreCompleted({
        ...props,
        date,
      }),
  );
  const handleDeleteChore = useSimpleMutateForDayChore(deleteChore);

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
