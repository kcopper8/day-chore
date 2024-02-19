import { Chore, ChoreDate, DayChore, isChoreDate } from "../type.ts";
import { ApiContext } from "./apiContext.ts";
import { getChores } from "./choreApis.ts";

/*
`chore-${date}` : {
  id: completed
}

'choreDateList' : ['2024-02-15', '2024-02-16',...]
 */

export const getChoreDateListFromStore = () => {
  try {
    return JSON.parse(ApiContext.storage.choreDateList);
  } catch {
    return [];
  }
};

type DayChoreVal = {
  completed: boolean;
  completedAt?: number;
};
const getDayVal = (date: ChoreDate): Record<Chore["id"], DayChoreVal> => {
  const choreDateList = getChoreDateListFromStore();

  const choreDateSet = new Set(choreDateList);
  if (!choreDateSet.has(date)) {
    choreDateSet.add(date);
    ApiContext.storage.choreDateList = JSON.stringify(Array.from(choreDateSet));
  }

  try {
    return JSON.parse(ApiContext.storage[`chore-${date}`]);
  } catch {
    return {};
  }
};

export const getDayChores = (date: ChoreDate): DayChore[] => {
  if (!isChoreDate(date)) {
    throw new Error("invalid chore date");
  }
  const dayVal = getDayVal(date);

  return getChores().map((chore) => {
    const dayChoreVal: DayChoreVal | undefined = dayVal[chore.id];
    const dayChore = {
      ...chore,
      date,
      completed: dayChoreVal ? dayChoreVal.completed : false,
    } as DayChore;
    if (dayChoreVal && dayChoreVal.completedAt) {
      dayChore["completedAt"] = dayChoreVal.completedAt;
    }

    return dayChore;
  });
};

export const setDayChoreCompleted = async (
  props: Pick<DayChore, "id" | "completed" | "date">,
) => {
  const dayVal = getDayVal(props.date);
  dayVal[props.id] = {
    completed: props.completed,
  };

  if (props.completed) {
    dayVal[props.id].completedAt = Date.now();
  }

  ApiContext.storage[`chore-${props.date}`] = JSON.stringify(dayVal);
};

export const getChoreDateList = (): ChoreDate[] => {
  return getChoreDateListFromStore();
};
