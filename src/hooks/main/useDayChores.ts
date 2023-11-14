import { useState } from "react";
import { v4 } from "uuid";
import { Chore } from "../../type.ts";

const useDayChores = () => {
  const [chores, setChores] = useState<Chore[]>([]);
  return {
    addChore: (props: Omit<Chore, "id" | "completed">) => {
      setChores((prevState) => {
        return [
          { title: props.title, completed: false, id: v4() },
          ...prevState,
        ];
      });
    },
    dayChores: chores,
  };
};

export default useDayChores;
