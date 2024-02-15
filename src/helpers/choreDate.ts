import { ChoreDate } from "../type.ts";

export const getChoreDateOfToday = (): ChoreDate => {
  return <`${string}-${string}-${string}`>(
    new Date().toISOString().split("T")[0]
  );
};
