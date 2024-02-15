import { useState } from "react";
import useChores from "../../hooks/main/useChores.ts";
import ChoreItem from "./ChoreItem.tsx";

type ChoreBoardProps = {};

const ChoreBoard = ({}: ChoreBoardProps) => {
  const { chores, addChore } = useChores();
  const [todoText, setTodoText] = useState("");
  const handleAdd = () => {
    addChore({
      title: todoText,
    });
    setTodoText("");
  };
  return (
    <>
      <h2>chore board</h2>
      <div>
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
      </div>
      {chores && (
        <ul>
          {chores.map((todo, index) => (
            <li key={index}>
              <ChoreItem chore={todo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChoreBoard;
