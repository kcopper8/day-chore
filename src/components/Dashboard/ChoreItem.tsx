import useDayChores from "../../hooks/main/useDayChores.ts";
import { DayChore } from "../../type.ts";

type TodoItemProps = {
  chore: DayChore;
};

const ChoreItem = ({ chore }: TodoItemProps) => {
  const { setChoreCompleted, deleteChore } = useDayChores();
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
      <button onClick={() => deleteChore(chore.id)}>X</button>
    </>
  );
};

export default ChoreItem;
