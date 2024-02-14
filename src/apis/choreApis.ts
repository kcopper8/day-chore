import { v4 } from "uuid";
import { Chore } from "../type.ts";

type IChoreStorage = {
  [name: string]: any;
};

let storage: IChoreStorage = globalThis.localStorage;
export const setStorage = (s: IChoreStorage) => {
  storage = s;
};

export const getChores = (): Chore[] => {
  try {
    return JSON.parse(storage.dayChores) || [];
  } catch {
    return [];
  }
};

const saveDayChores = (dayChores: Chore[]) => {
  storage.dayChores = JSON.stringify(dayChores);
};

export const createChore = async (props: Omit<Chore, "id" | "completed">) => {
  const dayChores = getChores();
  saveDayChores([
    {
      id: v4(),
      title: props.title,
      completed: false,
    },
    ...dayChores,
  ]);
};

export const setChoreCompleted = async (
  props: Pick<Chore, "id" | "completed">,
) => {
  const dayChores = getChores();
  const targetIndex = dayChores.findIndex(({ id }) => id === props.id);
  if (targetIndex < 0) {
    throw new Error("no dayChore: " + props.id);
  }

  dayChores[targetIndex].completed = props.completed;
  saveDayChores(dayChores);
};

export const deleteChore = async (id: Chore["id"]) => {
  const dayChores = getChores();
  const targetIndex = dayChores.findIndex(({ id: itemId }) => itemId === id);
  if (targetIndex < 0) {
    throw new Error("no dayChore: " + id);
  }

  dayChores.splice(targetIndex, 1);
  saveDayChores(dayChores);
};
