import { v4 } from "uuid";
import { Chore } from "../type.ts";

export const getDayChores = (): Chore[] => {
  try {
    return JSON.parse(localStorage.dayChores) || [];
  } catch {
    return [];
  }
};

export const createDayChore = async (
  props: Omit<Chore, "id" | "completed">,
) => {
  const dayChores = getDayChores();
  localStorage.dayChores = JSON.stringify([
    {
      id: v4(),
      title: props.title,
      completed: false,
    },
    ...dayChores,
  ]);
  console.log(props);
};
