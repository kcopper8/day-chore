export const QueryPrefix = {
  CHORES: ["chores"],
  DAY_CHORES: (date: string) => ["chores", "dayChores", date],
  CHORE_DATE_LIST: ["choreDateList"],
};
