import { ChoreDate, DayChore } from "../type.ts";
import { ApiContext } from "./apiContext.ts";
import { getChores } from "./choreApis.ts";

/*
`chore-${date}` : {
  id: completed
}
 */

const getDayVal = (date: ChoreDate) => {
  try {
    return JSON.parse(ApiContext.storage[`chore-${date}`]);
  } catch {
    return {};
  }
};

export const getDayChores = (date: ChoreDate): DayChore[] => {
  const dayVal = getDayVal(date);

  return getChores().map((chore) => ({
    ...chore,
    date,
    completed: !!dayVal[chore.id],
  }));
};

export const setDayChoreCompleted = async (
  props: Pick<DayChore, "id" | "completed" | "date">,
) => {
  const dayVal = getDayVal(props.date);
  dayVal[props.id] = props.completed;

  ApiContext.storage[`chore-${props.date}`] = JSON.stringify(dayVal);
};
