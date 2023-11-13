import { Todo } from "../type.ts";

type TodoItemProps = {
  todo: Todo;
  onChange: (checked: boolean) => void;
};

const TodoItem = ({ todo, onChange }: TodoItemProps) => {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onChange(e.target.checked)}
      />{" "}
      {todo.title}
    </>
  );
};

export default TodoItem;
