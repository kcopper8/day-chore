import { useQuery } from "@tanstack/react-query";
import { getChoreDateList } from "../../apis/dayChoreApi.ts";

const useChoreDates = () => {
  const { data: choreDateList } = useQuery({
    queryKey: ["choreDateList"],
    queryFn: getChoreDateList,
  });

  return {
    choreDateList,
  };
};

export default useChoreDates;
