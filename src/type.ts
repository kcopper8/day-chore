export type Chore = {
  title: string;
  id: string;
};

export type DayChore = {
  completed: boolean;
  date: ChoreDate;
  completedAt?: number;
} & Chore;

export type ChoreDate = `${string}-${string}-${string}`;

export const isChoreDate = (date: any): date is ChoreDate => {
  return /\d{4}-\d{2}-\d{2}/.test(date);
};
