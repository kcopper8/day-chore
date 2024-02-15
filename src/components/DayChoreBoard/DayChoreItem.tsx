import useDayChores from "../../hooks/main/useDayChores.ts";
import { DayChore } from "../../type.ts";

type TodoItemProps = {
  chore: DayChore;
};

const DayChoreItem = ({ chore }: TodoItemProps) => {
  const { setChoreCompleted } = useDayChores(chore.date);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={chore.completed}
          onChange={(e) =>
            setChoreCompleted({
              completed: e.target.checked,
              id: chore.id,
            })
          }
        />{" "}
        {chore.title}
      </label>{" "}
    </>
  );
};

export default DayChoreItem;
