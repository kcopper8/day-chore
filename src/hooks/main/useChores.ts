import { useQuery } from "@tanstack/react-query";
import { createChore, deleteChore, getChores } from "../../apis/choreApis.ts";
import useSimpleMutate from "../util/useSimpleMutate.ts";
import { QueryPrefix } from "./queries.ts";

const useChores = () => {
  const { data: chores } = useQuery({
    queryKey: QueryPrefix.CHORES,
    queryFn: getChores,
    throwOnError: true,
  });

  const handleCreateChore = useSimpleMutate(createChore, QueryPrefix.CHORES);
  const handleDeleteChore = useSimpleMutate(deleteChore, QueryPrefix.CHORES);

  return {
    addChore: handleCreateChore,
    deleteChore: handleDeleteChore,
    chores,
  };
};

export default useChores;
