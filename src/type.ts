export type Chore = {
  title: string;
  id: string;
};

export type DayChore = {
  completed: boolean;
  date: ChoreDate;
} & Chore;

export type ChoreDate = `${string}-${string}-${string}`;
