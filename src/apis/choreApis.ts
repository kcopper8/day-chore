import { v4 } from "uuid";
import { Chore } from "../type.ts";

export const getDayChores = (): Chore[] => {
  try {
    return JSON.parse(localStorage.dayChores) || [];
  } catch {
    return [];
  }
};

const saveDayChores = (dayChores: Chore[]) => {
  localStorage.dayChores = JSON.stringify(dayChores);
};

export const createDayChore = async (
  props: Omit<Chore, "id" | "completed">,
) => {
  const dayChores = getDayChores();
  saveDayChores([
    {
      id: v4(),
      title: props.title,
      completed: false,
    },
    ...dayChores,
  ]);
};

export const setDayChoreCompleted = async (
  props: Pick<Chore, "id" | "completed">,
) => {
  const dayChores = getDayChores();
  const targetIndex = dayChores.findIndex(({ id }) => id === props.id);
  if (targetIndex < 0) {
    throw new Error("no dayChore: " + props.id);
  }

  dayChores[targetIndex].completed = props.completed;
  saveDayChores(dayChores);
};

export const deleteDayChore = async (id: Chore["id"]) => {
  const dayChores = getDayChores();
  const targetIndex = dayChores.findIndex(({ id: itemId }) => itemId === id);
  if (targetIndex < 0) {
    throw new Error("no dayChore: " + id);
  }

  dayChores.splice(targetIndex, 1);
  saveDayChores(dayChores);
};
