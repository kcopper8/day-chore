import { useState } from "react";
import useDayChores from "../../hooks/main/useDayChores.ts";
import ChoreItem from "./ChoreItem.tsx";

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
  const { dayChores: todos, addChore } = useDayChores();
  const [todoText, setTodoText] = useState("");
  const handleAdd = () => {
    addChore({
      title: todoText,
    });
    setTodoText("");
  };
  return (
    <>
      <h1>Dashboard</h1>
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
      {todos && (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <ChoreItem chore={todo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Dashboard;
