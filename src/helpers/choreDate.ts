import { formatISO } from "date-fns/formatISO";
import ApplicationContext from "../applicationContext.ts";
import { ChoreDate } from "../type.ts";

export const getChoreDateOfToday = (): ChoreDate => {
  return formatISO(ApplicationContext.getCurrentTime(), {
    representation: "date",
  }) as ChoreDate;
};
