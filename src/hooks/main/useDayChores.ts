import { useMutation, useQuery } from "@tanstack/react-query";
import { createDayChore, getDayChores } from "../../apis/choreApis.ts";
import { queryClient } from "../../query.ts";

const useDayChores = () => {
  const { data } = useQuery({
    queryKey: ["dayChores"],
    queryFn: getDayChores,
  });

  const { mutate } = useMutation({
    mutationFn: createDayChore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dayChores"] }).catch();
    },
  });
  return {
    addChore: mutate,
    dayChores: data,
  };
};

export default useDayChores;
