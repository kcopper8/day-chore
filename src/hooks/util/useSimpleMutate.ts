import { QueryKey, useMutation } from "@tanstack/react-query";
import { queryClient } from "../../query.ts";

const useSimpleMutate = <T>(
  mutationFn: (prop: T) => Promise<void>,
  queryKeyForInvalidate: QueryKey,
) => {
  const { mutate } = useMutation({
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: queryKeyForInvalidate })
        .catch();
    },
  });

  return mutate;
};

export default useSimpleMutate;
