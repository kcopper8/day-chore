import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createChore,
  deleteChore,
  getChores,
  setChoreCompleted,
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
    queryFn: getChores,
  });

  const addChore = useSimpleMutateForDayChore(createChore);
  const handleSetChoreCompleted = useSimpleMutateForDayChore(setChoreCompleted);
  const handleDeleteChore = useSimpleMutateForDayChore(deleteChore);

  useMutation({
    mutationFn: setChoreCompleted,
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
