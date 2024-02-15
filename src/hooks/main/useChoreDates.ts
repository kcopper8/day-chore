import { useQuery } from "@tanstack/react-query";
import { getChoreDateList } from "../../apis/dayChoreApi.ts";
import { QueryPrefix } from "./queries.ts";

const useChoreDates = () => {
  const { data: choreDateList } = useQuery({
    queryKey: QueryPrefix.CHORE_DATE_LIST,
    queryFn: getChoreDateList,
  });

  return {
    choreDateList,
  };
};

export default useChoreDates;
