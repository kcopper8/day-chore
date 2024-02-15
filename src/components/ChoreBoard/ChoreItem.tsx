import useChores from "../../hooks/main/useChores.ts";
import { Chore } from "../../type.ts";

type TodoItemProps = {
  chore: Chore;
};

const ChoreItem = ({ chore }: TodoItemProps) => {
  const { deleteChore } = useChores();
  return (
    <>
      <label>{chore.title}</label>{" "}
      <button onClick={() => deleteChore(chore.id)}>X</button>
    </>
  );
};

export default ChoreItem;
