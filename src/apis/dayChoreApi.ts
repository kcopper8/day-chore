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

type UpdateProps = {
  key: Pick<DayChore, "id" | "date">;
  propsToUpdate: DayChoreVal;
};
export const updateDayChoreProps = async ({
  key: { id, date },
  propsToUpdate,
}: UpdateProps) => {
  const dayVal = getDayVal(date);

  const dayChoreVal = dayVal[id] || {
    completed: false,
  };

  dayChoreVal.completed = propsToUpdate.completed;

  if (propsToUpdate.completedAt) {
    dayChoreVal.completedAt = propsToUpdate.completedAt;
  }

  dayVal[id] = dayChoreVal;

  ApiContext.storage[`chore-${date}`] = JSON.stringify(dayVal);
};

export const getChoreDateList = (): ChoreDate[] => {
  return getChoreDateListFromStore();
};
