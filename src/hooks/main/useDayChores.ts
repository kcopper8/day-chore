import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createDayChore,
  deleteDayChore,
  getDayChores,
  setDayChoreCompleted,
} from "../../apis/choreApis.ts";
import { queryClient } from "../../query.ts";

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
  const { data } = useQuery({
    queryKey: ["dayChores"],
    queryFn: getDayChores,
  });

  const addChore = useSimpleMutateForDayChore(createDayChore);
  const setChoreCompleted = useSimpleMutateForDayChore(setDayChoreCompleted);
  const deleteChore = useSimpleMutateForDayChore(deleteDayChore);

  useMutation({
    mutationFn: setDayChoreCompleted,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dayChores"] }).catch();
    },
  });
  return {
    addChore,
    setChoreCompleted,
    deleteChore,
    dayChores: data,
  };
};

export default useDayChores;
