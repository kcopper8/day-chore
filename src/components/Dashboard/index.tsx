import { useState } from "react";
import { Todo } from "../../type.ts";
import TodoItem from "../TodoItem.tsx";

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = () => {
    setTodos((prevState) => {
      return [{ title: todoText, completed: false }, ...prevState];
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
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoItem todo={todo} onChange={() => {}} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
