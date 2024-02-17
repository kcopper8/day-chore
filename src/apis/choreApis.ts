import { v4 } from "uuid";
import { Chore } from "../type.ts";
import { ApiContext } from "./apiContext.ts";

export const getChores = (): Chore[] => {
  try {
    return JSON.parse(ApiContext.storage.dayChores) || [];
  } catch {
    return [];
  }
};

const saveDayChores = (dayChores: Chore[]) => {
  ApiContext.storage.dayChores = JSON.stringify(dayChores);
};

export const createChore = async (props: Omit<Chore, "id" | "completed">) => {
  const dayChores = getChores();
  saveDayChores([
    {
      id: v4(),
      title: props.title,
    },
    ...dayChores,
  ]);
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

export const modifyChore = async (chore: Chore) => {
  const chores = getChores();
  const targetIndex = chores.findIndex(({ id: itemId }) => itemId === chore.id);
  if (targetIndex < 0) {
    throw new Error("no dayChore: " + chore.id);
  }

  chores[targetIndex] = chore;
  saveDayChores(chores);
};
