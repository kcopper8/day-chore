import { useState } from "react";
import useChores from "../../hooks/main/useChores.ts";

type ChoreCreationProps = {};

const ChoreCreation = ({}: ChoreCreationProps) => {
  const { addChore } = useChores();
  const [todoText, setTodoText] = useState("");
  const handleAdd = () => {
    addChore({
      title: todoText,
    });
    setTodoText("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
    >
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ChoreCreation;
