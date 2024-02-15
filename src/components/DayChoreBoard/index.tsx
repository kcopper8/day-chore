import useDayChores from "../../hooks/main/useDayChores.ts";
import { ChoreDate } from "../../type.ts";
import DayChoreItem from "./DayChoreItem.tsx";

type DayChoreBoardProps = {
  date: ChoreDate;
};

const DayChoreBoard = ({ date }: DayChoreBoardProps) => {
  const { dayChores: todos } = useDayChores(date);
  return (
    <>
      <h2>{date}</h2>

      {todos && (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <DayChoreItem chore={todo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DayChoreBoard;
